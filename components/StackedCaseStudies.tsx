"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const cardBgs = ["#111113", "#0F0F11", "#0D0D0F", "#0B0B0D"];
const topOffsets = ["top-20", "top-24", "top-28", "top-32", "top-36", "top-40", "top-44"];

export default function StackedCaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-close when open card header scrolls above viewport
  useEffect(() => {
    if (openIndex === null) return;
    function onScroll() {
      const el = headerRefs.current[openIndex!];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) setOpenIndex(null);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openIndex]);

  return (
    <section className="py-20 lg:py-32 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Case Studies
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
          >
            Vom Seitenfeld ins Rampenlicht.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
          >
            Wir machen unsere Kunden nicht nur sichtbar, sondern zur Marktgrösse in ihrer Nische.
          </motion.p>
        </motion.div>

        {/* Stacked cards */}
        <div className="relative space-y-4">
          {caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            const isAfterOpen = openIndex !== null && i > openIndex;
            return (
              <div
                key={cs.slug}
                className={isAfterOpen ? "" : `sticky ${topOffsets[Math.min(i, topOffsets.length - 1)]}`}
                style={{ zIndex: caseStudies.length + (openIndex === i ? 10 : i) }}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="rounded-2xl border border-white/8 overflow-hidden relative group"
                  style={{ backgroundColor: cardBgs[i % cardBgs.length] }}
                >
                  {/* Blue corner gradient */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: 'radial-gradient(ellipse 55% 65% at 100% 0%, rgba(0,102,255,0.5) 0%, rgba(0,102,255,0.12) 45%, transparent 70%)' }}
                  />

                  {/* Card main row */}
                  <div
                    ref={(el) => { headerRefs.current[i] = el; }}
                    className="p-6 lg:p-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto_auto] gap-4 lg:gap-8 lg:items-center">
                      {/* Person + Logo */}
                      <div className="hidden lg:flex items-center gap-2 shrink-0">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 overflow-hidden relative flex items-center justify-center">
                            {cs.profileImg
                              ? <Image src={cs.profileImg} alt={cs.client} fill className="object-cover" sizes="64px" />
                              : <span className="text-2xl font-bold text-[#A1A1AA]">{cs.client[0]}</span>}
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 overflow-hidden relative flex items-center justify-center">
                          {cs.brandLogoImg
                            ? <Image src={cs.brandLogoImg} alt="Logo" fill className="object-contain p-1" sizes="32px" />
                            : <span className="text-[10px] text-[#3F3F46]">Logo</span>}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <span className="inline-block px-2.5 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-medium mb-3">
                          {cs.badge}
                        </span>
                        <h3 className="text-[#F4F4F5] font-bold text-2xl lg:text-3xl mb-1">
                          {cs.client}
                        </h3>
                        <p className="text-[#A1A1AA] text-base">{cs.tagline}</p>
                      </div>

                      {/* Stat block */}
                      <div className="w-44 shrink-0">
                        <div className="text-[#0066FF] font-bold text-2xl lg:text-3xl drop-shadow-[0_0_12px_rgba(0,102,255,0.4)] leading-tight">
                          {cs.heroStat}
                        </div>
                        <div className="text-[#52525B] text-xs mt-1 leading-tight">{cs.heroStatLabel}</div>
                      </div>

                      {/* Toggle */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Verbergen" : "Details anzeigen"}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="inline-flex"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>
                    </div>
                  </div>

                  {/* Expandable detail */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 lg:px-8 pb-8 border-t border-white/8 pt-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-5">
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-2">Challenge</h4>
                                <p className="text-[#A1A1AA] text-sm leading-relaxed">{cs.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-2">Vorgehen</h4>
                                <ul className="space-y-1.5">
                                  {cs.approach.map((a, j) => (
                                    <li key={j} className="flex gap-2 text-sm text-[#A1A1AA]">
                                      <span className="text-[#0066FF] mt-0.5 shrink-0">→</span>
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-5">
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-3">Ergebnisse</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  {cs.outcome.stats.map((stat, j) => (
                                    <div key={j} className="p-3 rounded-xl bg-white/5 border border-white/8">
                                      <div className="text-[#0066FF] font-bold text-xl">{stat.value}</div>
                                      <div className="text-[#52525B] text-xs mt-0.5">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {cs.quote && (
                                <blockquote className="border-l-2 border-[#0066FF] pl-4">
                                  <p className="text-[#A1A1AA] text-sm italic leading-relaxed">&ldquo;{cs.quote.text}&rdquo;</p>
                                  <cite className="text-[#52525B] text-xs not-italic mt-2 block">— {cs.quote.author}</cite>
                                </blockquote>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}
