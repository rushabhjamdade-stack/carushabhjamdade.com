export type WorkbookRow = {
  icon: string;
  name: string;
  type: string;
  desc: string;
  signal: string;
  assets: string;
  href: string;
  download?: string;
};

export const toolkits: WorkbookRow[] = [
  {
    icon: "∑",
    name: "Ratio Analysis Toolkit",
    type: "Toolkit",
    desc: "51 financial ratios + fraud & distress scores. Drop in your trial balance, get the full picture.",
    signal: "450+ CAs downloaded from LinkedIn",
    assets: "📷 5",
    href: "/downloads/Ratio_Analysis_Toolkit_Template.xlsx",
    download: "Ratio_Analysis_Toolkit_Template.xlsx",
  },
  {
    icon: "%",
    name: "Tax Calc · FY 25-26",
    type: "IT Act",
    desc: "Old vs New regime, side-by-side. Drop your numbers, see the cheaper path.",
    signal: "250+ downloads · ITR season is here",
    assets: "📷 5",
    href: "/downloads/Income_Tax_Calculator_FY2025-26.xlsx",
    download: "Income_Tax_Calculator_FY2025-26.xlsx",
  },
  {
    icon: "τ",
    name: "Tax Planner · TY 26-27",
    type: "IT Act",
    desc: "Plan ahead under the new Income Tax Act 2025.",
    signal: "150+ downloads · New Act 2025 ready",
    assets: "📷 5",
    href: "/downloads/Income_Tax_Planner_TY2026-27.xlsx",
    download: "Income_Tax_Planner_TY2026-27.xlsx",
  },
];

export const softwares: WorkbookRow[] = [
  {
    icon: "⚿",
    name: "LockedPDFs",
    type: "SaaS",
    desc: "Merge, split, compress, protect PDFs. Zero server uploads. 100% in your browser.",
    signal: "Live · v1.2 — paid users",
    assets: "🌐 web",
    href: "https://lockedpdfs.com/",
  },
  {
    icon: "∇",
    name: "AuditTrail (β)",
    type: "SaaS",
    desc: "AI that reads your client's Excel and surfaces formula risks before the partner does.",
    signal: "Closed beta · 12 firms",
    assets: "📷 3",
    href: "#newsletter",
  },
];

export const workbookSheets = [
  { id: "toolkits", label: "Toolkits" },
  { id: "softwares", label: "Softwares" },
  { id: "summary", label: "∑ Summary" },
] as const;
