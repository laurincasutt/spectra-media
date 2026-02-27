"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

function StatTile({ stat, delay }: { stat: typeof home.proofStats[0]; delay: number }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex flex-col items-center text-center p-6 lg:p-8 border border-white/8 hover:border-[#0066FF]/40 hover:shadow-[0_0_24px_rgba(0,102,255,0.15)] transition-all duration-300 cursor-default"
    >
      <div className="min-h-[4rem] flex items-center justify-center mb-2">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0066FF] drop-shadow-[0_0_12px_rgba(0,102,255,0.4)] leading-none">
          {stat.value}
        </span>
      </div>
      <span className="text-[#F4F4F5] font-medium text-sm sm:text-base">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="border-y border-white/8 bg-[#111113]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {home.proofStats.map((stat, i) => (
            <StatTile key={i} stat={stat} delay={i * 0.12} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
