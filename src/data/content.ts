// All content here follows Milan's content schema directly.
// Nothing invented — only what was explicitly provided, translated faithfully.

export type Lang = "en" | "cs";

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  paragraphs: string[];
  link: { label: string; href: string };
  accent: "blue" | "sage";
  year: string;
};

export type Content = {
  profile: {
    name: string;
    role: string;
    motto: string;
    location: string;
    email: string;
    github: string;
    githubHandle: string;
  };
  nav: {
    homeAria: string;
    links: { label: string; href: string }[];
    pdf: string;
    downloadPdf: string;
    sayHi: string;
    toggleMenu: string;
    github: string;
    languageSwitcherAria: string;
  };
  hero: {
    seeProjects: string;
    sayHi: string;
  };
  intro: {
    paragraph: string;
  };
  about: {
    eyebrow: string;
    paragraphs: string[];
  };
  aiTech: {
    eyebrow: string;
    heading: string;
    aiParagraphs: string[];
    areasLabel: string;
    areas: string[];
  };
  work: {
    eyebrow: string;
    heading: string;
  };
  projects: Project[];
  skills: {
    eyebrow: string;
    heading: string;
    technicalLabel: string;
    softLabel: string;
    technical: string[];
    soft: string[];
  };
  vision: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    paragraph: string;
  };
};

const en: Content = {
  profile: {
    name: "Milan Fridrich",
    role: "Student & Developer",
    motto: "Turning ideas into technology.",
    location: "Brno, Czechia",
    email: "milan.fridrich3@gmail.com",
    github: "https://github.com/milanfridrich3",
    githubHandle: "milanfridrich3",
  },
  nav: {
    homeAria: "Milan Fridrich — home",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "AI & Tech", href: "#ai" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Vision", href: "#vision" },
    ],
    pdf: "PDF",
    downloadPdf: "Download PDF",
    sayHi: "Say hi",
    toggleMenu: "Toggle menu",
    github: "GitHub",
    languageSwitcherAria: "Switch language",
  },
  hero: {
    seeProjects: "See projects",
    sayHi: "Say hi",
  },
  intro: {
    paragraph:
      "A student at an eight-year grammar school in Brno, with a growing interest in software development, AI, and modern technology. Programming is learned mostly hands-on, through building real projects — creating software and web applications, and continually picking up new technologies along the way. What matters just as much as the code itself is figuring out how to turn an idea into an actual, usable product.",
  },
  about: {
    eyebrow: "About",
    paragraphs: [
      "I'm a student at an eight-year grammar school in Brno, Czechia.",
      "I learn programming and technology mainly by building my own projects and working through real problems as they come up. I like creating things — starting from an idea and following it all the way through to a working product.",
      "Writing code is only part of it. I'm just as interested in how a product gets designed, how its different parts connect, and how to get it into a shape people can actually use.",
      "Right now I'm working on two projects of my own — Petali and Project Pilot — and I pick up new technologies as each one needs them.",
      "When something breaks, I try to understand why before looking for a fix, rather than just copying a ready-made answer. I use AI as a tool for learning, development, brainstorming, problem-solving, and debugging.",
      "Outside of programming, I play badminton, enjoy other sports, and like being outdoors — skiing, cycling, photography, and generally spending time in nature.",
      "What draws me to technology is exactly that: the ability to turn your own idea into something that actually works.",
    ],
  },
  aiTech: {
    eyebrow: "AI & Technology",
    heading: "A tool that extends how I think, not a replacement for it.",
    aiParagraphs: [
      "AI isn't just one more tool on a list for me — it's part of how I learn and build. I use it while working on my own projects, to pick up new technologies faster and understand concepts more clearly.",
      "It's useful for brainstorming, for exploring different approaches to a problem, and for debugging when something isn't working the way it should.",
      "I've also started experimenting with AI models directly, including running them locally, and I'm interested in how AI can be built into software itself — not just used alongside it. For me, it extends what I can do and speeds up how fast I learn. It doesn't replace the thinking or the coding.",
    ],
    areasLabel: "Areas I work in",
    areas: [
      "Software Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Databases",
      "APIs",
      "Deployment",
      "Git / GitHub",
      "AI",
      "Modern dev tools",
    ],
  },
  work: {
    eyebrow: "Projects",
    heading: "Two projects, built from the ground up.",
  },
  projects: [
    {
      slug: "petali",
      name: "Petali",
      kicker: "01 · Personal project",
      tagline: "A computer that speaks a language you understand.",
      paragraphs: [
        "Petali is a personal project that pairs computer monitoring with a visual, living companion on the desktop — turning raw system data into something more approachable and easier to read at a glance.",
        "It started as a simple HTML prototype and grew into a full desktop application. Along the way it pulled me into work well beyond the frontend — system monitoring, application packaging, and deployment — plus a separate marketing site to go with it. It's the project that taught me the most about everything that happens after the interface is done.",
      ],
      link: { label: "Visit Petali", href: "https://petali.netlify.app" },
      accent: "sage",
      year: "2026",
    },
    {
      slug: "project-pilot",
      name: "Project Pilot",
      kicker: "02 · Full-stack project",
      tagline: "Stay on course.",
      paragraphs: [
        "Project Pilot is my attempt at building something more ambitious: a full web platform for organizing projects and coordinating the people working on them.",
        "Building it means working across the whole stack — frontend, backend, APIs, a database, authentication — and learning how all of those pieces connect into one working system. Email handling, user verification, permissions, and deployment are all part of it too. It's still evolving; I keep extending and fixing it as I go.",
      ],
      link: { label: "Visit Project Pilot", href: "https://project-pilot.is-local.org" },
      accent: "blue",
      year: "2026",
    },
  ],
  skills: {
    eyebrow: "Skills",
    heading: "What I bring to the work.",
    technicalLabel: "Technical",
    softLabel: "Soft skills",
    technical: [
      "Programming",
      "Frontend Development",
      "Backend Development",
      "Full-stack Development",
      "Databases",
      "REST APIs",
      "AI",
      "AI-assisted Development",
      "Git / GitHub",
      "Deployment",
      "Desktop Development",
      "Modern web technologies",
    ],
    soft: [
      "Communication",
      "Collaboration",
      "Teamwork",
      "Problem Solving",
      "Critical Thinking",
      "Creativity",
      "Adaptability",
      "Learning",
      "Organization",
      "Presentation",
    ],
  },
  vision: {
    eyebrow: "Vision",
    heading: "Just getting started.",
    intro: "This is early — I know that. But I have a clear sense of the direction I want to keep pushing in:",
    items: [
      "Go deeper into software development and full-stack engineering",
      "Build a stronger understanding of AI, and experiment with AI models myself",
      "Learn more about backends, databases, and software architecture",
      "Take on increasingly complex projects of my own",
      "Get better at turning ideas into real, working products",
      "Keep learning by building, not just studying",
      "Explore new technologies and look for real, practical uses for them",
    ],
    closing: "I'm at the start of this — but I know where I want to keep going.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Say hi.",
    paragraph:
      "Open to conversations about projects, collaboration, or just talking through an idea. The fastest way to reach me is email.",
  },
};

const cs: Content = {
  profile: {
    name: "Milan Fridrich",
    role: "Student a vývojář",
    motto: "Proměňuji nápady v technologie.",
    location: "Brno, Česko",
    email: "milan.fridrich3@gmail.com",
    github: "https://github.com/milanfridrich3",
    githubHandle: "milanfridrich3",
  },
  nav: {
    homeAria: "Milan Fridrich — domů",
    links: [
      { label: "Domů", href: "#home" },
      { label: "O mně", href: "#about" },
      { label: "AI a tech", href: "#ai" },
      { label: "Projekty", href: "#projects" },
      { label: "Dovednosti", href: "#skills" },
      { label: "Vize", href: "#vision" },
    ],
    pdf: "PDF",
    downloadPdf: "Stáhnout PDF",
    sayHi: "Ozvěte se",
    toggleMenu: "Přepnout menu",
    github: "GitHub",
    languageSwitcherAria: "Přepnout jazyk",
  },
  hero: {
    seeProjects: "Zobrazit projekty",
    sayHi: "Ozvěte se",
  },
  intro: {
    paragraph:
      "Student osmiletého gymnázia v Brně, se stále rostoucím zájmem o vývoj softwaru, umělou inteligenci a moderní technologie. Programování se učím hlavně prakticky, na skutečných projektech — vytvářím software a webové aplikace a cestou průběžně přibírám nové technologie. Stejně důležité jako samotný kód je pro mě to, jak proměnit nápad ve funkční, použitelný produkt.",
  },
  about: {
    eyebrow: "O mně",
    paragraphs: [
      "Jsem student osmiletého gymnázia v Brně.",
      "Programování a technologie se učím hlavně tak, že si stavím vlastní projekty a řeším skutečné problémy, jak přicházejí. Baví mě tvořit — vzít nápad a dotáhnout ho až k funkčnímu produktu.",
      "Psaní kódu je jen část toho všeho. Stejně mě zajímá, jak se produkt navrhuje, jak do sebe zapadají jeho jednotlivé části a jak ho dostat do podoby, kterou lidé skutečně použijí.",
      "Momentálně pracuji na dvou vlastních projektech — Petali a Project Pilot — a nové technologie přibírám podle toho, co si který z nich zrovna žádá.",
      "Když se něco rozbije, snažím se nejdřív pochopit proč, než abych rovnou hledal hotové řešení. AI používám jako nástroj pro učení, vývoj, brainstorming, řešení problémů a ladění chyb.",
      "Mimo programování hraji badminton, věnuji se dalším sportům a rád trávím čas venku — lyžuji, jezdím na kole, fotím a obecně mám rád přírodu.",
      "Na technologiích mě přitahuje přesně tohle: schopnost proměnit vlastní nápad v něco, co opravdu funguje.",
    ],
  },
  aiTech: {
    eyebrow: "AI a technologie",
    heading: "Nástroj, který moje uvažování rozšiřuje, ne nahrazuje.",
    aiParagraphs: [
      "AI pro mě není jen další položka na seznamu nástrojů — je součástí toho, jak se učím a tvořím. Používám ji při práci na vlastních projektech, abych se rychleji dostal k novým technologiím a lépe pochopil jednotlivé koncepty.",
      "Hodí se mi na brainstorming, na hledání různých přístupů k problému i na ladění chyb, když něco nefunguje tak, jak by mělo.",
      "Začal jsem také experimentovat přímo s AI modely, včetně jejich spouštění lokálně, a zajímá mě, jak lze AI zabudovat přímo do softwaru — nejen ji používat vedle něj. Pro mě je to nástroj, který rozšiřuje, co dokážu, a zrychluje, jak rychle se učím. Nenahrazuje přemýšlení ani samotné programování.",
    ],
    areasLabel: "Oblasti, ve kterých se pohybuji",
    areas: [
      "Vývoj softwaru",
      "Vývoj webu",
      "Frontendový vývoj",
      "Backendový vývoj",
      "Databáze",
      "API",
      "Nasazování",
      "Git / GitHub",
      "AI",
      "Moderní vývojářské nástroje",
    ],
  },
  work: {
    eyebrow: "Projekty",
    heading: "Dva projekty, postavené od základů.",
  },
  projects: [
    {
      slug: "petali",
      name: "Petali",
      kicker: "01 · Osobní projekt",
      tagline: "Počítač, který mluví jazykem, jakému rozumíte.",
      paragraphs: [
        "Petali je osobní projekt, který spojuje monitorování počítače s vizuálním, živým společníkem na ploše — a mění tak syrová systémová data v něco přístupnějšího a na první pohled srozumitelnějšího.",
        "Začalo to jako jednoduchý HTML prototyp a postupně z toho vznikla plnohodnotná desktopová aplikace. Cestou mě to zavedlo daleko za hranice frontendu — k monitorování systému, balení aplikace a jejímu nasazení, a k tomu ještě samostatný marketingový web. Je to projekt, který mě nejvíc naučil o všem, co se odehrává poté, co je hotové rozhraní.",
      ],
      link: { label: "Navštívit Petali", href: "https://petali.netlify.app" },
      accent: "sage",
      year: "2026",
    },
    {
      slug: "project-pilot",
      name: "Project Pilot",
      kicker: "02 · Full-stack projekt",
      tagline: "Zůstaňte na kurzu.",
      paragraphs: [
        "Project Pilot je můj pokus postavit něco ambicióznějšího: plnohodnotnou webovou platformu pro organizaci projektů a koordinaci lidí, kteří na nich pracují.",
        "Jeho stavba znamená práci napříč celým stackem — frontend, backend, API, databáze, autentizace — a učení se, jak tyhle části zapadnou do jednoho fungujícího systému. Součástí je i práce s e-maily, ověřování uživatelů, oprávnění a nasazení. Pořád se to vyvíjí — postupně to rozšiřuji a opravuji.",
      ],
      link: { label: "Navštívit Project Pilot", href: "https://project-pilot.is-local.org" },
      accent: "blue",
      year: "2026",
    },
  ],
  skills: {
    eyebrow: "Dovednosti",
    heading: "Co si nesu do práce.",
    technicalLabel: "Technické",
    softLabel: "Měkké dovednosti",
    technical: [
      "Programování",
      "Frontendový vývoj",
      "Backendový vývoj",
      "Full-stack vývoj",
      "Databáze",
      "REST API",
      "AI",
      "Vývoj s pomocí AI",
      "Git / GitHub",
      "Nasazování",
      "Desktopový vývoj",
      "Moderní webové technologie",
    ],
    soft: [
      "Komunikace",
      "Spolupráce",
      "Týmová práce",
      "Řešení problémů",
      "Kritické myšlení",
      "Kreativita",
      "Adaptabilita",
      "Učení se",
      "Organizace",
      "Prezentace",
    ],
  },
  vision: {
    eyebrow: "Vize",
    heading: "Teprve začínám.",
    intro: "Vím, že jsem na začátku. Ale mám jasnou představu o tom, kterým směrem se chci dál posouvat:",
    items: [
      "Jít hlouběji do vývoje softwaru a full-stack inženýrství",
      "Budovat hlubší porozumění AI a sám experimentovat s AI modely",
      "Učit se víc o backendu, databázích a softwarové architektuře",
      "Pouštět se do stále náročnějších vlastních projektů",
      "Zlepšovat se v proměně nápadů ve skutečné, fungující produkty",
      "Dál se učit tvorbou, ne jen studiem",
      "Objevovat nové technologie a hledat pro ně reálné, praktické využití",
    ],
    closing: "Jsem teprve na začátku — ale vím, kam chci dál mířit.",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Ozvěte se.",
    paragraph:
      "Jsem otevřený rozhovorům o projektech, spolupráci nebo jen probrání nápadu. Nejrychlejší cesta, jak mě zastihnout, je e-mail.",
  },
};

export const content: Record<Lang, Content> = { en, cs };
