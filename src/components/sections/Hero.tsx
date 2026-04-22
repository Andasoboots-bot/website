"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#FDFBF7]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#f5f3ef] to-[#FDFBF7]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] bg-[#a41e21]/10 text-[#a41e21]">
                Est. 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              Built for
              <br />
              <span className="text-[#a41e21]">the Heights</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-[#737373] max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              Professional-grade safety boots engineered for maximum traction on
              shingle and metal roof surfaces. Trusted by roofers since 1996.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <Link href="/shop">
                <Button
                  size="lg"
                  className="group bg-[#a41e21] hover:bg-[#8a1a1c] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
                >
                  Shop Collection
                  <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium border-[#1a1a1a]/20 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div
            className="relative lg:pl-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              {/* Double-bezel card */}
              <div className="absolute inset-0 p-1.5 bg-black/[0.03] ring-1 ring-black/5 rounded-[1.5rem]">
                <div className="relative h-full bg-[#f5f3ef] rounded-[calc(1.5rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                >
                  {/* Placeholder for hero image - will be replaced with actual product shot */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e8e6e2] to-[#d4d2ce]">
                    <div className="text-center space-y-4">
                      <div className="w-64 h-80 mx-auto bg-[#2a2a2a] rounded-lg shadow-2xl flex items-center justify-center">
                        <span className="text-white/40 text-sm">
                          Product Image
                          <br />
                          640x800
                        </span>
                      </div>
                      <p className="text-[#737373] text-sm">
                        The Performer Boot
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2d5a4a]/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#2d5a4a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#737373] uppercase tracking-wide">
                      Safety Certified
                    </p>
                    <p className="text-sm font-semibold text-[#1a1a1a]">
                      ASTM F2413-18
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
