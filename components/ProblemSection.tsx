"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// Schedule visual — 6×3 mini calendar grid with animated dots (red + blue only)
function ScheduleVisual() {
  const dotConfigs = [
    { cell: 1,  color: "bg-[#0066FF]/80", delay: 0,   duration: 2.2, repeatDelay: 3.0 },
    { cell: 4,  color: "bg-[#FF4444]/70", delay: 1.2, duration: 3.1, repeatDelay: 1.5 },
    { cell: 10, color: "bg-[#3385FF]/70", delay: 0.5, duration: 2.7, repeatDelay: 2.5 },
    { cell: 2,  color: "bg-[#FF4444]/65", delay: 3.5, duration: 1.5, repeatDelay: 4.0 },
    { cell: 7,  color: "bg-[#FF4444]/60", delay: 2.0, duration: 3.8, repeatDelay: 0.8 },
    { cell: 13, color: "bg-[#3385FF]/60", delay: 1.8, duration: 2.4, repeatDelay: 2.2 },
    { cell: 0,  color: "bg-[#0066FF]/45", delay: 4.2, duration: 1.8, repeatDelay: 3.5 },
    { cell: 11, color: "bg-[#FF4444]/55", delay: 0.8, duration: 1.2, repeatDelay: 5.0 },
    { cell: 6,  color: "bg-[#FF4444]/35", delay: 2.7, duration: 3.3, repeatDelay: 1.0 },
    { cell: 16, color: "bg-[#FF4444]/50", delay: 1.5, duration: 2.8, repeatDelay: 1.8 },
    { cell: 3,  color: "bg-[#0066FF]/40", delay: 3.0, duration: 2.0, repeatDelay: 3.2 },
  ];

  return (
    <div className="relative h-28 flex flex-col items-center justify-end gap-2">
      <div className="flex gap-1">
        {["Mo", "Di", "Mi", "Do", "Fr", "Sa"].map((d) => (
          <div key={d} className="w-8 text-center text-[#FF4444]/70 text-[9px] font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 18 }, (_, c) => {
          const dots = dotConfigs.filter(d => d.cell === c);
          return (
            <div key={c} className="w-8 h-7 rounded-md bg-[#FF4444]/5 border border-[#FF4444]/15 flex items-center justify-center relative overflow-hidden">
              {dots.map((dot, di) => (
                <motion.div
                  key={di}
                  className={`w-2 h-2 rounded-full ${dot.color} absolute`}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }}
                  transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut", delay: dot.delay, repeatDelay: dot.repeatDelay }}
                  initial={{ opacity: 0 }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Competitor podium — labels sit directly atop each bar column
function CompetitorVisual() {
  return (
    <div className="relative h-28 flex flex-col justify-end">
      {/* Single row: each column = label on top + bar below, aligned to bottom */}
      <div className="flex items-end justify-center gap-3 h-[80px]">
        {/* Bar #2 */}
        <div className="flex flex-col items-center justify-end h-full">
          <span className="text-[#A1A1AA]/60 text-[10px] font-bold mb-1">#2</span>
          <motion.div
            className="w-10 rounded-t-sm bg-white/8 border border-white/10"
            style={{ height: 44 }}
            animate={{ height: [44, 46, 44] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Bar #1 — Konkurrenz */}
        <div className="flex flex-col items-center justify-end h-full">
          <motion.span
            className="text-[#FF4444] text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FF4444]/10 border border-[#FF4444]/30 mb-1"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            #1
          </motion.span>
          <motion.div
            className="w-10 rounded-t-sm bg-[#FF4444]/30 border border-[#FF4444]/40 shadow-[0_0_16px_rgba(255,68,68,0.3)]"
            style={{ height: 64 }}
            animate={{ height: [64, 72, 64] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Bar #3 Du */}
        <div className="flex flex-col items-center justify-end h-full">
          <span className="text-[#A1A1AA]/60 text-[10px] font-bold mb-1">#3 Du</span>
          <motion.div
            className="w-10 rounded-t-sm bg-white/8 border border-white/10"
            style={{ height: 32 }}
            animate={{ height: [32, 34, 32] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>
      {/* Konkurrenz label below middle bar */}
      <div className="flex justify-center gap-3 mt-1.5">
        <div className="w-10" />
        <div className="w-10 flex justify-center">
          <span className="text-[#FF4444]/70 text-[8px] font-medium">Konkurrenz</span>
        </div>
        <div className="w-10" />
      </div>
    </div>
  );
}

// Clock chaos visual — analog clock with words floating around it
const clockWords = [
  { label: "Editing",    angle: 0   },
  { label: "Stories",   angle: 45  },
  { label: "Reels",     angle: 90  },
  { label: "Upload",    angle: 135 },
  { label: "Content",   angle: 180 },
  { label: "Analytics", angle: 225 },
  { label: "Strategie", angle: 270 },
  { label: "Posting",   angle: 315 },
];
const WORD_RADIUS = 78;

function ClockChaosVisual() {
  return (
    <div className="h-[200px] relative flex items-center justify-center">
      {/* Words floating around clock — all at equal radius from center */}
      <div className="relative w-[200px] h-[200px]">
        {/* Words at radial positions */}
        {clockWords.map(({ label, angle }, i) => {
          const rad = (angle - 90) * Math.PI / 180;
          const x = Math.cos(rad) * WORD_RADIUS;
          const y = Math.sin(rad) * WORD_RADIUS;
          // Stagger so ~2 are visible at once: each shows for 1.4s, cycle = 8 * 0.7 = 5.6s
          return (
            <motion.span
              key={i}
              className="absolute px-1.5 py-0.5 rounded-full bg-[#FF4444]/10 border border-[#FF4444]/25 text-[#FF4444]/75 text-[8px] font-medium whitespace-nowrap"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.75, 1, 1, 0.75] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.7,
                repeatDelay: clockWords.length * 0.7 - 1.4,
                ease: "easeInOut",
              }}
              initial={{ opacity: 0 }}
            >
              {label}
            </motion.span>
          );
        })}

        {/* Clock centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full bg-[#FF4444]/20 blur-[12px]"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="24" stroke="rgba(255,68,68,0.45)" strokeWidth="1.5" fill="rgba(255,68,68,0.06)" />
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * 30 - 90) * Math.PI / 180;
                const r1 = i % 3 === 0 ? 18 : 20;
                return (
                  <line key={i}
                    x1={26 + r1 * Math.cos(a)} y1={26 + r1 * Math.sin(a)}
                    x2={26 + 22 * Math.cos(a)} y2={26 + 22 * Math.sin(a)}
                    stroke={`rgba(255,68,68,${i % 3 === 0 ? 0.65 : 0.3})`}
                    strokeWidth="1"
                  />
                );
              })}
              <circle cx="26" cy="26" r="2" fill="rgba(255,68,68,0.85)" />
            </svg>
            <motion.div
              className="absolute"
              style={{ width: 1.5, height: 16, background: "rgba(255,68,68,0.9)", borderRadius: 2,
                transformOrigin: "bottom center", left: "50%", bottom: "50%", marginLeft: -0.75 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute"
              style={{ width: 2, height: 11, background: "rgba(255,68,68,0.6)", borderRadius: 2,
                transformOrigin: "bottom center", left: "50%", bottom: "50%", marginLeft: -1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
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
    title: "Dein Marketing folgt keiner Struktur.",
    desc: "Hier ein Post, dort eine Ad - nichts greift ineinander. Du testest, hoffst, aber es fehlt die Strategie. Content verpufft, Ads konvertieren nicht. Andere erreichen mit weniger mehr. Was dir fehlt, ist ein System.",
    icon: problemIcon1,
    visual: <ScheduleVisual />,
  },
  {
    number: "02",
    title: "Deine Konkurrenz sticht dich aus.",
    desc: "Du hast ein Produkt, das Marktführer sein sollte, aber niemand weiß davon. Weil heute nicht mehr die Besten gewinnen, sondern die Bekanntesten. Personen mit weniger Qualität sichern sich Marktanteile, die eigentlich dir gehören - nur weil sie wissen, wie man Social Media nutzt und Reichweite generiert.",
    icon: problemIcon2,
    visual: <CompetitorVisual />,
  },
  {
    number: "03",
    title: "Die Zeit rennt dir durch die Hände.",
    desc: "Du hast dich selbstständig gemacht, um deine Ziele zu verfolgen und etwas aufzubauen - nicht um ständig Content zu planen, zu posten und zu editieren. Du machst alles selbst, delegierst nichts und arbeitest im Business anstatt am Business. So verschwendest du wertvolle Zeit.",
    icon: problemIcon3,
    visual: <ClockChaosVisual />,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
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
            Warum die meisten Marken unsichtbar bleiben.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 hover:border-[#0066FF]/50 hover:shadow-[0_0_28px_rgba(0,102,255,0.12)] flex flex-col overflow-hidden group cursor-default transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0066FF] to-[#3385FF]/50 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="text-[#0066FF] font-bold text-5xl lg:text-6xl font-mono opacity-15 absolute top-5 right-6 select-none">
                {problem.number}
              </div>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-4 relative z-10">
                {problem.icon}
              </div>
              <h3 className="text-[#F4F4F5] font-bold text-xl mb-2 relative z-10">{problem.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{problem.desc}</p>
              <div className="relative z-10 mt-auto">{problem.visual}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
