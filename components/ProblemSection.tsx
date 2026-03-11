"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// ─── Card 01: Kein System — Wochenplan mit fliegenden Task-Kreisen ─────────

const bubbleStyle = {
  background: "linear-gradient(145deg, #2D2D36 0%, #1C1C24 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
} as const;

function ScheduleVisual() {
  const DAYS = ["Mo", "Di", "Mi", "Do", "Fr"];

  const flyBubbles = [
    {
      top: "14%", left: "2%", size: 40, xDelta: 195, duration: 4.1, delay: 0,
      icon: (
        <svg className="w-5 h-5 text-white/68" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      top: "50%", left: "62%", size: 44, xDelta: -195, duration: 3.7, delay: 0.8,
      icon: (
        <svg className="w-5 h-5 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      top: "70%", left: "6%", size: 36, xDelta: 165, duration: 4.7, delay: 1.4,
      icon: (
        <svg className="w-4 h-4 text-white/58" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      top: "32%", left: "38%", size: 38, xDelta: -105, duration: 4.0, delay: 0.3,
      icon: (
        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full" style={{ height: 130 }}>
      <div className="absolute inset-0 px-1">
        <div className="flex gap-1 mb-1.5">
          {DAYS.map((d) => (
            <div key={d} className="flex-1 text-center text-[9px] text-white/22 font-semibold tracking-wide">
              {d}
            </div>
          ))}
        </div>
        {[0, 1, 2].map((r) => (
          <div key={r} className="flex gap-1 mb-1">
            {DAYS.map((_, c) => (
              <div
                key={c}
                className="flex-1 rounded-sm"
                style={{
                  height: 28,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.045)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {flyBubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-full"
          style={{ top: b.top, left: b.left, width: b.size, height: b.size, zIndex: 10, ...bubbleStyle }}
          animate={{ x: [0, b.xDelta, 0] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        >
          {b.icon}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Card 02: Konkurrenz — 3 Podeste (#1 bobs up/down, Du = #3) ────────────

function CompetitorVisual() {
  return (
    <div className="w-full flex items-end justify-center gap-3 pb-1" style={{ height: 120 }}>
      {/* #2 — medium, left */}
      <div className="flex flex-col items-center gap-1.5" style={{ width: 72 }}>
        <span className="text-[11px] font-bold text-white/40">#2</span>
        <div
          style={{
            width: "100%",
            height: 62,
            background: "rgba(255,255,255,0.055)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "6px 6px 2px 2px",
          }}
        />
      </div>

      {/* #1 — tallest, center — entire column bobs up/down */}
      <motion.div
        className="flex flex-col items-center gap-1.5"
        style={{ width: 72 }}
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-[11px] font-bold text-[#0066FF]"
          style={{ filter: "drop-shadow(0 0 6px rgba(0,102,255,0.7))" }}
        >
          #1
        </span>
        <motion.div
          style={{
            width: "100%",
            height: 90,
            background: "rgba(0,102,255,0.13)",
            border: "1px solid rgba(0,102,255,0.3)",
            borderRadius: "6px 6px 2px 2px",
          }}
          animate={{
            boxShadow: [
              "0 0 16px rgba(0,102,255,0.18)",
              "0 0 32px rgba(0,102,255,0.36)",
              "0 0 16px rgba(0,102,255,0.18)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>

      {/* #3 + Du — shortest, right, very dim */}
      <div className="flex flex-col items-center gap-1.5" style={{ width: 72 }}>
        <div className="flex flex-col items-center leading-tight">
          <span className="text-[10px] font-bold text-white/30">#3</span>
          <span className="text-[11px] font-bold text-white/22">Du</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 28,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "6px 6px 2px 2px",
          }}
        />
      </div>
    </div>
  );
}

// ─── Card 03: Zeit — Slot-Machine Reel + Sanduhr ──────────────────────────

const ITEM_H = 68;

const reelIcons = [
  // 1 — mail
  <svg key="mail" className="w-7 h-7 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // 2 — pencil
  <svg key="pencil" className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>,
  // 3 — settings
  <svg key="cog" className="w-7 h-7 text-white/62" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // 4 — bar chart
  <svg key="chart" className="w-7 h-7 text-white/58" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // 5 — calendar
  <svg key="cal" className="w-7 h-7 text-white/65" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // 6 — film
  <svg key="film" className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>,
  // 7 — star
  <svg key="star" className="w-7 h-7 text-white/55" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
];

function SlotReel() {
  const TOTAL = 7;
  // Append first 3 copies for seamless loop: at y=-(TOTAL*ITEM_H) visually identical to y=0
  const items = [...reelIcons, ...reelIcons.slice(0, 3)];

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ height: ITEM_H * 3, width: ITEM_H }}
    >
      {/* Top fade mask */}
      <div
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: ITEM_H * 1.1, background: "linear-gradient(to bottom, #111113 30%, transparent 100%)" }}
      />
      {/* Bottom fade mask */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: ITEM_H * 1.1, background: "linear-gradient(to top, #111113 30%, transparent 100%)" }}
      />

      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ y: [0, -(TOTAL * ITEM_H)] }}
        transition={{ duration: TOTAL * 2.2, repeat: Infinity, ease: "linear" }}
      >
        {items.map((icon, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
            style={{ height: ITEM_H }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: ITEM_H - 10, height: ITEM_H - 10, ...bubbleStyle }}
            >
              {icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function HourglassVisual() {
  return (
    <svg viewBox="0 0 64 108" width={52} height={88} fill="none">
      <defs>
        <clipPath id="hgV2Top">
          <polygon points="6,12 58,12 32,47" />
        </clipPath>
        <clipPath id="hgV2Bot">
          <polygon points="32,61 58,96 6,96" />
        </clipPath>
      </defs>

      {/* Top cap */}
      <rect x="3" y="4" width="58" height="8" rx="4"
        fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      {/* Bottom cap */}
      <rect x="3" y="96" width="58" height="8" rx="4"
        fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

      {/* Glass outline — X shape (top + bottom triangles) */}
      <polygon
        points="6,12 58,12 32,48 32,60 58,96 6,96 32,60 32,48"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        fill="rgba(4,4,6,0.55)"
      />

      {/* Top sand — drains */}
      <motion.rect
        x="0" y="12" width="64"
        animate={{ height: [35, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.8, ease: "linear" }}
        clipPath="url(#hgV2Top)"
        fill="rgba(0,102,255,0.52)"
      />

      {/* Bottom sand — fills */}
      <motion.rect
        x="0" width="64"
        animate={{ y: [96, 61], height: [0, 35] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.8, ease: "linear" }}
        clipPath="url(#hgV2Bot)"
        fill="rgba(0,102,255,0.46)"
      />

      {/* Neck drip particle */}
      <motion.circle
        cx="32" cy="54"
        r="2.2"
        fill="#3385FF"
        animate={{ opacity: [0, 0.9, 0], cy: [48, 60] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeIn" }}
      />
    </svg>
  );
}

function ClockChaosVisual() {
  return (
    <div className="w-full flex items-center justify-center gap-8 py-1">
      {/* Slot machine reel */}
      <SlotReel />

      {/* Animated hourglass */}
      <div className="flex items-center justify-center">
        <HourglassVisual />
      </div>
    </div>
  );
}

// ─── Icons for card header badges ──────────────────────────────────────────

const problemIcon1 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const problemIcon2 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
const problemIcon3 = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

// ─── Section ───────────────────────────────────────────────────────────────

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
