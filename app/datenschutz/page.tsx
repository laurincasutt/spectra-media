import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy Policy",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
