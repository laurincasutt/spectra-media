"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function VideoSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#09090B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-semibold mb-4 uppercase tracking-widest"
          >
            In Action
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
          >
            Überzeuge dich selbst von unserer Expertise.
          </motion.h2>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative w-full rounded-2xl border border-white/8 bg-[#111113] overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-20 h-20 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center cursor-pointer hover:bg-[#0066FF]/30 transition-colors"
            >
              <svg className="w-8 h-8 text-[#3385FF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
            <span className="text-[#3F3F46] text-sm">Video folgt</span>
          </div>
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/8 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0066FF]/5 rounded-tr-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
