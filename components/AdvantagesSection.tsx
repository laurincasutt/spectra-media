"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useContent } from "@/hooks/useContent";

// Visual 01 — Impact scale
function WirkungVisual({ low, high, metric }: { low: string; high: string; metric: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex items-end gap-2">
        <span className="text-[#3F3F46] text-xs">{low}</span>
        <div className="flex items-end gap-1">
          {[20, 32, 44, 56, 70].map((h, i) => (
            <motion.div
              key={i}
              className="w-5 rounded-t-sm"
              style={{
                height: h,
                backgroundColor: i === 4 ? "rgba(0,102,255,0.6)" : `rgba(0,102,255,${0.1 + i * 0.05})`,
              }}
              animate={{ height: [h, h + (i === 4 ? 10 : 2), h] }}
              transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
        <span className="text-[#3385FF] text-xs font-semibold">{high}</span>
      </div>
      <div className="text-[#52525B] text-[10px] uppercase tracking-wider">{metric}</div>
    </div>
  );
}

// Visual 02 — Speedometer needle rotating to max
function TachoVisual() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-20 h-20">
        {/* Arc background */}
        <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
          <path
            d="M 10 60 A 30 30 0 0 1 70 60"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.path
            d="M 10 60 A 30 30 0 0 1 70 60"
            stroke="rgba(0,102,255,0.7)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="94"
            animate={{ strokeDashoffset: [94, 0, 94] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        {/* Needle */}
        <motion.div
          className="absolute bottom-[22px] left-1/2 origin-bottom"
          style={{ width: 2, height: 22, marginLeft: -1, backgroundColor: "#0066FF", borderRadius: 2 }}
          animate={{ rotate: [-80, 80, -80] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0066FF]/60" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-[#3385FF] font-bold whitespace-nowrap">MAX</div>
      </div>
    </div>
  );
}

// Visual 03 — 3x3 grid, one block floats up
function OutputVisual() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-7 h-7 rounded-md ${
              i === 1 ? "bg-[#0066FF]/50 border border-[#0066FF]/60 shadow-[0_0_12px_rgba(0,102,255,0.4)]" : "bg-white/6 border border-white/8"
            }`}
            animate={i === 1 ? { y: [0, -8, 0], scale: [1, 1.1, 1] } : {}}
            transition={i === 1 ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : {}}
          />
        ))}
      </div>
    </div>
  );
}

// Visual 04 — Stacked isometric layers
function LayersVisual({ layers }: { layers: [string, string, string] }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative flex flex-col-reverse gap-1.5 items-center">
        {[
          { w: 64, opacity: 0.15, label: layers[0] },
          { w: 48, opacity: 0.3, label: layers[1] },
          { w: 32, opacity: 0.6, label: layers[2] },
        ].map((layer, i) => (
          <motion.div
            key={i}
            className="rounded-lg bg-[#0066FF] border border-[#0066FF]/40 flex items-center justify-center"
            style={{ width: layer.w, height: 18, opacity: layer.opacity }}
            animate={{ y: [0, -2 * (i + 1), 0] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white text-[8px] font-medium">{layer.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Visual 05 — Chat bubble with question + checkmark answer
function ChatVisual({ chatQ, chatA }: { chatQ: string; chatA: string }) {
  return (
    <div className="flex flex-col items-start justify-center h-full gap-2 px-2">
      {/* Question bubble */}
      <motion.div
        className="bg-white/6 border border-white/8 rounded-xl rounded-tl-none px-3 py-2 max-w-[140px]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-[#A1A1AA] text-[10px] leading-tight block">{chatQ}</span>
      </motion.div>
      {/* Answer bubble */}
      <motion.div
        className="self-end bg-[#0066FF]/20 border border-[#0066FF]/30 rounded-xl rounded-tr-none px-3 py-2 max-w-[140px]"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <span className="text-[#3385FF] text-[10px] leading-tight block">{chatA}</span>
      </motion.div>
    </div>
  );
}

// Visual 06 — Spectra "S" glow
function AuraVisual() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#0066FF]/30 blur-[20px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="relative w-14 h-14 rounded-2xl bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#3385FF] font-bold text-2xl shadow-[0_0_30px_rgba(0,102,255,0.3)]"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          S
        </motion.div>
      </div>
    </div>
  );
}

export default function AdvantagesSection() {
  const { ui } = useContent();
  const { advantages } = ui;

  const visuals = advantages.cards.map((card, i) => {
    if (i === 0) return <WirkungVisual low={card.low ?? "Low"} high={card.high ?? "High"} metric={card.metric ?? "IMPACT"} />;
    if (i === 1) return <TachoVisual />;
    if (i === 2) return <OutputVisual />;
    if (i === 3) return <LayersVisual layers={card.layers ?? ["Ch", "Fmt", "Br"]} />;
    if (i === 4) return <ChatVisual chatQ={card.chatQ ?? ""} chatA={card.chatA ?? ""} />;
    return <AuraVisual />;
  });

  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider">
              {advantages.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4">
              {advantages.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
              {advantages.sub}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {advantages.cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl border border-white/8 hover:border-[#0066FF]/40 overflow-hidden group cursor-default flex flex-col transition-colors duration-300 h-full"
                style={{ backgroundColor: "#111113" }}
              >
                {/* Number badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#3385FF] text-xs font-bold">
                    {card.number}
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/8 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Visual area */}
                <div className="relative z-10 h-36 px-6 pt-6">
                  {visuals[i]}
                </div>

                {/* Text */}
                <div className="relative z-10 px-6 pb-6 pt-3 border-t border-white/5 mt-auto">
                  <h3 className="text-[#F4F4F5] font-bold text-base mb-2">{card.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
