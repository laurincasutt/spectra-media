"use client";

import { motion } from "framer-motion";
import ProcessSection from "@/components/ProcessSection";
import StackedCaseStudies from "@/components/StackedCaseStudies";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import { home } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export default function HomeClient() {
  const { system } = home;

  return (
    <>
      {/* "So funktioniert es" */}
      <ProcessSection />

      {/* System / Deliverables Section */}
      <section className="py-20 lg:py-32 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {system.deliverables.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-bold text-sm mb-5">
                  {item.number}
                </div>
                <h3 className="text-[#F4F4F5] font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stacked Case Studies */}
      <StackedCaseStudies />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />
    </>
  );
}
