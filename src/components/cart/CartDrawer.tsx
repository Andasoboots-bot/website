"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart/store";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#FDFBF7] z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-[#1a1a1a]" />
                  <h2 className="text-xl font-semibold text-[#1a1a1a]">
                    Your Cart
                  </h2>
                  <span className="text-sm text-[#737373]">
                    ({getTotalItems()} items)
                  </span>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#1a1a1a]" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-16 h-16 text-[#737373] mb-4" />
                    <p className="text-lg font-medium text-[#1a1a1a] mb-2">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-[#737373] mb-6">
                      Add some products to get started
                    </p>
                    <Link href="/shop" onClick={closeCart}>
                      <Button className="bg-[#a41e21] hover:bg-[#8a1a1c] text-white rounded-full px-6">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex gap-4 p-4 bg-white rounded-xl"
                      >
                        {/* Image */}
                        <div className="relative w-20 h-20 bg-[#f5f3ef] rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="block"
                          >
                            <h3 className="font-medium text-[#1a1a1a] truncate hover:text-[#a41e21] transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          {item.size && (
                            <p className="text-sm text-[#737373]">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="font-semibold text-[#a41e21] mt-1">
                            ${item.price.toFixed(2)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-md bg-[#f5f3ef] hover:bg-[#e8e6e2] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-md bg-[#f5f3ef] hover:bg-[#e8e6e2] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-[#737373] hover:text-[#a41e21] transition-colors self-start"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-black/5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#737373]">Subtotal</span>
                    <span className="text-xl font-bold text-[#1a1a1a]">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-[#737373] mb-4">
                    Shipping calculated at checkout
                  </p>
                  <Link href="/checkout" onClick={closeCart}>
                    <Button className="w-full bg-[#a41e21] hover:bg-[#8a1a1c] text-white rounded-full py-6 text-base font-medium">
                      Checkout
                    </Button>
                  </Link>
                  <button
                    onClick={closeCart}
                    className="w-full text-center text-sm text-[#737373] hover:text-[#1a1a1a] mt-4 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
