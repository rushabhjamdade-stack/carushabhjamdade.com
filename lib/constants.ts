export const products = [
  {
    name: "LockedPDFs",
    description:
      "Browser-side PDF toolkit for Indian professionals. Zero server uploads, 100% privacy.",
    status: "live" as const,
    tags: ["Next.js", "Browser APIs"],
    url: "#",
    emoji: "🔒",
    featured: true,
  },
  {
    name: "Money Smart Kids",
    description:
      "Financial literacy course for Indian children aged 5-13. Fun, interactive, and parent-approved.",
    status: "live" as const,
    tags: ["Next.js", "Supabase"],
    url: "https://moneysmartkids.in",
    emoji: "🧒",
    featured: false,
  },
  {
    name: "TaxPilot",
    description:
      "ITR filing automation for CA firms - from free calculator to full filing packages.",
    status: "coming-soon" as const,
    tags: ["Next.js", "Claude API"],
    url: "#",
    emoji: "🧾",
    featured: false,
  },
  {
    name: "SplitEasy",
    description:
      "AI-powered expense splitting app. No more awkward money conversations.",
    status: "beta" as const,
    tags: ["Next.js", "Claude API"],
    url: "#",
    emoji: "💸",
    featured: false,
  },
];

export const navLinks = [
  { label: "What I Do", href: "#whatido" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#content" },
  { label: "Resources", href: "#resources" },
];

export const scrambleWords = [
  "AI valuation engines",
  "practice management for CAs",
  "financial literacy for kids",
  "tax filing automation",
  "tools that make finance smarter",
];

export const sectionIds = [
  "hero",
  "whatido",
  "products",
  "about",
  "content",
  "tools",
  "resources",
  "booking",
  "newsletter",
] as const;
