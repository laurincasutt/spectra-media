"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/hooks/useContent";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";

// Bildausschnitt der Kundenfotos (gleich wie in StackedCaseStudies)
const imgPosition: Record<string, string> = {
  "kanzlei-mandic": "50% 30%",
  "markus-hoppe": "50% 10%",
  "raffael-gordzielik": "50% 8%",
};

// Wechselt alle `ms` Millisekunden zum nächsten Eintrag; pausiert, solange `paused` true ist
function useRotation(count: number, ms: number, paused: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), ms);
    return () => clearInterval(id);
  }, [count, ms, paused, index]);
  return [index, setIndex] as const;
}

function Dots({ count, active, onSelect, label }: { count: number; active: number; onSelect: (i: number) => void; label: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`${label} ${i + 1}`}
          aria-current={i === active}
          className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-[18px] bg-[#0066FF]" : "w-1.5 bg-white/25 hover:bg-white/40"}`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { home, caseStudies, ui } = useContent();
  const { hero, testimonials } = home;
  const t = ui.heroExtras;

  // Kundenzitate über der Headline (nur Desktop)
  const quotes = testimonials.map((q) => ({
    ...q,
    img: caseStudies.find((cs) => cs.client === q.author || cs.quote?.author.startsWith(q.author))?.profileImg,
  }));
  const [quotePaused, setQuotePaused] = useState(false);
  const [quoteIndex, setQuoteIndex] = useRotation(quotes.length, 5500, quotePaused);

  // Case-Karte unten links im Hero (nur Desktop)
  const cases = caseStudies.slice(0, 3);
  const [casePaused, setCasePaused] = useState(false);
  const [caseIndex, setCaseIndex] = useRotation(cases.length, 5000, casePaused);
  const activeCase = cases[caseIndex];

  // 3D: Headline neigt sich leicht zur Maus (nur Desktop, ohne reduced motion)
  const tiltRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (!mq.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="relative bg-[#09090B] lg:px-4 lg:pt-4">
      <div className="relative min-h-screen lg:min-h-[calc(100svh-1rem)] flex flex-col items-center justify-center overflow-hidden lg:rounded-[28px] lg:border lg:border-white/8 lg:bg-[#0C0D12]">
        {/* Hex pattern base */}
        <div className="absolute inset-0 bg-hex pointer-events-none" />

        {/* Animated drops along hex lines */}
        <AnimatedGridBackground />

        {/* Blauer Schimmer oben rechts / unten links (Desktop-Kasten) */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 85% 0%, rgba(0,102,255,0.20), transparent 60%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(0,102,255,0.10), transparent 65%)" }}
        />

        {/* Blue glow blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-10 right-10 w-[320px] h-[320px] bg-[#FF6B00]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/3 w-[200px] h-[200px] bg-[#6B3FFF]/4 rounded-full blur-[80px] pointer-events-none" />

        {/* Phone mockups — right edge (erst ab 1440px, sonst kollidieren sie mit der Headline) */}
        <div className="hidden min-[1440px]:flex absolute right-[-60px] top-1/2 -translate-y-1/2 items-end gap-[-20px] pointer-events-none select-none z-0 opacity-75">
          {/* Left phone — Instagram screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ zIndex: 2 }}
          >
            <div className="relative w-[180px] rounded-[28px] bg-[#1C1C1E] border-[2.5px] border-[#3A3A3C] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#1C1C1E] rounded-b-xl z-10" />
              <div className="rounded-[26px] overflow-hidden bg-black h-[360px] relative">
                <Image
                  src="/insta-spectra-media.png"
                  alt="Instagram Screenshot Spectra Media"
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#3F3F46] whitespace-nowrap">
              Instagram
            </div>
          </motion.div>

          {/* Right phone — Insights screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative -ml-6"
            style={{ zIndex: 1 }}
          >
            <div className="relative w-[180px] rounded-[28px] bg-[#1C1C1E] border-[2.5px] border-[#3A3A3C] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#1C1C1E] rounded-b-xl z-10" />
              <div className="rounded-[26px] overflow-hidden bg-black h-[360px] relative">
                <Image
                  src="/insights-mike.png"
                  alt="Insights Screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#3F3F46] whitespace-nowrap">
              Insights
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 lg:pt-36 pb-16">
          {/* Kundenzitat (rotierend) */}
          <div
            className="fade-up hidden lg:block max-w-2xl mx-auto mb-8"
            onMouseEnter={() => setQuotePaused(true)}
            onMouseLeave={() => setQuotePaused(false)}
            aria-live="polite"
          >
            <div className="grid">
              {quotes.map((q, i) => (
                <figure
                  key={q.author}
                  className={`[grid-area:1/1] flex flex-col items-center gap-3 transition-all duration-700 ${
                    i === quoteIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                  aria-hidden={i !== quoteIndex}
                >
                  <blockquote className="text-[17px] italic font-medium leading-snug text-[#E4E4E7] text-balance">
                    «{q.quote}»
                  </blockquote>
                  <figcaption className="inline-flex items-center gap-2.5 text-[13px]">
                    {q.img && (
                      <span className="relative w-[26px] h-[26px] rounded-full overflow-hidden border border-white/20">
                        <Image src={q.img} alt="" fill sizes="26px" className="object-cover" />
                      </span>
                    )}
                    <span className="font-semibold text-[#F4F4F5]">{q.author}</span>
                    <span className="text-[#71717A] text-xs">{q.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-3.5">
              <Dots count={quotes.length} active={quoteIndex} onSelect={setQuoteIndex} label={t.quoteDotLabel} />
            </div>
          </div>

          {/* Eyebrow badge */}
          <div className="fade-up inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline (3D) */}
          <div className="mb-8 [perspective:1100px]">
            <div className="hero-rise">
              <div ref={tiltRef} className="transition-transform duration-300 ease-out [transform-style:preserve-3d]">
                {hero.headlineLines.map((line, i) => (
                  <h1
                    key={i}
                    className={`block text-[40px] sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] leading-[1.02] ${
                      i === hero.gradientLineIndex ? "gradient-text hero-3d-blue pb-[0.06em]" : "text-[#F4F4F5] hero-3d-white"
                    }`}
                  >
                    {line}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          {/* Sub */}
          <p
            className={`fade-up fade-up-${hero.headlineLines.length + 1} text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8`}
          >
            {hero.sub}
          </p>

          {/* Sub2 */}
          {hero.sub2 && (
            <p
              className={`fade-up fade-up-${hero.headlineLines.length + 2} text-sm sm:text-base text-[#80808A] max-w-xl mx-auto leading-relaxed mb-10`}
            >
              {hero.sub2}
            </p>
          )}

          {/* CTA Row */}
          <div
            className={`fade-up fade-up-${Math.min(hero.headlineLines.length + 3, 6)} flex flex-col sm:flex-row items-center justify-center gap-4`}
          >
            <a
              href={hero.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#3385FF] text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-105 active:scale-95"
            >
              {hero.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href={hero.secondaryCtaUrl}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-[#F4F4F5] font-medium text-lg transition-all duration-200 hover:bg-white/5"
            >
              {hero.secondaryCta}
              <svg className="ml-2 w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Case-Karte (rotierend): unter den Buttons, ab 1280px unten links im Kasten */}
        {activeCase && (
          <div
            className="hero-card-in hidden lg:block relative xl:absolute z-20 w-[272px] mb-12 xl:mb-0 xl:left-6 xl:bottom-6 rounded-[18px] overflow-hidden bg-[#111113] border border-white/14 shadow-[0_20px_50px_rgba(0,0,0,0.55)] text-left"
            onMouseEnter={() => setCasePaused(true)}
            onMouseLeave={() => setCasePaused(false)}
          >
            <Link href={`/case-studies/${activeCase.slug}`} className="group block">
              <div className="relative h-[140px] bg-[#0d1a33]">
                {cases.map((cs, i) =>
                  cs.profileImg ? (
                    <Image
                      key={cs.slug}
                      src={cs.profileImg}
                      alt={i === caseIndex ? cs.client : ""}
                      fill
                      sizes="272px"
                      className={`object-cover transition-opacity duration-700 ${i === caseIndex ? "opacity-100" : "opacity-0"}`}
                      style={{ objectPosition: imgPosition[cs.slug] ?? "50% 18%" }}
                    />
                  ) : null
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090B]/95" />
                <span className="absolute left-3 top-3 px-2.5 py-0.5 rounded-full bg-[#0066FF]/85 text-white text-[11px] font-semibold">
                  {t.caseTag}
                </span>
                <span className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full grid place-items-center bg-white/15 border border-white/30 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                <span className="absolute left-3.5 bottom-2.5 font-bold text-base text-[#F4F4F5]">{activeCase.client}</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 pt-3 pb-2">
                <span className="text-[#0066FF] font-bold text-xl tabular-nums whitespace-nowrap">{activeCase.heroStat}</span>
                <span className="text-[#A1A1AA] text-xs leading-tight">{activeCase.heroStatLabel}</span>
                <span className="ml-auto text-[#3385FF] text-lg transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
            <div className="pb-3">
              <Dots count={cases.length} active={caseIndex} onSelect={setCaseIndex} label={t.caseDotLabel} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
