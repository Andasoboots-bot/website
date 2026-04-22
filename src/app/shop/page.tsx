"use client";

import { useState } from "react";
import { products, categories, Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("name");

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return a.name.en.localeCompare(b.name.en);
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20">
      {/* Header */}
      <section className="bg-white border-b border-black/5">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-[#737373] max-w-2xl">
            Professional-grade safety boots and accessories for roofers who demand the best.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`text-sm transition-colors ${
                        selectedCategory === null
                          ? "text-[#a41e21] font-medium"
                          : "text-[#737373] hover:text-[#1a1a1a]"
                      }`}
                    >
                      All Products ({products.length})
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? "text-[#a41e21] font-medium"
                            : "text-[#737373] hover:text-[#1a1a1a]"
                        }`}
                      >
                        {cat.name.en} (
                        {products.filter((p) => p.category === cat.id).length})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="w-full p-2 border border-black/10 rounded-lg text-sm bg-white"
                >
                  <option value="name">Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-[#737373]">
                  Showing {sortedProducts.length} products
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
