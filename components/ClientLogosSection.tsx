"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";

const logos = [
  { src: "/Logos/American-Medical-Wellness-Logo.svg", alt: "American Medical Wellness" },
  { src: "/Logos/American-Wellness-Pharmacy-Logo.png", alt: "American Wellness Pharmacy" },
  { src: "/Logos/Badass Coaching Mike Sommerfeld.png", alt: "Badass Coaching Mike Sommerfeld" },
  { src: "/Logos/BioWell Labs.png", alt: "BioWell Labs" },
  { src: "/Logos/Body Planet Tamer Galal.png", alt: "Body Planet Tamer Galal" },
  { src: "/Logos/Holzapfel neu.png", alt: "Der Holzapfel", invert: true },
  { src: "/Logos/Gannikus neu.png", alt: "Gannikus", invert: true },
  { src: "/Logos/Hoppe Coaching Markus Hoppe.png", alt: "Hoppe Coaching Markus Hoppe" },
  { src: "/Logos/Kanzlei Mandic Dubravko Mandic.png", alt: "Kanzlei Mandic" },
  { src: "/Logos/Maiorano Perfomance 2 George Maiorano.png", alt: "Maiorano Performance George Maiorano" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#09090B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#3385FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Vertrauen
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-3"
          >
            Geschätzt von Marken, die Standards setzen.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Ikonische Persönlichkeiten, Marktführer und Unternehmer mit Format vertrauen auf Spectra Media - wenn Sichtbarkeit messbare Resultate, strategische Tiefe und Umsatzgenerierung bedeuten soll.
          </motion.p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="group relative h-14 w-32 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 hover:bg-white/12 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className={`object-contain p-2.5 transition-all duration-300 grayscale group-hover:grayscale-0 ${"invert" in logo && logo.invert ? "opacity-55 group-hover:opacity-90 invert" : "opacity-55 group-hover:opacity-100"}`}
                sizes="128px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
