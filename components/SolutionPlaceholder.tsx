"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, viewportOnce } from "@/lib/animations";

export default function SolutionPlaceholder() {
  return (
    <section className="py-12 lg:py-16 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="p-10 rounded-2xl border border-dashed border-white/20 text-center"
        >
          <p className="text-[#3F3F46] text-sm font-mono">[PLACEHOLDER — LÖSUNG / METHODE]</p>
          <p className="text-[#52525B] text-sm mt-2">Dieser Abschnitt wird noch ausgearbeitet.</p>
        </motion.div>
      </div>
    </section>
  );
}
