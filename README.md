# Spectra Media GmbH – Website

Done-for-You Social Media Growth Agentur Website. Konversionsfokussiert, SEO-optimiert, vollständig animiert.

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 11.x |
| SEO | next-sitemap | 4.x |
| Images | Sharp | 0.34.x |
| Deploy | Vercel (fra1) | – |

## Local Development

```bash
# 1. Clone & install
npm install

# 2. Create env file
cp .env.example .env.local

# 3. Start dev server (port 3035)
npm run dev
```

Open [http://localhost:3035](http://localhost:3035)

## Project Structure

```
spectra-media/
├── app/
│   ├── layout.tsx              ← Root layout (Navbar, Footer, metadata)
│   ├── page.tsx                ← Home
│   ├── HomeClient.tsx          ← Client: System + USPs + Case grid
│   ├── service/page.tsx        ← Leistungen
│   ├── prozess/page.tsx        ← Prozess
│   ├── case-studies/
│   │   ├── page.tsx            ← Index
│   │   └── [slug]/page.tsx     ← Detail (SSG)
│   ├── gruender/page.tsx
│   ├── impressum/page.tsx
│   └── datenschutz/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProofBar.tsx
│   ├── ProblemSection.tsx
│   ├── ProcessTimeline.tsx
│   ├── CaseCard.tsx
│   ├── FAQAccordion.tsx
│   └── CTASection.tsx
├── lib/
│   └── animations.ts           ← Framer Motion variants
├── data/
│   └── content.ts              ← ALLE deutschen Inhalte (single source of truth)
└── public/
    └── og-image.jpg
```

## Content bearbeiten

**Alle Website-Texte** befinden sich in `data/content.ts`. Dies ist die einzige Datei, die für redaktionelle Änderungen bearbeitet werden muss:

- `nav` – Navigation Links & CTA
- `home` – Hero, ProofBar, Problem, System, USPs, FAQ, Bottom-CTA
- `caseStudies` – Alle 4 Case Studies (Slug, Zahlen, Text)
- `service` – Service-Pakete & Add-ons
- `prozess` – Prozess-Schritte
- `gruender` – Über uns

## Deployment (Vercel)

1. GitHub Repo verbinden auf [vercel.com](https://vercel.com)
2. Environment Variables setzen:
   - `SITE_URL` = `https://spectra-media.ch`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = WhatsApp Nummer (ohne +)
   - `NEXT_PUBLIC_BOOKING_URL` = Calendly URL
3. Deploy – Region: `fra1` (Frankfurt/Schweiz) – automatisch via `vercel.json`

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Brand Blue | `#0066FF` | CTAs, Akzente, aktive Zustände |
| Brand Blue Light | `#3385FF` | Hover-Zustände |
| Surface | `#09090B` | Haupthintergrund |
| Surface Raised | `#111113` | Sekundärer Hintergrund |
| Surface Card | `#1C1C1F` | Karten, Panels |
| Ink | `#F4F4F5` | Primärer Text |
| Ink Muted | `#A1A1AA` | Sekundärer Text |
| Ink Faint | `#52525B` | Tertiärer Text |

## Sprache

Inhalte sind auf **Deutsch (DACH)** geschrieben. Kein "ß" – stattdessen "ss". Umlaute (ä/ö/ü) werden korrekt verwendet.
