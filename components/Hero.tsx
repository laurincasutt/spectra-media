"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090B]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 glow-blue" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={viewportOnce}
      >
        {/* Eyebrow badge */}
        <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
            </span>
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 space-y-2 lg:space-y-3">
          {hero.headlineLines.map((line, i) => (
            <motion.h1
              key={i}
              variants={fadeUpVariants}
              className={`block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none ${
                i === hero.gradientLineIndex
                  ? "gradient-text"
                  : "text-[#F4F4F5]"
              }`}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {hero.sub}
        </motion.p>

        {/* Sub2 */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm sm:text-base text-[#52525B] max-w-xl mx-auto leading-relaxed mb-10"
        >
          {hero.sub2}
        </motion.p>

        {/* CTA Row */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={hero.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#3385FF] text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-105 active:scale-95"
          >
            {hero.cta}
            <svg
              className="ml-2 w-5 h-5"
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
          <Link
            href={hero.secondaryCtaUrl}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-[#F4F4F5] font-medium text-lg transition-all duration-200 hover:bg-white/5"
          >
            {hero.secondaryCta}
            <svg
              className="ml-2 w-5 h-5 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#52525B] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-[#52525B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
