"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { useContent } from "@/hooks/useContent";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// ─── Value icons ────────────────────────────────────────────────────────────

const valueIcons = [
  // Trophy — Ergebnis > Aktivität
  <svg key="trophy" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  // Eye — Transparenz > Buzzwords
  <svg key="eye" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  // Target — Fokus > Masse
  <svg key="target" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
  </svg>,
];

// ─── Stats ──────────────────────────────────────────────────────────────────

type GruenderExtras = {
  statsLabel30: string;
  statsMrd: string;
  statsMio: string;
  statsViews: string;
  statsFollower: string;
  [key: string]: string;
};

function AnimatedStats({ t }: { t: GruenderExtras }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const [count, setCount] = useState(30);
  const [mrdDigit, setMrdDigit] = useState(2);
  const [mioDigit, setMioDigit] = useState(1);

  useEffect(() => {
    if (!inView) return;

    setCount(0);
    setMrdDigit(Math.floor(Math.random() * 9) + 1);
    setMioDigit(Math.floor(Math.random() * 9) + 1);

    let current = 0;
    const countInterval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= 30) clearInterval(countInterval);
    }, 33);

    const mrdInterval = setInterval(() => {
      setMrdDigit(Math.floor(Math.random() * 9) + 1);
    }, 80);
    const mrdTimeout = setTimeout(() => {
      clearInterval(mrdInterval);
      setMrdDigit(2);
    }, 1500);

    const mioInterval = setInterval(() => {
      setMioDigit(Math.floor(Math.random() * 9) + 1);
    }, 80);
    const mioTimeout = setTimeout(() => {
      clearInterval(mioInterval);
      setMioDigit(1);
    }, 1500);

    return () => {
      clearInterval(countInterval);
      clearInterval(mrdInterval);
      clearInterval(mioInterval);
      clearTimeout(mrdTimeout);
      clearTimeout(mioTimeout);
    };
  }, [inView]);

  return (
    <motion.div ref={ref} variants={staggerContainer} className="grid grid-cols-3 gap-4 mt-10">
      {[
        { value: `${count}+`, label: t.statsLabel30 },
        { value: `${mrdDigit} ${t.statsMrd}`, label: t.statsViews },
        { value: `${mioDigit} ${t.statsMio}`, label: t.statsFollower },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeUpVariants} className="text-center p-3 rounded-xl bg-white/4 border border-white/8">
          <div className="text-[#0066FF] font-bold text-xl drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">{stat.value}</div>
          <div className="text-[#52525B] text-xs mt-0.5">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Team Member Photo ───────────────────────────────────────────────────────

function TeamPhoto({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  return err ? (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#09090B] to-[#0066FF]/5 flex items-center justify-center">
      <span className="text-[#A1A1AA] text-5xl font-bold">{alt[0]}</span>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => setErr(true)}
    />
  );
}

// ─── LinkedIn Icon ───────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function GruenderClient() {
  const [imgError, setImgError] = useState(false);
  const { gruender, ui, nav } = useContent();
  const t = ui.gruenderExtras;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/6 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B00]/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.span
                variants={fadeUpVariants}
                className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6 uppercase tracking-wider"
              >
                {gruender.hero.eyebrow}
              </motion.span>
              <motion.h1
                variants={fadeUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
              >
                {t.architectsHeadline}<br />
                <span className="gradient-text">{t.architectsGradient}</span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="text-base text-[#52525B] leading-relaxed mb-4"
              >
                {t.architectsSub}
              </motion.p>

              <AnimatedStats t={t} />
            </motion.div>

            {/* Right: founder photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/8 aspect-[4/3]">
                {!imgError ? (
                  <Image
                    src="/Team Spectra Media/Teambild.png"
                    alt="Spectra Media Team"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#09090B] to-[#FF6B00]/8 flex flex-col items-center justify-center gap-4">
                    <div className="text-6xl">📱</div>
                    <div className="text-[#A1A1AA] text-sm text-center px-8">
                      {t.teamFallback.split("\n").map((line, i) => (
                        <span key={i}>{line}{i === 0 && <br />}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/40 to-transparent pointer-events-none" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-4"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image src="/logo-neu.png" alt="Spectra Media" width={220} height={55} className="h-14 w-auto object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Werte (Alpinity-style) ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-base font-semibold mb-10 uppercase tracking-wider"
            >
              {t.valuesTitle}
            </motion.span>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {gruender.values.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative p-8 rounded-2xl bg-[#111113] border border-white/6 hover:border-[#0066FF]/50 hover:shadow-[0_0_28px_rgba(0,102,255,0.12)] overflow-hidden group cursor-default transition-all duration-300"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/8 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0066FF] to-[#3385FF]/50 group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Alpinity-style icon box */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0A0F] border border-[#0066FF]/15 group-hover:border-[#0066FF]/35 flex items-center justify-center mb-7 text-[#3385FF] shadow-[0_0_24px_rgba(0,102,255,0.12)] group-hover:shadow-[0_0_28px_rgba(0,102,255,0.32)] transition-all duration-300">
                    {valueIcons[i]}
                  </div>

                  <h3 className="text-[#F4F4F5] font-bold text-xl mb-3 leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-[#71717A] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-base font-semibold mb-10 uppercase tracking-wider"
            >
              {t.teamTitle}
            </motion.span>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {gruender.team.map((member, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="relative rounded-2xl overflow-hidden bg-[#111113] border border-white/8 group"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <TeamPhoto src={member.img} alt={member.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/20 to-transparent" />
                  </div>

                  {/* Name / role / LinkedIn */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-[#F4F4F5] font-bold text-lg">{member.name}</h3>
                      <p className="text-[#71717A] text-sm mt-0.5">{member.role}</p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/6 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-all duration-200"
                      aria-label={`${member.name} ${nav.ariaLinkedIn}`}
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Wie alles begann ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#09090B] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-base font-semibold mb-6 uppercase tracking-wider"
            >
              {t.storyEyebrow}
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl lg:text-5xl font-bold text-[#F4F4F5] mb-10"
            >
              {t.storyHeadline}
            </motion.h2>
            <div className="space-y-6">
              {gruender.story.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUpVariants}
                  className="text-[#A1A1AA] text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Was wir nicht glauben ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-base font-semibold mb-6 uppercase tracking-wider"
            >
              {t.antiValuesEyebrow}
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl lg:text-5xl font-bold text-[#F4F4F5] mb-12"
            >
              {t.antiValuesHeadline}
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {gruender.antiValues.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="flex gap-4 p-6 rounded-2xl bg-[#0D0D0F] border border-white/6 group"
                >
                  {/* X icon */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FF4444]/10 border border-[#FF4444]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FF4444]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#F4F4F5] font-bold text-base mb-1.5 line-through decoration-[#FF4444]/40 decoration-1">
                      {item.title}
                    </h3>
                    <p className="text-[#71717A] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <ContactSection />
    </>
  );
}
