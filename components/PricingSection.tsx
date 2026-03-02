"use client";

import { motion } from "framer-motion";
import { service, nav } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function PricingSection() {
  const { packages } = service;

  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-14 lg:mb-18"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider"
          >
            Preisgestaltung
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            Unsere Pakete
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`relative flex flex-col rounded-2xl p-7 lg:p-8 border transition-shadow ${
                pkg.highlight
                  ? "bg-[#0A0A0C] border-[#0066FF] shadow-[0_0_40px_rgba(0,102,255,0.12)]"
                  : "bg-[#111113] border-white/8"
              }`}
            >
              {/* Popular badge */}
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-[#0066FF] text-white text-xs font-semibold shadow-lg">
                    Am beliebtesten
                  </span>
                </div>
              )}

              {/* Package header */}
              <div className="mb-6">
                <h3 className="text-[#F4F4F5] font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-[#52525B] text-sm">{pkg.tagline}</p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${pkg.highlight ? "bg-[#0066FF]/30" : "bg-white/8"}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm text-[#A1A1AA]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={nav.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-[#0066FF] hover:bg-[#3385FF] text-white shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 hover:scale-105 active:scale-95"
                    : "border border-white/15 hover:border-white/30 text-[#F4F4F5] hover:bg-white/5"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
