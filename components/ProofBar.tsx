"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

function StatTile({ stat, delay }: { stat: typeof home.proofStats[0]; delay: number }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="flex flex-col items-center text-center p-6 lg:p-8"
    >
      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0066FF] leading-none mb-2">
        {stat.value}
      </span>
      <span className="text-[#F4F4F5] font-medium text-sm sm:text-base mb-1">
        {stat.label}
      </span>
      <span className="text-[#A1A1AA] text-xs sm:text-sm">
        {stat.sub}
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
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8"
        >
          {home.proofStats.map((stat, i) => (
            <StatTile key={i} stat={stat} delay={i * 0.12} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
