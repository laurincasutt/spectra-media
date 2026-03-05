"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { prozess } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  slideInLeft,
  viewportOnce,
} from "@/lib/animations";

export default function ProcessTimeline() {
  const { steps } = prozess;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-20 lg:py-32 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            {prozess.hero.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
          >
            {prozess.hero.headline}
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
          >
            {prozess.hero.sub}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Dotted background line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10 md:left-[2.25rem]" />
          {/* Blue fill overlay */}
          <motion.div
            className="absolute left-6 top-2 w-[2px] bg-[#0066FF]/60 origin-top md:left-[2.25rem]"
            style={{ scaleY, bottom: 2 }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-10 lg:space-y-12"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                className="relative flex gap-8 md:gap-12"
              >
                {/* Step number dot */}
                <div className="relative flex-shrink-0 flex items-start pt-1">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#0066FF]/30 z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-10 lg:pb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-[#F4F4F5] text-lg lg:text-xl font-bold">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1C1C1F] border border-white/8 text-[#A1A1AA] text-xs font-medium whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
