import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies – Echte Resultate",
  description:
    "41 Mio. Views in 90 Tagen, 15k → 75k+ Follower, 0 → 18k in 8 Wochen. Echte Resultate von echten Kunden. Spectra Media Case Studies.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
