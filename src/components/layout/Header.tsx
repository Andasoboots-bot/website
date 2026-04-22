"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { List, ShoppingBag, MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart/store";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const cartCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-[#1a1a1a]">
              ANDASO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#1a1a1a] hover:text-[#a41e21] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a41e21] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              className="hidden md:flex p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlass className="w-5 h-5 text-[#1a1a1a]" />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-[#1a1a1a]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#a41e21] text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <CartDrawer />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon" className="relative">
                  <List className="w-6 h-6 text-[#1a1a1a]" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-[#FDFBF7] border-l border-black/5 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-black/5">
                    <span className="text-xl font-bold tracking-tight">
                      ANDASO
                    </span>
                  </div>
                  <nav className="flex-1 p-6">
                    <ul className="space-y-1">
                      {navigation.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                        >
                          <Link
                            href={item.href}
                            className="block py-4 text-2xl font-medium text-[#1a1a1a] hover:text-[#a41e21] transition-colors border-b border-black/5"
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-6 border-t border-black/5">
                    <p className="text-sm text-[#737373]">
                      Professional safety boots for those who work at heights.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
