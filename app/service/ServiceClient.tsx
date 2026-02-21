"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { service, home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

export default function ServiceClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0066FF]/6 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6"
            >
              {service.hero.eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
            >
              {service.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
            >
              {service.hero.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-[#09090B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {service.packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-[#0066FF]/10 border-[#0066FF]/40 shadow-2xl shadow-[#0066FF]/10"
                    : "bg-[#1C1C1F] border-white/8"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[#0066FF] text-white text-xs font-semibold whitespace-nowrap">
                      Empfohlen
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[#F4F4F5] text-2xl font-bold mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm">{pkg.tagline}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5"
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
                      <span className="text-[#A1A1AA] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/spectramedia/instagram-introduction-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-[#0066FF] hover:bg-[#3385FF] text-white shadow-lg shadow-[#0066FF]/30"
                      : "bg-white/5 hover:bg-white/10 text-[#F4F4F5] border border-white/15"
                  }`}
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 p-8 rounded-2xl bg-[#1C1C1F] border border-white/8"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-xl font-bold text-[#F4F4F5] mb-6"
            >
              Add-ons & Erweiterungen
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {service.addons.map((addon, i) => (
                <motion.span
                  key={i}
                  variants={fadeUpVariants}
                  className="px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#3385FF] text-sm font-medium"
                >
                  + {addon}
                </motion.span>
              ))}
            </motion.div>
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
