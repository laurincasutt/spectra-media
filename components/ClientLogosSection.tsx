"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, viewportOnce } from "@/lib/animations";
import { useContent } from "@/hooks/useContent";

// `fx` = extra filter classes for logos that are too dark for the dark background.
// "invert" flips a pure-black mark to white, "brightness-0 invert" forces any
// dark-coloured mark to clean white.
const logos = [
  { src: "/Logos/American-Medical-Wellness-Logo.svg", alt: "American Medical Wellness" },
  { src: "/Logos/American-Wellness-Pharmacy-Logo.png", alt: "American Wellness Pharmacy" },
  { src: "/Logos/Bad Ass Coaching neu.png", alt: "Badass Coaching Mike Sommerfeld" },
  { src: "/Logos/BioWell Labs neu.png", alt: "BioWell Labs" },
  { src: "/Logos/BodyPlanet neu.png", alt: "Body Planet Tamer Galal" },
  { src: "/Logos/Holzapfel neu.png", alt: "Der Holzapfel", fx: "invert" },
  { src: "/Logos/Gannikus neu.png", alt: "Gannikus", fx: "invert" },
  { src: "/Logos/Hoppe neu.png", alt: "Hoppe Coaching Markus Hoppe" },
  { src: "/Logos/Kanzlei Mandic neu.png", alt: "Kanzlei Mandic" },
  { src: "/Logos/Maiorano Perfomance 2 George Maiorano.png", alt: "Maiorano Performance George Maiorano" },
  { src: "/Logos/Dr Sascha Gail.png", alt: "Dr. Sascha Gail" },
  { src: "/Logos/Marc Galal.png", alt: "Marc Galal", fx: "brightness-125" },
  { src: "/Logos/Figurmacher.png", alt: "Figurmacher.de - Andreas Scholz", fx: "brightness-0 invert" },
  { src: "/Logos/Wolanin MD Aesthetics.png", alt: "Wolanin MD Aesthetics", fx: "brightness-0 invert" },
];

// Duplicated once so the track can loop seamlessly at -50%
const marqueeLogos = [...logos, ...logos];

export default function ClientLogosSection() {
  const { ui } = useContent();
  return (
    <section className="py-14 lg:py-20 bg-[#09090B] border-t border-white/5 overflow-hidden">
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
            {ui.clientLogos.badge}
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-3"
          >
            {ui.clientLogos.headline}
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#A1A1AA] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {ui.clientLogos.sub}
          </motion.p>
        </motion.div>
      </div>

      {/* Endless logo banner — runs right to left, full colour, no grid */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="logo-marquee-viewport relative w-full overflow-hidden"
      >
        <div className="logo-marquee-track flex w-max items-center">
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              /* spacing via margin (not gap) so both halves are exactly equal in width */
              className="relative h-16 w-40 mr-12 sm:h-20 sm:w-48 sm:mr-16 lg:h-24 lg:w-56 lg:mr-20 flex-shrink-0"
              aria-hidden={i >= logos.length}
            >
              <Image
                src={logo.src}
                alt={i >= logos.length ? "" : logo.alt}
                fill
                className={`object-contain ${"fx" in logo ? logo.fx : ""}`}
                sizes="224px"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
