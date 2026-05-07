"use client";

import { summaryRows } from "./workbookData";

interface Props {
  selectedRowIdx: number;
  onSelectRow: (rowIdx: number) => void;
}

export default function SummarySheet({ selectedRowIdx, onSelectRow }: Props) {
  return (
    <div className="w-full">
      {/* Column letters strip */}
      <div
        className="grid bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.08)] font-mono text-[10px] uppercase tracking-wider text-[#555]"
        style={{ gridTemplateColumns: "40px 2.6fr 1fr" }}
      >
        <div className="px-2 py-1.5 text-center border-r border-[rgba(255,255,255,0.06)]">&nbsp;</div>
        <div className="px-3 py-1.5 border-r border-[rgba(255,255,255,0.06)]">A</div>
        <div className="px-3 py-1.5">B</div>
      </div>

      {/* Header row */}
      <div
        className="grid bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.08)] font-mono text-[10px] uppercase tracking-wider text-[#8A8A9A]"
        style={{ gridTemplateColumns: "40px 2.6fr 1fr" }}
      >
        <div className="px-2 py-2 text-center border-r border-[rgba(255,255,255,0.06)] text-[#555]">1</div>
        <div className="px-3 py-2 border-r border-[rgba(255,255,255,0.06)]">Formula</div>
        <div className="px-3 py-2">Value</div>
      </div>

      {/* Rows */}
      {summaryRows.map((row) => {
        const isSelected = row.rowIdx === selectedRowIdx;
        return (
          <button
            key={row.rowIdx}
            type="button"
            onClick={() => onSelectRow(row.rowIdx)}
            className={`grid w-full text-left border-b border-[rgba(255,255,255,0.04)] transition-colors hover:bg-[rgba(255,153,51,0.04)] ${
              isSelected ? "bg-[rgba(255,153,51,0.06)]" : ""
            }`}
            style={{ gridTemplateColumns: "40px 2.6fr 1fr" }}
          >
            <div
              className={`px-2 py-3 text-center font-mono text-[10px] border-r border-[rgba(255,255,255,0.06)] ${
                isSelected ? "text-[#FF9933]" : "text-[#555]"
              }`}
            >
              {row.rowIdx}
            </div>
            <div className="px-3 py-3 font-mono text-[12px] text-[#D4D4D4] border-r border-[rgba(255,255,255,0.06)] truncate">
              {row.formula}
            </div>
            <div className="px-3 py-3 font-display font-bold text-[20px] md:text-[22px] text-[#FF9933]">
              {row.value}
            </div>
          </button>
        );
      })}

      {/* footnote */}
      <div className="mt-3 px-3 font-mono text-[10px] text-[#555]">
        * formulas are for vibe. values are accurate-ish.
      </div>
    </div>
  );
}
