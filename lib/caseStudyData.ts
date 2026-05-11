export type CaseStat = {
  value: string; // can include _italic_ accent (we'll split on the underscore pair)
  emphasis?: string;
  note: string;
};

export const beforeStats: CaseStat[] = [
  { value: "12", emphasis: "sheets", note: "~200 formulas, no docs" },
  { value: "7", emphasis: "errors", note: "Critical formula errors undetected" },
  { value: "0", emphasis: "dash", note: "Partner reads 12 raw sheets" },
  { value: "—", emphasis: "RERA", note: "No tracking, no cost/sqft, no runway" },
  { value: "PLACE-", emphasis: "holder", note: "Ratio analysis with dummy data" },
  { value: "∅", emphasis: "insight", note: "Read-only spreadsheet, no signals" },
];

export const afterStats: CaseStat[] = [
  { value: "15", emphasis: "sheets", note: "709 formulas · zero errors" },
  { value: "28", emphasis: "ratios", note: "With Altman Z-Score distress" },
  { value: "1", emphasis: "dash", note: "Days-of-cash countdown live" },
  { value: "0–", emphasis: "100", note: "RERA health score · penalty risk in ₹" },
  { value: "Auto", emphasis: "letter", note: "Partner letter in plain English" },
  { value: "▲ 10x", emphasis: "signal", note: "Decision tool, not a data dump" },
];
