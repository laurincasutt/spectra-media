"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatGerman(n: number) {
  return n.toLocaleString("de-CH").replace(/,/g, ".");
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return value;
}

const SLOT_DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "2"];

function SlotMachineValue({ finalLabel, active }: { finalLabel: string; active: boolean }) {
  const [display, setDisplay] = useState(finalLabel);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (!active) return;
    setSpinning(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const digit = SLOT_DIGITS[step % SLOT_DIGITS.length];
      const suffix = finalLabel.replace(/^\d/, "");
      setDisplay(digit + suffix);
    }, 80);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplay(finalLabel);
      setSpinning(false);
    }, 1400);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [active, finalLabel]);

  return (
    <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0066FF] leading-none tabular-nums ${spinning ? "opacity-90" : ""}`}>
      {display}
    </span>
  );
}

function CountUpValue({ target, duration, active, suffix = "" }: { target: number; duration: number; active: boolean; suffix?: string }) {
  const value = useCountUp(target, duration, active);
  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0066FF] leading-none tabular-nums">
      {formatGerman(value)}{suffix}
    </span>
  );
}

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const stats = home.proofStats;

  return (
    <section ref={ref} className="border-y border-white/8 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="flex items-center"
            >
              {i > 0 && <div className="w-px h-12 bg-white/10 mx-8 lg:mx-12 shrink-0" />}
              <div className="flex flex-col items-center text-center cursor-default">
                <div className="min-h-[3.5rem] flex items-center justify-center mb-1.5">
                  {i === 0 && (
                    <SlotMachineValue finalLabel="2 Mrd+" active={inView} />
                  )}
                  {i === 1 && (
                    <SlotMachineValue finalLabel="1 Mio+" active={inView} />
                  )}
                  {i === 2 && (
                    <CountUpValue target={2000} duration={1500} active={inView} suffix="+" />
                  )}
                  {i === 3 && (
                    <CountUpValue target={30} duration={1200} active={inView} suffix="+" />
                  )}
                </div>
                <span className="text-[#A1A1AA] font-medium text-sm sm:text-base">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
