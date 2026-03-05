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

export default function SolutionPlaceholder() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-14 lg:mb-18"
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
            Kein Rätselraten. Kein Experimentieren. Eine bewährte Methode, die aus Experten Marktführer macht.
          </motion.p>
        </motion.div>

        {/* Horizontal flow connector — desktop only */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="hidden md:flex items-center mb-10"
        >
          {phases.map((phase, i) => (
            <div key={phase.number} className="flex items-center flex-1 last:flex-none">
              {/* Phase node */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#0D0D10] border-2 border-[#0066FF]/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.2)] relative">
                  <span className="text-[#3385FF] font-bold text-lg">{phase.number}</span>
                  <div className="absolute inset-0 rounded-full bg-[#0066FF]/8" />
                </div>
                <span className="text-[#3385FF] text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                  {phase.name}
                </span>
              </div>
              {/* Connector line between nodes */}
              {i < phases.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-[#0066FF]/40 to-[#0066FF]/40 mx-3" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Phase panels */}
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
              className="relative p-7 lg:p-8 rounded-2xl border-l-2 border-[#0066FF]/30 border border-white/6 overflow-hidden group"
              style={{ background: "linear-gradient(to bottom, #0D0D10, #111113)" }}
            >
              {/* Mobile phase badge (hidden on md+) */}
              <span className="md:hidden inline-block px-2.5 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-5 w-fit">
                {phase.number} {phase.name}
              </span>
              <div className="space-y-3">
                {phase.body.map((para, j) => (
                  <p key={j} className="text-[#A1A1AA] text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0066FF] to-[#3385FF]/50 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
