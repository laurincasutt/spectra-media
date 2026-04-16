import type { Metadata } from "next";
import ImpressumClient from "./ImpressumClient";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <ImpressumClient />;
}
