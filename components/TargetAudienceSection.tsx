"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const audiences = [
  { emoji: "🎯", title: "Elite Coaches & Expertenmarken" },
  { emoji: "💼", title: "Unternehmer mit Personal Brand" },
  { emoji: "⚖️", title: "Anwälte & Kanzleien" },
  { emoji: "🧠", title: "Strategische Berater & Thought Leaders" },
  { emoji: "💪", title: "Fitness & Health Coaches" },
  { emoji: "🧬", title: "Supplement, Peptide & Gesundheitsmarken" },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

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
            Brands, die führen — nicht folgen.
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
              className="relative h-44 p-6 rounded-2xl bg-[#111113] border border-white/8 overflow-hidden group hover:bg-[#0066FF]/15 hover:border-[#0066FF]/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300 cursor-default flex flex-col items-center justify-center gap-4"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#0066FF]/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.span
                className="text-5xl select-none relative z-10 block"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {audience.emoji}
              </motion.span>
              <h3 className="text-[#F4F4F5] font-bold text-base text-center leading-tight relative z-10">
                {audience.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
