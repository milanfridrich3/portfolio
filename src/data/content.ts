// All content here follows Milan's content schema directly.
// Nothing invented — only what was explicitly provided.

export const profile = {
  name: "Milan Fridrich",
  role: "Student & Developer",
  motto: "Turning ideas into technology.",
  location: "Brno, Czechia",
  email: "milan.fridrich3@gmail.com",
  github: "https://github.com/milanfridrich3",
  githubHandle: "milanfridrich3",
};

export const intro = {
  paragraph:
    "A student at an eight-year grammar school in Brno, with a growing interest in software development, AI, and modern technology. Programming is learned mostly hands-on, through building real projects — creating software and web applications, and continually picking up new technologies along the way. What matters just as much as the code itself is figuring out how to turn an idea into an actual, usable product.",
};

export const about = {
  paragraphs: [
    "I'm a student at an eight-year grammar school in Brno, Czechia.",
    "I learn programming and technology mainly by building my own projects and working through real problems as they come up. I like creating things — starting from an idea and following it all the way through to a working product.",
    "Writing code is only part of it. I'm just as interested in how a product gets designed, how its different parts connect, and how to get it into a shape people can actually use.",
    "Right now I'm working on two projects of my own — Petali and Project Pilot — and I pick up new technologies as each one needs them.",
    "When something breaks, I try to understand why before looking for a fix, rather than just copying a ready-made answer. I use AI as a tool for learning, development, brainstorming, problem-solving, and debugging.",
    "Outside of programming, I play badminton, enjoy other sports, and like being outdoors — skiing, cycling, photography, and generally spending time in nature.",
    "What draws me to technology is exactly that: the ability to turn your own idea into something that actually works.",
  ],
};

export const aiTech = {
  aiParagraphs: [
    "AI isn't just one more tool on a list for me — it's part of how I learn and build. I use it while working on my own projects, to pick up new technologies faster and understand concepts more clearly.",
    "It's useful for brainstorming, for exploring different approaches to a problem, and for debugging when something isn't working the way it should.",
    "I've also started experimenting with AI models directly, including running them locally, and I'm interested in how AI can be built into software itself — not just used alongside it. For me, it extends what I can do and speeds up how fast I learn. It doesn't replace the thinking or the coding.",
  ],
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
};

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

export const projects: Project[] = [
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
    link: { label: "Visit Project Pilot", href: "https://welcomeaboard.netlify.app" },
    accent: "blue",
    year: "2026",
  },
];

export const skills = {
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
};

export const vision = {
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
};
