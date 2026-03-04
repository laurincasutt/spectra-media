export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  badge: string;
  tagline: string;
  heroStat: string;
  heroStatLabel: string;
  challenge: string;
  approach: string[];
  outcome: {
    stats: { value: string; label: string }[];
    summary: string;
  };
  quote?: { text: string; author: string };
}

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────
export const nav = {
  logo: "Spectra Media",
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
    { label: "Prozess", href: "/prozess" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Über uns", href: "/gruender" },
  ],
  ctaText: "Erstgespräch buchen",
  ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
  whatsappNumber: "41791234567",
  whatsappMessage: "Hallo%2C%20ich%20interessiere%20mich%20fuer%20Spectra%20Media.",
};

// ─────────────────────────────────────────────
// Home Page
// ─────────────────────────────────────────────
export const home = {
  hero: {
    eyebrow: "Done-for-You Social Media Growth",
    headlineLines: ["Vom Mitläufer", "zum Marktführer."],
    gradientLineIndex: 1,
    sub: "We turn overlooked businesses and personal brands into standout names.",
    sub2: "Spectra Media ist darauf spezialisiert, durchschnittliche Instagram-Accounts in herausragende Personal Brands zu verwandeln — die nicht nur die richtigen Follower anziehen, sondern sie in loyale Kunden verwandeln.",
    cta: "Erstgespräch buchen",
    ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
    secondaryCta: "Case Studies ansehen",
    secondaryCtaUrl: "/case-studies",
  },

  proofStats: [
    { value: "2 Mrd+", label: "Klicks generiert", sub: "" },
    { value: "1 Mio+", label: "Follower gegrowt", sub: "" },
    { value: "2.000+", label: "Kunden generiert", sub: "" },
    { value: "30+", label: "Brands skaliert", sub: "" },
  ],

  problem: {
    eyebrow: "Das Problem",
    headline: "Du hast das Wissen. Aber kein System.",
    sub: "Social Media scheitert nicht am Inhalt. Es scheitert am fehlenden Prozess dahinter.",
    frictions: [
      {
        icon: "⏰",
        title: "Keine Zeit",
        desc: "Du weisst, dass Social Media wichtig ist. Zwischen Business und Privatleben bleibt kein Raum für konsistenten Content.",
      },
      {
        icon: "🔄",
        title: "Kein System",
        desc: "Kein Redaktionsplan. Keine klare Strategie. Du postest wenn du kannst — nicht wenn der Algorithmus es belohnt.",
      },
      {
        icon: "📉",
        title: "Kein ROI",
        desc: "Du investierst Zeit und Geld. Aber Follower wachsen nicht. Kunden kommen nicht über Social Media. Kein messbares Ergebnis.",
      },
    ],
  },

  system: {
    eyebrow: "Unser System",
    headline: "Du fokussierst dich auf deine Stärken, wir machen den Rest.",
    sub: "Du gibst uns 1–2 Drehtage pro Woche. Wir liefern dir alles andere.",
    deliverables: [
      {
        number: "01",
        title: "Content-Strategie & Research",
        desc: "Wir analysieren deine Nische, Konkurrenz und Zielgruppe. Daraus entsteht eine Strategie, die auf Wachstum ausgelegt ist.",
      },
      {
        number: "02",
        title: "Skript & Hook-Entwicklung",
        desc: "Jedes Video bekommt ein maßgeschneidertes Skript mit starkem Hook. Voice-Matching statt generischer Agency-Sprache.",
      },
      {
        number: "03",
        title: "Professionelles Editing",
        desc: "Schnell, auf den Punkt, plattformgerecht. Wir schneiden deine Rohaufnahmen zu viralen Short-Form Clips.",
      },
      {
        number: "04",
        title: "Upload & Community Management",
        desc: "Wir übernehmen den kompletten Upload-Prozess und managen deine Community – Kommentare, DMs, Engagement.",
      },
      {
        number: "05",
        title: "Funnel & Conversion",
        desc: "Reichweite allein reicht nicht. Wir bauen Systeme, die Follower zu Kunden machen.",
      },
      {
        number: "06",
        title: "Angebot & Conversion-Optimierung",
        desc: "Wir optimieren dein Angebot, deine Preisstruktur und deine Calls-to-Action – damit Reichweite zu echten Kunden wird.",
      },
    ],
  },

  usps: [
    {
      title: "One strategy. One team. One direction.",
      desc: "Kein Chaos, kein Ping-Pong zwischen Agenturen. Du hast einen Ansprechpartner für alles.",
    },
    {
      title: "100% Organic. Keine Bots. Keine Abkürzungen.",
      desc: "Nachhaltiges Wachstum durch echten Content und echte Community.",
    },
    {
      title: "Voice-Matching statt Agency-Scripts.",
      desc: "Deine Stimme, dein Stil. Wir schreiben Skripte, die klingen als hättest du sie selbst geschrieben.",
    },
    {
      title: "Overdelivery & Rapid Response.",
      desc: "Wir liefern mehr als vereinbart. Immer. Und wir sind schnell erreichbar wenn du uns brauchst.",
    },
    {
      title: "Selective Partnerships.",
      desc: "Wir arbeiten nur mit Kunden, bei denen wir wirklich Resultate erzielen können. Qualität vor Quantität.",
    },
  ],

  faq: {
    eyebrow: "FAQ",
    headline: "Häufige Fragen",
    items: [
      {
        question: "Wie viel Zeit muss ich selbst investieren?",
        answer:
          "Unser Service ist genau dazu da, damit du möglichst zeiteffizient die besten Resultate erhältst. Alles, was von deiner Seite gebraucht wird, sind 1–2 Stunden Recordings pro Woche, in denen du Videos für uns abdrehst. Den ganzen Rest übernehmen wir: Strategie, Skripte, Editing, Upload und Community Management. Du fokussierst dich auf deine Stärken — wir machen den Rest.",
      },
      {
        question: "Wie schnell sehe ich erste Ergebnisse?",
        answer:
          "Die ersten Ergebnisse sind meist innerhalb der ersten 4–6 Wochen sichtbar. Nachhaltiges, starkes Wachstum entsteht über 3–6 Monate. Unsere Case Studies zeigen: Tamer Galal erzielte 41 Mio. Views in 90 Tagen.",
      },
      {
        question: "Für welche Branchen arbeitet ihr?",
        answer:
          "Wir spezialisieren uns auf Coaches, Trainer, Berater, Anwälte, Ärzte und Unternehmer, die ihr Wissen und ihre Expertise über Social Media sichtbar machen wollen. Ideal wenn du bereits offline erfolgreich bist.",
      },
      {
        question: "Was ist inklusive – was kostet extra?",
        answer:
          "Im Paket inbegriffen: Strategie, Research, Skripte, Editing (bis zu 20 Clips/Monat), Upload, Hashtag-Optimierung, Community Management und monatliche Reporting-Calls. Ads-Budget und externe Tools werden separat verrechnet.",
      },
      {
        question: "Arbeitet ihr nur mit Instagram oder auch anderen Plattformen?",
        answer:
          "Unser Fokus liegt auf Instagram und TikTok. Auf Wunsch erweitern wir auf YouTube Shorts, LinkedIn und weitere Plattformen. Wir empfehlen, mit 1–2 Plattformen zu starten und dann zu skalieren.",
      },
      {
        question: "Wie läuft der Einstieg ab?",
        answer:
          "1. Einführungscall (kostenlos, 30 Min.) – Wir schauen ob es passt. 2. Onboarding & Strategie-Workshop (1 Woche). 3. Erste Content-Produktion startet. 4. Kontinuierliche Optimierung und Skalierung.",
      },
    ],
  },

  heroTestimonial: {
    quote: "Spectra Media hat nicht nur meinen Account aufgebaut – sie haben mein Business transformiert.",
    author: "Tamer Galal",
    role: "Fitness Coach",
  },

  howItWorks: {
    eyebrow: "Unser Prozess",
    headline: "So funktioniert es",
    steps: [
      {
        number: "01",
        title: "Strategie & Briefing",
        desc: "Wir analysieren deine Nische und Zielgruppe und entwickeln eine maßgeschneiderte Content-Strategie.",
      },
      {
        number: "02",
        title: "Produktion & Editing",
        desc: "Du nimmst auf — wir schreiben Skripte, schneiden und optimieren alles für maximale Reichweite.",
      },
      {
        number: "03",
        title: "Upload & Skalierung",
        desc: "Wir übernehmen Upload, Community Management und skalieren was funktioniert — laufend.",
      },
    ],
  },

  testimonials: [
    {
      quote: "Spectra Media hat nicht nur meinen Social Media Account aufgebaut – sie haben mein Business transformiert. Die Anfragen kommen jetzt zu mir.",
      author: "Tamer Galal",
      role: "Fitness Coach",
    },
    {
      quote: "Wir haben nicht erwartet, dass Social Media so direkt auf unser Geschäft einzahlt. Spectra Media hat das möglich gemacht.",
      author: "Kanzlei Mandic",
      role: "Anwaltskanzlei",
    },
    {
      quote: "Ich hatte erwartet, vielleicht 3.000 Follower in 6 Wochen zu erreichen. Spectra Media hat das Dreifache geliefert.",
      author: "George Maiorano",
      role: "Health Entrepreneur",
    },
    {
      quote: "Mit dem richtigen System wuchs ich in 3 Monaten schneller als in den vorherigen 2 Jahren zusammen.",
      author: "Markus Hoppe",
      role: "Fitness & Lifestyle",
    },
  ],

  bottomCta: {
    eyebrow: "Bereit anzufangen?",
    headline: "Lass uns reden. Kostenlos und unverbindlich.",
    sub: "In 30 Minuten findest du heraus, ob Spectra Media der richtige Partner für dein Social Media Wachstum ist.",
    cta: "Erstgespräch buchen",
    ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
  },
};

// ─────────────────────────────────────────────
// Case Studies
// ─────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    slug: "tamer-galal",
    client: "Tamer Galal",
    industry: "Fitness",
    badge: "Fitness & Coaching",
    tagline: "Von 0 auf 41 Millionen Views in 90 Tagen",
    heroStat: "41 Mio.",
    heroStatLabel: "Views in 90 Tagen",
    challenge:
      "Tamer Galal war bereits eine Legende im deutschsprachigen Fitnessbereich — doch seine Offline-Präsenz stimmte nicht mit seinem Online-Auftritt überein. Obwohl er seit über 30 Jahren eine führende Persönlichkeit war, hatte er den digitalen Wandel verpasst und dadurch einen grossen Nachteil erlitten. Er hatte weder die Zeit noch das Know-how, um konsistenten Content zu produzieren, der ihn als Experten darstellt und ihm seine Bühne zurückbringt. Bisherige Versuche brachten keine messbaren Ergebnisse. Wir halfen ihm, sein Wissen und seine Kompetenz so zu präsentieren, dass die Leute verstehen, was ihn besonders macht — und seinen Legendenstatus auch in der heutigen Zeit hervorheben.",
    approach: [
      "Plattform-Analyse: Identifikation von TikTok und Instagram Reels als primäre Wachstumskanäle",
      "Hook-Strategie: Entwicklung von 3–5 verschiedenen Hook-Formaten und kontinuierliches A/B-Testing",
      "Content-Kalender: 5 Clips pro Woche, strukturiert nach Wochentag und Content-Typ",
      "Trend-Exploitation: Schnelle Reaktion auf virale Trends in der Fitness-Nische",
      "Community Building: Aktives Engagement, Umfragen und Creator-Kollaborationen",
    ],
    outcome: {
      stats: [
        { value: "41 Mio.", label: "Views in 90 Tagen" },
        { value: "+47k", label: "Neue Follower" },
        { value: "3.2%", label: "Engagement Rate" },
        { value: "12", label: "Virale Videos (>500k Views)" },
      ],
      summary:
        "In nur 90 Tagen entwickelte sich Tamer Galal von einem lokalen Trainer zu einer anerkannten Online-Persönlichkeit in der DACH-Fitness-Szene. Die viralen Videos führten zu einer 4-fachen Steigerung der Anfragen für sein Coaching-Programm.",
    },
    quote: {
      text: "Spectra Media hat nicht nur meinen Social Media Account aufgebaut – sie haben mein Business transformiert. Die Anfragen kommen jetzt zu mir, nicht umgekehrt.",
      author: "Tamer Galal, Fitness Coach",
    },
  },
  {
    slug: "kanzlei-mandic",
    client: "Kanzlei Mandic",
    industry: "Legal",
    badge: "Rechtsberatung",
    tagline: "Von 19.000 auf 50.000+ Follower in 4 Monaten",
    heroStat: "19k → 50k+",
    heroStatLabel: "Follower Wachstum",
    challenge:
      "Kanzlei Mandic wollte Rechtsberatung zugänglich und verständlich für die Allgemeinheit machen. Ihr Ziel: Vertrauen aufbauen und qualifizierte Mandanten über Social Media gewinnen. Dies versuchten sie über die letzten Jahre — leider ohne nachhaltigen Erfolg. Die Herausforderung: Juristische Inhalte müssen präzise sein, aber gleichzeitig so aufbereitet, dass sie auf Social Media ankommen und performen. Wir entwickelten eine Strategie, die Mandics Werte und Persönlichkeit einfängt — hilfreiches Wissen so vermittelt, dass man nicht genug davon bekommt, weil es nicht nur informiert, sondern auch unterhält.",
    approach: [
      "Edutainment-Format: Komplexe Rechtsfragen in verständliche, kurzweilige Videos umwandeln",
      "Nischen-Fokus: Konzentration auf Mietrecht, Arbeitsrecht und Vertragsrecht als Top-Suchthemen",
      "Trust-Building: Fallbeispiele und FAQ-Videos, die echte Probleme lösen",
      "Call-to-Action Optimierung: Jedes Video führte gezielt zur Erstberatung",
      "Cross-Plattform: Instagram als Hauptkanal, LinkedIn für B2B-Zielgruppe",
    ],
    outcome: {
      stats: [
        { value: "50k+", label: "Follower (von 19k)" },
        { value: "+163%", label: "Follower-Wachstum" },
        { value: "4 Monate", label: "Zeitraum" },
        { value: "+85%", label: "Mehr Mandantenanfragen" },
      ],
      summary:
        "Kanzlei Mandic etablierte sich als führende Stimme für Rechtsfragen im deutschsprachigen Raum. Das Wachstum von 19k auf über 50k Follower führte zu einem signifikanten Anstieg qualifizierter Mandantenanfragen.",
    },
    quote: {
      text: "Wir haben nicht erwartet, dass Social Media so direkt auf unser Geschäft einzahlt. Spectra Media hat das möglich gemacht.",
      author: "Kanzlei Mandic, Anwaltskanzlei",
    },
  },
  {
    slug: "markus-hoppe",
    client: "Markus Hoppe",
    industry: "Fitness",
    badge: "Fitness & Lifestyle",
    tagline: "Systematisches Wachstum mit konsistentem Content",
    heroStat: "+38k",
    heroStatLabel: "Neue Follower in 3 Monaten",
    challenge:
      "Markus Hoppe war bereits ein etablierter Coach im deutschsprachigen Raum mit rund 30.000 Followern. Doch das Wachstum stagnierte — er kam nicht mehr über dieses Plateau hinaus. Posts kamen unregelmässig, der Content-Mix war unklar und die Engagement-Rate sank kontinuierlich. Er brauchte kein weiteres Experiment — sondern ein System. Wir führten eine klare Struktur ein, die all diese Probleme löst und auf langfristigen, messbaren Erfolg ausgerichtet ist.",
    approach: [
      "Content-Audit: Analyse der bisherigen Posts und Identifikation der Top-Performer",
      "Pillars-Framework: Drei klare Content-Säulen für konsistente Positionierung",
      "Posting-Frequenz: 6x pro Woche, systematisch geplant und termingerecht geliefert",
      "Reels-Fokus: Shift von statischen Posts zu Video-first Strategie",
      "Storytelling: Persönliche Geschichten und Transformation als Wachstumstreiber",
    ],
    outcome: {
      stats: [
        { value: "+38k", label: "Neue Follower" },
        { value: "6x", label: "Posting-Frequenz pro Woche" },
        { value: "+210%", label: "Reichweiten-Steigerung" },
        { value: "4.1%", label: "Engagement Rate" },
      ],
      summary:
        "Mit einem klaren System und konsistentem Output wuchs Markus Hoppe in 3 Monaten schneller als in den vorherigen 2 Jahren zusammen. Der Schlüssel: Konsequenz schlägt Kreativität.",
    },
  },
  {
    slug: "george-maiorano",
    client: "George Maiorano",
    industry: "Health / Peptides",
    badge: "Health & Wellness",
    tagline: "Von 0 auf 10.000 Follower in 6 Wochen",
    heroStat: "0 → 10k",
    heroStatLabel: "Follower in 6 Wochen",
    challenge:
      "Mit George Maiorano stand die Aufgabe, einen Account komplett von null aufzubauen. Fokus: Biohacking, Peptide und Longevity — eine Nische mit hohem Erklärungsbedarf, die tiefes Vertrauen voraussetzt. Die Herausforderung war, schnell Sichtbarkeit aufzubauen und gleichzeitig eine Community zu formen, die rund um erklärungsbedürftige Produkte entsteht und wächst. Wir entwickelten eine Strategie, die wissenschaftliche Inhalte zugänglich macht — und aus einem leeren Profil in wenigen Wochen eine relevante Stimme in der Nische machte.",
    approach: [
      "Account-Aufbau von Grund auf: Profil-Optimierung, Bio, Highlights",
      "Edu-Content-Strategie: Wissenschaftliche Inhalte einfach und visuell aufbereiten",
      "Trend-Surfing: Biohacking und Longevity als wachsende Nischen gezielt nutzen",
      "Viral-Seeding: Gezielte erste Clips mit hohem Share-Potential",
      "Community-First: Frühe Follower aktiv einbinden und zu Ambassadors machen",
    ],
    outcome: {
      stats: [
        { value: "10k", label: "Follower in 6 Wochen" },
        { value: "0", label: "Ausgangspunkt" },
        { value: "6 Wochen", label: "Zeitraum" },
        { value: "+300%", label: "Over-Delivery vs. Ziel" },
      ],
      summary:
        "George Maiorano erreichte in 6 Wochen das, wofür andere Monate brauchen. Der Schlüssel: Die richtige Nische, die richtige Strategie und konsequente Umsetzung von Tag eins.",
    },
    quote: {
      text: "Ich hatte erwartet, vielleicht 3.000 Follower in 6 Wochen zu erreichen. Spectra Media hat das Dreifache geliefert.",
      author: "George Maiorano, Health Entrepreneur",
    },
  },
];

// ─────────────────────────────────────────────
// Service Page
// ─────────────────────────────────────────────
export const service = {
  meta: {
    title: "Leistungen – Done-for-You Social Media",
    description:
      "Von Strategie über Skripte bis zum Upload: Spectra Media übernimmt deinen gesamten Social Media Prozess. 100% organisch, keine Bots.",
  },
  hero: {
    eyebrow: "Unsere Leistungen",
    headline: "Alles was du brauchst. Nichts was du nicht brauchst.",
    sub: "Ein vollständiges Done-for-You System für organisches Social Media Wachstum.",
  },
  packages: [
    {
      name: "Starter",
      tagline: "Für den Einstieg",
      features: [
        "Strategie & Content-Plan",
        "10 Clips pro Monat (Editing)",
        "Upload & Scheduling",
        "Monatlicher Reporting-Call",
      ],
      cta: "Gespräch buchen",
    },
    {
      name: "Growth",
      tagline: "Unser meistgewähltes Paket",
      highlight: true,
      features: [
        "Strategie & Research (laufend)",
        "20 Clips pro Monat (Editing)",
        "Skript-Entwicklung (alle Videos)",
        "Upload & Hashtag-Optimierung",
        "Community Management (Kommentare + DMs)",
        "Bi-weekly Strategy Calls",
      ],
      cta: "Gespräch buchen",
    },
    {
      name: "Scale",
      tagline: "Für maximales Wachstum",
      features: [
        "Alles aus Growth",
        "30+ Clips pro Monat",
        "Multi-Plattform (IG, TikTok, YT Shorts)",
        "Funnel & Lead-Magnet Strategie",
        "Wöchentliche Strategy Calls",
        "Priority Support",
      ],
      cta: "Gespräch buchen",
    },
  ],
  addons: [
    "LinkedIn-Management",
    "YouTube Long-Form Editing",
    "Ad Creative Produktion",
    "Newsletter-Integration",
  ],
};

// ─────────────────────────────────────────────
// Prozess Page
// ─────────────────────────────────────────────
export const prozess = {
  meta: {
    title: "Unser Prozess – Wie wir arbeiten",
    description:
      "Transparenz ist uns wichtig. Hier erfährst du genau wie die Zusammenarbeit mit Spectra Media abläuft – von Schritt 1 bis zum ersten viral gehenden Clip.",
  },
  hero: {
    eyebrow: "Unser Prozess",
    headline: "Klar. Strukturiert. Ergebnisorientiert.",
    sub: "Du weisst immer was als nächstes passiert. Kein Rätselraten, kein Chaos.",
  },
  steps: [
    {
      number: "01",
      title: "Einführungscall & Strategie-Briefing",
      duration: "Woche 1",
      desc: "Wir lernen dich kennen: Deine Ziele, deine Zielgruppe, deine Positionierung. Daraus entwickeln wir eine massgeschneiderte Strategie – keine Vorlagen, kein Copy-Paste.",
    },
    {
      number: "02",
      title: "Onboarding & Setup",
      duration: "Woche 1–2",
      desc: "Account-Audit, Profil-Optimierung, Zugangs-Setup. Wir legen das Fundament: Highlight-Cover, Bio-Optimierung, Link-in-Bio-Funnel.",
    },
    {
      number: "03",
      title: "Content-Produktion & Erste Clips",
      duration: "Ab Woche 2",
      desc: "Skripte werden geschrieben, du nimmst auf. Wir schneiden, optimieren und bereiten alles für den Upload vor. Der erste Clip geht innerhalb von 2 Wochen live.",
    },
    {
      number: "04",
      title: "Continuous Optimization",
      duration: "Laufend",
      desc: "Jede Woche analysieren wir die Performance. Was funktioniert, wird skaliert. Was nicht, wird angepasst. Datengetriebene Entscheidungen statt Bauchgefühl.",
    },
    {
      number: "05",
      title: "Skalierung & Expansion",
      duration: "Ab Monat 2–3",
      desc: "Sobald die ersten Ergebnisse da sind, skalieren wir: mehr Clips, neue Formate, neue Plattformen. Wir wachsen mit dir.",
    },
  ],
  principles: [
    {
      title: "Transparenz",
      desc: "Du hast jederzeit Einsicht in alle Metriken, Pläne und Fortschritte. Kein Blackbox-Marketing.",
    },
    {
      title: "Partnerschaft",
      desc: "Wir denken wie Mitgründer, nicht wie Dienstleister. Dein Wachstum ist unser Erfolg.",
    },
    {
      title: "Geschwindigkeit",
      desc: "Rapid Response. Keine langen Wartezeiten. Wenn etwas passiert, reagieren wir sofort.",
    },
  ],
};

// ─────────────────────────────────────────────
// Gründer Page
// ─────────────────────────────────────────────
export const gruender = {
  meta: {
    title: "Über den Gründer – Spectra Media GmbH",
    description:
      "Wer steckt hinter Spectra Media? Lerne den Gründer kennen und verstehe warum wir anders arbeiten als andere Agenturen.",
  },
  hero: {
    eyebrow: "Über uns",
    headline: "Wir glauben daran, dass jeder mit dem richtigen System online wachsen kann.",
    sub: "Spectra Media wurde gegründet, weil wir selbst erlebt haben, wie frustrierend Social Media ohne System ist – und wie mächtig es mit einem wird.",
  },
  story: [
    "Spectra Media entstand aus einer einfachen Beobachtung: Unglaublich talentierte Menschen und Unternehmen scheitern auf Social Media – nicht wegen mangelndem Wissen, sondern wegen fehlendem System.",
    "Als Agentur aus der Schweiz verstehen wir den DACH-Markt, den Anspruch an Qualität und die Bedeutung von Vertrauen. Wir arbeiten ausschliesslich mit Kunden zusammen, bei denen wir überzeugt sind, dass wir echte Resultate liefern können.",
    "Unser Team kombiniert Content-Strategie, Datenanalyse und kreatives Handwerk. Wir hören nicht auf zu optimieren bis die Zahlen stimmen.",
  ],
  values: [
    {
      title: "Ergebnis über Aktivität",
      desc: "Wir messen uns an Resultaten, nicht an Arbeitsaufwand. Follower-Wachstum, Reichweite, Anfragen – das zählt.",
    },
    {
      title: "Vertrauen durch Transparenz",
      desc: "Keine versteckten Methoden, keine aufgeblähten Zahlen. Du weisst immer genau was wir tun und warum.",
    },
    {
      title: "Selektiv und fokussiert",
      desc: "Wir nehmen nicht jeden Kunden an. Lieber wenige Partnerschaften, bei denen wir wirklich den Unterschied machen.",
    },
  ],
  cta: {
    headline: "Bereit für das Gespräch?",
    sub: "Lass uns in 30 Minuten herausfinden, ob und wie wir zusammenarbeiten können.",
    cta: "Call buchen",
    ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
  },
};
