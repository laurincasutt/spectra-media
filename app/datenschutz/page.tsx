import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy Policy",
  robots: { index: false, follow: false },
};

export default async function DatenschutzPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] }>;
}) {
  const { lang } = await searchParams;
  const value = Array.isArray(lang) ? lang[0] : lang;
  const initialLang = value === "en" || value === "de" ? value : undefined;
  return <DatenschutzClient initialLang={initialLang} />;
}
