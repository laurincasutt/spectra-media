"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  const allScreenshots = cs.screenshots ?? [];

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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
            <motion.ol variants={staggerContainer} className="space-y-4">
              {cs.approach.map((step, i) => (
                <motion.li key={i} variants={fadeUpVariants} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#A1A1AA] text-base leading-relaxed pt-1">{step}</p>
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
          {(allScreenshots.length > 0 || cs.screenshotVideo || cs.screenshotWide) && (
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

              {/* Portrait grid */}
              {allScreenshots.length > 0 && (
                <motion.div
                  variants={staggerContainer}
                  className={`grid gap-4 ${
                    allScreenshots.length === 1
                      ? "grid-cols-1"
                      : allScreenshots.length === 4
                      ? "grid-cols-2 sm:grid-cols-4"
                      : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {allScreenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUpVariants}
                      className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-[#111113] group"
                    >
                      <Image
                        src={src}
                        alt={`${cs.client} Screenshot ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Wide / landscape screenshot below the grid */}
              {cs.screenshotWide && (
                <motion.div
                  variants={fadeUpVariants}
                  className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#111113] group mt-4"
                >
                  <Image
                    src={cs.screenshotWide}
                    alt={`${cs.client} Insights`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              )}

              {/* Video */}
              {cs.screenshotVideo && (
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4"
                >
                  <motion.div
                    variants={fadeUpVariants}
                    className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-[#111113]"
                  >
                    <video
                      src={cs.screenshotVideo}
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Quote */}
          {cs.quote && (
            <motion.blockquote
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 border-l-4 border-l-[#0066FF]"
            >
              <svg className="w-8 h-8 text-[#0066FF]/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
              </svg>
              <p className="text-[#F4F4F5] text-lg italic leading-relaxed mb-4">
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <cite className="text-[#A1A1AA] text-sm not-italic">— {cs.quote.author}</cite>
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
                  <motion.div key={oc.slug} variants={fadeUpVariants}>
                    <Link href={`/case-studies/${oc.slug}`} className="block group h-full">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative p-6 rounded-2xl bg-[#1C1C1F] border border-white/8 hover:border-[#0066FF]/30 transition-colors duration-300 overflow-hidden h-full"
                      >
                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0066FF]/3 rounded-2xl" />

                        {/* Profile image top-right */}
                        {oc.profileImg && (
                          <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                            <Image
                              src={oc.profileImg}
                              alt={oc.client}
                              fill
                              className="object-cover"
                              style={
                                oc.slug === "kanzlei-mandic"
                                  ? { objectPosition: "50% 30%" }
                                  : oc.slug === "markus-hoppe"
                                  ? { objectPosition: "50% 10%" }
                                  : undefined
                              }
                              sizes="48px"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="relative z-10 pr-14">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#3385FF] text-xs font-medium mb-4">
                            {oc.badge}
                          </span>
                          <div className="text-3xl lg:text-4xl font-bold text-[#F4F4F5] leading-none mb-1">
                            {oc.heroStat}
                          </div>
                          <div className="text-[#A1A1AA] text-sm mb-4">{oc.heroStatLabel}</div>

                          <div className="pt-4 border-t border-white/8">
                            <div className="text-[#F4F4F5] font-semibold text-base mb-1">{oc.client}</div>
                            <div className="text-[#A1A1AA] text-sm leading-relaxed">{oc.tagline}</div>
                          </div>

                          <div className="mt-4 flex items-center gap-2 text-[#0066FF] text-sm font-medium">
                            <span>Case Study lesen</span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
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
