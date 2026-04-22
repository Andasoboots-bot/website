"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products, getBestsellers, getNewArrivals } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  type?: "bestsellers" | "new" | "all";
  limit?: number;
}

export function FeaturedProducts({
  title = "Featured Products",
  subtitle = "Discover our most popular safety boots and accessories",
  type = "bestsellers",
  limit = 4,
}: FeaturedProductsProps) {
  const displayProducts =
    type === "bestsellers"
      ? getBestsellers().slice(0, limit)
      : type === "new"
      ? getNewArrivals().slice(0, limit)
      : products.slice(0, limit);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1] as const,
      },
    },
  };

  return (
    <section className="section-padding bg-[#FDFBF7]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] bg-[#a41e21]/10 text-[#a41e21]"
            >
              {type === "bestsellers" ? "Most Popular" : type === "new" ? "New Arrivals" : "Collection"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="text-lg text-[#737373] max-w-xl"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <Link href="/shop">
              <Button
                variant="ghost"
                className="group text-[#1a1a1a] hover:text-[#a41e21] font-medium"
              >
                View All
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid - Asymmetrical Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <ProductCard product={product} featured={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
