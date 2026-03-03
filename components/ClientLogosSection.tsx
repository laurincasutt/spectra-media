"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const logoPlaceholders = Array.from({ length: 7 });

export default function ClientLogosSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#09090B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Vertrauen
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-3"
          >
            Gewählt von den sichtbarsten Marken mit Substanz.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Ikonische Persönlichkeiten, Marktführer und Unternehmer mit Format vertrauen auf Spectra Media — wenn Sichtbarkeit messbare Resultate, strategische Tiefe und Umsatzgenerierung bedeuten soll.
          </motion.p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-6"
        >
          {logoPlaceholders.map((_, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="w-28 h-12 rounded-xl bg-white/5 border border-white/8 opacity-40 hover:opacity-60 transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
