"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/data/content";
import { cardHover, fadeUpVariants } from "@/lib/animations";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export default function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="rest"
      whileHover="hover"
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block group">
        <motion.div
          variants={cardHover}
          className="relative p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 hover:border-[#0066FF]/30 transition-colors duration-300 overflow-hidden h-full"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0066FF]/3 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#3385FF] text-xs font-medium mb-6">
              {caseStudy.badge}
            </span>

            {/* Hero stat */}
            <div className="mb-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#F4F4F5] leading-none mb-1">
                {caseStudy.heroStat}
              </div>
              <div className="text-[#A1A1AA] text-sm">
                {caseStudy.heroStatLabel}
              </div>
            </div>

            {/* Client & tagline */}
            <div className="mt-6 pt-6 border-t border-white/8">
              <div className="text-[#F4F4F5] font-semibold text-base mb-1">
                {caseStudy.client}
              </div>
              <div className="text-[#A1A1AA] text-sm leading-relaxed">
                {caseStudy.tagline}
              </div>
            </div>

            {/* Arrow */}
            <div className="mt-6 flex items-center gap-2 text-[#0066FF] text-sm font-medium">
              <span>Case Study lesen</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
