"use client";

import { forwardRef } from "react";
import {
  dataColumns,
  COLUMN_LETTERS,
  type WorkbookRow,
  getCellValue,
} from "./workbookData";
import type { Selection } from "./useGridNavigation";

interface WorkbookGridProps {
  rows: WorkbookRow[];
  selection: Selection; // col 0..6 (0 = row-num col A), row 1 (header) .. N
  onSelect: (s: Selection) => void;
  onActivate: (row: WorkbookRow) => void;
  onFocus: () => void;
  onBlur: () => void;
  onHoverCell?: (s: Selection | null) => void;
}

/**
 * Desktop/tablet grid. Column 0 = row-number (A). Data columns = B..G.
 */
const WorkbookGrid = forwardRef<HTMLDivElement, WorkbookGridProps>(
  function WorkbookGrid(
    { rows, selection, onSelect, onActivate, onFocus, onBlur, onHoverCell },
    ref,
  ) {
    const gridTemplate = [
      "40px",
      ...dataColumns.map((c) => `${c.weight}fr`),
    ].join(" ");

    return (
      <div
        ref={ref}
        role="grid"
        tabIndex={0}
        aria-label="Workbook of tools and softwares"
        onFocus={onFocus}
        onBlur={onBlur}
        className="relative rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,15,0.55)] overflow-hidden outline-none focus:ring-1 focus:ring-[rgba(255,153,51,0.35)]"
      >
        {/* Column letter strip (A B C D…) */}
        <div
          role="row"
          className="grid bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.08)] font-mono text-[10px] uppercase tracking-wider text-[#555]"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          {COLUMN_LETTERS.map((letter, i) => (
            <div
              key={letter}
              className={`px-2 py-1.5 text-center border-r border-[rgba(255,255,255,0.06)] last:border-r-0 ${
                selection.col === i ? "text-[#FF9933] bg-[rgba(255,153,51,0.05)]" : ""
              }`}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Header row (row 1) */}
        <div
          role="row"
          className="grid bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.08)] font-mono text-[10px] uppercase tracking-wider text-[#8A8A9A]"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          <div className="px-2 py-2 text-center border-r border-[rgba(255,255,255,0.06)] text-[#555]">
            1
          </div>
          {dataColumns.map((col, i) => {
            const colIdx = i + 1;
            const isColSelected = selection.col === colIdx;
            const isHeaderSelected = selection.row === 1;
            return (
              <div
                key={col.key}
                role="columnheader"
                onClick={() => onSelect({ col: colIdx, row: 1 })}
                onMouseEnter={() => onHoverCell?.({ col: colIdx, row: 1 })}
                onMouseLeave={() => onHoverCell?.(null)}
                className={`px-3 py-2 border-r border-[rgba(255,255,255,0.06)] last:border-r-0 cursor-pointer ${
                  isColSelected && isHeaderSelected
                    ? "bg-[rgba(255,153,51,0.1)] text-[#FF9933]"
                    : isColSelected
                      ? "bg-[rgba(255,153,51,0.04)]"
                      : ""
                }`}
                style={{ textAlign: col.align ?? "left" }}
              >
                {col.header}
              </div>
            );
          })}
        </div>

        {/* Data rows */}
        {rows.map((row) => {
          const isRowSelected = selection.row === row.rowIdx;
          return (
            <div
              key={row.rowIdx}
              role="row"
              className={`grid group border-b border-[rgba(255,255,255,0.04)] transition-colors last:border-b-0 ${
                isRowSelected
                  ? "bg-[rgba(255,153,51,0.04)]"
                  : "hover:bg-[rgba(255,255,255,0.02)]"
              }`}
              style={{ gridTemplateColumns: gridTemplate }}
            >
              {/* Row number cell (column A) */}
              <div
                role="gridcell"
                onClick={() => onSelect({ col: 0, row: row.rowIdx })}
                onDoubleClick={() => onActivate(row)}
                onMouseEnter={() => onHoverCell?.({ col: 0, row: row.rowIdx })}
                onMouseLeave={() => onHoverCell?.(null)}
                className={`px-2 py-3 text-center font-mono text-[10px] border-r border-[rgba(255,255,255,0.06)] cursor-pointer ${
                  selection.col === 0 && selection.row === row.rowIdx
                    ? "bg-[rgba(255,153,51,0.08)] text-[#FF9933] outline outline-1 -outline-offset-1 outline-[#FF9933]"
                    : isRowSelected
                      ? "text-[#FF9933]"
                      : "text-[#555]"
                }`}
              >
                {row.rowIdx}
              </div>

              {/* Data cells */}
              {dataColumns.map((col, i) => {
                const colIdx = i + 1;
                const isSelected =
                  selection.col === colIdx && selection.row === row.rowIdx;
                const value = getCellValue(row, col.key);
                const cellClass = getCellClass(row, col.key);

                // The Action column is an ACTUAL button — single click activates
                // the row (opens the modal). Makes the CTA obvious for people
                // who don't discover the Enter-to-open affordance.
                if (col.key === "action") {
                  const isAvailable =
                    row.kind !== "software" || row.source.status === "live";
                  return (
                    <div
                      key={col.key}
                      role="gridcell"
                      onMouseEnter={() =>
                        onHoverCell?.({ col: colIdx, row: row.rowIdx })
                      }
                      onMouseLeave={() => onHoverCell?.(null)}
                      className={`relative px-2 py-2 border-r border-[rgba(255,255,255,0.04)] last:border-r-0 flex items-center justify-end ${
                        isSelected
                          ? "bg-[rgba(255,153,51,0.08)] outline outline-2 -outline-offset-2 outline-[#FF9933] z-10"
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect({ col: colIdx, row: row.rowIdx });
                          onActivate(row);
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-md font-semibold text-[11px] px-3 py-1.5 border-2 shadow-sm transition-all ${
                          isAvailable
                            ? "border-[#FF9933] bg-[#FF9933] text-[#0A0A0F] hover:bg-[#FFB366] hover:border-[#FFB366] hover:shadow-[0_4px_12px_rgba(255,153,51,0.35)] group-hover:scale-[1.03]"
                            : "border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)] text-[#D4D4D4] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.3)]"
                        }`}
                      >
                        <span>{value}</span>
                      </button>
                    </div>
                  );
                }

                return (
                  <div
                    key={col.key}
                    role="gridcell"
                    onClick={() => onSelect({ col: colIdx, row: row.rowIdx })}
                    onDoubleClick={() => onActivate(row)}
                    onMouseEnter={() =>
                      onHoverCell?.({ col: colIdx, row: row.rowIdx })
                    }
                    onMouseLeave={() => onHoverCell?.(null)}
                    className={`relative px-3 py-3 text-[13px] leading-snug border-r border-[rgba(255,255,255,0.04)] last:border-r-0 truncate cursor-pointer ${cellClass} ${
                      isSelected
                        ? "bg-[rgba(255,153,51,0.08)] outline outline-2 -outline-offset-2 outline-[#FF9933] z-10"
                        : ""
                    }`}
                    style={{ textAlign: col.align ?? "left" }}
                    title={value}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  },
);

/**
 * Per-cell tint/weight. Keeps the grid feeling alive like a real spreadsheet
 * with conditional formatting.
 */
function getCellClass(row: WorkbookRow, colKey: string): string {
  if (colKey === "name") {
    return "font-display font-bold text-[15px] text-[#FAFAFA]";
  }
  if (colKey === "signal") {
    return "font-mono text-[11px] text-[#FF9933]";
  }
  if (colKey === "type") {
    return "font-mono text-[10px] uppercase tracking-wider text-[#8A8A9A]";
  }
  if (colKey === "assets") {
    return "font-mono text-[11px] text-[#D4D4D4]";
  }
  if (colKey === "action") {
    if (row.kind === "software" && row.source.status !== "live") {
      return "font-mono text-[11px] text-[#8A8A9A]";
    }
    return "font-mono text-[11px] text-[#FF9933]";
  }
  return "text-[#D4D4D4]";
}

export default WorkbookGrid;
