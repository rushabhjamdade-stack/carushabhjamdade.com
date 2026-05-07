"use client";

/**
 * ExcelMockup — a pixel-accurate HTML/CSS mockup of an Excel spreadsheet.
 * Used in place of real screenshots; swap this component's usage with an
 * <img> when real screenshots of the .xlsx files are available.
 */

export type ExcelMockupRow = {
  label: string;
  values: (string | number)[];
  highlight?: boolean;
};

interface ExcelMockupProps {
  sheetName?: string;
  columns: string[];
  rows: ExcelMockupRow[];
  compact?: boolean;
  className?: string;
}

export default function ExcelMockup({
  sheetName = "Sheet1",
  columns,
  rows,
  compact = false,
  className = "",
}: ExcelMockupProps) {
  const rowNumberWidth = compact ? "24px" : "32px";
  const cellPadX = compact ? "8px" : "12px";
  const cellPadY = compact ? "4px" : "6px";
  const textSize = compact ? "10px" : "11px";
  const headerBg = "#217346"; // Excel green
  const paperBg = "#FAFAFA";
  const gridBorder = "#D4D4D4";
  const textDark = "#1F2937";
  const textMid = "#374151";
  const textMuted = "#6B7280";

  return (
    <div
      className={`relative rounded-md overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${className}`}
      style={{ backgroundColor: paperBg }}
    >
      {/* Formula bar + name box */}
      <div
        className="flex items-center gap-2"
        style={{
          padding: `${compact ? "4px 8px" : "6px 8px"}`,
          borderBottom: `1px solid ${gridBorder}`,
          backgroundColor: paperBg,
        }}
      >
        <div
          className="flex-shrink-0 font-mono rounded-sm"
          style={{
            border: `1px solid ${gridBorder}`,
            backgroundColor: "#FFFFFF",
            padding: compact ? "2px 6px" : "2px 8px",
            fontSize: compact ? "8px" : "9px",
            color: textMuted,
          }}
        >
          A1
        </div>
        <div
          className="flex-shrink-0 font-mono"
          style={{ fontSize: "10px", color: "#9CA3AF" }}
        >
          ƒx
        </div>
        <div
          className="flex-1 rounded-sm"
          style={{
            border: `1px solid ${gridBorder}`,
            backgroundColor: "#FFFFFF",
            height: compact ? "12px" : "16px",
          }}
        />
      </div>

      {/* Column header row */}
      <div
        className="flex"
        style={{
          backgroundColor: paperBg,
          borderBottom: `1px solid ${gridBorder}`,
        }}
      >
        <div
          className="flex-shrink-0"
          style={{
            width: rowNumberWidth,
            backgroundColor: "#F0F0F0",
            borderRight: `1px solid ${gridBorder}`,
          }}
        />
        {columns.map((col, i) => (
          <div
            key={i}
            className="flex-1 text-center font-semibold"
            style={{
              padding: `${cellPadY} ${cellPadX}`,
              borderRight: `1px solid ${gridBorder}`,
              backgroundColor: "#F0F0F0",
              fontSize: textSize,
              color: textMid,
            }}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Data rows */}
      <div style={{ backgroundColor: paperBg }}>
        {rows.map((row, rowIdx) => {
          const rowBg = row.highlight ? "#FFF4D6" : paperBg;
          const cellColor = row.highlight ? "#0F172A" : textDark;
          const valColor = row.highlight ? "#0F172A" : textMid;
          const fontWeight = row.highlight ? 600 : 400;
          const isLastRow = rowIdx === rows.length - 1;

          return (
            <div
              key={rowIdx}
              className="flex"
              style={{
                borderBottom: isLastRow ? "none" : `1px solid ${gridBorder}`,
              }}
            >
              {/* Row number */}
              <div
                className="flex-shrink-0 text-center"
                style={{
                  width: rowNumberWidth,
                  padding: `${cellPadY} 0`,
                  borderRight: `1px solid ${gridBorder}`,
                  backgroundColor: "#F0F0F0",
                  fontSize: textSize,
                  color: textMuted,
                }}
              >
                {rowIdx + 2}
              </div>
              {/* Label cell */}
              <div
                className="flex-1 truncate"
                style={{
                  padding: `${cellPadY} ${cellPadX}`,
                  borderRight: `1px solid ${gridBorder}`,
                  backgroundColor: rowBg,
                  fontSize: textSize,
                  color: cellColor,
                  fontWeight,
                }}
              >
                {row.label}
              </div>
              {/* Value cells */}
              {row.values.map((val, valIdx) => (
                <div
                  key={valIdx}
                  className="flex-1 text-right tabular-nums"
                  style={{
                    padding: `${cellPadY} ${cellPadX}`,
                    borderRight:
                      valIdx === row.values.length - 1
                        ? "none"
                        : `1px solid ${gridBorder}`,
                    backgroundColor: rowBg,
                    fontSize: textSize,
                    color: valColor,
                    fontWeight,
                  }}
                >
                  {val}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Bottom sheet tab */}
      <div
        className="flex items-center"
        style={{
          padding: `${compact ? "4px 8px" : "6px 12px"}`,
          borderTop: `1px solid ${gridBorder}`,
          backgroundColor: paperBg,
        }}
      >
        <div
          className="rounded-sm font-medium"
          style={{
            backgroundColor: headerBg,
            color: "#FFFFFF",
            padding: compact ? "2px 8px" : "2px 10px",
            fontSize: compact ? "8px" : "9px",
          }}
        >
          {sheetName}
        </div>
        <div
          className="flex-1"
          style={{ borderBottom: `1px solid ${gridBorder}` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*   Preset sample datasets — keep data definitions here so they're   */
/*   easy to swap out when real screenshots are ready.                 */
/* ------------------------------------------------------------------ */

export const RATIO_PRESET: {
  columns: string[];
  rows: ExcelMockupRow[];
  sheetName: string;
} = {
  sheetName: "Ratio Analysis",
  columns: ["Ratio", "FY 24", "FY 25", "Trend"],
  rows: [
    { label: "Current Ratio", values: ["1.62", "1.82", "↑"] },
    { label: "Quick Ratio", values: ["0.94", "1.05", "↑"] },
    { label: "Debt to Equity", values: ["0.48", "0.42", "↓"] },
    { label: "ROE", values: ["14.2%", "16.8%", "↑"], highlight: true },
    { label: "ROA", values: ["6.9%", "8.1%", "↑"] },
    { label: "Altman Z-Score", values: ["2.81", "3.14", "↑"] },
    { label: "Interest Coverage", values: ["4.2x", "5.6x", "↑"] },
  ],
};

export const TAX_CALC_PRESET: {
  columns: string[];
  rows: ExcelMockupRow[];
  sheetName: string;
} = {
  sheetName: "FY 25-26",
  columns: ["Item", "Old", "New"],
  rows: [
    { label: "Gross Income", values: ["₹18,00,000", "₹18,00,000"] },
    { label: "Deductions", values: ["₹2,50,000", "₹0"] },
    { label: "Taxable", values: ["₹15,50,000", "₹18,00,000"] },
    { label: "Tax", values: ["₹2,45,000", "₹1,85,000"], highlight: true },
    { label: "Savings", values: ["—", "₹60,000"], highlight: true },
  ],
};

export const TAX_PLANNER_PRESET: {
  columns: string[];
  rows: ExcelMockupRow[];
  sheetName: string;
} = {
  sheetName: "TY 26-27",
  columns: ["Scenario", "Tax", "Take-home"],
  rows: [
    { label: "Current", values: ["₹1,85,000", "₹16,15,000"] },
    { label: "+ ELSS ₹1.5L", values: ["₹1,38,000", "₹16,62,000"] },
    { label: "+ NPS ₹50k", values: ["₹1,22,400", "₹16,77,600"], highlight: true },
    { label: "+ HRA claim", values: ["₹1,08,000", "₹16,92,000"] },
  ],
};
