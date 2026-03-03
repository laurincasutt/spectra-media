"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// Podium visual — 3 columns, middle (#1) glows blue and pulses
function PodiumVisual() {
  return (
    <div className="relative h-28 flex items-end justify-center gap-3 mt-4">
      {/* #2 */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[#3F3F46] text-[10px] font-bold">#2</span>
        <motion.div
          className="w-10 rounded-t-sm bg-white/8 border border-white/10"
          style={{ height: 44 }}
          animate={{ height: [44, 46, 44] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* #1 — highlighted */}
      <div className="flex flex-col items-center gap-1">
        <motion.span
          className="text-[#0066FF] text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          #1
        </motion.span>
        <motion.div
          className="w-10 rounded-t-sm bg-[#0066FF]/40 border border-[#0066FF]/50 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          animate={{ height: [64, 76, 64] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ height: 64 }}
        />
      </div>
      {/* #3 */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[#3F3F46] text-[10px] font-bold">#3</span>
        <motion.div
          className="w-10 rounded-t-sm bg-white/8 border border-white/10"
          style={{ height: 32 }}
          animate={{ height: [32, 34, 32] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </div>
  );
}

// Fragmented / chaos visual — 3 floating cards, unconnected
function FragmentedVisual() {
  const cards = [
    { x: "-30%", rotate: -12, delay: 0, label: "Post", color: "bg-white/8" },
    { x: "0%", rotate: 5, delay: 0.3, label: "Ad", color: "bg-[#0066FF]/10" },
    { x: "28%", rotate: 14, delay: 0.6, label: "Story", color: "bg-white/6" },
  ];

  return (
    <div className="relative h-28 flex items-center justify-center mt-4">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-20 rounded-xl ${card.color} border border-white/10 flex items-end pb-2 justify-center`}
          style={{ left: `calc(50% + ${card.x})`, rotate: card.rotate }}
          animate={{
            y: [0, -6, 2, -4, 0],
            rotate: [card.rotate, card.rotate - 3, card.rotate + 2, card.rotate],
          }}
          transition={{ duration: 3 + i * 0.5, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[#52525B] text-[9px] font-medium">{card.label}</span>
        </motion.div>
      ))}
      {/* Disconnect lines (dashed) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-20">
          <line x1="20" y1="20" x2="100" y2="20" stroke="#3F3F46" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
}

// Clock / busy visual — rotating clock + gear
function ClockVisual() {
  return (
    <div className="relative h-28 flex items-center justify-center mt-4 gap-4">
      {/* Clock */}
      <div className="relative w-16 h-16">
        {/* Face */}
        <div className="absolute inset-0 rounded-full border-2 border-[#0066FF]/25 bg-[#0066FF]/5" />
        {/* Hour hand */}
        <motion.div
          className="absolute top-1/2 left-1/2 origin-bottom"
          style={{ width: 2, height: 18, marginLeft: -1, marginTop: -18, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 2 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        {/* Minute hand */}
        <motion.div
          className="absolute top-1/2 left-1/2 origin-bottom"
          style={{ width: 1.5, height: 22, marginLeft: -0.75, marginTop: -22, backgroundColor: "rgba(0,102,255,0.6)", borderRadius: 2 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/60" />
      </div>

      {/* Gear / cog */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-10 h-10 text-white/15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </motion.div>

      {/* Busy indicator */}
      <motion.div
        className="absolute bottom-2 right-4 flex flex-col gap-1"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {[28, 40, 22].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-white/10" style={{ width: w }} />
        ))}
      </motion.div>
    </div>
  );
}

const problemIcon1 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const problemIcon2 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
const problemIcon3 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const problems = [
  {
    number: "01",
    title: "Der Markt belohnt die Sichtbarsten, nicht die Besten.",
    desc: "Du leistest mehr als die Konkurrenz — trotzdem wächst sie schneller. Weil Sichtbarkeit Vertrauen schafft, das Qualität allein nicht liefern kann.",
    icon: problemIcon1,
    visual: <PodiumVisual />,
  },
  {
    number: "02",
    title: "Hier ein Post, dort eine Ad — nichts greift ineinander.",
    desc: "Kein System, kein roter Faden. Dein Content verpufft, Ads konvertieren nicht, Konkurrenten erreichen mit weniger mehr.",
    icon: problemIcon2,
    visual: <FragmentedVisual />,
  },
  {
    number: "03",
    title: "Du arbeitest im Business, nicht am Business.",
    desc: "Du steckst in der Ausführung statt in der Strategie. Das Resultat: kein Wachstum, kein Hebel — nur Aufwand ohne Wirkung.",
    icon: problemIcon3,
    visual: <ClockVisual />,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF]/3 rounded-full blur-[120px] pointer-events-none" />

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
            Das Problem
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            Warum die meisten unsichtbar bleiben.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 flex flex-col overflow-hidden group cursor-default"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[#0066FF] font-bold text-5xl lg:text-6xl font-mono opacity-15 absolute top-5 right-6 select-none">
                {problem.number}
              </div>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-4 relative z-10">
                {problem.icon}
              </div>
              <h3 className="text-[#F4F4F5] font-bold text-xl mb-2 relative z-10">{problem.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{problem.desc}</p>
              <div className="relative z-10">{problem.visual}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
