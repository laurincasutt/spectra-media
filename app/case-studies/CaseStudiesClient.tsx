"use client";

import { motion } from "framer-motion";
import CaseCard from "@/components/CaseCard";
import CTASection from "@/components/CTASection";
import { caseStudies, home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function CaseStudiesClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0066FF]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6"
            >
              Case Studies
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
            >
              Echte Resultate.
              <br />
              <span className="gradient-text">Echte Kunden.</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
            >
              Keine Hochglanz-Versprechen. Nur echte Zahlen von echten
              Partnerschaften.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {caseStudies.map((cs) => (
              <CaseCard key={cs.slug} caseStudy={cs} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow={home.bottomCta.eyebrow}
        headline={home.bottomCta.headline}
        sub={home.bottomCta.sub}
        cta={home.bottomCta.cta}
        ctaUrl={home.bottomCta.ctaUrl}
      />
    </>
  );
}
