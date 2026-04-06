export const products = [
  {
    name: "LockedPDFs",
    description:
      "Browser-side PDF toolkit for Indian professionals. Merge, split, compress, and protect PDFs — zero server uploads, 100% privacy.",
    status: "live" as const,
    tags: ["Next.js", "Browser APIs", "PDF.js"],
    url: "#",
    emoji: "🔒",
    featured: true,
    gradient: "from-slate-500 to-blue-600",
    mockupType: "document" as const,
    stats: "100% client-side processing",
  },
  {
    name: "Money Smart Kids",
    description:
      "Financial literacy course for Indian children aged 5-13. Fun, interactive lessons on saving, spending, and investing.",
    status: "live" as const,
    tags: ["Next.js", "Supabase", "Gamification"],
    url: "https://moneysmartkids.in",
    emoji: "🧒",
    featured: false,
    gradient: "from-amber-400 to-orange-500",
    mockupType: "cards" as const,
    stats: "Ages 5-13 · Parent-approved",
  },
  {
    name: "TaxPilot",
    description:
      "ITR filing automation for CA firms — from free calculator to full filing packages. AI-powered, compliance-first.",
    status: "coming-soon" as const,
    tags: ["Next.js", "Claude API", "Tax Engine"],
    url: "#",
    emoji: "🧾",
    featured: false,
    gradient: "from-slate-400 to-indigo-500",
    mockupType: "form" as const,
  },
  {
    name: "SplitEasy",
    description:
      "AI-powered expense splitting app. Scan receipts, split bills, settle up — no more awkward money conversations.",
    status: "beta" as const,
    tags: ["Next.js", "Claude API", "OCR"],
    url: "#",
    emoji: "💸",
    featured: false,
    gradient: "from-violet-400 to-pink-500",
    mockupType: "cards" as const,
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
  "resources",
  "booking",
  "newsletter",
] as const;
