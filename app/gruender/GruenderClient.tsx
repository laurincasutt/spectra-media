"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { gruender } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const valueEmojis = ["🏆", "🔍", "🎯"];

export default function GruenderClient() {
  return (
    <>
      {/* Hero — left-aligned, big headline + text + image */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/6 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B00]/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.span
                variants={fadeUpVariants}
                className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-6 uppercase tracking-wider"
              >
                Über uns
              </motion.span>
              <motion.h1
                variants={fadeUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-6 leading-tight"
              >
                Die Transformatoren<br />
                <span className="gradient-text">deines Online-Auftritts.</span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                className="text-lg text-[#A1A1AA] leading-relaxed mb-4"
              >
                {gruender.hero.sub}
              </motion.p>
              <motion.p
                variants={fadeUpVariants}
                className="text-base text-[#52525B] leading-relaxed"
              >
                Wir transformieren deine Social Media Präsenz zur Marktführerschaft — mit messbaren Ergebnissen statt leerer Versprechen.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-4 mt-10"
              >
                {[
                  { value: "30+", label: "Brands skaliert" },
                  { value: "41 Mio.", label: "Views in 90 Tagen" },
                  { value: "100%", label: "Organisch" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUpVariants} className="text-center p-3 rounded-xl bg-white/4 border border-white/8">
                    <div className="text-[#0066FF] font-bold text-xl drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">{stat.value}</div>
                    <div className="text-[#52525B] text-xs mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: image placeholder (team/office visual) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#111113] aspect-[4/3]">
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-[#09090B] to-[#FF6B00]/8" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="text-6xl">📱</div>
                  <div className="text-[#A1A1AA] text-sm text-center px-8">
                    Das Spectra Media Team — <br />dein Partner für Social Media Wachstum
                  </div>
                  <div className="flex gap-2">
                    {["🇨🇭", "📊", "🚀"].map((e, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {e}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-[#0066FF] text-white text-sm font-semibold shadow-xl shadow-[#0066FF]/30"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🇨🇭 Swiss Quality
              </motion.div>
            </motion.div>
          </div>
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
            className="space-y-5"
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
      <section className="py-16 lg:py-24 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default"
                >
                  {/* Blue corner glow */}
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/60 to-transparent group-hover:w-full transition-all duration-500" />

                  {/* Emoji icon */}
                  <div className="text-3xl mb-4 relative z-10">
                    {valueEmojis[i]}
                  </div>
                  <h3 className="text-[#F4F4F5] font-bold text-lg mb-3 relative z-10 leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
