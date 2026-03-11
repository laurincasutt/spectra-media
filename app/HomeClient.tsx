"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoSection from "@/components/VideoSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionPlaceholder from "@/components/SolutionPlaceholder";
import StackedCaseStudies from "@/components/StackedCaseStudies";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

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

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10"
            >
              {system.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default"
                >
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#0066FF]/12 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/60 to-transparent group-hover:w-full transition-all duration-500" />

                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-bold text-sm mb-5 relative z-10">
                    {item.number}
                  </div>
                  <h3 className="text-[#F4F4F5] font-bold text-lg mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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
