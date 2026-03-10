"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const phases = [
  {
    number: "01",
    name: "POSITIONING",
    body: [
      "Alles steht und fällt mit der Grundstruktur deiner Marke. Bevor wir erste Content Pieces produzieren, klären wir zuerst das Fundament: Wer du bist, welchen Personen du weiterhelfen möchtest und warum Menschen auf dich anstatt auf deine Konkurrenz setzen sollen.",
      "Wir definieren ganz klar deine Positionierung im Markt, deine Zielgruppe und dein unverwechselbares Markenversprechen. Das Ergebnis: eine klare Markenidentität, die auf jeder Plattform sofort wiedererkennbar ist.",
    ],
  },
  {
    number: "02",
    name: "CONTENT ENGINE",
    body: [
      "Bei unserem Service handelt es sich um ein Done-For-You-Service - wir wollen deinen Zeitaufwand so gering wie möglich halten. Dafür bauen wir eine vollständige Content Engine um deine Marke herum: Content-Strategie, Scriptwriting, Editing, Upload und Community Management.",
      "Alles was wir von deiner Seite brauchen, sind 1-2 Stunden Recording-Zeit pro Woche. Du fokussierst dich auf deine Stärken, wir übernehmen den Rest - und liefern dir täglichen Content, vollständig betreute Kanäle und Wachstum, das sich monatlich misst.",
    ],
  },
  {
    number: "03",
    name: "MARKET DOMINANCE",
    body: [
      "Reichweite allein reicht nicht aus. Deswegen bauen wir dir Systeme, die Follower in Kunden verwandeln - mit Funneln, Conversion-Optimierung und Angeboten, die dein Wachstum monetarisieren.",
      "Das Ziel ist nicht nur viral zu gehen, sondern die unbestrittene Nummer 1 in deiner Nische zu werden. Dies schafft Vertrauen, das wir direkt monetarisieren können.",
    ],
  },
];

function PhaseVisual() {
  const hexPts = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (60 * i - 30) * Math.PI / 180;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" ");

  const hexPhases = [
    { cx: 100, cy: 90, num: "01", name: ["POSITIONING"] },
    { cx: 250, cy: 90, num: "02", name: ["CONTENT", "ENGINE"] },
    { cx: 400, cy: 90, num: "03", name: ["MARKET", "DOMINANCE"] },
  ];

  // Connection segments: [x1, x2] at y=90
  const connSegs = [
    { x1: 152, x2: 198 },
    { x1: 302, x2: 348 },
  ];

  // Traveling particles per connection
  const particles = [
    { conn: 0, delay: 0 },
    { conn: 0, delay: 0.5 },
    { conn: 0, delay: 1.0 },
    { conn: 1, delay: 0.25 },
    { conn: 1, delay: 0.75 },
    { conn: 1, delay: 1.25 },
  ];

  return (
    <motion.div
      className="relative my-8 lg:my-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9 }}
    >
      {/* Wide ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[420px] h-[120px] rounded-full bg-[#0066FF]/12 blur-[70px]"
          animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <svg viewBox="0 0 500 180" className="w-full h-[140px] md:h-[200px]" fill="none">
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection glow halos */}
        {connSegs.map((c, i) => (
          <line key={`halo-${i}`} x1={c.x1} y1={90} x2={c.x2} y2={90}
            stroke="rgba(0,102,255,0.18)" strokeWidth="8" strokeLinecap="round" />
        ))}

        {/* Static dashed lines */}
        {connSegs.map((c, i) => (
          <line key={`line-${i}`} x1={c.x1} y1={90} x2={c.x2} y2={90}
            stroke="rgba(0,102,255,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
        ))}

        {/* Animated dash sweep */}
        {connSegs.map((c, i) => (
          <motion.line key={`anim-${i}`} x1={c.x1} y1={90} x2={c.x2} y2={90}
            stroke="rgba(51,133,255,0.85)" strokeWidth="1.5" strokeDasharray="5 3"
            animate={{ strokeDashoffset: [16, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear", delay: i * 0.45 }}
          />
        ))}

        {/* Traveling particles */}
        {particles.map((p, pi) => {
          const seg = connSegs[p.conn];
          return (
            <motion.circle key={`p-${pi}`} r="3" fill="rgba(0,153,255,0.95)" filter="url(#dotGlow)"
              animate={{ cx: [seg.x1, seg.x2], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut",
                delay: p.delay, repeatDelay: 0.6 }}
              initial={{ cx: seg.x1, cy: 90, opacity: 0 }}
              style={{ cy: 90 } as React.CSSProperties}
            />
          );
        })}

        {/* Hexagons */}
        {hexPhases.map((p, idx) => {
          const isCenter = p.num === "02";
          const r = isCenter ? 60 : 54;
          return (
            <g key={p.num}>
              {/* Outer glow hex */}
              {isCenter && (
                <motion.polygon points={hexPts(p.cx, p.cy, r + 18)}
                  fill="rgba(0,102,255,0.07)"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
              )}
              {/* Mid glow outline */}
              <polygon points={hexPts(p.cx, p.cy, r + 6)}
                fill="none"
                stroke={isCenter ? "rgba(0,102,255,0.22)" : "rgba(0,102,255,0.08)"}
                strokeWidth="1"
              />
              {/* Main hex */}
              <polygon points={hexPts(p.cx, p.cy, r)}
                fill={isCenter ? "rgba(0,102,255,0.13)" : "rgba(0,102,255,0.05)"}
                stroke={isCenter ? "rgba(0,102,255,1)" : "rgba(0,102,255,0.5)"}
                strokeWidth={isCenter ? "1.8" : "1.4"}
                filter={isCenter ? "url(#glow2)" : undefined}
              />
              {/* Vertex node dots */}
              {Array.from({ length: 6 }, (_, vi) => {
                const a = (60 * vi - 30) * Math.PI / 180;
                return (
                  <motion.circle key={vi}
                    cx={p.cx + r * Math.cos(a)} cy={p.cy + r * Math.sin(a)}
                    r={isCenter ? 2.2 : 1.6}
                    fill={isCenter ? "rgba(51,133,255,1)" : "rgba(51,133,255,0.55)"}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: vi * 0.2 + idx * 0.35 }}
                  />
                );
              })}
              {/* Number */}
              <text x={p.cx} y={p.cy - (p.name.length > 1 ? 13 : 8)}
                textAnchor="middle" dominantBaseline="middle"
                fill={isCenter ? "rgba(51,133,255,0.85)" : "rgba(51,133,255,0.45)"}
                fontSize={isCenter ? "24" : "19"} fontWeight="bold" fontFamily="monospace"
              >
                {p.num}
              </text>
              {/* Name lines */}
              {p.name.map((line, li) => (
                <text key={li} x={p.cx} y={p.cy + 13 + li * 11}
                  textAnchor="middle" dominantBaseline="middle"
                  fill={isCenter ? "rgba(161,161,170,1)" : "rgba(161,161,170,0.75)"}
                  fontSize={isCenter ? "7.5" : "6.5"} fontWeight="700" letterSpacing="1.4"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Connector endpoint dots */}
        {connSegs.flatMap((c, i) => [
          <motion.circle key={`n-${i}-a`} cx={c.x1} cy={90} r="4" fill="rgba(0,102,255,0.9)"
            filter="url(#dotGlow)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />,
          <motion.circle key={`n-${i}-b`} cx={c.x2} cy={90} r="4" fill="rgba(0,102,255,0.9)"
            filter="url(#dotGlow)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 + 0.3 }}
          />,
        ])}
      </svg>
    </motion.div>
  );
}

export default function SolutionPlaceholder() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Die Spectra Methode™
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
          >
            Von unsichtbar zu unübersehbar - in drei Phasen.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Wir verwandeln gewöhnliche Accounts in herausstechende Marken und das nicht durch Zufall, sondern mit System.
          </motion.p>
        </motion.div>

        {/* Phase hex diagram */}
        <PhaseVisual />

        {/* Phase cards — ProblemSection style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.number}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 hover:border-[#0066FF]/50 hover:shadow-[0_0_28px_rgba(0,102,255,0.12)] flex flex-col overflow-hidden group cursor-default transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0066FF] to-[#3385FF]/50 group-hover:w-full transition-all duration-500 ease-out" />

              {/* Large background number */}
              <div className="text-[#0066FF] font-bold text-5xl lg:text-6xl font-mono opacity-15 absolute top-5 right-6 select-none">
                {phase.number}
              </div>

              {/* Phase badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-5 w-fit relative z-10">
                <span className="text-[#3385FF]/60 font-mono">{phase.number}</span>
                {phase.name}
              </span>

              {/* Title */}
              <h3 className="text-[#F4F4F5] font-bold text-xl mb-4 relative z-10">
                {phase.name.split(" ").map(w => w[0] + w.slice(1).toLowerCase()).join(" ")}
              </h3>

              {/* Body paragraphs */}
              {phase.body.map((para, j) => (
                <p key={j} className="text-[#A1A1AA] text-sm leading-relaxed relative z-10 mb-2 last:mb-0">
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
