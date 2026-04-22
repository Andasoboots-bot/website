"use client";

import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { categories } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] bg-[#a41e21]/10 text-[#a41e21] mb-4">
              Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-[#737373] max-w-2xl mx-auto">
              Explore our complete range of professional safety footwear and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/${category.slug}`}
                className="group"
              >
                <div className="p-1.5 bg-black/[0.03] ring-1 ring-black/5 rounded-[1.5rem] hover:ring-[#a41e21]/20 transition-all duration-500">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#f5f3ef] to-[#e8e6e2] rounded-[calc(1.5rem-0.375rem)] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#737373] text-sm">{category.name.en}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.name.en}
                      </h3>
                      <span className="inline-flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                        Shop Now
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts
        title="Bestsellers"
        subtitle="Our most popular products, trusted by professional roofers across the country"
        type="bestsellers"
        limit={4}
      />

      {/* New Arrivals */}
      <section className="section-padding bg-white">
        <FeaturedProducts
          title="New Arrivals"
          subtitle="The latest additions to our collection of professional safety footwear"
          type="new"
          limit={4}
        />
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-[#1a1a1a] text-white overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] bg-white/10 text-white/80">
                Since 1996
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Built by Roofers,
                <br />
                <span className="text-[#a41e21]">For Roofers</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                Cougar Paws has been engineering professional-grade roofing footwear since 1996.
                Our patented traction technology has made us the trusted choice for roofers
                who demand safety, comfort, and durability on every job.
              </p>

              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-white">28+</p>
                  <p className="text-sm text-white/60">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">500K+</p>
                  <p className="text-sm text-white/60">Boots Sold</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">USA</p>
                  <p className="text-sm text-white/60">Proudly Made</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-1.5 bg-white/5 ring-1 ring-white/10 rounded-[1.5rem]">
                <div className="aspect-square bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[calc(1.5rem-0.375rem)] flex items-center justify-center">
                  <span className="text-white/40 text-sm">Brand Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
