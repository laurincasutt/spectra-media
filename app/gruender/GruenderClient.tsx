"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { gruender } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const valueIcons = [
  // Trophy — Ergebnis über Aktivität
  <svg key="trophy" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  // Eye — Vertrauen durch Transparenz
  <svg key="eye" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  // Target — Selektiv und fokussiert
  <svg key="target" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
  </svg>,
];

function AnimatedStats() {
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

    // Count-up: 0 → 30 over ~1s
    let current = 0;
    const countInterval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= 30) clearInterval(countInterval);
    }, 33);

    // Slot machine for Mrd, stops at 2 after 1500ms
    const mrdInterval = setInterval(() => {
      setMrdDigit(Math.floor(Math.random() * 9) + 1);
    }, 80);
    const mrdTimeout = setTimeout(() => {
      clearInterval(mrdInterval);
      setMrdDigit(2);
    }, 1500);

    // Slot machine for Mio, stops at 1 after 1500ms
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
        { value: `${count}+`, label: "Brands skaliert" },
        { value: `${mrdDigit} Mrd+`, label: "Views generiert" },
        { value: `${mioDigit} Mio+`, label: "Follower gegrowt" },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeUpVariants} className="text-center p-3 rounded-xl bg-white/4 border border-white/8">
          <div className="text-[#0066FF] font-bold text-xl drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">{stat.value}</div>
          <div className="text-[#52525B] text-xs mt-0.5">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function GruenderClient() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Hero — left-aligned, big headline + text + image */}
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
                Über uns
              </motion.span>
              <motion.h1
                variants={fadeUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
              >
                Die Architekten hinter<br />
                <span className="gradient-text">deiner digitalen Präsenz.</span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="text-base text-[#52525B] leading-relaxed mb-4"
              >
                Wir transformieren deine Social Media Präsenz zur Marktführerschaft - mit messbaren Ergebnissen statt leerer Versprechen.
              </motion.p>

              <AnimatedStats />
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
                    src="/gruender-foto.jpg"
                    alt="Gründer Spectra Media"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#09090B] to-[#FF6B00]/8 flex flex-col items-center justify-center gap-4">
                    <div className="text-6xl">📱</div>
                    <div className="text-[#A1A1AA] text-sm text-center px-8">
                      Das Spectra Media Team —<br />dein Partner für Social Media Wachstum
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/40 to-transparent pointer-events-none" />
              </div>
              {/* Floating badge — Spectra logo */}
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

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl lg:text-4xl font-bold text-[#F4F4F5] mb-12 text-center"
            >
              Unsere Werte
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {gruender.values.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default"
                >
                  {/* Blue corner glow */}
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/60 to-transparent group-hover:w-full transition-all duration-500" />

                  {/* Icon — slightly blue by default, strong blue on hover */}
                  <div className="relative mb-4 w-fit z-10">
                    <div className="absolute inset-0 rounded-full bg-[#0066FF]/40 blur-[14px] opacity-30 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                    <div className="relative text-[#0066FF]/40 group-hover:text-[#3385FF] transition-colors duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.6)]">
                      {valueIcons[i]}
                    </div>
                  </div>
                  <h3 className="text-[#F4F4F5] font-bold text-lg mb-3 relative z-10 leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
