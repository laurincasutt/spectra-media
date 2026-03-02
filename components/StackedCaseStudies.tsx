"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const cardColors = ["#111113", "#0F0F11", "#0D0D0F", "#0B0B0D"];
const topOffsets = ["top-20", "top-24", "top-28", "top-32"];

export default function StackedCaseStudies() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

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
            Echte Resultate. Echte Kunden.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
          >
            Keine Versprechen ohne Beweis. Hier sind die Zahlen.
          </motion.p>
        </motion.div>

        {/* Stacked cards */}
        <div className="relative space-y-4">
          {caseStudies.map((cs, i) => {
            const isOpen = openSlug === cs.slug;
            return (
              <div
                key={cs.slug}
                className={`sticky ${topOffsets[i]}`}
                style={{ zIndex: 10 + i }}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="rounded-2xl border border-white/8 overflow-hidden"
                  style={{ backgroundColor: cardColors[i % cardColors.length] }}
                >
                  {/* Card main row */}
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                      {/* Left: text content */}
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2.5 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-medium mb-3">
                          {cs.badge}
                        </span>
                        <h3 className="text-[#F4F4F5] font-bold text-2xl lg:text-3xl mb-2">
                          {cs.client}
                        </h3>
                        <p className="text-[#A1A1AA] text-base">{cs.tagline}</p>
                      </div>

                      {/* Right: stat block */}
                      <div className="flex gap-6 lg:gap-8 shrink-0">
                        <div className="text-center">
                          <div className="text-[#0066FF] font-bold text-3xl lg:text-4xl drop-shadow-[0_0_12px_rgba(0,102,255,0.4)]">
                            {cs.heroStat}
                          </div>
                          <div className="text-[#52525B] text-xs mt-1">{cs.heroStatLabel}</div>
                        </div>
                      </div>

                      {/* Toggle button */}
                      <button
                        onClick={() => setOpenSlug(isOpen ? null : cs.slug)}
                        className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors group"
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

                  {/* Expandable detail panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-8 border-t border-white/8 pt-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Challenge & Approach */}
                            <div className="space-y-5">
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-2">
                                  Challenge
                                </h4>
                                <p className="text-[#A1A1AA] text-sm leading-relaxed">{cs.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-2">
                                  Vorgehen
                                </h4>
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

                            {/* Stats & Quote */}
                            <div className="space-y-5">
                              <div>
                                <h4 className="text-[#F4F4F5] font-semibold text-sm uppercase tracking-wider mb-3">
                                  Ergebnisse
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                  {cs.outcome.stats.map((stat, j) => (
                                    <div
                                      key={j}
                                      className="p-3 rounded-xl bg-white/5 border border-white/8"
                                    >
                                      <div className="text-[#0066FF] font-bold text-xl">
                                        {stat.value}
                                      </div>
                                      <div className="text-[#52525B] text-xs mt-0.5">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {cs.quote && (
                                <blockquote className="border-l-2 border-[#0066FF] pl-4">
                                  <p className="text-[#A1A1AA] text-sm italic leading-relaxed">
                                    &ldquo;{cs.quote.text}&rdquo;
                                  </p>
                                  <cite className="text-[#52525B] text-xs not-italic mt-2 block">
                                    — {cs.quote.author}
                                  </cite>
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
          {/* Spacer so last sticky card isn't cut off */}
          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}
