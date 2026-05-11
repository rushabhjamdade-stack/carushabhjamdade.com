"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolkitTable } from "./ToolkitTable";
import { SheetPills } from "./SheetPills";
import { RatioCalculator } from "./RatioCalculator";
import { toolkits, softwares } from "@/lib/workbookData";

export function WorkbookSection() {
  const [activeSheet, setActiveSheet] = useState(0);

  const data = activeSheet === 0 ? toolkits : softwares;
  const sheetLabel = activeSheet === 0 ? "Toolkits" : "Softwares";

  return (
    <section id="workbook" data-screen-label="02 Workbook" className="border-b border-line">
      <SectionHeader
        num="02"
        kicker="The Workbook"
        title={
          <>
            Everything I&apos;ve shipped, <em className="italic text-accent">in one book.</em>
          </>
        }
        meta={
          <>
            A CA&apos;s tools, in a CA&apos;s tool.
            <br />
            Arrow keys navigate · Enter opens · 1/2/3 switch sheet
          </>
        }
      />

      <div className="px-6 pb-20 pt-0 md:pl-[calc(var(--col-w)+56px)] md:pr-14">
        <div className="flex flex-wrap items-center gap-4 border-b border-line py-4 font-mono text-[11px] text-ink-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-ink">rushabh_workbook.xlsx</span>
          <span className="text-ink-4">—</span>
          <span>{sheetLabel}</span>
          <span className="text-ink-4">·</span>
          <span>last modified 21/04/2026</span>
          <span className="text-ink-4">·</span>
          <span>3 sheets · {toolkits.length + softwares.length} rows</span>
        </div>

        <div className="overflow-x-auto">
          <ToolkitTable rows={data} />
        </div>

        <SheetPills active={activeSheet} onChange={setActiveSheet} />

        <RatioCalculator />
      </div>
    </section>
  );
}
