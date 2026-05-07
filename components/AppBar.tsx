"use client";

import { useCmdK } from "./CmdKProvider";

export function AppBar({ filename = "rushabh_workbook.xlsx", sheetLabel = "Toolkits" }: { filename?: string; sheetLabel?: string }) {
  const { toggle } = useCmdK();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(17,21,19,0.85)] backdrop-blur">
      <div className="flex h-11 items-center gap-[18px] px-4 font-mono text-[12px] text-ink-3">
        <a href="#hero" className="flex items-center gap-[10px] font-semibold text-ink">
          <span className="grid h-[26px] w-[26px] place-items-center bg-accent font-mono text-[12px] font-bold tracking-[-0.02em] text-[#0b0d0c]">
            RJ
          </span>
          <span>CA Rushabh Jamdade</span>
        </a>

        <div className="hidden font-mono text-[12px] text-ink-2 md:block">
          <span className="mr-1.5 text-accent">●</span>
          {filename} — {sheetLabel} · Modified just now
        </div>

        <div className="flex-1" />

        <button
          type="button"
          onClick={toggle}
          className="flex items-center gap-2 rounded-chip px-2.5 py-1 text-ink-3 transition-colors hover:bg-bg-3 hover:text-ink"
          aria-label="Open command palette"
        >
          <span className="hidden sm:inline">Quick find</span>
          <span className="kbd">⌘K</span>
        </button>

        <a
          href="#services"
          className="inline-flex items-center gap-1.5 rounded-chip bg-accent px-3 py-1.5 font-mono text-[12px] font-semibold text-[#0b0d0c] transition-transform hover:-translate-y-px"
        >
          Work With Me <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
