"use client";

import { motion } from "framer-motion";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function TestimonialsSection() {
  const { testimonials } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 flex flex-col gap-5 hover:shadow-[0_0_24px_rgba(0,102,255,0.1)] transition-shadow"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-[#0066FF] opacity-60 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-[#A1A1AA] text-base leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] font-bold text-sm shrink-0">
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
