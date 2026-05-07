"use client";

import { useState } from "react";
import type { WorkbookRow } from "@/lib/workbookData";

export function ToolkitTable({ rows }: { rows: WorkbookRow[] }) {
  const [selected, setSelected] = useState(1);

  return (
    <table className="mt-2 w-full border-collapse text-[14px]">
      <thead className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-4">
        <tr>
          <th className="w-11 border-b border-t border-line bg-bg-1 p-0 text-center font-medium" />
          <th className="border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium">A · Name</th>
          <th className="border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium">B · Type</th>
          <th className="hidden border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium md:table-cell">
            C · One-liner
          </th>
          <th className="border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium">D · Signal</th>
          <th className="hidden border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium md:table-cell">
            E · Assets
          </th>
          <th className="border-b border-t border-line bg-bg-1 px-4 py-3.5 text-left font-medium">F · Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const idx = i + 1;
          const isActive = selected === idx;
          return (
            <tr
              key={row.name}
              onMouseEnter={() => setSelected(idx)}
              className={`cursor-pointer border-b border-line transition-colors ${
                isActive
                  ? "bg-selection outline outline-1 -outline-offset-1 outline-[var(--selection-border)]"
                  : "hover:bg-bg-1"
              }`}
            >
              <td className="w-11 border-r border-line bg-bg-1 text-center align-middle font-mono text-[11px] text-ink-4">
                {idx}
              </td>
              <td className="px-4 py-4 align-top">
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-chip border border-line-2 bg-bg-2 font-mono text-[13px] text-accent">
                  {row.icon}
                </div>
                <div className="font-sans text-[17px] font-medium tracking-[-0.01em] text-ink">
                  {row.name}
                </div>
              </td>
              <td className="px-4 py-4 align-top">
                <span className="inline-block rounded-[2px] border border-line-2 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-4">
                  {row.type}
                </span>
              </td>
              <td className="hidden px-4 py-4 align-top md:table-cell">
                <div className="max-w-[380px] text-[13.5px] leading-[1.45] text-ink-2">
                  {row.desc}
                </div>
              </td>
              <td className="px-4 py-4 align-top">
                <div className="flex items-center gap-2 font-mono text-[11.5px] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {row.signal}
                </div>
              </td>
              <td className="hidden px-4 py-4 align-top md:table-cell">
                <div className="font-mono text-[11px] text-ink-3">{row.assets}</div>
              </td>
              <td className="px-4 py-4 text-right align-top">
                <a
                  href={row.href}
                  download={row.download}
                  className="inline-flex items-center gap-1.5 rounded-chip border border-line-2 px-2.5 py-1.5 font-mono text-[12px] text-ink transition-colors hover:border-accent hover:bg-accent hover:text-[#0b0d0c]"
                >
                  ⬇ {row.download ? "Download" : "Open"}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
