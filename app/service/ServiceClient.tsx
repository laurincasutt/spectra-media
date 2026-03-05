"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import { service, home } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const outcomeCards = [
  {
    number: "01",
    title: "Mit Autorität verändert sich alles, auch was du verlangen kannst.",
    desc: "Premium-Positionierung durch Sichtbarkeit: Kunden zahlen mehr, hinterfragen weniger.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Deals werden schneller geclosed.",
    desc: "Wer dich kennt, vertraut dir bereits. Social Proof beschleunigt jeden Abschluss.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wer sich bei dir meldet.",
    desc: "Inbound statt Outbound - die richtigen Kunden kommen auf dich zu, nicht umgekehrt.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Wie dein Markt dich wahrnimmt.",
    desc: "Von Anbieter zur Autorität. Dein Name steht für die Kategorie - nicht nur für ein Angebot.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ServiceClient() {
  const { system } = home;

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

      {/* Advantages — Wie unsere Kunden ganze Märkte dominieren */}
      <AdvantagesSection />

      {/* Resultat Section */}
      <section className="py-16 lg:py-24 bg-[#111113] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider"
            >
              Das Resultat
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]"
            >
              Wenn dein Marketing endlich funktioniert.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {outcomeCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-7 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-[#0066FF] font-bold text-5xl font-mono opacity-15 absolute top-5 right-6 select-none">
                  {card.number}
                </div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] mb-4 relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-[#F4F4F5] font-bold text-xl mb-2 relative z-10">{card.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

          {/* Step connector — desktop only */}
          <div className="hidden lg:block mb-8">
            <div className="flex items-center justify-between gap-0">
              <div className="flex items-center flex-1">
                {["01","02","03"].map((n, i) => (
                  <div key={n} className="flex items-center flex-1 last:flex-none">
                    <div className="w-7 h-7 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#3385FF] text-xs font-bold shrink-0">
                      {n}
                    </div>
                    {i < 2 && <div className="flex-1 h-px bg-[#0066FF]/25 mx-1" />}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-end mx-1" style={{ height: 28 }}>
                <div className="w-px bg-[#0066FF]/25" style={{ height: "100%" }} />
              </div>
              <div className="flex items-center flex-1">
                {["06","05","04"].map((n, i) => (
                  <div key={n} className="flex items-center flex-1 last:flex-none">
                    <div className="w-7 h-7 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#3385FF] text-xs font-bold shrink-0">
                      {n}
                    </div>
                    {i < 2 && <div className="flex-1 h-px bg-[#0066FF]/25 mx-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="relative p-6 lg:p-8 rounded-2xl bg-[#1C1C1F] border border-white/8 overflow-hidden group cursor-default"
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#0066FF]/12 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0066FF]/60 to-transparent group-hover:w-full transition-all duration-500" />
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-bold text-sm mb-5 relative z-10">
                  {item.number}
                </div>
                <h3 className="text-[#F4F4F5] font-bold text-lg mb-3 relative z-10">{item.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">{item.desc}</p>
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
