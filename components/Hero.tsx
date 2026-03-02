"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

// Floating social/content icon bubbles
const floatingIcons = [
  { icon: "📱", size: "w-12 h-12", pos: "top-[18%] left-[6%]", delay: 0, dur: 6 },
  { icon: "🎬", size: "w-10 h-10", pos: "top-[38%] left-[3%]", delay: 1.2, dur: 7 },
  { icon: "🚀", size: "w-9 h-9", pos: "top-[62%] left-[8%]", delay: 0.6, dur: 5.5 },
  { icon: "💎", size: "w-10 h-10", pos: "top-[22%] right-[5%]", delay: 0.4, dur: 6.5 },
  { icon: "📊", size: "w-9 h-9", pos: "top-[55%] right-[4%]", delay: 1.5, dur: 7.5 },
  { icon: "⚡", size: "w-8 h-8", pos: "top-[75%] right-[9%]", delay: 0.8, dur: 5 },
];

export default function Hero() {
  const { hero, heroTestimonial } = home;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090B]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 glow-blue" />

      {/* Blue glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Warm ambient blob top-right */}
      <div className="absolute top-10 right-10 w-[320px] h-[320px] bg-[#FF6B00]/6 rounded-full blur-[120px]" />
      {/* Subtle purple tint bottom */}
      <div className="absolute bottom-20 right-1/3 w-[200px] h-[200px] bg-[#6B3FFF]/5 rounded-full blur-[80px]" />

      {/* Floating icon bubbles */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.pos} ${item.size} hidden lg:flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xl select-none pointer-events-none`}
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* iPhone mockup — right side, hidden on mobile */}
      <div className="hidden lg:block absolute right-[4%] top-1/2 -translate-y-1/2 w-[220px] pointer-events-none select-none opacity-70">
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Phone frame */}
          <div className="relative w-[200px] mx-auto rounded-[36px] bg-[#1C1C1E] border-[3px] border-[#3A3A3C] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1C1C1E] rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="rounded-[34px] overflow-hidden bg-black h-[400px] relative">
              {/* Instagram-style UI */}
              <div className="bg-white h-full flex flex-col">
                {/* IG Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                  <span className="text-[10px] font-bold text-black" style={{fontFamily:'serif',fontStyle:'italic'}}>Instagram</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                </div>
                {/* Stories row */}
                <div className="flex gap-1.5 px-2 py-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <div className={`w-8 h-8 rounded-full border-2 ${i === 0 ? 'border-[#0066FF]' : 'border-pink-400'} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Post */}
                <div className="flex-1 overflow-hidden">
                  <div className="px-2 pb-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0066FF] to-[#3385FF]" />
                      <span className="text-[8px] font-semibold text-black">spectra_media</span>
                    </div>
                    <div className="w-full h-[140px] rounded-xl bg-gradient-to-br from-[#0066FF]/20 via-[#3385FF]/10 to-[#0066FF]/5 border border-[#0066FF]/20 flex items-center justify-center">
                      <span className="text-[32px]">🚀</span>
                    </div>
                    <div className="flex gap-3 mt-1.5 text-gray-400">
                      <span className="text-[10px]">♥ 4.2K</span>
                      <span className="text-[10px]">💬 128</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[7px] text-black font-semibold">spectra_media </span>
                      <span className="text-[7px] text-gray-600">Von 0 auf 41 Mio. Views 🔥</span>
                    </div>
                  </div>
                </div>
                {/* IG bottom nav */}
                <div className="flex justify-around py-2 border-t border-gray-100 text-gray-400">
                  {['🏠','🔍','➕','❤️','👤'].map((icon, i) => (
                    <span key={i} className="text-[12px]">{icon}</span>
                  ))}
                </div>
              </div>
              {/* Animated notification badge */}
              <motion.div
                className="absolute top-16 right-2 bg-[#0066FF] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                +47k
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16 lg:pr-[260px]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={viewportOnce}
      >
        {/* Testimonial snippet */}
        <motion.div variants={fadeUpVariants} className="inline-flex flex-col items-center gap-2 mb-8">
          <p className="text-[#A1A1AA] text-sm italic max-w-md mx-auto leading-relaxed">
            &ldquo;{heroTestimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center text-[#0066FF] text-xs font-bold">
              {heroTestimonial.author[0]}
            </div>
            <span className="text-[#52525B] text-xs">{heroTestimonial.author} · {heroTestimonial.role}</span>
          </div>
        </motion.div>

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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#52525B] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-[#52525B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
