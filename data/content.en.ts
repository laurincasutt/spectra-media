import type { CaseStudy } from "./content";

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────
export const nav = {
  logo: "Spectra Media",
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
    { label: "Process", href: "/prozess" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About Us", href: "/gruender" },
  ],
  ctaText: "Book a Call",
  ctaUrl: "https://calendly.com/spectramedia-info/30min",
  whatsappNumber: "41795371839",
  whatsappMessage: "Hello%2C%20I%27m%20interested%20in%20Spectra%20Media.",
  ariaMenuOpen: "Open menu",
  ariaMenuClose: "Close menu",
  ariaWhatsApp: "Contact via WhatsApp",
  ariaLinkedIn: "on LinkedIn",
};

// ─────────────────────────────────────────────
// Home Page
// ─────────────────────────────────────────────
export const home = {
  hero: {
    eyebrow: "Done-for-You Social Media Growth",
    headlineLines: ["From invisible", "to undeniable."],
    gradientLineIndex: 1,
    sub: "Spectra Media GmbH specializes in transforming overlooked Instagram accounts into outstanding Personal Brands and Business Pages that not only attract the right followers, but convert them into loyal clients.",
    sub2: "",
    cta: "Book a Call",
    ctaUrl: "https://calendly.com/spectramedia-info/30min",
    secondaryCta: "View Case Studies",
    secondaryCtaUrl: "/case-studies",
  },

  proofStats: [
    { value: "2 Bn+", label: "Views generated", sub: "" },
    { value: "1 M+", label: "Followers grown", sub: "" },
    { value: "2,000+", label: "Clients generated", sub: "" },
    { value: "30+", label: "Brands scaled", sub: "" },
  ],

  problem: {
    eyebrow: "The Problem",
    headline: "You have the knowledge. But no system.",
    sub: "Social media doesn't fail because of content. It fails because of the missing process behind it.",
    frictions: [
      {
        icon: "⏰",
        title: "No Time",
        desc: "You know social media matters. But between running your business and your personal life, there's no room for consistent content.",
      },
      {
        icon: "🔄",
        title: "No System",
        desc: "No editorial plan. No clear strategy. You post when you can — not when the algorithm rewards it.",
      },
      {
        icon: "📉",
        title: "No ROI",
        desc: "You invest time and money. But followers aren't growing. Clients aren't coming from social media. No measurable results.",
      },
    ],
  },

  system: {
    eyebrow: "Our System",
    headline: "You focus on your strengths, we handle the rest.",
    sub: "We build the brand, you scale the business.",
    deliverables: [
      {
        number: "01",
        title: "Content Strategy & Research",
        desc: "We analyze your niche, competition, and target audience. The result: a strategy built for growth.",
      },
      {
        number: "02",
        title: "Script & Hook Development",
        desc: "Every video gets a custom script with a strong hook. Voice-matching instead of generic agency copy.",
      },
      {
        number: "03",
        title: "Professional Editing",
        desc: "Fast, on-point, platform-ready. We cut your raw footage into viral short-form clips.",
      },
      {
        number: "04",
        title: "Upload & Community Management",
        desc: "We handle the full upload process and manage your community — comments, DMs, engagement.",
      },
      {
        number: "05",
        title: "Funnel & Conversion",
        desc: "Reach alone isn't enough. We build systems that convert followers into clients.",
      },
      {
        number: "06",
        title: "Offer & Conversion Optimization",
        desc: "We optimize your offer, pricing structure, and calls-to-action — so reach translates into real clients.",
      },
    ],
  },

  usps: [
    {
      title: "One strategy. One team. One direction.",
      desc: "No chaos, no ping-pong between agencies. You have one point of contact for everything.",
    },
    {
      title: "100% Organic. No bots. No shortcuts.",
      desc: "Sustainable growth through real content and a real community.",
    },
    {
      title: "Voice-matching instead of agency scripts.",
      desc: "Your voice, your style. We write scripts that sound like you wrote them yourself.",
    },
    {
      title: "Overdelivery & Rapid Response.",
      desc: "We deliver more than agreed. Always. And we're quick to reach when you need us.",
    },
    {
      title: "Selective Partnerships.",
      desc: "We only work with clients where we can truly deliver results. Quality over quantity.",
    },
  ],

  faq: {
    eyebrow: "FAQ",
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "How much time do I need to invest?",
        answer:
          "Our service is designed so you get the best results with minimal time investment. All we need from you is 1–2 hours of recordings per week — you film, we handle everything else: strategy, scripts, editing, upload, and community management. You focus on your core competencies. We handle the rest.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "First results are typically visible within 4–6 weeks. Sustainable, strong growth develops over 3–6 months. For Tamer Galal, we generated over 41 million views across all platforms in just 90 days.",
      },
      {
        question: "Which industries do you work with?",
        answer:
          "We specialize in personalities and entrepreneurs who want to take their personal brand to the next level — across industries: coaches, trainers, consultants, lawyers, doctors, entrepreneurs, or athletes who want to make their knowledge and expertise visible on social media. Ideal if you're already successful offline.",
      },
      {
        question: "Do you work only with Instagram or other platforms too?",
        answer:
          "Our focus is Instagram, TikTok, and YouTube. On request, we expand to YouTube Longform, LinkedIn, and other platforms. We recommend starting with as many platforms as makes sense to maximize reach and scale content effectively.",
      },
      {
        question: "How does the onboarding process work?",
        answer:
          "1. Discovery Call (free) — we assess fit and possibilities. 2. Development of content strategy and brand map, presented in a proposal call. 3. Contract signing. 4. Onboarding call. 5. Content production begins. 6. Ongoing optimization and scaling.",
      },
    ],
  },

  heroTestimonial: {
    quote: "Spectra Media didn't just build my account — they transformed my business.",
    author: "Tamer Galal",
    role: "Fitness Coach",
  },

  howItWorks: {
    eyebrow: "Our Process",
    headline: "How it works",
    steps: [
      {
        number: "01",
        title: "Strategy & Briefing",
        desc: "We analyze your niche and target audience and develop a tailored content strategy.",
      },
      {
        number: "02",
        title: "Production & Editing",
        desc: "You record — we write scripts, edit, and optimize everything for maximum reach.",
      },
      {
        number: "03",
        title: "Upload & Scaling",
        desc: "We handle upload, community management, and scale what works — continuously.",
      },
    ],
  },

  testimonials: [
    {
      quote: "Spectra Media didn't just build my social media account — they transformed my entire business. The inquiries now come to me.",
      author: "Tamer Galal",
      role: "Fitness Coach",
    },
    {
      quote: "We didn't expect social media to have such a direct impact on our business. Spectra Media made that possible.",
      author: "Kanzlei Mandic",
      role: "Law Firm",
    },
    {
      quote: "I expected maybe 3,000 followers in 6 weeks. Spectra Media delivered three times that.",
      author: "George Maiorano",
      role: "Health Entrepreneur",
    },
    {
      quote: "With the right system, I grew faster in 3 months than in the previous 2 years combined.",
      author: "Markus Hoppe",
      role: "Fitness & Lifestyle",
    },
  ],

  bottomCta: {
    eyebrow: "Ready to start?",
    headline: "Take the first step toward your digital authority.",
    sub: "In a free 30-minute call, we'll explore together what's possible for you.",
    cta: "Book Your Free Discovery Call",
    ctaUrl: "https://calendly.com/spectramedia-info/30min",
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
    tagline: "128,000 new followers in 90 days",
    heroStat: "128k+",
    heroStatLabel: "New followers in 90 days",
    challenge:
      "Tamer Galal was already a legend in the German-speaking fitness world — but his offline presence didn't match his online presence. Although he had been a leading figure for over 30 years, he had missed the digital transition and suffered a significant disadvantage as a result. He had neither the time nor the expertise to produce consistent content that would position him as an expert and restore his platform. Previous attempts yielded no measurable results. We helped him present his knowledge and competence in a way that makes people understand what makes him special — and highlights his legendary status even today.",
    approach: [
      "Brand Positioning — Before producing any content, we clearly positioned Tamer's decades of experience. The focus: not just the fitness coach, but the seasoned voice in German-speaking bodybuilding.",
      "Translating his expertise into content — Tamer's knowledge from over 30 years of training, coaching, and competition was translated into clear content formats that make his expertise understandable and recognizable to a broad audience.",
      "Building a consistent content structure — Instead of individual posts, a clear publishing rhythm was established with recognizable formats that make his content consistently and structurally visible.",
      "Focus on short-video platforms — The emphasis was placed on Instagram Reels, TikTok, and YouTube Shorts to showcase his expertise where the fitness community exists today.",
      "Content scaling — Content that performed particularly well was expanded and strategically amplified to continuously increase reach. Each month served as a feedback loop for adjusting the content strategy.",
    ],
    outcome: {
      stats: [
        { value: "128k+",   label: "New followers in 90 days" },
        { value: "41 M.",   label: "Views in 90 days" },
        { value: "25+",     label: "New client calls booked per week" },
        { value: "1",       label: "School community built" },
      ],
      summary:
        "Within a few months, Tamer's online presence developed into one of the most visible voices in the German-speaking fitness scene. His content reached millions of people, built a rapidly growing community, and made his decades of experience digitally visible to a broad audience for the first time. As reach grew, so did demand — coaching inquiries multiplied while his content positioned him as a clear authority in the industry.",
    },
    quote: {
      text: "Spectra Media didn't just rebuild my social media from scratch — they transformed my entire business. Today I receive inquiries and no longer have to chase them.",
      author: "Tamer Galal, Fitness Coach",
    },
    screenshots: [
      "/case-studies/tamer-galal/follower-ig.png",
      "/case-studies/tamer-galal/views-ig.png",
      "/case-studies/tamer-galal/tiktok-follower.png",
      "/case-studies/tamer-galal/tiktok-views.png",
    ],
    screenshotWide: "/case-studies/tamer-galal/insights-yt.png",
  },
  {
    slug: "kanzlei-mandic",
    client: "Kanzlei Mandic",
    profileImg: "/Kundenbilder/Kanzlei Mandic neu.png",
    brandLogoImg: "/Logos/Kanzlei Mandic Dubravko Mandic.png",
    industry: "Legal",
    badge: "Legal Consulting",
    tagline: "From 15,000 to 50,000+ followers in 4 months",
    heroStat: "15k → 50k+",
    heroStatLabel: "Follower growth",
    challenge:
      "Kanzlei Mandic wanted to make legal advice accessible and understandable for the general public. Their goal: build trust and attract qualified clients through social media. They had been trying this for years — unfortunately without sustainable success. The challenge: legal content must be precise, yet presented in a way that works and performs on social media. We developed a strategy that captures Mandic's values and personality — delivering helpful knowledge in a way that you can't get enough of, because it doesn't just inform, it also entertains.",
    approach: [
      "Making complex law understandable — Critical topics were translated into short, clear video formats that explain complex legal questions in a comprehensible way while generating attention.",
      "Focus on concrete everyday problems — Content focused on topics that actually affect people, such as tenancy law, criminal law, and employment law. This created content that is actively searched for.",
      "Trust through real examples — Case studies, frequently asked questions, and real situations made content tangible and built trust with potential clients.",
      "Clear guidance to initial consultation — Every video has a clear structure and purposefully guides to the next action: contact or initial consultation. Even those without an immediate problem are remembered and get in touch when the time comes.",
      "Presence on the right platforms — Instagram was used as the main channel for reach, LinkedIn additionally for the B2B audience. Maximum visibility was achieved across different target groups.",
    ],
    outcome: {
      stats: [
        { value: "50k+",   label: "Followers (from 15k)" },
        { value: "2 M.",   label: "Impressions per month" },
        { value: "✓",      label: "AI automation for initial inquiries" },
        { value: "+85%",   label: "More client inquiries" },
      ],
      summary:
        "Kanzlei Mandic developed into one of the most visible voices for legal inquiries in the German-speaking world. Social media presence grew from 15,000 to over 50,000 followers and reaches over 100,000 people monthly with understandable explanations — that's around 2 million impressions per month. With increased visibility, demand was automated: a system integrated into social media professionally routes incoming inquiries to a paid initial consultation, resulting in fully automated and significantly increased revenue.",
    },
    quote: {
      text: "We never expected social media to pay off so directly for our business. Spectra Media made that possible for us — and for that we are infinitely grateful.",
      author: "Kanzlei Mandic, Law Firm",
    },
    screenshots: [
      "/case-studies/kanzlei-mandic/follower-ig.png",
      "/case-studies/kanzlei-mandic/interaktionen-ig.png",
      "/case-studies/kanzlei-mandic/views-ig.png",
    ],
  },
  {
    slug: "markus-hoppe",
    client: "Markus Hoppe",
    profileImg: "/Kundenbilder/Markus Hoppe neu.png",
    brandLogoImg: "/Logos/Hoppe Coaching Markus Hoppe.png",
    industry: "Fitness",
    badge: "Fitness & Lifestyle",
    tagline: "From a stagnating supplement shop to a successful online coach",
    heroStat: "+30k",
    heroStatLabel: "New followers in 3 months",
    challenge:
      "Markus Hoppe was already an established coach in the German-speaking world with around 30,000 followers. But growth had stagnated — he couldn't break past this plateau. Posts were irregular, the content mix was unclear, and the engagement rate was continuously declining. He didn't need another experiment — he needed a system. We introduced a clear structure that solves all these problems and is oriented toward long-term, measurable success.",
    approach: [
      "Analysis of existing content — We first evaluated existing content and identified which topics and formats really resonated with his community.",
      "Defining clear content pillars — Based on this, three clear content pillars were created that strengthen Markus as a coach and make his account recognizable.",
      "Consistency in the content system — Instead of irregular posting, we introduced a fixed publishing structure that continuously delivers new content and enables sustainable growth.",
      "Focus on video content — The emphasis was placed on Reels and short videos to build reach and attract new target audiences.",
      "Personal story and transformation — Markus's own development, experiences, and perspective were more strongly integrated into the content, making it authentic and relatable.",
    ],
    outcome: {
      stats: [
        { value: "+30k",  label: "New followers" },
        { value: "€20k",  label: "Monthly coaching income" },
        { value: "3",     label: "Sponsorships secured" },
        { value: "✓",     label: "Sales funnels set up" },
      ],
      summary:
        "Within a few months, Markus's social media transformed from a stagnating account to a growing personal brand in the fitness space. With a clear content structure and focus on video formats, his community grew by over 30,000 new followers in just three months. What was previously a struggling supplement shop became a successful coaching business through optimized sales funnels and strategic marketing, generating over €20,000 per month. Markus was able to close his shop and make his passion his profession.",
    },
    quote: {
      text: "I knew there was potential in my account, but I lacked a clear system. With Spectra Media, my account became a real personal brand generating over 20k per month.",
      author: "Markus Hoppe, Fitness Coach",
    },
    screenshots: [
      "/case-studies/markus-hoppe/follower-ig.png",
      "/case-studies/markus-hoppe/interaktion-ig.png",
      "/case-studies/markus-hoppe/views-ig.png",
    ],
  },
  {
    slug: "george-maiorano",
    client: "Maiorano Performance",
    profileImg: "/Kundenbilder/George Maiorano.JPG",
    brandLogoImg: "/Logos/Maiorano Perfomance 2 George Maiorano.png",
    industry: "Health / Peptides",
    badge: "Health & Wellness",
    tagline: "From 0 to 10,000 followers in 6 weeks",
    heroStat: "0 → 10k",
    heroStatLabel: "Followers in 6 weeks",
    challenge:
      "With George Maiorano, the task was to build an account completely from scratch. Focus: biohacking, peptides, and longevity — a niche requiring extensive explanation that demands deep trust. The challenge was to build visibility quickly while simultaneously forming a community that grows around products that need explanation. We developed a strategy that makes scientific content accessible — turning an empty profile into a relevant voice in the niche within just a few weeks.",
    approach: [
      "Building a clear expert presence — From an empty profile to a clearly positioned voice in the field of longevity, peptides, and optimal health.",
      "Making science understandable — Complex biochemical connections were translated into short, visual content that is understandable even for laypeople.",
      "Focus on relevant topics and niches — Biohacking, longevity, and peptides were deliberately built as content pillars to position George as an expert in this growing niche.",
      "Video-first content strategy — Short videos with clear explanations and strong hooks ensured that scientific content achieves reach on social media.",
      "Building trust and community — Through consistency, education, and transparent content, a community around health, performance, and longevity was created.",
    ],
    outcome: {
      stats: [
        { value: "10k",    label: "Followers in 6 weeks" },
        { value: "3,000€", label: "Sponsorship/month in the first 4 weeks" },
        { value: "6 weeks", label: "Time period" },
        { value: "1,000+", label: "E-books sold" },
      ],
      summary:
        "In just 6 weeks, George's account grew from zero to 10,000 followers — an achievement that takes others months or years. Made possible by content that precisely hit his target audience and explained complicated medical topics like peptides in user-friendly language. The newly gained attention was strategically used to successfully market his e-book and establish his coaching offer — which became a great success for him.",
    },
    quote: {
      text: "I expected my content to generate interest, but that Spectra Media would get me 10,000 followers in 6 weeks exceeded all my expectations.",
      author: "George Maiorano, CEO and Owner of American Medical Wellness and American Wellness Pharmacy",
    },
    screenshots: [
      "/case-studies/george-maiorano/follower-ig.png",
      "/case-studies/george-maiorano/interaktionen-ig.png",
      "/case-studies/george-maiorano/views-ig.png",
    ],
  },
  {
    slug: "mike-sommerfeld",
    client: "Mike Sommerfeld",
    industry: "Bodybuilding",
    badge: "Fitness & Lifestyle",
    tagline: "The road to Mr. Olympia — documented in real time",
    heroStat: "+100k",
    heroStatLabel: "Followers in 30 days",
    profileImg: "/Kundenbilder/Mike Sommerfeld.png",
    brandLogoImg: "/Logos/Badass Coaching Mike Sommerfeld.png",
    challenge:
      "Mike Sommerfeld is one of Germany's most successful bodybuilders and was preparing for the most important competition of his career: Mr. Olympia in Las Vegas.\n\nPreparation for a competition at this level is intense, emotional, and full of pivotal moments. That's exactly the phase we wanted to use — not just to produce content, but to tell a story.\n\nThe challenge was to document these critical weeks in a way that brings existing fans along while also reaching new audiences — all while staying authentic.",
    approach: [
      "Road-to-Olympia storyline — The preparation for Mr. Olympia was built as an ongoing content series that lets fans participate in the journey to the competition daily.",
      "High-frequency content system — Daily Reels, vlogs, and posts ensured the community constantly received new content and the dynamics of the preparation were palpable.",
      "Documentary content style — Instead of staged clips, the focus was on real moments from training, everyday life, and preparation — raw, authentic, close to the athlete.",
      "Multi-platform strategy — Short videos for maximum reach on Instagram and TikTok were combined with longer YouTube vlogs to enable deeper insights.",
      "Leveraging momentum — The growing attention around Mr. Olympia was deliberately used to reach new audiences and exponentially increase reach.",
    ],
    outcome: {
      stats: [
        { value: "+100k",    label: "New followers in 30 days" },
        { value: "134 M.",   label: "Views on IG in 30 days" },
        { value: "8.6 M.",   label: "Accounts reached in 30 days" },
        { value: "30",       label: "Vlogs filmed in 30 days" },
      ],
      summary:
        "Within just 30 days, Mike Sommerfeld's social media developed into one of the most visible bodybuilding presences in the German-speaking world. Through daily content, strong storylines, and a consistent content strategy, enormous momentum was created around his Mr. Olympia preparation. The combination of authentic documentation, high posting frequency, and cross-platform content resulted in massive reach growth and a strong community expansion.",
    },
    quote: {
      text: "Preparing for Mr. Olympia was one of the most intense phases of my career. Spectra Media managed to capture exactly that energy and turn it into content that reached millions of people.",
      author: "Mike Sommerfeld, Bodybuilder & Mr. Olympia Athlete",
    },
    screenshots: [
      "/case-studies/mike-sommerfeld/follower-ig.png",
      "/case-studies/mike-sommerfeld/views-ig.png",
    ],
    screenshotVideo: "/case-studies/mike-sommerfeld/review-video.mp4",
  },
  {
    slug: "gannikus",
    client: "Gannikus",
    industry: "Fitness / Media",
    badge: "Fitness & Media",
    tagline: "Podcast turned into viral clips",
    heroStat: "Podcast",
    heroStatLabel: "turned into viral clips",
    profileImg: "/Logos/Gannikus Profilbild neu.png",
    brandLogoImg: "/Logos/Gannikus neu.png",
    challenge:
      "Gannikus runs the largest fitness podcast in the German-speaking world. Every week, high-quality conversations with athletes, coaches, and industry experts are produced.\n\nHowever, the podcast was primarily published on YouTube. This left a large portion of potential untapped — because many strong moments from the conversations disappeared in long episodes and only reached a fraction of the possible audience.\n\nThe challenge was to prepare this content in a way that it could also unfold its full impact on Instagram, TikTok, and other social media channels.",
    approach: [
      "Analyzing podcast content — Each episode was systematically searched for strong statements, controversial moments, and particularly interesting topics.",
      "Creating short-form clips — The most relevant passages were edited into short, attention-grabbing clips that work perfectly for social media.",
      "Platform-appropriate preparation — The clips were visually and dramaturgically adapted to perform optimally on Instagram Reels, TikTok, and Shorts.",
      "Consistent publishing — Instead of just individual episodes, a continuous stream of short-form content was created from the podcast episodes.",
      "Directing attention back to the podcast — The clips serve as entry points and guide new viewers to the full podcast episodes.",
    ],
    outcome: {
      stats: [
        { value: "✓",     label: "Increased shop traffic" },
        { value: "✓",     label: "Increased brand awareness" },
        { value: "M.+",   label: "Clicks generated" },
      ],
      summary:
        "Through the systematic repurposing of podcast episodes, a single content format became a continuous stream of social media content. The short clips ensure that key statements from episodes reach significantly more people while also making new viewers aware of the podcast. The result: increased shop traffic, higher brand awareness, and millions of clicks — from existing content without additional effort.",
    },
    quote: {
      text: "We already had strong content in the podcast — but through the short clips, it now reaches a completely new audience.",
      author: "Danny, CEO and Owner of Gannikus",
    },
    screenshots: [
      "/case-studies/gannikus/follower-ig.jpg",
      "/case-studies/gannikus/interaktionen-ig.jpg",
      "/case-studies/gannikus/views-ig.jpg",
    ],
  },
];

// ─────────────────────────────────────────────
// Service Page
// ─────────────────────────────────────────────
export const service = {
  meta: {
    title: "Services – Done-for-You Social Media",
    description:
      "From strategy to scripts to upload: Spectra Media takes over your entire social media process. 100% organic, no bots.",
  },
  hero: {
    eyebrow: "Our Services",
    headline: "One system. All levers. One goal: growth and scale.",
    sub: "Done-for-You Social Media service for brands that want to become visible and profitable.",
  },
  packages: [
    {
      name: "Starter",
      tagline: "To get started",
      features: [
        "Strategy & Content Plan",
        "10 clips per month (editing)",
        "Upload & Scheduling",
        "Monthly Reporting Call",
      ],
      cta: "Book a Call",
    },
    {
      name: "Growth",
      tagline: "Our most popular package",
      highlight: true,
      features: [
        "Strategy & Research (ongoing)",
        "20 clips per month (editing)",
        "Script Development (all videos)",
        "Upload & Hashtag Optimization",
        "Community Management (Comments + DMs)",
        "Bi-weekly Strategy Calls",
      ],
      cta: "Book a Call",
    },
    {
      name: "Scale",
      tagline: "For maximum growth",
      features: [
        "Everything from Growth",
        "30+ clips per month",
        "Multi-Platform (IG, TikTok, YT Shorts)",
        "Funnel & Lead Magnet Strategy",
        "Weekly Strategy Calls",
        "Priority Support",
      ],
      cta: "Book a Call",
    },
  ],
  addons: [
    "LinkedIn Management",
    "YouTube Long-Form Editing",
    "Ad Creative Production",
    "Newsletter Integration",
  ],
};

// ─────────────────────────────────────────────
// Prozess Page
// ─────────────────────────────────────────────
export const prozess = {
  meta: {
    title: "Our Process – How We Work",
    description:
      "Transparency is important to us. Here you'll find exactly how working with Spectra Media unfolds — from step 1 to your first viral clip.",
  },
  hero: {
    eyebrow: "Our Process",
    headline: "Our roadmap to full success",
    sub: "You always know what's coming next. No guessing, no chaos.",
  },
  steps: [
    {
      number: "01",
      title: "Intro Call & Strategy Briefing",
      duration: "Week 1",
      desc: "We get to know you, your business, and your goals. This creates a custom content strategy: clear positioning, audience analysis, and the first content ideas — precisely tailored to you, no copy-paste.",
    },
    {
      number: "02",
      title: "Onboarding & Setup",
      duration: "Week 1–2",
      desc: "We optimize your profile from A to Z: bio, highlights, link-in-bio funnel. All access is set up, the content system is built, and you receive a clear template for your first recordings.",
    },
    {
      number: "03",
      title: "Content Production & First Clips",
      duration: "From Week 2",
      desc: "Scripts are written — in your voice, your style, your language. You record, we handle everything: editing, optimization, captions. Within 2 weeks, the first clips go live.",
    },
    {
      number: "04",
      title: "Content Launch",
      duration: "First Publications",
      desc: "The first content goes live. We analyze performance carefully, react to algorithm feedback, and optimize hooks, formats, and topics — so each week runs better than the last.",
    },
    {
      number: "05",
      title: "Scaling & Expansion",
      duration: "From Month 2–3",
      desc: "Once the system is running, we scale: more clips, new formats, new platforms. Your account grows faster, your business generates inquiries — and you keep focusing on what you do best.",
    },
  ],
  principles: [
    {
      title: "Transparency",
      desc: "You have full insight into all metrics, plans, and progress at any time. No black-box marketing.",
    },
    {
      title: "Partnership",
      desc: "We think like co-founders, not service providers. Your growth is our success.",
    },
    {
      title: "Speed",
      desc: "Rapid response. No long wait times. When something happens, we react immediately.",
    },
  ],
};

// ─────────────────────────────────────────────
// Gründer Page
// ─────────────────────────────────────────────
export const gruender = {
  meta: {
    title: "About the Founders – Spectra Media GmbH",
    description:
      "Who's behind Spectra Media? Meet the founders and understand why we work differently from other agencies.",
  },
  hero: {
    eyebrow: "About Us",
    headline: "We believe that everyone can grow online with the right system.",
    sub: "Spectra Media was founded because we experienced firsthand how frustrating social media is without a system — and how powerful it becomes with one.",
  },
  story: [
    "Spectra Media GmbH wasn't born from a business plan — it was born from frustration. We kept seeing the same thing: entrepreneurs, coaches, and experts with genuine knowledge remaining invisible, while superficial content got millions of views. Not because quality was lacking — but because the system was lacking.",
    "We knew this feeling firsthand. We had the knowledge, the experience, and the results — but without the right system, all of that remained invisible online. So we built the system. Not just for ourselves — but for everyone in exactly that situation.",
    "Today we work with selected entrepreneurs, coaches, and experts from the DACH region and beyond, transforming their knowledge into visible, profitable personal brands. What drives us: the moment a client realizes their account isn't just producing content — it's transforming their entire business.",
  ],
  values: [
    {
      title: "Results > Activity",
      desc: "We measure ourselves by outcomes, not effort. Follower growth, reach, inquiries — that's what counts.",
    },
    {
      title: "Transparency > Buzzwords",
      desc: "No hidden methods, no inflated numbers. You always know exactly what we do and why.",
    },
    {
      title: "Focus > Volume",
      desc: "We don't work with everyone. We concentrate on a selected number of clients where we see potential and can truly make a difference.",
    },
  ],
  team: [
    {
      name: "Laurin Casutt",
      role: "CEO & Managing Director",
      img: "/Team Spectra Media/Bild Laurin.png",
      linkedin: "https://www.linkedin.com/in/laurin-casutt/",
    },
    {
      name: "Andri Casutt",
      role: "Co-Founder & Head of Operations",
      img: "/Team Spectra Media/Bild Andri.png",
      linkedin: "#",
    },
  ],
  antiValues: [
    {
      title: "One-Size-Fits-All Solutions",
      desc: "No client is like another. Generic packages produce generic results — that's not our way.",
    },
    {
      title: "Generic Scripts",
      desc: "We don't write copy-paste texts. Every script carries your voice, your language, and your personality.",
    },
    {
      title: "Vanity Metrics",
      desc: "Likes without leads mean nothing. We optimize for real results: inquiries, follower growth, and revenue.",
    },
    {
      title: "Empty Promises",
      desc: "No inflated numbers, no unrealistic expectations. We deliberately work with a selected number of brands in long-term projects — not with as many clients as possible, but with the right ones.",
    },
  ],
  cta: {
    headline: "Ready for the call?",
    sub: "Let's spend 30 minutes figuring out if and how we can work together.",
    cta: "Book a Call",
    ctaUrl: "https://calendly.com/spectramedia-info/30min",
  },
};

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export const footer = {
  navigationTitle: "Navigation",
  legalTitle: "Legal",
  impressum: "Legal Notice",
  datenschutz: "Privacy Policy",
  description: "Done-for-You Social Media Growth for ambitious entrepreneurs and Personal Brands in the DACH region and internationally.",
  copyright: "All rights reserved.",
  location: "🇨🇭 St. Gallen, Switzerland",
};

// ─────────────────────────────────────────────
// Section UI strings
// ─────────────────────────────────────────────
export const ui = {
  video: {
    badge: "In Action",
    placeholder: "Video coming soon",
  },

  clientLogos: {
    badge: "Trust",
    headline: "Trusted by brands that set the standard.",
    sub: "Iconic personalities, market leaders, and entrepreneurs of distinction trust Spectra Media — when visibility should mean measurable results, strategic depth, and revenue generation.",
  },

  stackedCases: {
    eyebrow: "Case Studies",
    headline: "From the sideline to the spotlight.",
    sub: "We don't just make our clients visible — we make them the dominant force in their niche.",
    showMore: "Show details",
    hide: "Collapse",
    approachLabel: "Approach",
    resultsLabel: "Results",
    challengeLabel: "Challenge",
    linkLabel: "View Case Study",
  },

  contact: {
    badge: "Ready to start?",
    headline: "Take the first step toward your digital authority.",
    headlineSub: "Free and non-binding.",
    sub: "In a 30-minute call, we'll determine together whether Spectra Media is the right partner for your social media growth.",
    calendarTitle: "Book a Discovery Call",
    calendarDuration: "30 min · Free",
    nextAvailable: "Next availability: Tomorrow, 10:00",
    bookingTitle: "Free Discovery Call",
    bookingDesc: "We'll explore together if and how we can work together.",
    tags: ["30 min.", "Video Call", "Free", "Non-binding"],
    cta: "Book Your Appointment",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    officeLabel: "Office",
    officeValue: "9200 Gossau SG, Switzerland",
    weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },

  targetAudience: {
    eyebrow: "Target Audience",
    headline: "Brands that set standards,",
    headlineSub: "not chase trends.",
    groups: [
      { title: "Elite Coaches and Experts" },
      { title: "Businesses with a Personal Brand" },
      { title: "Lawyers and Law Firms" },
      { title: "Strategic Consultants and Thought Leaders" },
      { title: "Fitness and Health Coaches" },
      { title: "Supplement and Health Brands" },
    ],
  },

  solution: {
    eyebrow: "The Spectra Method™",
    headline: "From invisible to undeniable — in three phases.",
    sub: "We transform ordinary accounts into standout brands — not by chance, but with a system.",
    phases: [
      {
        number: "01",
        name: "POSITIONING",
        body: [
          "Everything stands or falls with the foundational structure of your brand. Before we produce the first content piece, we clarify the foundation: who you are, which people you want to help, and why people should choose you over your competition.",
          "We clearly define your market positioning, your target audience, and your unique brand promise. The result: a clear brand identity that is immediately recognizable across every platform.",
        ],
      },
      {
        number: "02",
        name: "CONTENT ENGINE",
        body: [
          "Our service is a Done-For-You service — we want to keep your time investment as low as possible. To achieve this, we build a complete Content Engine around your brand: content strategy, scriptwriting, editing, upload, and community management.",
          "All we need from you is 1-2 hours of recording time per week. You focus on your strengths, we handle the rest — delivering daily content, fully managed channels, and growth you can measure monthly.",
        ],
      },
      {
        number: "03",
        name: "MARKET DOMINANCE",
        body: [
          "Reach alone isn't enough. That's why we build systems that convert followers into clients — with funnels, conversion optimization, and offers that monetize your growth.",
          "The goal is not just to go viral, but to become the undisputed #1 in your niche. This creates trust that we can directly monetize.",
        ],
      },
    ],
  },

  advantages: {
    eyebrow: "Advantages",
    headline: "How our clients dominate entire markets.",
    sub: "Spectra Media merges Organic Trust with Paid Velocity. AI orchestrates both. Precisely measurable & exponentially scalable.",
    cards: [
      {
        number: "01",
        title: "Impact over advertising",
        desc: "No gimmicky hooks and no content spam. We develop content that builds trust and positions you as a clear voice in your industry.",
        low: "Low",
        high: "High",
        metric: "IMPACT",
      },
      {
        number: "02",
        title: "Speed through synergy",
        desc: "What works organically is strategically amplified. Instead of testing blindly, we scale content that already demonstrates proven attention.",
      },
      {
        number: "03",
        title: "More output, less effort",
        desc: "You provide a few hours of input, we turn it into consistent content across all channels — without your daily life becoming a content job.",
      },
      {
        number: "04",
        title: "Digital presence with substance",
        desc: "Your content follows a clear structure. Every post strengthens your positioning and builds long-term trust in your brand.",
        layers: ["Channel", "Format", "Brand"] as [string, string, string],
      },
      {
        number: "05",
        title: "Leadership through format",
        desc: "Strong brands don't communicate randomly. We develop recognizable formats that make your expertise visible and lead your brand.",
        chatQ: "Why aren't my posts getting traction?",
        chatA: "No system. Spectra fixes that. ✓",
      },
      {
        number: "06",
        title: "Aura beats algorithm",
        desc: "When positioning, voice, and structure align, the algorithm works for you. Your brand attracts attention instead of having to force it.",
      },
    ],
  },

  midCta: {
    eyebrow: "Ready to start?",
    headline: "Take the first step toward\nyour digital authority.",
    sub: "In a free 30-minute call, we'll explore together what's possible for you.",
    cta: "Book Your Free Discovery Call",
  },

  systemVisuals: {
    funnelLabels: ["Reach", "Leads", "Clients"] as [string, string, string],
  },

  serviceHero: {
    line1: "Accounts become brands,",
    line2: "brands become market leaders.",
    sub: "For experts and businesses who want to turn their visibility into real growth.",
  },

  serviceResultat: {
    eyebrow: "The Result",
    headline: "What happens when your marketing truly works.",
    cards: [
      {
        number: "01",
        title: "Authority changes everything — including your price.",
        desc: "Visibility creates trust. Clients pay more, ask fewer questions, and decide faster.",
      },
      {
        number: "02",
        title: "Closing deals becomes effortless.",
        desc: "Those who already know and trust you decide more easily. Social proof shortens every sales process.",
      },
      {
        number: "03",
        title: "The right clients come to you.",
        desc: "Instead of cold outreach, inbound leads emerge. People reach out because your content already convinced them.",
      },
      {
        number: "04",
        title: "From provider to authority.",
        desc: "Your name stands for a category, not just a single offer.",
      },
    ],
  },

  problemSection: {
    eyebrow: "The Problem",
    headline: "Why most brands stay invisible.",
    scheduleDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    youLabel: "You",
    cards: [
      {
        title: "Your marketing has no structure.",
        desc: "A post here, an ad there — nothing connects. You test, you hope, but the strategy is missing. Content fizzles out, ads don't convert. Others achieve more with less. What you're missing is a system.",
      },
      {
        title: "Your competition is outshining you.",
        desc: "You have a product that should be the market leader, but nobody knows about it. Because today it's not the best who win, but the most visible. People with lesser quality are capturing market share that's rightfully yours — simply because they know how to use social media.",
      },
      {
        title: "Time is slipping through your fingers.",
        desc: "You went independent to pursue your goals and build something — not to constantly plan, post, and edit content. You do everything yourself, delegate nothing, and work in the business instead of on it. That's how you waste valuable time.",
      },
    ],
  },

  caseStudiesHero: {
    eyebrow: "Case Studies",
    line1: "Results that",
    line2: "speak for themselves.",
    sub: "What happens when strategy, content, and distribution come together.",
    discoverBtn: "View Case →",
    backLink: "All Case Studies",
    challengeTitle: "The Challenge",
    approachTitle: "Our Approach",
    outcomeTitle: "The Result",
    screenshotsTitle: "Screenshots & Insights",
    moreCasesTitle: "More Case Studies",
    readCaseStudy: "Read Case Study",
  },

  gruenderExtras: {
    statsLabel30: "Brands scaled",
    statsMrd: "Bn+",
    statsMio: "M+",
    statsViews: "Views generated",
    statsFollower: "Followers grown",
    architectsHeadline: "The architects behind",
    architectsGradient: "your digital presence.",
    architectsSub: "We specialize in transforming ordinary Instagram accounts into standout brands that not only attract the right followers, but convert them into loyal clients.",
    teamFallback: "The Spectra Media Team —\nyour partner for social media growth",
    storyEyebrow: "Our Background",
    storyHeadline: "How it all began.",
    valuesTitle: "Our Values",
    teamTitle: "Our Team",
    antiValuesEyebrow: "No interest in",
    antiValuesHeadline: "What we don't stand for:",
    linkedinLabel: "LinkedIn",
  },
};
