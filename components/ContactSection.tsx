"use client";

import { motion } from "framer-motion";
import { nav } from "@/data/content";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-Mail",
    value: "hello@spectra-media.ch",
    href: "mailto:hello@spectra-media.ch",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: `+${nav.whatsappNumber}`,
    href: `https://wa.me/${nav.whatsappNumber}?text=${nav.whatsappMessage}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Büro",
    value: "St. Gallen, Schweiz",
    href: "https://maps.app.goo.gl/stgallen",
  },
];

// Mini calendar visual
function CalendarVisual() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr"];
  const slots = [
    { day: 0, time: "10:00", available: true },
    { day: 1, time: "14:00", available: false },
    { day: 2, time: "11:00", available: true },
    { day: 3, time: "09:00", available: true },
    { day: 4, time: "15:00", available: false },
  ];

  return (
    <div className="p-5 rounded-2xl bg-[#1C1C1F] border border-white/8 mt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[#F4F4F5] font-semibold text-sm">Erstgespräch buchen</div>
          <div className="text-[#52525B] text-xs mt-0.5">30 Min · Kostenlos</div>
        </div>
        <div className="w-8 h-8 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/25 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      {/* Day columns */}
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((day, di) => (
          <div key={di} className="flex flex-col gap-1.5 items-center">
            <div className="text-[#52525B] text-[10px] font-medium">{day}</div>
            <motion.div
              className={`w-full py-2 rounded-lg text-[10px] font-medium text-center cursor-pointer transition-all ${
                slots[di].available
                  ? "bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#3385FF] hover:bg-[#0066FF]/25"
                  : "bg-white/4 border border-white/6 text-[#3F3F46]"
              }`}
              whileHover={slots[di].available ? { scale: 1.05 } : {}}
            >
              {slots[di].time}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[#52525B] text-[10px] text-center">Nächste Verfügbarkeit: Morgen, 10:00</div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#09090B] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0066FF]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left: contact info */}
          <motion.div variants={fadeUpVariants}>
            <span className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-sm font-medium mb-4 uppercase tracking-wider">
              Bereit anzufangen?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4 leading-tight">
              Lass uns reden.<br />
              <span className="text-[#52525B]">Kostenlos und unverbindlich.</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
              In 30 Minuten findest du heraus, ob Spectra Media der richtige Partner für dein Social Media Wachstum ist.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeUpVariants}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#111113] border border-white/8 hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#52525B] text-xs mb-0.5">{item.label}</div>
                    <div className="text-[#F4F4F5] text-sm font-medium truncate">{item.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#3F3F46] group-hover:text-[#0066FF] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: booking */}
          <motion.div variants={fadeUpVariants}>
            <div className="p-6 lg:p-8 rounded-2xl bg-[#111113] border border-white/8 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0066FF]/10 rounded-full blur-[50px]" />

              <div className="relative z-10">
                <h3 className="text-[#F4F4F5] font-bold text-xl mb-2">Kostenloses Erstgespräch</h3>
                <p className="text-[#A1A1AA] text-sm mb-1">Wir schauen gemeinsam, ob und wie wir zusammenarbeiten können.</p>
                <div className="flex flex-wrap gap-2 mt-3 mb-2">
                  {["30 Min.", "Video-Call", "Kostenlos", "Unverbindlich"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[#A1A1AA] text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <CalendarVisual />

                <a
                  href={nav.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-[#0066FF] hover:bg-[#3385FF] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 hover:scale-[1.02] active:scale-95"
                >
                  Jetzt Termin buchen
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
