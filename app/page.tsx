import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ContactSection from "@/components/ContactSection";
import FAQAccordion from "@/components/FAQAccordion";
import HomeClient from "./HomeClient";
import { home } from "@/data/content";

export const metadata: Metadata = {
  title: "Spectra Media GmbH – Done-for-You Social Media Growth",
  description:
    "Du filmst 1–2x pro Woche. Wir übernehmen Strategie, Skripte, Editing, Upload und Community Management. 41 Mio. Views in 90 Tagen. Jetzt Gespräch buchen.",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spectra Media GmbH",
  url: "https://spectra-media.ch",
  logo: "https://spectra-media.ch/og-image.jpg",
  description:
    "Done-for-You Social Media Agentur aus der Schweiz. Strategie, Skripte, Editing, Upload und Community Management.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
    addressLocality: "St. Gallen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: home.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <ProofBar />
      <HomeClient />
      <ContactSection />
      <FAQAccordion />
    </>
  );
}
