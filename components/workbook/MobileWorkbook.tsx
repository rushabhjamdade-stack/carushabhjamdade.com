"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { summaryRows, type WorkbookRow } from "./workbookData";

interface Props {
  rows: WorkbookRow[];
  sheetId: "toolkits" | "softwares" | "summary";
  onActivate: (row: WorkbookRow) => void;
}

export default function MobileWorkbook({ rows, sheetId, onActivate }: Props) {
  if (sheetId === "summary") {
    return (
      <div className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,15,0.55)] divide-y divide-[rgba(255,255,255,0.05)]">
        {summaryRows.map((r) => (
          <button
            key={r.rowIdx}
            onClick={() => onActivate(r)}
            className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left hover:bg-[rgba(255,153,51,0.04)] transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] text-[#555] mb-1">
                A{r.rowIdx}
              </div>
              <div className="font-mono text-[11px] text-[#D4D4D4] truncate">
                {r.formula}
              </div>
            </div>
            <div className="font-display font-black text-[22px] text-[#FF9933] flex-shrink-0">
              {r.value}
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,15,0.55)] divide-y divide-[rgba(255,255,255,0.05)]">
      {rows.map((row) => (
        <button
          key={row.rowIdx}
          onClick={() => onActivate(row)}
          className="w-full flex items-start gap-3 px-4 py-4 text-left hover:bg-[rgba(255,153,51,0.04)] transition-colors"
        >
          <div className="font-mono text-[10px] text-[#555] w-5 pt-1 flex-shrink-0">
            {row.rowIdx}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A8A9A]">
                {row.kind === "toolkit" || row.kind === "software"
                  ? row.type
                  : ""}
              </span>
            </div>
            <div className="font-display font-bold text-[16px] text-[#FAFAFA] leading-tight">
              {row.kind === "summary" ? row.formula : row.name}
            </div>
            <div className="mt-1 text-[13px] text-[#D4D4D4] leading-snug line-clamp-2">
              {row.kind === "summary" ? row.value : row.tagline}
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-[10px] text-[#FF9933]">
                {row.kind === "summary" ? "" : row.signal}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 pt-1 text-[#FF9933]">
            {row.kind === "toolkit" ? (
              <Download size={14} />
            ) : (
              <ArrowUpRight size={14} />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
