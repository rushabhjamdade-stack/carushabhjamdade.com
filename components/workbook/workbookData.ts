// Workbook section data — pure view over lib/constants.ts.
// Rows are assigned spreadsheet coordinates (row 1 = header, data starts at row 2).

import { excelTools, softwares, type ExcelTool, type Software } from "@/lib/constants";

export type SheetId = "toolkits" | "softwares" | "summary";

export type ColumnDef = {
  key: string;
  header: string;
  // fraction of the data grid (sum to 1.0 across all non-index columns)
  weight: number;
  align?: "left" | "right" | "center";
};

// Shared column layout for Toolkits & Softwares sheets.
// Column letter = index in this array, starting at B (A is row number).
export const dataColumns: ColumnDef[] = [
  { key: "name",     header: "Name",      weight: 2.2 },
  { key: "type",     header: "Type",      weight: 1.2 },
  { key: "tagline",  header: "One-liner", weight: 3.2 },
  { key: "signal",   header: "Signal",    weight: 2.0 },
  { key: "assets",   header: "Assets",    weight: 1.0, align: "center" },
  { key: "action",   header: "Action",    weight: 1.4, align: "right" },
];

// "A" is reserved for the row index. Data columns start at "B".
export const COLUMN_LETTERS = ["A", "B", "C", "D", "E", "F", "G"] as const;
export type ColumnLetter = typeof COLUMN_LETTERS[number];

export type ToolkitRow = {
  kind: "toolkit";
  rowIdx: number;
  source: ExcelTool;
  name: string;
  type: string;
  tagline: string;
  signal: string;
  assets: string;
  action: string;
};

export type SoftwareRow = {
  kind: "software";
  rowIdx: number;
  source: Software;
  name: string;
  type: string;
  tagline: string;
  signal: string;
  assets: string;
  action: string;
};

export type SummaryRow = {
  kind: "summary";
  rowIdx: number;
  formula: string;
  value: string;
};

export type WorkbookRow = ToolkitRow | SoftwareRow | SummaryRow;

// -------------------------------------------------------------------
//  Toolkits sheet
// -------------------------------------------------------------------

export const toolkitRows: ToolkitRow[] = excelTools.map((t, i) => {
  const screenshotCount = t.screenshots?.length ?? (t.image ? 1 : 0);
  return {
    kind: "toolkit",
    rowIdx: i + 2, // row 1 = header
    source: t,
    name: t.title,
    type: t.act ? t.act.replace(/, \d{4}$/, "") : "Toolkit",
    tagline: t.tagline,
    signal: t.hook,
    assets: screenshotCount > 0 ? `📷 ${screenshotCount}` : "—",
    action: "⬇ Download",
  };
});

// -------------------------------------------------------------------
//  Softwares sheet
// -------------------------------------------------------------------

export const softwareRows: SoftwareRow[] = softwares.map((s, i) => ({
  kind: "software",
  rowIdx: i + 2,
  source: s,
  name: s.title,
  type: s.status === "live" ? "Live Product" : "Shipping Soon",
  tagline: s.tagline,
  signal: s.hook ?? (s.status === "live" ? "Open & use" : "Notify me"),
  assets: s.status === "live" ? "🔗 live" : "—",
  action: s.status === "live" ? "↗ Visit" : "✉ Notify",
}));

// -------------------------------------------------------------------
//  Summary sheet — "the balance sheet of Rushabh"
// -------------------------------------------------------------------

function sumDownloadsFromHook(hook: string | undefined): number {
  if (!hook) return 0;
  const match = hook.match(/(\d[\d,]*)\s*\+?/);
  if (!match) return 0;
  return parseInt(match[1].replace(/,/g, ""), 10) || 0;
}

const totalDownloads = excelTools.reduce(
  (acc, t) => acc + sumDownloadsFromHook(t.hook),
  0,
);
const liveSoftwares = softwares.filter((s) => s.status === "live").length;
const soonSoftwares = softwares.filter((s) => s.status === "soon").length;

export const summaryRows: SummaryRow[] = [
  { kind: "summary", rowIdx: 2, formula: '=COUNT(toolkits)',           value: String(excelTools.length) },
  { kind: "summary", rowIdx: 3, formula: '=COUNT(softwares, status:live)', value: String(liveSoftwares) },
  { kind: "summary", rowIdx: 4, formula: '=COUNT(softwares, status:soon)', value: String(soonSoftwares) },
  { kind: "summary", rowIdx: 5, formula: '=SUM(downloads_from_hooks)', value: totalDownloads > 0 ? `${totalDownloads.toLocaleString()}+` : "—" },
  { kind: "summary", rowIdx: 6, formula: '=YEARS_AS_CA()',             value: "10" },
  { kind: "summary", rowIdx: 7, formula: '=YEARS_SHIPPING_SOLO()',     value: "2" },
  { kind: "summary", rowIdx: 8, formula: '=AVG(joy_per_shipped_thing)', value: "∞" },
  { kind: "summary", rowIdx: 9, formula: '=COUNT(coffees_today)',      value: "3" },
];

// -------------------------------------------------------------------
//  Sheets
// -------------------------------------------------------------------

export const sheets = [
  { id: "toolkits" as const,  label: "Toolkits",  rows: toolkitRows },
  { id: "softwares" as const, label: "Softwares", rows: softwareRows },
  { id: "summary" as const,   label: "∑ Summary", rows: summaryRows },
];

export function getCellValue(row: WorkbookRow, colKey: string): string {
  if (row.kind === "summary") {
    if (colKey === "formula") return row.formula;
    if (colKey === "value") return row.value;
    return "";
  }
  switch (colKey) {
    case "name":    return row.name;
    case "type":    return row.type;
    case "tagline": return row.tagline;
    case "signal":  return row.signal;
    case "assets":  return row.assets;
    case "action":  return row.action;
    default:        return "";
  }
}

// A1-style ref for a cell: col letter + row number.
// colIdx is 0-based into COLUMN_LETTERS (0 = A = row number column).
export function cellRef(colIdx: number, rowIdx: number): string {
  const letter = COLUMN_LETTERS[colIdx] ?? "?";
  return `${letter}${rowIdx}`;
}

// Build a "formula" string for display in the formula bar.
export function formulaForCell(
  row: WorkbookRow | null,
  colKey: string | null,
  isHeader: boolean,
): string {
  if (isHeader) {
    return colKey ? `=HEADER("${colKey}")` : "";
  }
  if (!row || !colKey) return "";
  if (row.kind === "summary") {
    if (colKey === "formula") return row.formula;
    if (colKey === "value")   return `=EVAL(${row.formula.replace(/^=/, "")})`;
    return "";
  }
  const value = getCellValue(row, colKey);
  if (!value) return "";
  switch (colKey) {
    case "name":    return `=PRODUCT("${value}")`;
    case "type":    return `=TYPE("${value}")`;
    case "tagline": return `=TAGLINE("${value}")`;
    case "signal":  return `=SIGNAL("${value}")`;
    case "assets":  return `=ASSETS(${value})`;
    case "action":  return `=ACTION("${value}")`;
    default:        return `="${value}"`;
  }
}
