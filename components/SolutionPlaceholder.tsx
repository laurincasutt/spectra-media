"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const phases = [
  {
    number: "01",
    name: "POSITIONING",
    body: [
      "Bevor wir ein einziges Content Piece produzieren, klären wir das Fundament. Wer bist du? Wen willst du erreichen? Warum sollten Menschen dir vertrauen und nicht deiner Konkurrenz.",
      "Wir definieren deine Positionierung, deine Zielgruppe auf tiefer Ebene und ein unverwechselbares Markenversprechen. Das Ergebnis: eine klare Markenidentität, die auf jeder Plattform sofort erkennbar ist.",
    ],
  },
  {
    number: "02",
    name: "CONTENT ENGINE",
    body: [
      "Content-Strategie, Skripte, Editing, Upload, Community Management - wir bauen eine vollständige Content Engine um deine Marke herum.",
      "Du gibst uns 1-2 Stunden Recording-Zeit pro Woche. Wir liefern dir täglichen Content, vollständig betreute Kanäle und Wachstum, das sich monatlich misst.",
    ],
  },
  {
    number: "03",
    name: "MARKET DOMINANCE",
    body: [
      "Reichweite ist kein Selbstzweck. Wir bauen Systeme, die Follower in Kunden verwandeln - mit Funneln, Conversion-Optimierung und Angeboten, die dein Wachstum monetarisieren.",
      "Das Ziel ist nicht nur viral zu gehen. Das Ziel ist, zur unbestrittenen Nummer 1 in deiner Nische zu werden.",
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
    { cx: 100, cy: 80, num: "01", name: ["POSITIONING"] },
    { cx: 250, cy: 80, num: "02", name: ["CONTENT", "ENGINE"] },
    { cx: 400, cy: 80, num: "03", name: ["MARKET", "DOMINANCE"] },
  ];

  const connections = [
    { x1: 143, x2: 207 },
    { x1: 293, x2: 357 },
  ];

  return (
    <motion.div
      className="relative my-10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8 }}
    >
      {/* Center glow behind SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-40 h-40 rounded-full bg-[#0066FF]/10 blur-[40px]"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <svg viewBox="0 0 500 160" className="w-full h-[120px] md:h-[160px]" fill="none">
        {/* Animated connection lines */}
        {connections.map((c, i) => (
          <motion.line
            key={i}
            x1={c.x1} y1={80} x2={c.x2} y2={80}
            stroke="rgba(0,102,255,0.4)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            animate={{ strokeDashoffset: [18, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
          />
        ))}
        {/* Hexagons + text */}
        {hexPhases.map((p) => (
          <g key={p.num}>
            <polygon
              points={hexPts(p.cx, p.cy, 50)}
              fill={p.num === "02" ? "rgba(0,102,255,0.08)" : "rgba(0,102,255,0.04)"}
              stroke={p.num === "02" ? "rgba(0,102,255,0.7)" : "rgba(0,102,255,0.4)"}
              strokeWidth="1.5"
            />
            {/* Phase number */}
            <text
              x={p.cx}
              y={p.cy - (p.name.length > 1 ? 10 : 6)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(51,133,255,0.35)"
              fontSize="20"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {p.num}
            </text>
            {/* Phase name (split across lines if needed) */}
            {p.name.map((line, li) => (
              <text
                key={li}
                x={p.cx}
                y={p.cy + 10 + li * 9}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(161,161,170,0.8)"
                fontSize="6"
                fontWeight="600"
                letterSpacing="1"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
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
            Kein Rätselraten. Kein Ausprobieren. Eine bewährte Methode, die aus Experten Marktführer macht.
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
