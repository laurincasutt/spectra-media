"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

// ─── System card mini visuals (all animate only on hover via `active` prop) ──

function StrategyVisual({ active }: { active: boolean }) {
  const panControls = useAnimation();
  const pathControls = useAnimation();
  const W = 1080;
  const DUR = 8; // Faster + steeper than default

  useEffect(() => {
    if (active) {
      panControls.start({ x: [0, -(W - 180)], transition: { duration: DUR, repeat: Infinity, ease: "linear" } });
      pathControls.start({ pathLength: [0, 1], transition: { duration: DUR, repeat: Infinity, ease: "linear" } });
    } else {
      panControls.stop();
      panControls.set({ x: 0 });
      pathControls.stop();
      pathControls.set({ pathLength: 1 });
    }
  }, [active, panControls, pathControls]);

  return (
    <div
      className="w-full h-full flex items-end justify-center pb-2 overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 92%, transparent 100%)" }}
    >
      <div className="w-full relative overflow-hidden" style={{ height: 72 }}>
        <motion.div className="absolute top-0 left-0" style={{ width: W }} animate={panControls} initial={{ x: 0 }}>
          <svg viewBox={`0 0 ${W} 90`} width={W} height={72} fill="none">
            <defs>
              <linearGradient id="homeStratGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="75" x2={W} y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="50" x2={W} y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="25" x2={W} y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* Steeper fill area */}
            <polygon points={`0,72 ${W*0.25},58 ${W*0.5},40 ${W*0.75},20 ${W},2 ${W},80 0,80`} fill="url(#homeStratGrad)" />
            {/* Steeper line */}
            <motion.path
              d={`M 0,72 L ${W*0.25},58 L ${W*0.5},40 L ${W*0.75},20 L ${W},2`}
              stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              initial={{ pathLength: 1 }}
              animate={pathControls}
            />
            {active && (
              <motion.circle cx={W} cy={2} r={4} fill="#0066FF"
                animate={{ r: [4, 6, 4], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            )}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

function ScriptVisual({ active }: { active: boolean }) {
  const CYCLE = 7.0;
  const FILL = 1.3;
  const RESET = 6.5 / CYCLE;
  const lineWidths = [0.85, 0.65, 0.92, 0.55, 0.75];
  const makeTimes = (i: number) => [0, (i * FILL) / CYCLE, ((i + 1) * FILL) / CYCLE, RESET, 1];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 px-8 py-3">
      <div className="flex items-center gap-2">
        <div className="px-2 py-0.5 rounded text-[10px] font-bold text-[#0066FF] bg-[#0066FF]/15 border border-[#0066FF]/30 whitespace-nowrap">HOOK</div>
        <div className="flex-1 relative h-2 rounded-full bg-[#0066FF]/15 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[#0066FF]/65"
            animate={active ? { width: ["0%", "0%", "100%", "100%", "0%"] } : { width: "28%" }}
            transition={active ? { duration: CYCLE, repeat: Infinity, ease: ["linear", "easeOut", "linear", "linear"], times: makeTimes(0) } : { duration: 0.4 }}
          />
        </div>
      </div>
      {lineWidths.map((w, i) => (
        <div key={i} className="relative h-2 rounded-full bg-white/10 overflow-hidden" style={{ width: `${w * 100}%` }}>
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[#0066FF]/45"
            animate={active ? { width: ["0%", "0%", "100%", "100%", "0%"] } : { width: "22%" }}
            transition={active ? { duration: CYCLE, repeat: Infinity, ease: ["linear", "easeOut", "linear", "linear"], times: makeTimes(i + 1) } : { duration: 0.4 }}
          />
        </div>
      ))}
    </div>
  );
}

function EditingVisual({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 px-6">
      <div className="relative flex gap-1 h-8">
        {[{ w: 25, hi: true }, { w: 15, hi: false }, { w: 28, hi: false }, { w: 17, hi: false }, { w: 22, hi: false }].map((s, i) => (
          <motion.div key={i}
            className={`rounded h-full border ${s.hi ? "bg-[#0066FF]/50 border-[#0066FF]/50" : "bg-white/10 border-white/8"}`}
            style={{ flexBasis: `${s.w}%`, flexShrink: 0, flexGrow: 0 }}
            animate={s.hi && active ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 bg-[#0066FF] shadow-[0_0_6px_rgba(0,102,255,0.7)]"
          animate={active ? { left: ["5%", "90%"] } : { left: "5%" }}
          transition={active ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
        />
      </div>
      <div className="flex gap-1 h-4">
        {[22, 38, 18, 28].map((w, i) => (
          <div key={i} className="rounded h-full bg-white/8 border border-white/5" style={{ flexBasis: `${w}%`, flexShrink: 0, flexGrow: 0 }} />
        ))}
      </div>
    </div>
  );
}

function CommunityVisual({ active }: { active: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            className="w-12 h-12 rounded-xl bg-white/8 border border-white/8 flex items-center justify-center"
            animate={active ? { opacity: [0.5, 0.9, 0.5] } : { opacity: 0.5 }}
            transition={active ? { duration: 2, repeat: Infinity, delay: i * 0.3 } : {}}
          >
            {i === 2 && (
              <svg className="w-4 h-4 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            )}
            {i === 4 && (
              <svg className="w-4 h-4 text-[#3385FF]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FunnelVisual({ active }: { active: boolean }) {
  // Sized to fit in 140px container: bars h-6 (24px), gap-1 (4px), connector h-3 (12px), € w-5 h-5 (20px)
  return (
    <div className="w-full h-full flex items-center justify-center py-2">
      <div className="flex flex-col items-center gap-1">
        {[{ w: 100, label: "Reichweite" }, { w: 72, label: "Leads" }, { w: 46, label: "Kunden" }].map((s, i) => (
          <motion.div key={i}
            className="flex items-center justify-center h-6 rounded-lg"
            style={{ width: s.w, background: `rgba(0,102,255,${0.1 + i * 0.08})`, border: `1px solid rgba(0,102,255,${0.2 + i * 0.1})` }}
            animate={active ? { opacity: [0.65, 1, 0.65] } : { opacity: 0.75 }}
            transition={active ? { duration: 2.2, repeat: Infinity, delay: i * 0.4 } : {}}
          >
            <span className="text-[8px] text-[#3385FF]/90 font-medium">{s.label}</span>
          </motion.div>
        ))}
        <div className="w-px h-3 bg-gradient-to-b from-[#0066FF]/50 to-transparent" />
        <motion.div
          className="w-5 h-5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 flex items-center justify-center"
          animate={active ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={active ? { duration: 1.5, repeat: Infinity } : {}}
        >
          <span className="text-[#0066FF] text-[10px] font-bold">€</span>
        </motion.div>
      </div>
    </div>
  );
}

function ConversionVisual({ active }: { active: boolean }) {
  const bars = [38, 52, 46, 62, 78];
  return (
    <div className="w-full h-full flex items-end justify-center gap-2 px-10 pb-3 pt-5">
      {bars.map((h, i) => (
        <motion.div key={i}
          className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-[#0066FF]/60 border border-[#0066FF]/50 shadow-[0_0_14px_rgba(0,102,255,0.3)]" : "bg-white/12 border border-white/8"}`}
          animate={i === bars.length - 1 && active ? { height: [h, h + 12, h] } : { height: h }}
          transition={active ? { duration: 2, repeat: Infinity } : {}}
        />
      ))}
    </div>
  );
}

type SystemVisual = React.FC<{ active: boolean }>;
const systemCardVisuals: SystemVisual[] = [StrategyVisual, ScriptVisual, EditingVisual, CommunityVisual, FunnelVisual, ConversionVisual];
import VideoSection from "@/components/VideoSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionPlaceholder from "@/components/SolutionPlaceholder";
import StackedCaseStudies from "@/components/StackedCaseStudies";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import { home, nav } from "@/data/content";
import Reveal from "@/components/Reveal";

// ─── System card wrapper — tracks hover state per card ─────────────────────

function SystemCard({
  item,
  Visual,
}: {
  item: (typeof home.system.deliverables)[0];
  Visual: SystemVisual;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-col rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default transition-all duration-300 hover:border-[#0066FF]/40 hover:shadow-[0_0_28px_rgba(0,102,255,0.1)] h-full"
    >
      <div className="relative h-[140px] bg-[#0D0D0F] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/4 to-transparent pointer-events-none" />
        <Visual active={hovered} />
      </div>
      <div className="relative p-6 lg:p-7 flex-1">
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#0066FF]/10 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/60 to-transparent group-hover:w-full transition-all duration-500" />
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-bold text-sm mb-4 relative z-10">
          {item.number}
        </div>
        <h3 className="text-[#F4F4F5] font-bold text-lg mb-3 relative z-10">{item.title}</h3>
        <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function HomeClient() {
  const { system } = home;

  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 70%", "end 30%"],
  });
  const snakePathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Video placeholder */}
      <VideoSection />

      {/* Client logos */}
      <ClientLogosSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution placeholder */}
      <SolutionPlaceholder />

      {/* Mid-page CTA — after Spectra Methode */}
      <section className="py-16 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#0066FF]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal><p className="text-[#3385FF] text-sm font-semibold uppercase tracking-wider mb-3">Bereit loszulegen?</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4F4F5] mb-3 leading-tight">
              Den ersten Schritt zu deiner<br className="hidden sm:block" />{" "}
              digitalen Autorität.
            </h2>
          </Reveal>
          <Reveal delay={0.15}><p className="text-[#71717A] text-base mb-8">In einem kostenlosen 30-Minuten-Gespräch schauen wir gemeinsam, was für dich möglich ist.</p></Reveal>
          <Reveal delay={0.2}>
            <a
              href={nav.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#3385FF] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-[1.02] active:scale-95"
            >
              Kostenloses Erstgespräch buchen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* System / Deliverables Section */}
      <section className="py-20 lg:py-32 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <Reveal><span className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4">{system.eyebrow}</span></Reveal>
            <Reveal delay={0.08}><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4">{system.headline}</h2></Reveal>
            <Reveal delay={0.15}><p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">{system.sub}</p></Reveal>
          </div>

          {/* Grid with snake SVG overlay */}
          <div ref={gridRef} className="relative">
            {/* Snake path SVG — desktop only, behind cards */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <filter id="snakeGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              {/* Static faint dashed base path */}
              <path
                d="M 17 25 L 50 25 L 83 25 C 83 50 17 50 17 75 L 50 75 L 83 75"
                stroke="rgba(0,102,255,0.15)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                fill="none"
              />
              {/* Animated fill path */}
              <motion.path
                d="M 17 25 L 50 25 L 83 25 C 83 50 17 50 17 75 L 50 75 L 83 75"
                stroke="rgba(0,102,255,0.55)"
                strokeWidth="0.7"
                fill="none"
                style={{ pathLength: snakePathLength }}
                filter="url(#snakeGlow)"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10">
              {system.deliverables.map((item, i) => {
                const Visual = systemCardVisuals[i];
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <SystemCard item={item} Visual={Visual} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Case Studies */}
      <StackedCaseStudies />

      {/* Target Audience */}
      <TargetAudienceSection />
    </>
  );
}
