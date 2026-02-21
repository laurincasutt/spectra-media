"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import { home, caseStudies } from "@/data/content";
import {
  fadeUpVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export default function HomeClient() {
  const { system, usps } = home;

  return (
    <>
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
                className={`p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 ${
                  i === system.deliverables.length - 1 && system.deliverables.length % 3 !== 0
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
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

      {/* USP Section */}
      <section className="py-20 lg:py-28 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUpVariants}>
              <span className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4">
                Warum Spectra Media
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] leading-tight">
                Anders als alle anderen.
              </h2>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="space-y-4"
            >
              {usps.map((usp, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpVariants}
                  className="flex gap-4 p-5 rounded-xl bg-[#1C1C1F] border border-white/8"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0066FF]/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#0066FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#F4F4F5] font-semibold text-sm mb-1">
                      {usp.title}
                    </div>
                    <div className="text-[#A1A1AA] text-sm leading-relaxed">
                      {usp.desc}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-32 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Case Studies
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4"
            >
              Echte Resultate. Echte Kunden.
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
            >
              Keine Versprechen ohne Beweis. Hier sind die Zahlen.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            {caseStudies.map((cs) => (
              <CaseCard key={cs.slug} caseStudy={cs} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center mt-10"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#F4F4F5] text-sm font-medium transition-colors"
            >
              Alle Case Studies ansehen
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
