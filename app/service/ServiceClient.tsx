"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

// ─── System card mini visuals (all animate only on hover via `active` prop) ──

function StrategyVisual({ active }: { active: boolean }) {
  const panControls = useAnimation();
  const pathControls = useAnimation();
  const W = 1080;
  const DUR = 8;

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
              <linearGradient id="svcStratGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="75" x2={W} y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="50" x2={W} y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="25" x2={W} y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <polygon points={`0,72 ${W*0.25},58 ${W*0.5},40 ${W*0.75},20 ${W},2 ${W},80 0,80`} fill="url(#svcStratGrad)" />
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

function SystemCard({ item, Visual }: { item: (typeof home.system.deliverables)[0]; Visual: SystemVisual }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-col rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default transition-all duration-300 hover:border-[#0066FF]/40 hover:shadow-[0_0_28px_rgba(0,102,255,0.1)]"
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

import ContactSection from "@/components/ContactSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import { service, home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const outcomeCards = [
  {
    number: "01",
    title: "Autorität verändert alles, auch dein Preis.",
    desc: "Sichtbarkeit schafft Vertrauen. Kunden zahlen mehr, stellen weniger Fragen und entscheiden schneller.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Abschlüsse gehen leicht von der Hand.",
    desc: "Wer dich bereits kennt und vertraut, entscheidet leichter. Social Proof verkürzt jeden Verkaufsprozess.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Die richtigen Kunden kommen zu dir.",
    desc: "Statt kalter Akquise entstehen Inbound Leads. Menschen melden sich bei dir, weil sie deine Inhalte bereits überzeugen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Vom Anbieter zur Autorität.",
    desc: "Dein Name steht für eine Kategorie, nicht für ein einzelnes Angebot.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ServiceClient() {
  const { system } = home;

  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 70%", "end 30%"],
  });
  const snakePathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#09090B] relative overflow-hidden">
        <AnimatedGridBackground />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0066FF]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6"
            >
              {service.hero.eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto"
            >
              <span className="text-[#F4F4F5]">Als Accounts werden Marken,</span>
              <br />
              <span className="gradient-text">als Marken werden Marktführer.</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
            >
              Für Social Media, für Experten und Unternehmen, die Sichtbarkeit in echtes Wachstum verwandeln wollen.
            </motion.p>
            {/* Animated scroll arrows */}
            <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-1 mt-8">
              {[0, 1, 2].map(i => (
                <motion.svg key={i} width="20" height="12" viewBox="0 0 20 12" fill="none"
                  animate={{ y: [0, 4, 0], opacity: [0.3 + i * 0.25, 0.8, 0.3 + i * 0.25] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                >
                  <path d="M2 2l8 8 8-8" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages — Wie unsere Kunden ganze Märkte dominieren */}
      <AdvantagesSection />

      {/* Resultat Section */}
      <section className="py-16 lg:py-24 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider"
            >
              Das Resultat
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
            >
              Was passiert, wenn dein Marketing wirklich funktioniert.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {outcomeCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-7 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 hover:border-[#0066FF]/50 hover:shadow-[0_0_28px_rgba(0,102,255,0.12)] overflow-hidden group cursor-default transition-all duration-300"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0066FF] to-[#3385FF]/50 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="text-[#0066FF] font-bold text-5xl font-mono opacity-15 absolute top-5 right-6 select-none">
                  {card.number}
                </div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-4 relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-[#F4F4F5] font-bold text-xl mb-2 relative z-10">{card.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* System / Deliverables Section */}
      <section className="py-20 lg:py-32 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4"
            >
              {system.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
            >
              {system.headline}
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
            >
              {system.sub}
            </motion.p>
          </motion.div>

          {/* Grid with snake SVG overlay */}
          <div ref={gridRef} className="relative">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <filter id="snakeGlowSvc" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <path
                d="M 17 25 L 50 25 L 83 25 C 83 50 17 50 17 75 L 50 75 L 83 75"
                stroke="rgba(0,102,255,0.15)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                fill="none"
              />
              <motion.path
                d="M 17 25 L 50 25 L 83 25 C 83 50 17 50 17 75 L 50 75 L 83 75"
                stroke="rgba(0,102,255,0.55)"
                strokeWidth="0.7"
                fill="none"
                style={{ pathLength: snakePathLength }}
                filter="url(#snakeGlowSvc)"
              />
            </svg>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10"
            >
              {system.deliverables.map((item, i) => {
                const Visual = systemCardVisuals[i];
                return <SystemCard key={i} item={item} Visual={Visual} />;
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
