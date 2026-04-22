"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const firstImage = product.images[0] || "/images/placeholder.jpg";
  const secondImage = product.images[1] || firstImage;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative h-full">
        {/* Double-bezel card architecture */}
        <div className="p-1.5 bg-black/[0.03] ring-1 ring-black/5 rounded-[1.5rem] h-full hover:ring-[#a41e21]/20 transition-all duration-500">
          <div className="bg-white rounded-[calc(1.5rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] h-full flex flex-col">
            {/* Image Container */}
            <div className={`relative overflow-hidden ${featured ? "aspect-[4/5]" : "aspect-square"}`}>
              {/* Primary Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3ef] to-[#e8e6e2]">
                <Image
                  src={firstImage}
                  alt={product.name.en}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                />
              </div>

              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={secondImage}
                  alt={`${product.name.en} - alternate view`}
                  fill
                  className="object-cover"
                  sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-[#2d5a4a] text-white hover:bg-[#2d5a4a] text-[10px] uppercase tracking-wider">
                    New
                  </Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-[#a41e21] text-white hover:bg-[#a41e21] text-[10px] uppercase tracking-wider">
                    Bestseller
                  </Badge>
                )}
                {product.compareAtPrice && (
                  <Badge className="bg-[#1a1a1a] text-white hover:bg-[#1a1a1a] text-[10px] uppercase tracking-wider">
                    Sale
                  </Badge>
                )}
              </div>

              {/* Quick Add Button - appears on hover */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <button className="w-full bg-white text-[#1a1a1a] py-3 rounded-full text-sm font-medium hover:bg-[#a41e21] hover:text-white transition-colors duration-300 shadow-lg">
                  Quick Add
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex-1">
                <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                  {product.category.replace(/-/g, " ")}
                </p>
                <h3 className={`font-semibold text-[#1a1a1a] group-hover:text-[#a41e21] transition-colors duration-300 ${featured ? "text-xl" : "text-base"}`}>
                  {product.name.en}
                </h3>
                <p className="text-sm text-[#737373] mt-1 line-clamp-2">
                  {product.shortDescription.en}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mt-4 pt-4 border-t border-black/5">
                <span className={`font-bold text-[#1a1a1a] ${featured ? "text-xl" : "text-lg"}`}>
                  ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm text-[#737373] line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Available Sizes */}
              {product.variants && product.variants.length > 0 && (
                <div className="flex gap-1 mt-3">
                  {product.variants.slice(0, 4).map((variant) => (
                    <span
                      key={variant.id}
                      className={`w-8 h-8 flex items-center justify-center text-xs rounded-md ${
                        variant.inStock
                          ? "bg-[#f5f3ef] text-[#1a1a1a]"
                          : "bg-gray-100 text-gray-400 line-through"
                      }`}
                    >
                      {variant.size}
                    </span>
                  ))}
                  {product.variants.length > 4 && (
                    <span className="w-8 h-8 flex items-center justify-center text-xs rounded-md bg-[#f5f3ef] text-[#737373]">
                      +{product.variants.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
