export const products = [
  {
    name: "LockedPDFs",
    description:
      "Browser-side PDF toolkit for Indian professionals. Merge, split, compress, protect — zero server uploads, 100% privacy.",
    status: "live" as const,
    url: "https://lockedpdfs.com",
    emoji: "🔒",
    tags: ["500+ users", "Privacy-first", "Free"],
  },
  {
    name: "Money Smart Kids",
    description:
      "Financial literacy course for Indian children aged 5-13. 30 interactive lessons on saving, spending, and investing.",
    status: "live" as const,
    url: "https://moneysmartkids.in",
    emoji: "🧒",
    tags: ["Ages 5-13", "30 lessons", "Razorpay"],
  },
  {
    name: "TaxPilot",
    description:
      "ITR filing automation for CA firms — from free calculator to full filing packages. AI-powered, compliance-first.",
    status: "in-dev" as const,
    url: "#",
    emoji: "🧾",
    tags: ["AI-powered", "For CAs", "ITR automation"],
  },
  {
    name: "FinLens Ratio Engine",
    description:
      "AI-powered financial ratio analysis platform. Upload financials, get instant analysis with fraud & distress scoring.",
    status: "in-dev" as const,
    url: "#",
    emoji: "📊",
    tags: ["Web app", "AI analysis", "Indian GAAP"],
  },
];

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Story", href: "#story" },
  { label: "Resources", href: "#resources" },
  { label: "Connect", href: "#connect" },
];

export const sectionIds = [
  "hero",
  "products",
  "story",
  "resources",
  "connect",
] as const;
