"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={`border-b border-white/8 last:border-0 relative transition-all duration-300`}>
      {isOpen && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0066FF] rounded-full" />
      )}
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full py-5 text-left gap-4 transition-all duration-300 ${isOpen ? "pl-4" : ""}`}
        aria-expanded={isOpen}
      >
        <span className="text-[#F4F4F5] font-medium text-base sm:text-lg leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/15 text-[#A1A1AA]"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[#A1A1AA] leading-relaxed pb-5 text-sm sm:text-base pl-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = home;

  return (
    <section className="py-20 lg:py-32 bg-[#09090B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4"
          >
            {faq.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            {faq.headline}
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-[#1C1C1F] rounded-2xl border border-white/8 px-6 lg:px-8"
        >
          {faq.items.map((item, i) => (
            <motion.div key={i} variants={fadeUpVariants}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
