import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/content";
import CaseStudyClient from "./CaseStudyClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  return {
    title: `${cs.client} – ${cs.tagline}`,
    description: `${cs.heroStat} ${cs.heroStatLabel} – Erfahre wie Spectra Media für ${cs.client} in der ${cs.industry} Nische aussergewöhnliche Resultate erzielt hat.`,
    openGraph: {
      title: `${cs.client} – ${cs.heroStat} ${cs.heroStatLabel}`,
      description: cs.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const otherCaseSlugs = caseStudies.filter((c) => c.slug !== slug).slice(0, 3).map((c) => c.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.tagline,
    description: `${cs.heroStat} ${cs.heroStatLabel} für ${cs.client}`,
    author: {
      "@type": "Organization",
      name: "Spectra Media GmbH",
    },
    publisher: {
      "@type": "Organization",
      name: "Spectra Media GmbH",
      url: "https://spectra-media.ch",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseStudyClient
        slug={slug}
        otherCaseSlugs={otherCaseSlugs}
      />
    </>
  );
}
