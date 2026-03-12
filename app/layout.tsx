import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL || "https://spectra-media.ch"
  ),
  title: {
    default: "Spectra Media GmbH – Done-for-You Social Media Growth",
    template: "%s | Spectra Media GmbH",
  },
  description:
    "Spectra Media ist deine Done-for-You Social Media Agentur aus der Schweiz. Wir übernehmen Strategie, Skripte, Editing, Upload und Community Management – du filmst, wir liefern die Resultate.",
  keywords: [
    "Social Media Agentur Schweiz",
    "Done-for-You Social Media",
    "Instagram Wachstum",
    "Social Media Marketing DACH",
    "Content Agentur",
    "Spectra Media",
  ],
  authors: [{ name: "Spectra Media GmbH" }],
  creator: "Spectra Media GmbH",
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Spectra Media GmbH",
    title: "Spectra Media GmbH – Done-for-You Social Media Growth",
    description:
      "Du filmst. Wir liefern die Resultate. Deine Done-for-You Social Media Agentur aus der Schweiz.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectra Media GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectra Media GmbH – Done-for-You Social Media Growth",
    description:
      "Du filmst. Wir liefern die Resultate. Deine Done-for-You Social Media Agentur aus der Schweiz.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased bg-[#09090B] text-[#F4F4F5]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
