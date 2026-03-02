"use client";

import { motion } from "framer-motion";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const stepIcons = [
  // Target / Strategy
  <svg key="target" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
  </svg>,
  // Clapperboard / Production
  <svg key="clap" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>,
  // Rocket / Scale
  <svg key="rocket" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>,
];

export default function ProcessSection() {
  const { howItWorks } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

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
            {howItWorks.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            {howItWorks.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 flex flex-col"
            >
              {/* Connector line between cards on desktop */}
              {i < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-[#0066FF]/40 to-transparent z-10" />
              )}

              {/* Step number badge */}
              <div className="text-[#0066FF] font-bold text-4xl lg:text-5xl font-mono opacity-20 absolute top-6 right-7 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-5">
                {stepIcons[i]}
              </div>

              <h3 className="text-[#F4F4F5] font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
