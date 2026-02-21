"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { gruender } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function GruenderClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0066FF]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6"
            >
              {gruender.hero.eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
            >
              {gruender.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-[#A1A1AA] max-w-2xl leading-relaxed"
            >
              {gruender.hero.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-[#09090B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {gruender.story.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUpVariants}
                className="text-[#A1A1AA] text-base lg:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#111113]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl lg:text-4xl font-bold text-[#F4F4F5] mb-12 text-center"
            >
              Unsere Werte
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {gruender.values.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="p-8 rounded-2xl bg-[#1C1C1F] border border-white/8"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center mb-5">
                    <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
                  </div>
                  <h3 className="text-[#F4F4F5] font-bold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={gruender.cta.headline}
        sub={gruender.cta.sub}
        cta={gruender.cta.cta}
        ctaUrl={gruender.cta.ctaUrl}
      />
    </>
  );
}
