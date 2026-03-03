"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const cardQuotes: Record<string, string> = {
  "tamer-galal": "Spectra Media hat nicht nur meinen Account aufgebaut – sie haben mein Business transformiert. Die Anfragen kommen jetzt zu mir.",
  "kanzlei-mandic": "Wir haben nicht erwartet, dass Social Media so direkt auf unser Geschäft einzahlt. Spectra Media hat das möglich gemacht.",
  "markus-hoppe": "Mit dem richtigen System wuchs ich in 3 Monaten schneller als in den vorherigen 2 Jahren zusammen.",
  "george-maiorano": "Ich hatte erwartet, vielleicht 3.000 Follower in 6 Wochen zu erreichen. Spectra Media hat das Dreifache geliefert.",
};

export default function CustomerDominanceSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#111113] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-14 lg:mb-18"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider"
          >
            Kundenergebnisse
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
          >
            Wie unsere Kunden ganze Märkte dominieren.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.slug}
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group hover:border-[#0066FF]/30 hover:shadow-[0_0_40px_rgba(0,102,255,0.12)] transition-all duration-300 cursor-default"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0066FF]/20 via-[#0066FF]/5 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

              {/* Client info */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F4F4F5] font-bold text-lg shrink-0">
                  {cs.client[0]}
                </div>
                <div>
                  <div className="text-[#F4F4F5] font-bold">{cs.client}</div>
                  <div className="text-[#52525B] text-xs">{cs.badge}</div>
                </div>
                <div className="ml-auto w-8 h-8 rounded-lg bg-white/5 border border-white/8 shrink-0" />
              </div>

              {/* Quote */}
              <blockquote className="text-[#A1A1AA] text-base leading-relaxed mb-6 relative z-10">
                &ldquo;{cardQuotes[cs.slug] || cs.tagline}&rdquo;
              </blockquote>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {cs.outcome.stats.slice(0, 3).map((stat, j) => (
                  <div key={j} className="flex flex-col px-3 py-2 rounded-xl bg-white/5 border border-white/8">
                    <span className="text-[#0066FF] font-bold text-lg leading-tight">{stat.value}</span>
                    <span className="text-[#52525B] text-[11px] mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
