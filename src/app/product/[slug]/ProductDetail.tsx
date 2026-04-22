"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Minus, Plus, ArrowLeft, Shield, Truck, ArrowCounterClockwise } from "@phosphor-icons/react";
import { Product, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart/store";
import { ProductCard } from "@/components/ui/ProductCard";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize && product.variants.some((v) => v.size)) return;

    const selectedVariant = product.variants.find((v) => v.size === selectedSize) || product.variants[0];

    addItem({
      id: `${product.id}-${selectedVariant?.size || "default"}`,
      productId: product.id,
      name: product.name.en,
      price: product.price,
      quantity,
      size: selectedVariant?.size,
      image: product.images[0],
      slug: product.slug,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/shop" className="inline-flex items-center text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-[#f5f3ef] to-[#e8e6e2] rounded-2xl overflow-hidden relative">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name.en}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-[#2d5a4a] text-white">New</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="absolute top-4 left-4 bg-[#a41e21] text-white">Bestseller</Badge>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImage === idx ? "border-[#a41e21]" : "border-transparent"
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#f5f3ef] to-[#e8e6e2]" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-[#737373] uppercase tracking-wider mb-2">
                  {product.category.replace(/-/g, " ")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                  {product.name.en}
                </h1>
                <p className="text-3xl font-bold text-[#a41e21]">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-lg text-[#737373] leading-relaxed">
                {product.shortDescription.en}
              </p>

              {/* Size Selection */}
              {product.variants.some((v) => v.size && v.size !== "One Size") && (
                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedSize(variant.size || null)}
                        disabled={!variant.inStock}
                        className={`w-14 h-14 rounded-lg border-2 font-medium transition-all ${
                          selectedSize === variant.size
                            ? "border-[#a41e21] bg-[#a41e21] text-white"
                            : variant.inStock
                            ? "border-[#e8e6e2] hover:border-[#a41e21] text-[#1a1a1a]"
                            : "border-gray-200 text-gray-300 cursor-not-allowed line-through"
                        }`}
                      >
                        {variant.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f5f3ef] hover:bg-[#e8e6e2] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f5f3ef] hover:bg-[#e8e6e2] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.variants.some((v) => v.size) && !selectedSize}
                  className={`flex-1 py-6 rounded-full text-base font-medium transition-all ${
                    addedToCart
                      ? "bg-[#2d5a4a] hover:bg-[#2d5a4a]"
                      : "bg-[#a41e21] hover:bg-[#8a1a1c]"
                  } text-white`}
                >
                  {addedToCart ? (
                    <span className="flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </span>
                  ) : (
                    "Add to Cart"
                  )}
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/5">
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-[#2d5a4a]" />
                  <p className="text-xs text-[#737373]">ASTM Certified</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-[#2d5a4a]" />
                  <p className="text-xs text-[#737373]">Free Shipping</p>
                </div>
                <div className="text-center">
                  <ArrowCounterClockwise className="w-6 h-6 mx-auto mb-2 text-[#2d5a4a]" />
                  <p className="text-xs text-[#737373]">30-Day Returns</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-6 border-t border-black/5">
                <h3 className="font-semibold text-[#1a1a1a]">Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#737373]">
                      <Check className="w-4 h-4 text-[#2d5a4a] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="space-y-4 pt-6 border-t border-black/5">
                <h3 className="font-semibold text-[#1a1a1a]">Specifications</h3>
                <dl className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-xs text-[#737373] uppercase tracking-wider">{key}</dt>
                      <dd className="text-sm font-medium text-[#1a1a1a]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
