"use client";

import { motion } from "framer-motion";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// Animated visual clusters for each step card
function StrategyVisual() {
  return (
    <div className="relative h-32 flex items-center justify-center mt-4">
      {/* Central target */}
      <motion.div
        className="w-14 h-14 rounded-full border-2 border-[#0066FF]/40 flex items-center justify-center relative z-10 bg-[#09090B]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div className="w-8 h-8 rounded-full border-2 border-[#0066FF]/60 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
        </motion.div>
      </motion.div>
      {/* Orbiting icon bubbles */}
      {[
        { icon: "🎯", angle: 0, r: 48 },
        { icon: "📊", angle: 120, r: 44 },
        { icon: "🔍", angle: 240, r: 44 },
      ].map((item, i) => {
        const x = Math.cos((item.angle * Math.PI) / 180) * item.r;
        const y = Math.sin((item.angle * Math.PI) / 180) * item.r;
        return (
          <motion.div
            key={i}
            className="absolute w-9 h-9 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-base"
            style={{ left: `calc(50% + ${x}px - 18px)`, top: `calc(50% + ${y}px - 18px)` }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5 + i * 0.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.div>
        );
      })}
    </div>
  );
}

function ProductionVisual() {
  return (
    <div className="relative h-32 flex items-center justify-center mt-4">
      {/* Film strip */}
      <motion.div
        className="flex gap-1.5 items-end"
        animate={{ x: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {[40, 56, 48, 64, 40].map((h, i) => (
          <motion.div
            key={i}
            className="w-7 rounded-lg bg-gradient-to-t from-[#0066FF]/40 to-[#0066FF]/10 border border-[#0066FF]/20 flex items-end justify-center pb-1"
            style={{ height: h }}
            animate={{ height: [h, h + 8, h] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
      {/* Floating edit icons */}
      <motion.div
        className="absolute top-1 right-4 w-8 h-8 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-sm"
        animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >✂️</motion.div>
      <motion.div
        className="absolute bottom-1 left-3 w-8 h-8 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-sm"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, delay: 0.8, repeat: Infinity }}
      >🎬</motion.div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="relative h-32 flex items-center justify-center mt-4 overflow-hidden">
      {/* Growth chart line */}
      <svg width="160" height="70" viewBox="0 0 160 70" className="absolute">
        <motion.path
          d="M 0 60 C 30 55, 50 45, 70 35 C 90 25, 110 15, 160 5"
          fill="none"
          stroke="#0066FF"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          opacity="0.5"
        />
        <motion.circle
          cx="160" cy="5" r="4" fill="#0066FF"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
      {/* Rocket */}
      <motion.div
        className="relative z-10 text-3xl"
        animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >🚀</motion.div>
      {/* Upload dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#0066FF]"
          style={{ left: `${30 + i * 20}%`, bottom: "20%" }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

const visuals = [<StrategyVisual key="s" />, <ProductionVisual key="p" />, <ScaleVisual key="sc" />];

const stepIcons = [
  <svg key="t" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} /><circle cx="12" cy="12" r="6" strokeWidth={1.5} /><circle cx="12" cy="12" r="2" strokeWidth={1.5} />
  </svg>,
  <svg key="c" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>,
  <svg key="r" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>,
];

export default function ProcessSection() {
  const { howItWorks } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[120px] pointer-events-none" />

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
          <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]">
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
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 flex flex-col overflow-hidden group cursor-default"
            >
              {/* Blue corner glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Step number watermark */}
              <div className="text-[#0066FF] font-bold text-5xl lg:text-6xl font-mono opacity-15 absolute top-5 right-6 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-4 relative z-10">
                {stepIcons[i]}
              </div>

              <h3 className="text-[#F4F4F5] font-bold text-xl mb-2 relative z-10">{step.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{step.desc}</p>

              {/* Animated visual */}
              <div className="relative z-10">{visuals[i]}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
