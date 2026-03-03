"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

// Animated grid background — random cells pulse with blue glow
function AnimatedGridBackground() {
  const COLS = 16;
  const ROWS = 10;
  const total = COLS * ROWS;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute inset-0 grid opacity-60"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <GridCell key={i} index={i} total={total} />
        ))}
      </div>
    </div>
  );
}

function GridCell({ index, total }: { index: number; total: number }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Each cell gets a random delay so they fire independently
    const delay = Math.random() * 8;
    const interval = 6 + Math.random() * 10;

    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      animate(
        scope.current,
        { opacity: [0, 0.18, 0], backgroundColor: ["rgba(0,102,255,0)", "rgba(0,102,255,0.15)", "rgba(0,102,255,0)"] },
        { duration: 2.5, ease: "easeInOut" }
      );
      t = setTimeout(run, interval * 1000);
    };
    t = setTimeout(run, delay * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={scope}
      className="border border-white/[0.03]"
      style={{ opacity: 0 }}
    />
  );
}

export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090B]">
      {/* Animated grid background */}
      <AnimatedGridBackground />

      {/* Blue glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-10 right-10 w-[320px] h-[320px] bg-[#FF6B00]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-[200px] h-[200px] bg-[#6B3FFF]/4 rounded-full blur-[80px] pointer-events-none" />

      {/* Phone mockups — right side, behind text */}
      <div className="hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 items-end gap-[-20px] pointer-events-none select-none z-0 opacity-75">
        {/* Left phone — Instagram screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ zIndex: 2 }}
        >
          <div className="relative w-[180px] rounded-[28px] bg-[#1C1C1E] border-[2.5px] border-[#3A3A3C] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#1C1C1E] rounded-b-xl z-10" />
            <div className="rounded-[26px] overflow-hidden bg-black h-[360px] relative">
              <Image
                src="/insta-spectra-media.png"
                alt="Instagram Screenshot Spectra Media"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#3F3F46] whitespace-nowrap">
            Instagram
          </div>
        </motion.div>

        {/* Right phone — Insights screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative -ml-6"
          style={{ zIndex: 1 }}
        >
          <div className="relative w-[180px] rounded-[28px] bg-[#1C1C1E] border-[2.5px] border-[#3A3A3C] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#1C1C1E] rounded-b-xl z-10" />
            <div className="rounded-[26px] overflow-hidden bg-black h-[360px] relative">
              <Image
                src="/insights-mike.png"
                alt="Insights Screenshot"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#3F3F46] whitespace-nowrap">
            Insights
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16"
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
        <div className="mb-8">
          {hero.headlineLines.map((line, i) => (
            <motion.h1
              key={i}
              variants={fadeUpVariants}
              className={`block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none ${
                i === hero.gradientLineIndex ? "gradient-text" : "text-[#F4F4F5]"
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
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            href={hero.secondaryCtaUrl}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-[#F4F4F5] font-medium text-lg transition-all duration-200 hover:bg-white/5"
          >
            {hero.secondaryCta}
            <svg className="ml-2 w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
