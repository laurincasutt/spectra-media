"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { caseStudies } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

// Stat icons
const icons = {
  followers: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  views: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  chart: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const statIcons = [icons.followers, icons.views, icons.chart];

function getObjectPosition(slug: string): string {
  const map: Record<string, string> = {
    'tamer-galal': '50% 5%',
    'kanzlei-mandic': '50% 5%',
    'markus-hoppe': '50% 5%',
  };
  return map[slug] ?? '50% 50%';
}

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
              Resultate, die
              <br />
              <span className="gradient-text">für sich sprechen.</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
            >
              Was passiert, wenn Strategie, Content und Distribution zusammenkommen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Photo Background Cards Grid */}
      <section className="py-16 lg:py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.slug}
                variants={fadeUpVariants}
                className="flex flex-col"
              >
                <Link href={`/case-studies/${cs.slug}`} className="flex flex-col flex-1 group">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#0066FF]/40 group-hover:shadow-[0_0_40px_rgba(0,102,255,0.2)] transition-all duration-300 flex flex-col flex-1 bg-[#0D0D0F]"
                  >
                    {/* Photo area */}
                    <div className="relative h-[360px] overflow-hidden flex-shrink-0">
                      {cs.profileImg ? (
                        <Image
                          src={cs.profileImg}
                          alt={cs.client}
                          fill
                          className={cs.profileImgContain ? "object-contain opacity-90 p-6" : "object-cover opacity-80"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={cs.profileImgContain ? {} : { objectPosition: getObjectPosition(cs.slug) }}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/15 to-[#111113]" />
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0D0D0F]" />
                    </div>

                    {/* Content area */}
                    <div className="flex flex-col flex-1 p-5 bg-[#0D0D0F]">
                      {/* Client name + badge */}
                      <div className="mb-3">
                        <div className="text-[#F4F4F5] font-bold text-lg uppercase tracking-wide mb-1">
                          {cs.client}
                        </div>
                        <div className="text-[#52525B] text-sm">{cs.badge}</div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/8 mb-3" />

                      {/* Stat rows — first 3 stats */}
                      <div className="space-y-0 flex-1">
                        {cs.outcome.stats.slice(0, 3).map((stat, j) => (
                          <div
                            key={j}
                            className={`flex items-center justify-between py-2 ${
                              j < Math.min(cs.outcome.stats.length, 3) - 1 ? "border-b border-white/8" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2 text-[#0066FF]">
                              {statIcons[j % 3]}
                              <span className="text-[#A1A1AA] text-sm">{stat.label}</span>
                            </div>
                            <span className="text-[#F4F4F5] font-bold text-sm">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA button */}
                      <div className="mt-4">
                        <div className="w-full py-3 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#3385FF] font-medium text-sm text-center group-hover:bg-[#0066FF]/20 transition-colors duration-200">
                          Mehr Details →
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
