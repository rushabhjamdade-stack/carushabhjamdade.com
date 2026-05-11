"use client";

import type { SheetId } from "./workbookData";

interface Sheet {
  id: SheetId;
  label: string;
}

interface SheetTabsProps {
  sheets: Sheet[];
  active: SheetId;
  onChange: (id: SheetId) => void;
}

export default function SheetTabs({ sheets, active, onChange }: SheetTabsProps) {
  return (
    <div className="flex items-end gap-0.5 pt-1.5 px-2 bg-[rgba(255,255,255,0.02)] border-t border-[rgba(255,255,255,0.06)] overflow-x-auto scrollbar-none">
      {sheets.map((s, i) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={`group flex-shrink-0 relative px-3.5 py-2 text-[11px] font-medium rounded-t-md border border-b-0 transition-all whitespace-nowrap ${
              isActive
                ? "bg-[#0A0A0F] text-[#FAFAFA] border-[rgba(255,153,51,0.35)]"
                : "bg-[rgba(255,255,255,0.03)] text-[#8A8A9A] border-[rgba(255,255,255,0.06)] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.06)]"
            }`}
          >
            {/* active top accent */}
            {isActive && (
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF9933] rounded-t-md"
              />
            )}
            <span className="flex items-center gap-1.5">
              {s.label}
              <span className="font-mono text-[9px] text-[#555] group-hover:text-[#8A8A9A]">
                [{i + 1}]
              </span>
            </span>
          </button>
        );
      })}
      <div className="flex-1 border-b border-[rgba(255,255,255,0.06)] min-w-4" />
    </div>
  );
}
