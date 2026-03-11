"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// ─── Shared glassmorphism bubble ───────────────────────────────────────────

function Bubble({
  pos, size, delay, children, floatY = 7, floatX = 0, duration = 3.2, glow = false,
}: {
  pos: CSSProperties;
  size: number;
  delay: number;
  children: ReactNode;
  floatY?: number;
  floatX?: number;
  duration?: number;
  glow?: boolean;
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full"
      style={{
        ...pos,
        width: size,
        height: size,
        background: "linear-gradient(145deg, #2D2D36 0%, #1C1C24 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: glow
          ? "0 8px 28px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 28px rgba(0,102,255,0.22)"
          : "0 8px 28px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
      animate={{
        y: [0, -floatY, 0],
        ...(floatX !== 0 ? { x: [0, floatX, 0] } : {}),
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Problem 01: Kein System — scattered task bubbles (varied speed + amplitude) ───

function ScheduleVisual() {
  return (
    <div className="relative w-full h-28">
      {/* Calendar — left, mid-size, floats high */}
      <Bubble pos={{ left: "6%", top: 4 }} size={58} delay={0} floatY={11} duration={3.0}>
        <svg className="w-6 h-6 text-white/72" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </Bubble>

      {/* Mail — top-right, large, drifts gently + slight x */}
      <Bubble pos={{ right: "4%", top: 0 }} size={72} delay={0.5} floatY={5} floatX={3} duration={4.2}>
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </Bubble>

      {/* Bar chart — bottom-left, fast short float */}
      <Bubble pos={{ left: "28%", bottom: 0 }} size={46} delay={1.0} floatY={14} duration={2.5}>
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </Bubble>

      {/* Document — bottom-right, slow + -x drift */}
      <Bubble pos={{ right: "16%", bottom: 4 }} size={42} delay={0.8} floatY={8} floatX={-3} duration={3.8}>
        <svg className="w-4 h-4 text-white/58" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </Bubble>

      {/* Edit — center, tiny, quick float */}
      <Bubble pos={{ left: "50%", top: "30%" }} size={34} delay={1.6} floatY={9} duration={2.9}>
        <svg className="w-3.5 h-3.5 text-white/48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </Bubble>
    </div>
  );
}

// ─── Problem 02: Konkurrenz — podium hierarchy (competitor above you) ─────

function CompetitorVisual() {
  return (
    <div className="relative w-full h-28">
      {/* Competitor — top center, largest, glowing blue, slow drift */}
      <Bubble
        pos={{ left: "calc(50% - 36px)", top: 0 }}
        size={72} delay={0} floatY={4} duration={4.5} glow
      >
        {/* Crown */}
        <svg className="w-8 h-8 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 16L3 7l5.5 4L12 4l3.5 7L21 7l-2 9H5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 16h14" />
        </svg>
      </Bubble>

      {/* 2nd — bottom left, medium, normal float */}
      <Bubble pos={{ left: "5%", bottom: 2 }} size={52} delay={0.7} floatY={10} duration={3.1}>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </Bubble>

      {/* You (3rd) — bottom right, smallest, slightly dimmer, faster */}
      <Bubble pos={{ right: "5%", bottom: 0 }} size={44} delay={0.3} floatY={12} duration={2.7}>
        <svg className="w-5 h-5 text-white/48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </Bubble>

      {/* Extra — users group, bottom center, tiny filler */}
      <Bubble pos={{ left: "calc(50% - 18px)", bottom: 6 }} size={36} delay={1.4} floatY={7} duration={3.5}>
        <svg className="w-3.5 h-3.5 text-white/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </Bubble>
    </div>
  );
}

// ─── Problem 03: Zeit — vertical scrolling task column + soundwave ─────────

const SCROLL_ICONS: ReactNode[] = [
  // Clock
  <svg key="clk" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Calendar
  <svg key="cal" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Video
  <svg key="vid" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>,
  // Mail
  <svg key="mail" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // Edit
  <svg key="edt" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>,
  // Settings
  <svg key="set" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Lightning
  <svg key="lgt" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Refresh
  <svg key="ref" className="w-4 h-4 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
];

const ITEM_SIZE = 36;
const ITEM_GAP = 10;
const SCROLL_DIST = SCROLL_ICONS.length * (ITEM_SIZE + ITEM_GAP); // 368px

const WAVE_HEIGHTS = [28, 60, 44, 80, 52, 72, 36, 64, 40, 56];

function ClockChaosVisual() {
  return (
    <div className="relative w-full h-[200px] flex gap-3">
      {/* Left: vertical scrolling icon column */}
      <div
        className="flex-1 overflow-hidden relative"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)" }}
      >
        <motion.div
          className="flex flex-col"
          style={{ gap: ITEM_GAP }}
          animate={{ y: [0, -SCROLL_DIST] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate for seamless loop */}
          {[...SCROLL_ICONS, ...SCROLL_ICONS].map((icon, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center rounded-full"
              style={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                background: "linear-gradient(145deg, #2D2D36 0%, #1C1C24 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {icon}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: EQ soundwave bars */}
      <div className="flex items-center gap-[3px] pr-1 self-center">
        {WAVE_HEIGHTS.map((baseH, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full bg-[#0066FF]/55"
            style={{ height: baseH * 0.5 }}
            animate={{
              height: [baseH * 0.3, baseH, baseH * 0.25, baseH * 0.75, baseH * 0.3],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 1.4 + i * 0.07,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.06,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Icons for the top badge (unchanged) ──────────────────────────────────

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
              <div className="relative z-10 mt-auto pt-4">{problem.visual}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
