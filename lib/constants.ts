// V1 data constants — see WEBSITE_SPEC.md § 7

export type ToolScreenshot = {
  tab: string; // sheet tab name shown below the image
  src: string; // path relative to /public/
};

export type ExcelTool = {
  id: string;
  title: string;
  label: string; // e.g. "v2.0 · APR 2026"
  tagline: string;
  hook: string; // e.g. "350+ downloads"
  filename: string; // must exist in /public/downloads/
  size: "large" | "standard";
  image?: string; // single screenshot (for simple tools)
  screenshots?: ToolScreenshot[]; // multiple sheets with tab switcher
  act?: string; // e.g. "Income Tax Act, 1961"
  highlights?: string[]; // 3 key differentiators shown as bullet list
};

export type Software = {
  id: string;
  title: string;
  label: string;
  tagline: string;
  hook?: string;
  status: "live" | "soon";
  url: string;
  emoji: string;
  size: "large" | "standard";
  image?: string; // e.g. "/images/tools/lockedpdfs.png" — real screenshot of the live product
};

export const excelTools: ExcelTool[] = [
  {
    id: "ratio-analysis",
    title: "Ratio Analysis Toolkit",
    label: "v2.0 · APR 2026",
    tagline:
      "51 financial ratios + fraud & distress scores. Drop in your trial balance, get the full picture.",
    hook: "450+ CAs downloaded from LinkedIn",
    filename: "Ratio_Analysis_Toolkit_Template.xlsx",
    size: "standard",
    highlights: [
      "51 ratios — liquidity, profitability, leverage & efficiency",
      "Beneish M-Score, Altman Z-Score, Piotroski F-Score built in",
      "Auto-generated Health Dashboard — ready for management review",
    ],
    screenshots: [
      { tab: "Data Input", src: "/images/tools/Ratio Analysis/1 Data Input.jpeg" },
      { tab: "Ratio Analysis", src: "/images/tools/Ratio Analysis/2 Ratio Analysis.jpeg" },
      { tab: "Fraud & Distress", src: "/images/tools/Ratio Analysis/3 Fraud & Distress Scores.jpeg" },
      { tab: "Health Dashboard", src: "/images/tools/Ratio Analysis/4 Health Dashboard.jpeg" },
      { tab: "Common-Size", src: "/images/tools/Ratio Analysis/5 Common-Size Analysis.jpeg" },
    ],
  },
  {
    id: "tax-calc-25-26",
    title: "Tax Calc · FY 25-26",
    label: "v1.0 · APR 2026",
    tagline:
      "Old vs New regime, side-by-side. Drop your numbers, see the cheaper path.",
    hook: "250+ downloads · ITR season is here",
    filename: "Income_Tax_Calculator_FY2025-26.xlsx",
    size: "standard",
    act: "Income Tax Act, 1961",
    screenshots: [
      { tab: "Input", src: "/images/tools/Income Tax Calculator FY 2025-26/Input.jpeg" },
      { tab: "Computation", src: "/images/tools/Income Tax Calculator FY 2025-26/Computation 1.jpeg" },
      { tab: "Computation 2", src: "/images/tools/Income Tax Calculator FY 2025-26/Computation 2.jpeg" },
      { tab: "Summary", src: "/images/tools/Income Tax Calculator FY 2025-26/Summary & Insights 1.jpeg" },
      { tab: "Insights", src: "/images/tools/Income Tax Calculator FY 2025-26/Summary & Insights 2.jpeg" },
    ],
    highlights: [
      "Ready for ITR filing season — use it now",
      "Old section numbers (80C, 80D, 10(13A)) everyone knows",
      "Share directly with clients as a value-add",
    ],
  },
  {
    id: "tax-planner-26-27",
    title: "Tax Planner · TY 26-27",
    label: "NEW · APR 2026",
    tagline: "Plan ahead under the new Income Tax Act 2025.",
    hook: "150+ downloads · New Act 2025 ready",
    filename: "Income_Tax_Planner_TY2026-27.xlsx",
    size: "standard",
    act: "Income Tax Act, 2025",
    screenshots: [
      { tab: "Input", src: "/images/tools/Income Tax Planner TY 2026-27/Input.jpeg" },
      { tab: "Computation", src: "/images/tools/Income Tax Planner TY 2026-27/Computation 1.jpeg" },
      { tab: "Computation 2", src: "/images/tools/Income Tax Planner TY 2026-27/Computation 2.jpeg" },
      { tab: "Summary", src: "/images/tools/Income Tax Planner TY 2026-27/Summary & Insights 1.jpeg" },
      { tab: "Insights", src: "/images/tools/Income Tax Planner TY 2026-27/Summary & Insights 2.jpeg" },
    ],
    highlights: [
      "New section numbers with old-section mapping for easy reference",
      "Plan your client's taxes a full year in advance",
      "Give clients a head start — share as a value-add service",
    ],
  },
];

export const softwares: Software[] = [
  {
    id: "lockedpdfs",
    title: "LockedPDFs",
    label: "LIVE · CLIENT-SIDE",
    tagline:
      "Merge, split, compress, protect PDFs. Zero server uploads. 100% in your browser.",
    hook: "Nothing leaves your machine. Ever.",
    status: "live",
    url: "https://lockedpdfs.com/",
    emoji: "🔒",
    size: "large",
    image: "/images/tools/LockedPDFs/HomePage.jpeg",
  },
  {
    id: "tax-soon",
    title: "Something new in tax",
    label: "SHIPPING SOON",
    tagline: "Can't tell you yet. Subscribe below and I will.",
    status: "soon",
    url: "#newsletter",
    emoji: "🧾",
    size: "standard",
  },
  {
    id: "audit-soon",
    title: "Something new in audit",
    label: "SHIPPING SOON",
    tagline: "Small teaser. Big build underway.",
    status: "soon",
    url: "#newsletter",
    emoji: "🔎",
    size: "standard",
  },
];

export const navLinks = [
  { label: "Excel Tools", href: "#workbook-toolkits" },
  { label: "Softwares", href: "#workbook-softwares" },
  { label: "Services", href: "#services" },
  { label: "Toolkits", href: "#premium-toolkits" },
  { label: "About", href: "#about" },
];

export const sectionIds = [
  "hero",
  "workbook",
  "services",
  "premium-toolkits",
  "about",
  "newsletter",
] as const;

/* ------------------------------------------------------------------ */
/*   Services (§ 02 — paid engagements for CA firms / corporates)     */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  tag: string; // "DIAGNOSTIC" | "FULL BUILD" | "ENHANCEMENT" | "PRODUCTIZE"
  title: string;
  description: string;
  highlights: string[];
  startPrice: string; // "₹10,000"
  timeline: string;   // "3–5 working days"
};

export const services: Service[] = [
  {
    id: "audit-fix",
    tag: "DIAGNOSTIC",
    title: "Audit & fix",
    description:
      "Send me your existing Excel file. I tear it apart — every formula, every logic gap, every structural weakness. You get back a professional diagnostic report with severity ratings and a fix roadmap.",
    highlights: [
      "Cell-by-cell formula audit — catches errors you don’t know exist",
      "Professional report (Word/PDF) — share with your team or client",
      "Prioritized fix plan — know exactly what to tackle first",
    ],
    startPrice: "₹5,000",
    timeline: "3–5 working days",
  },
  {
    id: "build-from-scratch",
    tag: "FULL BUILD",
    title: "Build from scratch",
    description:
      "Tell me what you need — MIS pack, financial model, valuation workbook, board reporting template. I architect, design, and deliver a production-ready tool with zero formula errors.",
    highlights: [
      "Config-driven architecture — reusable across all your clients",
      "Industry-standard color coding (blue = input, black = formula, green = cross-sheet)",
      "White-label ready — your firm’s name, your client’s branding",
    ],
    startPrice: "₹12,500",
    timeline: "1–3 weeks",
  },
  {
    id: "enhance-upgrade",
    tag: "ENHANCEMENT",
    title: "Enhance & upgrade",
    description:
      "Your file works but it’s basic. I add the intelligence layer — dashboards, ratio analysis, automated summaries, scenario models, conditional formatting, cross-sheet logic.",
    highlights: [
      "Transform data dumps into decision tools",
      "Add KPIs, traffic-light signals, and auto-generated insights",
      "Keep your existing structure — just make it 10x better",
    ],
    startPrice: "₹7,500",
    timeline: "1–2 weeks",
  },
  {
    id: "productize",
    tag: "PRODUCTIZE",
    title: "Template productization",
    description:
      "You built an Excel file for one client. I turn it into a reusable, config-driven template that works for ALL your clients in that industry. Fill the config sheet, everything auto-populates.",
    highlights: [
      "One template, unlimited clients — stop rebuilding from scratch",
      "Input validation and error prevention built in",
      "Includes user guide + 2 demo versions with sample data",
    ],
    startPrice: "₹25,000",
    timeline: "2–4 weeks",
  },
];

export const serviceAudience = [
  "CA Firms",
  "CS Firms",
  "CMA Practices",
  "Corporate Finance Teams",
  "Startups",
  "Consulting Firms",
];

export const serviceShowcase = {
  title: "From broken to bulletproof.",
  subtitle: "A real MIS transformation (client anonymized)",
  before: [
    "12 sheets, ~200 formulas",
    "7 critical formula errors undetected",
    "Ratio analysis with placeholder data",
    "No dashboard — partner reads 12 raw sheets",
    "No RERA tracking, no cost per sq ft, no cash runway",
  ],
  after: [
    "15 sheets, 709 formulas, zero errors",
    "28 financial ratios with distress detection",
    "Executive dashboard with days-of-cash countdown",
    "RERA health score (0–100) with penalty risk in ₹",
    "Auto-generated partner letter in plain English",
  ],
};

/* ------------------------------------------------------------------ */
/*   Premium Toolkits (§ 03 — paid products)                           */
/* ------------------------------------------------------------------ */

export type PremiumToolkit = {
  id: string;
  tag: string;         // "v3.0 · APR 2026" or "COMING SOON"
  title: string;
  price?: string;      // "₹2,999" when available
  status: "available" | "soon";
  description: string;
  proofLine: string;
  highlights: string[];
};

export const premiumToolkits: PremiumToolkit[] = [
  {
    id: "builder-mis",
    tag: "v3.0 · APR 2026",
    title: "Builder & Developer MIS Suite",
    price: "₹2,999",
    status: "available",
    description:
      "The complete MIS pack for CA firms serving real estate builders and developers. 15 sheets, 709 formulas, zero errors. Config-driven — works for any builder, any number of projects.",
    proofLine: "Built from auditing a real builder’s MIS. Every formula pressure-tested.",
    highlights: [
      "Days-of-cash countdown, RERA health score (0–100), break-even price calculator",
      "28 financial ratios with Altman Z-Score distress detection",
      "Auto-generated partner letter — one page that tells the full story",
    ],
  },
  {
    id: "startup-model",
    tag: "COMING SOON",
    title: "Startup Financial Model",
    status: "soon",
    description:
      "Revenue forecasting, unit economics, burn rate & runway, scenario analysis. Built to survive investor due diligence.",
    proofLine: "Designed with what VCs actually check during diligence.",
    highlights: [
      "3-statement model with monthly + annual projections",
      "Unit economics calculator — CAC, LTV, payback period",
      "Scenario toggle — optimistic, base, pessimistic in one click",
    ],
  },
  {
    id: "manufacturing-mis",
    tag: "COMING SOON",
    title: "Manufacturing MIS Pack",
    status: "soon",
    description:
      "Production cost tracking, capacity utilization, raw material variance, working capital cycle. For CA firms serving manufacturers.",
    proofLine: "Covers what every factory CFO asks about but never gets in the MIS.",
    highlights: [
      "Bill of materials cost variance — budget vs actual per product",
      "Capacity utilization dashboard with bottleneck identification",
      "Working capital cycle in days — with trend tracking",
    ],
  },
];
