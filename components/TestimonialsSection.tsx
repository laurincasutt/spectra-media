"use client";

import { motion } from "framer-motion";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function TestimonialsSection() {
  const { testimonials } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#111113] relative overflow-hidden">
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
            Kundenstimmen
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            Was unsere Kunden sagen
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 flex flex-col gap-5 overflow-hidden group cursor-default"
            >
              {/* Blue corner gradient on hover */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/70 to-[#3385FF]/30 group-hover:w-full transition-all duration-500" />

              {/* Quote icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="relative z-10"
              >
                <svg className="w-8 h-8 text-[#0066FF] opacity-70 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>

              <p className="text-[#A1A1AA] text-base leading-relaxed flex-1 italic relative z-10 group-hover:text-[#C4C4C8] transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/8 relative z-10">
                <div className="w-9 h-9 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#0066FF] font-bold text-sm shrink-0 group-hover:bg-[#0066FF]/25 transition-colors duration-300">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-[#F4F4F5] font-semibold text-sm">{t.author}</div>
                  <div className="text-[#52525B] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
