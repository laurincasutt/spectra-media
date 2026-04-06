"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const audiences = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Elite-Coaches und Experten",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 13h20" />
      </svg>
    ),
    title: "Unternehmen mit Personal Brand",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M12 18H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21l7-3 7 3" />
      </svg>
    ),
    title: "Anwälte und Kanzleien",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Strategische Berater und Vordenker",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fitness- und Gesundheitscoaches",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l1.5 1.5L15 9" />
      </svg>
    ),
    title: "Supplement- und Gesundheitsmarken",
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />

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
            Zielgruppen
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            Brands, die Standards setzen,<br className="hidden sm:block" /> nicht Trends hinterherjagen.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="relative h-44 p-6 rounded-2xl bg-[#111113] border border-white/8 overflow-hidden group hover:bg-[#0066FF]/15 hover:border-[#0066FF]/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300 cursor-default flex flex-col items-center justify-between pt-8 pb-6"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#0066FF]/10 rounded-full blur-[30px] max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-16 h-16 rounded-2xl max-md:bg-[#0066FF]/10 max-md:border-[#0066FF]/40 bg-white/6 border border-white/10 flex items-center justify-center group-hover:border-[#0066FF]/40 group-hover:bg-[#0066FF]/10 group-hover:scale-[1.2] group-hover:-translate-y-1 transition-all duration-300">
                <div className="max-md:text-[#3385FF] text-[#71717A] group-hover:text-[#3385FF] transition-colors duration-300 [&>svg]:w-7 [&>svg]:h-7">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-[#F4F4F5] font-bold text-sm text-center leading-tight relative z-10 uppercase tracking-wide">
                {audience.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
