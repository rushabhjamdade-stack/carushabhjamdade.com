export type Sheet = {
  id: string;
  num: string;
  label: string;
  filename: string;
};

export const sheets: Sheet[] = [
  { id: "hero", num: "01", label: "Intro", filename: "hero" },
  { id: "workbook", num: "02", label: "Toolkits", filename: "toolkits" },
  { id: "services", num: "03", label: "Services", filename: "services" },
  { id: "premium", num: "04", label: "Premium", filename: "premium" },
  { id: "about", num: "05", label: "About", filename: "about" },
  { id: "newsletter", num: "06", label: "Newsletter", filename: "newsletter" },
];
