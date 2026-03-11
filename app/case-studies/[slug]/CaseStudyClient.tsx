"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CaseCard from "@/components/CaseCard";
import CTASection from "@/components/CTASection";
import type { CaseStudy } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

interface Props {
  cs: CaseStudy;
  otherCases: CaseStudy[];
  ctaSection: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    ctaUrl: string;
  };
}

export default function CaseStudyClient({ cs, otherCases, ctaSection }: Props) {
  return (
    <>
      {/* Case Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#0066FF]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Back link */}
            <motion.div variants={fadeUpVariants} className="mb-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#F4F4F5] text-sm transition-colors"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Alle Case Studies
              </Link>
            </motion.div>

            {/* 2-col layout: text left, photo right */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Left: text content */}
              <div className="flex-1 min-w-0">
                <motion.span
                  variants={fadeUpVariants}
                  className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6"
                >
                  {cs.badge}
                </motion.span>

                <motion.h1
                  variants={fadeUpVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-6 leading-tight"
                >
                  {cs.tagline}
                </motion.h1>

                {/* Hero stat */}
                <motion.div
                  variants={fadeUpVariants}
                  className="inline-flex flex-col items-start p-6 rounded-2xl bg-[#1C1C1F] border border-white/8 mt-2"
                >
                  <span className="text-5xl lg:text-6xl font-bold text-[#0066FF] leading-none">
                    {cs.heroStat}
                  </span>
                  <span className="text-[#A1A1AA] text-base mt-2">
                    {cs.heroStatLabel}
                  </span>
                </motion.div>
              </div>

              {/* Right: profile photo */}
              {cs.profileImg && (
                <motion.div
                  variants={fadeUpVariants}
                  className="w-full lg:w-72 xl:w-80 flex-shrink-0"
                >
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={cs.profileImg}
                      alt={cs.client}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent" />
                    {/* Client name badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="px-3 py-2 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
                        <p className="text-[#F4F4F5] font-bold text-sm">{cs.client}</p>
                        <p className="text-[#A1A1AA] text-xs">{cs.industry}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Stats */}
      <section className="py-12 bg-[#111113] border-y border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/8">
            {cs.outcome.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-2xl lg:text-3xl font-bold text-[#0066FF] mb-1">
                  {stat.value}
                </span>
                <span className="text-[#A1A1AA] text-xs sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Approach + Outcome */}
      <section className="py-20 lg:py-32 bg-[#09090B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl lg:text-3xl font-bold text-[#F4F4F5] mb-4"
            >
              Die Herausforderung
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#A1A1AA] text-base lg:text-lg leading-relaxed"
            >
              {cs.challenge}
            </motion.p>
          </motion.div>

          {/* Approach */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl lg:text-3xl font-bold text-[#F4F4F5] mb-6"
            >
              Unser Ansatz
            </motion.h2>
            <motion.ol
              variants={staggerContainer}
              className="space-y-4"
            >
              {cs.approach.map((step, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpVariants}
                  className="flex gap-4 items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#A1A1AA] text-base leading-relaxed pt-1">
                    {step}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          {/* Outcome summary */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl lg:text-3xl font-bold text-[#F4F4F5] mb-4"
            >
              Das Ergebnis
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#A1A1AA] text-base lg:text-lg leading-relaxed"
            >
              {cs.outcome.summary}
            </motion.p>
          </motion.div>

          {/* Screenshots & Insights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl lg:text-3xl font-bold text-[#F4F4F5] mb-6"
            >
              Screenshots & Insights
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {(cs.screenshots && cs.screenshots.length > 0
                ? cs.screenshots
                : [null, null]
              ).map((src, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111113]"
                >
                  {src ? (
                    <Image
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/15 rounded-xl m-2">
                      <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white/25 text-sm font-medium">Screenshot / Insight {i + 1}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quote */}
          {cs.quote && (
            <motion.blockquote
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 border-l-4 border-l-[#0066FF]"
            >
              <svg
                className="w-8 h-8 text-[#0066FF]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
              </svg>
              <p className="text-[#F4F4F5] text-lg italic leading-relaxed mb-4">
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <cite className="text-[#A1A1AA] text-sm not-italic">
                — {cs.quote.author}
              </cite>
            </motion.blockquote>
          )}
        </div>
      </section>

      {/* Other Cases */}
      {otherCases.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#111113] border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUpVariants}
                className="text-2xl lg:text-3xl font-bold text-[#F4F4F5] mb-10 text-center"
              >
                Weitere Case Studies
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {otherCases.map((oc) => (
                  <CaseCard key={oc.slug} caseStudy={oc} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        eyebrow={ctaSection.eyebrow}
        headline={ctaSection.headline}
        sub={ctaSection.sub}
        cta={ctaSection.cta}
        ctaUrl={ctaSection.ctaUrl}
      />
    </>
  );
}
