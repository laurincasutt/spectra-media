"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

interface CTASectionProps {
  eyebrow?: string;
  headline: string;
  sub: string;
  cta: string;
  ctaUrl: string;
}

export default function CTASection({
  eyebrow,
  headline,
  sub,
  cta,
  ctaUrl,
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066FF]/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0066FF]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {eyebrow && (
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F4F4F5] leading-tight"
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
          >
            {sub}
          </motion.p>

          <motion.div variants={fadeUpVariants} className="pt-4">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#0066FF] hover:bg-[#3385FF] text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-105 active:scale-95"
            >
              {cta}
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
