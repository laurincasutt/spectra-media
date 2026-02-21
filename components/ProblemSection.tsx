"use client";

import { motion } from "framer-motion";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export default function ProblemSection() {
  const { problem } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-4"
          >
            {problem.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
          >
            {problem.headline}
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
          >
            {problem.sub}
          </motion.p>
        </motion.div>

        {/* Friction Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problem.frictions.map((friction, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="relative p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 group hover:border-red-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{friction.icon}</div>

              {/* Title */}
              <h3 className="text-[#F4F4F5] text-xl font-bold mb-3">
                {friction.title}
              </h3>

              {/* Desc */}
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                {friction.desc}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-3xl rounded-tr-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
