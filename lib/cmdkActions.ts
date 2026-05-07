export type CmdAction = {
  id: string;
  glyph: string;
  label: string;
  meta: string;
  href?: string;
  download?: string;
};

export const cmdActions: CmdAction[] = [
  { id: "sec-workbook", glyph: "§", label: "Go to Workbook (toolkits)", meta: "sheet 02", href: "#workbook" },
  { id: "sec-services", glyph: "§", label: "Go to Services", meta: "sheet 03", href: "#services" },
  { id: "sec-premium", glyph: "§", label: "Go to Premium Toolkits", meta: "sheet 04", href: "#premium" },
  { id: "sec-about", glyph: "§", label: "Go to About", meta: "sheet 05", href: "#about" },
  {
    id: "dl-ratio",
    glyph: "⬇",
    label: "Download Ratio Analysis Toolkit",
    meta: "free",
    href: "/downloads/Ratio_Analysis_Toolkit_Template.xlsx",
    download: "Ratio_Analysis_Toolkit_Template.xlsx",
  },
  {
    id: "dl-tax-25-26",
    glyph: "⬇",
    label: "Download Tax Calc FY 25-26",
    meta: "free",
    href: "/downloads/Income_Tax_Calculator_FY2025-26.xlsx",
    download: "Income_Tax_Calculator_FY2025-26.xlsx",
  },
  {
    id: "dl-tax-26-27",
    glyph: "⬇",
    label: "Download Tax Planner TY 26-27",
    meta: "free",
    href: "/downloads/Income_Tax_Planner_TY2026-27.xlsx",
    download: "Income_Tax_Planner_TY2026-27.xlsx",
  },
  { id: "calc", glyph: "∑", label: "Try the live ratio calculator", meta: "tool", href: "#workbook" },
  { id: "email", glyph: "✉", label: "Email Rushabh", meta: "mail", href: "mailto:rushabh.jamdade@mail.ca.in" },
  { id: "wa", glyph: "☎", label: "WhatsApp Rushabh", meta: "instant", href: "https://wa.me/918805155767" },
  { id: "li", glyph: "↗", label: "View on LinkedIn", meta: "profile", href: "https://www.linkedin.com/in/rushabhjamdade/" },
  { id: "blog", glyph: "✎", label: "Read the blog", meta: "writing", href: "/blog" },
];
