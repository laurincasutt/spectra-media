"use client";

import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { useContent } from "@/hooks/useContent";

export default function ProzessClient() {
  const { home } = useContent();
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
