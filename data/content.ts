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
  profileImg?: string;
  profileImgContain?: boolean;
  brandLogoImg?: string;
  screenshots?: string[];
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
  whatsappNumber: "41795371839",
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
    sub: "Spectra Media GmbH ist darauf spezialisiert, übersehbare Instagram-Accounts in herausragende Personal Brands und Business Pages zu transformieren, die nicht nur die richtigen Follower anziehen, sondern sie in loyale Kunden konvertieren.",
    sub2: "",
    cta: "Erstgespräch buchen",
    ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
    secondaryCta: "Case Studies ansehen",
    secondaryCtaUrl: "/case-studies",
  },

  proofStats: [
    { value: "2 Mrd+", label: "Views generiert", sub: "" },
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
        desc: "Kein Redaktionsplan. Keine klare Strategie. Du postest wenn du kannst - nicht wenn der Algorithmus es belohnt.",
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
    sub: "Wir bauen die Marke, du skalierst dein Business.",
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
          "Unser Service ist genau dazu da, damit du möglichst zeiteffizient die besten Resultate erhältst. Alles, was von deiner Seite gebraucht wird, sind 1–2 Stunden Recordings pro Woche, in denen du Videos für uns abdrehst. Den ganzen Rest übernehmen wir: Strategie, Skripte, Editing, Upload und Community Management. Du fokussierst dich auf deine Kernkompetenzen. Wir machen den Rest.",
      },
      {
        question: "Wie schnell sehe ich erste Ergebnisse?",
        answer:
          "Die ersten Ergebnisse sind meist innerhalb der ersten 4–6 Wochen sichtbar. Nachhaltiges, starkes Wachstum entsteht über 3–6 Monate. Für Tamer Galal erzielten wir über 41 Millionen Views auf allen Plattformen in nur 90 Tagen.",
      },
      {
        question: "Für welche Branchen arbeitet ihr?",
        answer:
          "Wir spezialisieren uns auf Persönlichkeiten und Unternehmer, die ihre Personal Brand auf das nächste Level bringen wollen. Branchenübergreifend - ob Coaches, Trainer, Berater, Anwälte, Ärzte, Unternehmer oder Sportler, die ihr Wissen und ihre Expertise über Social Media sichtbar machen wollen. Ideal, wenn du bereits offline erfolgreich bist.",
      },
      {
        question: "Arbeitet ihr nur mit Instagram oder auch anderen Plattformen?",
        answer:
          "Unser Fokus liegt auf Instagram, TikTok und YouTube. Auf Wunsch erweitern wir auf YouTube Longform, LinkedIn und weiteren Plattformen. Wir empfehlen, von Beginn an so viele Plattformen wie sinnvoll zu bespielen, um Reichweite zu maximieren und Content maximal zu skalieren.",
      },
      {
        question: "Wie läuft der Einstieg ab?",
        answer:
          "1. Discovery Call (kostenlos) - wir schauen ob es passt und welche Möglichkeiten es gibt. 2. Entwicklung von Content-Strategie und Brandmap, präsentiert in einem Angebots-Call. 3. Vertragsabschluss. 4. Onboarding Call. 5. Content Production Start. 6. Kontinuierliche Optimierung und Skalierung.",
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
        desc: "Du nimmst auf - wir schreiben Skripte, schneiden und optimieren alles für maximale Reichweite.",
      },
      {
        number: "03",
        title: "Upload & Skalierung",
        desc: "Wir übernehmen Upload, Community Management und skalieren was funktioniert - laufend.",
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
    profileImg: "/Kundenbilder/Tamer Galal neu.png",
    brandLogoImg: "/Logos/Body Planet Tamer Galal.png",
    industry: "Fitness",
    badge: "Fitness & Coaching",
    tagline: "128.000 neue Follower in den ersten 90 Tagen",
    heroStat: "128k+",
    heroStatLabel: "Neue Follower in 90 Tagen",
    challenge:
      "Tamer Galal war bereits eine Legende im deutschsprachigen Fitnessbereich - doch seine Offline-Präsenz stimmte nicht mit seinem Online-Auftritt überein. Obwohl er seit über 30 Jahren eine führende Persönlichkeit war, hatte er den digitalen Wandel verpasst und dadurch einen grossen Nachteil erlitten. Er hatte weder die Zeit noch das Know-how, um konsistenten Content zu produzieren, der ihn als Experten darstellt und ihm seine Bühne zurückbringt. Bisherige Versuche brachten keine messbaren Ergebnisse. Wir halfen ihm, sein Wissen und seine Kompetenz so zu präsentieren, dass die Leute verstehen, was ihn besonders macht - und seinen Legendenstatus auch in der heutigen Zeit hervorheben.",
    approach: [
      "Positionierung der Marke - Bevor Content produziert wurde, haben wir Tamers jahrzehntelange Erfahrung klar positioniert. Der Fokus: nicht nur der Fitnesscoach, sondern die erfahrene Stimme im deutschsprachigen Bodybuilding.",
      "Übersetzung seiner Expertise in Content - Tamers Wissen aus über 30 Jahren Training, Coaching und Wettkampf wurde in klare Content-Formate übersetzt, die seine Expertise verständlich und wiedererkennbar für die breite Masse machen.",
      "Aufbau einer konsistenten Content-Struktur - Statt einzelner Posts entstand ein klarer Veröffentlichungsrhythmus mit wiedererkennbaren Formaten, die seinen Inhalt regelmäßig und strukturiert sichtbar machen.",
      "Fokus auf Kurzvideoplattformen - Der Schwerpunkt lag auf Instagram Reels, TikTok und YouTube Shorts, um seine Expertise dort sichtbar zu machen, wo die Fitness-Community heute entsteht.",
      "Skalierung der Inhalte - Inhalte, die besonders gut funktionierten, wurden weiter ausgebaut und gezielt verbreitet, um die Reichweite kontinuierlich zu steigern. Jeder Monat diente als Feedback-Loop zur Anpassung der Content-Strategie.",
    ],
    outcome: {
      stats: [
        { value: "128k+",   label: "Neue Follower in 90 Tagen" },
        { value: "41 Mio.", label: "Views in 90 Tagen" },
        { value: "25+",     label: "Neue Kunden Calls pro Woche gebucht" },
        { value: "1",       label: "School Community aufgebaut" },
      ],
      summary:
        "Innerhalb weniger Monate entwickelte sich Tamers Online-Präsenz zu einer der sichtbarsten Stimmen in der deutschsprachigen Fitnessszene. Seine Inhalte erreichten Millionen von Menschen, bauten eine schnell wachsende Community auf und machten seine jahrzehntelange Erfahrung erstmals digital für ein breites Publikum sichtbar. Mit der steigenden Reichweite wuchs auch die Nachfrage - die Anfragen für sein Coaching vervielfachten sich, während seine Inhalte ihn als klare Autorität in der Branche positionierten.",
    },
    quote: {
      text: "Spectra Media hat nicht nur meinen Social Media Account von neuem aufgebaut - sie haben mein ganzes Business transformiert. Heute bekomme ich Anfragen und muss ihnen nicht mehr ständig hinterherlaufen.",
      author: "Tamer Galal, Fitness Coach",
    },
  },
  {
    slug: "kanzlei-mandic",
    client: "Kanzlei Mandic",
    profileImg: "/Kundenbilder/Kanzlei Mandic neu.png",
    brandLogoImg: "/Logos/Kanzlei Mandic Dubravko Mandic.png",
    industry: "Legal",
    badge: "Rechtsberatung",
    tagline: "Von 15.000 auf 50.000+ Follower in 4 Monaten",
    heroStat: "15k → 50k+",
    heroStatLabel: "Follower Wachstum",
    challenge:
      "Kanzlei Mandic wollte Rechtsberatung zugänglich und verständlich für die Allgemeinheit machen. Ihr Ziel: Vertrauen aufbauen und qualifizierte Mandanten über Social Media gewinnen. Dies versuchten sie über die letzten Jahre - leider ohne nachhaltigen Erfolg. Die Herausforderung: Juristische Inhalte müssen präzise sein, aber gleichzeitig so aufbereitet, dass sie auf Social Media ankommen und performen. Wir entwickelten eine Strategie, die Mandics Werte und Persönlichkeit einfängt - hilfreiches Wissen so vermittelt, dass man nicht genug davon bekommt, weil es nicht nur informiert, sondern auch unterhält.",
    approach: [
      "Komplexes Recht verständlich machen - Kritische Themen wurden in kurze, klare Video-Formate übersetzt, die komplexe Rechtsfragen verständlich erklären und gleichzeitig Aufmerksamkeit erzeugen.",
      "Fokus auf konkrete Alltagsprobleme - Der Inhalt konzentrierte sich auf Themen, die Menschen tatsächlich betreffen, etwa Mietrecht, Strafrecht und Arbeitsrecht. So entstand Content, nach dem aktiv gesucht wird.",
      "Vertrauen durch echte Beispiele - Fallbeispiele, häufige Fragen und reale Situationen machten den Inhalt greifbar und bauten Vertrauen bei potenziellen Mandanten auf.",
      "Klare Führung zur Erstberatung - Jedes Video hat eine klare Struktur und führt gezielt zur nächsten Handlung: der Kontaktaufnahme oder Erstberatung. Auch wer gerade kein akutes Problem hat, bleibt im Kopf und meldet sich, wenn es soweit ist.",
      "Präsenz auf den richtigen Plattformen - Instagram wurde als Hauptkanal für Reichweite genutzt, LinkedIn zusätzlich für die B2B-Zielgruppe. So wurde maximale Sichtbarkeit bei unterschiedlichen Zielgruppen erreicht.",
    ],
    outcome: {
      stats: [
        { value: "50k+",   label: "Follower (von 15k)" },
        { value: "2 Mio.", label: "Impressionen pro Monat" },
        { value: "✓",      label: "AI-Automatisierung für Erstanfragen" },
        { value: "+85%",   label: "Mehr Mandantenanfragen" },
      ],
      summary:
        "Die Kanzlei Mandic entwickelte sich zu einer der sichtbarsten Stimmen für Rechtsanfragen im deutschsprachigen Raum. Die Social-Media-Präsenz wuchs von 15.000 auf über 50.000 Follower und erreicht monatlich über 100.000 Menschen mit verständlichen Erklärungen - das entspricht rund 2 Millionen Impressionen pro Monat. Mit der gesteigerten Sichtbarkeit wurde auch die Nachfrage automatisiert: Ein in Social Media integriertes System leitet eingehende Anfragen professionell auf ein kostenpflichtiges Erstgespräch, was zu einem vollautomatischen und deutlich gestiegenen Umsatz führte.",
    },
    quote: {
      text: "Wir hätten nie erwartet, dass Social Media sich so direkt auf unser Geschäft auszahlen kann. Spectra Media hat das für uns möglich gemacht - und dafür sind wir ihnen unendlich dankbar.",
      author: "Kanzlei Mandic, Anwaltskanzlei",
    },
  },
  {
    slug: "markus-hoppe",
    client: "Markus Hoppe",
    profileImg: "/Kundenbilder/Markus Hoppe neu.png",
    brandLogoImg: "/Logos/Hoppe Coaching Markus Hoppe.png",
    industry: "Fitness",
    badge: "Fitness & Lifestyle",
    tagline: "Vom stagnierenden Supplement-Shop zum erfolgreichen Online-Coach",
    heroStat: "+30k",
    heroStatLabel: "Neue Follower in 3 Monaten",
    challenge:
      "Markus Hoppe war bereits ein etablierter Coach im deutschsprachigen Raum mit rund 30.000 Followern. Doch das Wachstum stagnierte - er kam nicht mehr über dieses Plateau hinaus. Posts kamen unregelmässig, der Content-Mix war unklar und die Engagement-Rate sank kontinuierlich. Er brauchte kein weiteres Experiment - sondern ein System. Wir führten eine klare Struktur ein, die all diese Probleme löst und auf langfristigen, messbaren Erfolg ausgerichtet ist.",
    approach: [
      "Analyse der bestehenden Inhalte - Wir werteten zunächst die bisherigen Inhalte aus und identifizierten, welche Themen und Formate in seiner Community wirklich Resonanz erzeugen.",
      "Klare Content-Säulen definieren - Auf dieser Basis entstanden drei klare Content-Säulen, die Markus als Coach stärken und seinen Account wiedererkennbar machen.",
      "Konsistenz im Content-System - Statt unregelmäßigem Posten führten wir eine feste Veröffentlichungsstruktur ein, die kontinuierlich neuen Content liefert und nachhaltiges Wachstum ermöglicht.",
      "Fokus auf Videocontent - Der Schwerpunkt wurde auf Reels und Kurzvideos gelegt, um Reichweite aufzubauen und neue Zielgruppen zu erreichen.",
      "Persönliche Story und Transformation - Markus' eigene Entwicklung, Erfahrungen und Perspektive wurden stärker in den Content integriert, was seinen Inhalt authentisch und greifbar macht.",
    ],
    outcome: {
      stats: [
        { value: "+30k",  label: "Neue Follower" },
        { value: "€20k",  label: "Monatliches Coaching-Einkommen" },
        { value: "3",     label: "Sponsorings ermöglicht" },
        { value: "✓",     label: "Sales Funnels eingerichtet" },
      ],
      summary:
        "Innerhalb weniger Monate entwickelte sich Markus' Social Media von einem stagnierenden Account zu einer wachsenden Personal Brand im Fitnessbereich. Mit klarer Content-Struktur und dem Fokus auf Videoformate wuchs seine Community in nur drei Monaten um über 30.000 neue Follower. Was zuvor ein schlecht laufender Supplement-Shop war, wurde durch optimierte Sales Funnels und strategisches Marketing zu einem erfolgreichen Coaching-Business, das ihm monatlich über 20.000 Euro einbringt. Markus konnte seinen Shop schließen und seine Leidenschaft zum Beruf machen.",
    },
    quote: {
      text: "Ich wusste, dass Potenzial in meinem Account steckt, aber mir fehlte ein klares System. Mit Spectra Media wurde aus meinem Account eine echte Personal Brand, die mir monatlich über 20k generiert.",
      author: "Markus Hoppe, Fitness Coach",
    },
  },
  {
    slug: "george-maiorano",
    client: "Maiorano Performance",
    profileImg: "/Kundenbilder/George Maiorano.JPG",
    brandLogoImg: "/Logos/Maiorano Perfomance 2 George Maiorano.png",
    industry: "Health / Peptides",
    badge: "Health & Wellness",
    tagline: "Von 0 auf 10.000 Follower in 6 Wochen",
    heroStat: "0 → 10k",
    heroStatLabel: "Follower in 6 Wochen",
    challenge:
      "Mit George Maiorano stand die Aufgabe, einen Account komplett von null aufzubauen. Fokus: Biohacking, Peptide und Longevity - eine Nische mit hohem Erklärungsbedarf, die tiefes Vertrauen voraussetzt. Die Herausforderung war, schnell Sichtbarkeit aufzubauen und gleichzeitig eine Community zu formen, die rund um erklärungsbedürftige Produkte entsteht und wächst. Wir entwickelten eine Strategie, die wissenschaftliche Inhalte zugänglich macht - und aus einem leeren Profil in wenigen Wochen eine relevante Stimme in der Nische machte.",
    approach: [
      "Aufbau einer klaren Expertenpräsenz - Von einem leeren Profil zu einer klar positionierten Stimme im Bereich Longevity, Peptide und optimale Gesundheit.",
      "Wissenschaft verständlich machen - Komplexe biochemische Zusammenhänge wurden in kurze, visuelle Inhalte übersetzt, die auch für Laien verständlich sind.",
      "Fokus auf relevante Themen und Nischen - Biohacking, Longevity und Peptide wurden gezielt als Content-Säulen aufgebaut, um George als Experten in dieser wachsenden Nische zu positionieren.",
      "Video-First-Content-Strategie - Kurzvideos mit klaren Erklärungen und starken Hooks sorgten dafür, dass wissenschaftliche Inhalte auf Social Media Reichweite erzielen.",
      "Aufbau von Vertrauen und Community - Durch Konsistenz, Aufklärung und transparente Inhalte entstand eine Community rund um Gesundheit, Performance und Longevity.",
    ],
    outcome: {
      stats: [
        { value: "10k",    label: "Follower in 6 Wochen" },
        { value: "3.000€", label: "Sponsoring/Monat in den ersten 4 Wochen" },
        { value: "6 Wochen", label: "Zeitraum" },
        { value: "1.000+", label: "E-Books verkauft" },
      ],
      summary:
        "In nur 6 Wochen entwickelte sich Georges Account von null auf 10.000 Follower - eine Leistung, für die andere Monate oder Jahre brauchen. Ermöglicht durch Content, der genau seine Zielgruppe traf und komplizierte medizinische Themen wie Peptide in nutzerfreundlicher Sprache erklärte. Die neu gewonnene Aufmerksamkeit wurde gezielt genutzt, um sein E-Book erfolgreich zu vermarkten und sein Coaching-Angebot zu etablieren - was für ihn zu einem großen Erfolg wurde.",
    },
    quote: {
      text: "Ich habe schon erwartet, dass mein Content auf Interesse stößt, aber dass Spectra Media mir 10.000 Follower in 6 Wochen generiert, das hat alle meine Erwartungen gesprengt.",
      author: "George Maiorano, Geschäftsführer und Inhaber von American Medical Wellness und American Wellness Pharmacy",
    },
  },
  {
    slug: "mike-sommerfeld",
    client: "Mike Sommerfeld",
    industry: "Bodybuilding",
    badge: "Fitness & Lifestyle",
    tagline: "Die Road zum Mr. Olympia - dokumentiert in Echtzeit",
    heroStat: "+100k",
    heroStatLabel: "Follower in 30 Tagen",
    profileImg: "/Kundenbilder/Mike Sommerfeld.png",
    brandLogoImg: "/Logos/Badass Coaching Mike Sommerfeld.png",
    challenge:
      "Mike Sommerfeld gehört zu den erfolgreichsten Bodybuildern Deutschlands und bereitete sich auf den wichtigsten Wettkampf seiner Karriere vor: den Mr. Olympia in Las Vegas.\n\nDie Vorbereitung auf einen Wettkampf auf diesem Niveau ist intensiv, emotional und voller entscheidender Momente. Genau diese Phase wollten wir nutzen, um nicht nur Content zu produzieren, sondern eine Geschichte zu erzählen.\n\nDie Herausforderung bestand darin, diese entscheidenden Wochen so zu dokumentieren, dass sie sowohl bestehende Fans mitnehmen als auch neue Zielgruppen erreichen - und dabei authentisch bleiben.",
    approach: [
      "Road-to-Olympia Storyline - Die Vorbereitung auf den Mr. Olympia wurde als fortlaufende Content-Serie aufgebaut, die Fans täglich am Weg zum Wettkampf teilhaben lässt.",
      "High-Frequency Content-System - Tägliche Reels, Vlogs und Postings sorgten dafür, dass die Community konstant neuen Content erhielt und die Dynamik der Vorbereitung spürbar wurde.",
      "Dokumentarischer Content-Stil - Statt inszenierter Clips lag der Fokus auf echten Momenten aus Training, Alltag und Vorbereitung - roh, authentisch und nah am Athleten.",
      "Multi-Platform Strategie - Kurzvideos für maximale Reichweite auf Instagram und TikTok wurden mit längeren YouTube-Vlogs kombiniert, um tiefere Einblicke zu ermöglichen.",
      "Momentum nutzen - Die steigende Aufmerksamkeit rund um den Mr. Olympia wurde gezielt genutzt, um neue Zielgruppen zu erreichen und die Reichweite exponentiell zu steigern.",
    ],
    outcome: {
      stats: [
        { value: "+100k",   label: "Neue Follower in 30 Tagen" },
        { value: "55 Mio.", label: "Views auf allen Plattformen" },
        { value: "8.6 Mio.", label: "Accounts erreicht" },
        { value: "30",      label: "Vlogs in 30 Tagen gedreht" },
      ],
      summary:
        "Innerhalb von nur 30 Tagen entwickelte sich Mike Sommerfelds Social Media zu einer der sichtbarsten Bodybuilding-Präsenzen im deutschsprachigen Raum. Durch tägliche Inhalte, starke Storylines und eine konsequente Content-Strategie entstand eine enorme Dynamik rund um seine Mr.-Olympia-Vorbereitung. Die Kombination aus authentischer Dokumentation, hoher Posting-Frequenz und plattformübergreifendem Content sorgte für eine massive Reichweitensteigerung und ein starkes Wachstum seiner Community.",
    },
    quote: {
      text: "Die Vorbereitung auf den Mr. Olympia war eine der intensivsten Phasen meiner Karriere. Spectra Media hat es geschafft, genau diese Energie einzufangen und daraus Content zu machen, der Millionen Menschen erreicht hat.",
      author: "Mike Sommerfeld, Bodybuilder & Mr. Olympia Athlet",
    },
  },
  {
    slug: "gannikus",
    client: "Gannikus",
    industry: "Fitness / Media",
    badge: "Fitness & Media",
    tagline: "Podcast in virale Clips umgewandelt",
    heroStat: "Podcast",
    heroStatLabel: "in virale Clips umgewandelt",
    profileImg: "/Logos/Gannikus Profilbild neu.png",
    brandLogoImg: "/Logos/Gannikus neu.png",
    challenge:
      "Gannikus betreibt den größten Fitness-Podcast im deutschsprachigen Raum. Jede Woche entstehen dort hochwertige Gespräche mit Athleten, Coaches und Branchenexperten.\n\nDer Podcast wurde jedoch hauptsächlich auf YouTube veröffentlicht. Dadurch blieb ein großer Teil des Potentials ungenutzt - denn viele starke Momente aus den Gesprächen verschwanden in langen Episoden und erreichten nur einen Teil der möglichen Zuschauer.\n\nDie Herausforderung bestand darin, diese Inhalte so aufzubereiten, dass sie auch auf Instagram, TikTok und anderen Social-Media-Kanälen ihre volle Wirkung entfalten.",
    approach: [
      "Podcast-Content analysieren - Jede Episode wurde systematisch nach starken Aussagen, kontroversen Momenten und besonders interessanten Themen durchsucht.",
      "Short-Form Clips erstellen - Die relevantesten Passagen wurden in kurze, aufmerksamkeitsstarke Clips geschnitten, die perfekt für Social Media funktionieren.",
      "Plattformgerechte Aufbereitung - Die Clips wurden visuell und dramaturgisch so angepasst, dass sie auf Instagram Reels, TikTok und Shorts optimal performen.",
      "Konsistente Veröffentlichung - Statt nur einzelner Episoden entstand ein kontinuierlicher Strom an Short-Form-Content aus den Podcast-Folgen.",
      "Aufmerksamkeit zurück zum Podcast lenken - Die Clips fungieren als Einstiegspunkt und führen neue Zuschauer zu den vollständigen Podcast-Episoden.",
    ],
    outcome: {
      stats: [
        { value: "✓",     label: "Erhöhter Shop Traffic" },
        { value: "✓",     label: "Gestiegene Markenbekanntheit" },
        { value: "Mio.+", label: "Klicks generiert" },
      ],
      summary:
        "Durch das systematische Repurposing der Podcast-Folgen entstand aus einem einzigen Content-Format ein kontinuierlicher Strom an Social-Media-Inhalten. Die Short Clips sorgen dafür, dass zentrale Aussagen aus den Episoden deutlich mehr Menschen erreichen und gleichzeitig neue Zuschauer auf den Podcast aufmerksam werden. Das Ergebnis: erhöhter Shop Traffic, höhere Markenbekanntheit und Millionen von Klicks - aus bestehendem Content ohne zusätzlichen Aufwand.",
    },
    quote: {
      text: "Wir hatten bereits starken Content im Podcast - aber durch die Short Clips erreicht er jetzt ein völlig neues Publikum.",
      author: "Danny, CEO und Inhaber Gannikus",
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
    headline: "Ein System. Alle Hebel. Ein Ziel: Wachstum und Skalierung.",
    sub: "Done-for-You Social Media Service für Marken, die sichtbar und profitabel werden wollen.",
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
    "Die Spectra Media GmbH entstand aus einer Beobachtung. Im digitalen Markt gewinnen heutzutage nicht mehr die Besten, sondern die Sichtbarsten.",
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
      desc: "Wir arbeiten nicht mit jedem. Wir konzentrieren uns auf eine ausgewählte Selektion von Kunden, bei denen wir Potenzial sehen und wo wir wirklich einen Unterschied machen können.",
    },
  ],
  cta: {
    headline: "Bereit für das Gespräch?",
    sub: "Lass uns in 30 Minuten herausfinden, ob und wie wir zusammenarbeiten können.",
    cta: "Call buchen",
    ctaUrl: "https://calendly.com/spectramedia/instagram-introduction-call",
  },
};
