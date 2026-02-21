import type { Metadata } from "next";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { prozess, home } from "@/data/content";

export const metadata: Metadata = {
  title: prozess.meta.title,
  description: prozess.meta.description,
};

export default function ProzessPage() {
  return (
    <>
      <ProcessTimeline />
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
