"use client";

import { ChevronDown, Sigma } from "lucide-react";

interface FormulaBarProps {
  cellRef: string;
  formula: string;
}

export default function FormulaBar({ cellRef, formula }: FormulaBarProps) {
  return (
    <div className="flex items-stretch border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-md overflow-hidden font-mono text-[12px]">
      {/* Cell reference box */}
      <div className="flex items-center gap-1.5 px-3 py-2 min-w-[92px] border-r border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
        <span className="text-[#FF9933] font-semibold tracking-wider">
          {cellRef || "—"}
        </span>
        <ChevronDown size={11} className="text-[#555]" />
      </div>

      {/* fx badge */}
      <div className="flex items-center px-2.5 border-r border-[rgba(255,255,255,0.08)] text-[#8A8A9A]">
        <Sigma size={13} strokeWidth={2.5} />
      </div>

      {/* Formula value */}
      <div className="flex-1 px-3 py-2 truncate text-[#D4D4D4]">
        {formula || <span className="text-[#555]">(empty)</span>}
      </div>
    </div>
  );
}
