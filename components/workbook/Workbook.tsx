"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import FormulaBar from "./FormulaBar";
import WorkbookGrid from "./WorkbookGrid";
import MobileWorkbook from "./MobileWorkbook";
import SheetTabs from "./SheetTabs";
import SummarySheet from "./SummarySheet";
import CellModal from "./CellModal";
import { useIsMobile } from "./useIsMobile";
import { useGridNavigation, type Selection } from "./useGridNavigation";
import {
  sheets,
  dataColumns,
  cellRef as buildCellRef,
  formulaForCell,
  type SheetId,
  type WorkbookRow,
} from "./workbookData";

// Map nav link hash suffix -> sheet id.
const HASH_TO_SHEET: Record<string, SheetId> = {
  "workbook": "toolkits",
  "workbook-toolkits": "toolkits",
  "workbook-softwares": "softwares",
  "workbook-summary": "summary",
};

export default function Workbook() {
  const isMobile = useIsMobile();
  const [activeSheet, setActiveSheet] = useState<SheetId>("toolkits");
  const [selection, setSelection] = useState<Selection>({ col: 1, row: 2 });
  const [hovered, setHovered] = useState<Selection | null>(null);
  const [modalRow, setModalRow] = useState<WorkbookRow | null>(null);
  const [gridHasFocus, setGridHasFocus] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);

  // ---- Sheet / rows ----
  const currentSheet = useMemo(
    () => sheets.find((s) => s.id === activeSheet)!,
    [activeSheet],
  );
  const rows = currentSheet.rows;

  // Reset selection to first data row when switching sheets
  useEffect(() => {
    setSelection({ col: 1, row: 2 });
  }, [activeSheet]);

  // ---- Hash routing: #workbook / #workbook-toolkits / etc. ----
  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace("#", "");
      if (!raw) return;
      const target = HASH_TO_SHEET[raw];
      if (target) setActiveSheet(target);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    window.addEventListener("workbook:navigate", applyHash as EventListener);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("workbook:navigate", applyHash as EventListener);
    };
  }, []);

  // ---- Cell ref + formula display (hover beats selection on desktop mouse) ----
  const displayCell = hovered ?? selection;
  const isHeader = displayCell.row === 1;
  const isRowNumberCol = displayCell.col === 0;
  const rowForDisplay = isHeader
    ? null
    : rows.find((r) => r.rowIdx === displayCell.row) ?? null;
  const colKey = isRowNumberCol
    ? null
    : dataColumns[displayCell.col - 1]?.key ?? null;

  const refStr = buildCellRef(displayCell.col, displayCell.row);
  const formulaStr = isRowNumberCol
    ? `=ROW(${displayCell.row})`
    : formulaForCell(rowForDisplay, colKey, isHeader);

  // ---- Activation (Enter / dbl-click) ----
  const activateRow = useCallback(
    (row: WorkbookRow) => {
      setModalRow(row);
    },
    [],
  );

  const activateSelection = useCallback(() => {
    if (selection.row === 1) return; // header
    const row = rows.find((r) => r.rowIdx === selection.row);
    if (row) activateRow(row);
  }, [selection, rows, activateRow]);

  // ---- Keyboard ----
  useGridNavigation({
    minCol: 0,
    maxCol: dataColumns.length, // 6 data cols → last index is 6 (= letter G)
    minRow: 1,
    maxRow: rows.length > 0 ? rows[rows.length - 1].rowIdx : 1,
    selection,
    setSelection,
    active: gridHasFocus && !modalRow && !isMobile,
    onActivate: activateSelection,
    onEscape: () => {
      if (modalRow) setModalRow(null);
      else gridRef.current?.blur();
    },
    onSheetShortcut: (idx) => {
      const sheet = sheets[idx];
      if (sheet) setActiveSheet(sheet.id);
    },
  });

  // After modal closes from keyboard, restore grid focus
  useEffect(() => {
    if (!modalRow && gridRef.current && gridHasFocus) {
      gridRef.current.focus();
    }
  }, [modalRow, gridHasFocus]);

  return (
    <section
      id="workbook"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.035)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.03)" }}
      />

      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9933] mb-3">
            § 01 · The Workbook
          </div>
          <h2 className="font-display font-black text-[#FAFAFA] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95]">
            Everything I&apos;ve shipped, <span className="text-[#FF9933]">in one book.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#C4C4C4] max-w-2xl leading-relaxed">
            A CA&apos;s tools, in a CA&apos;s tool. Arrow keys navigate, Enter opens a row, numbers <span className="font-mono text-[#FF9933]">1/2/3</span> switch sheets. On mobile, tap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,18,0.6)] backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.45)] overflow-hidden"
        >
          {/* Title bar — fake window chrome */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
              <span className="ml-3 font-mono text-[11px] text-[#8A8A9A]">
                rushabh_workbook.xlsx — {currentSheet.label}
              </span>
            </div>
            <span className="hidden md:inline font-mono text-[10px] text-[#555]">
              last modified · {new Date().toLocaleDateString("en-GB")}
            </span>
          </div>

          {/* Formula bar */}
          <div className="p-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,15,0.6)]">
            <FormulaBar cellRef={refStr} formula={formulaStr} />
          </div>

          {/* Grid body */}
          <div
            className="p-3 md:p-4"
            onClick={() => {
              // click anywhere in the grid area focuses the grid
              if (!isMobile) gridRef.current?.focus();
            }}
          >
            {isMobile ? (
              <MobileWorkbook
                rows={rows}
                sheetId={activeSheet}
                onActivate={activateRow}
              />
            ) : activeSheet === "summary" ? (
              <SummarySheet
                selectedRowIdx={selection.row}
                onSelectRow={(r) => setSelection({ col: 1, row: r })}
              />
            ) : (
              <WorkbookGrid
                ref={gridRef}
                rows={rows}
                selection={selection}
                onSelect={(s) => {
                  setSelection(s);
                  gridRef.current?.focus();
                }}
                onActivate={activateRow}
                onFocus={() => setGridHasFocus(true)}
                onBlur={() => setGridHasFocus(false)}
                onHoverCell={setHovered}
              />
            )}
          </div>

          {/* Sheet tabs */}
          <SheetTabs
            sheets={sheets.map((s) => ({ id: s.id, label: s.label }))}
            active={activeSheet}
            onChange={setActiveSheet}
          />
        </motion.div>

        {/* Hint strip below workbook */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[10px] text-[#555]">
          <span className="text-[#FF9933]">keys</span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">↑↓←→</kbd> move
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">Enter</kbd> open row
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">1</kbd> <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">2</kbd> <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">3</kbd> switch sheet
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[#8A8A9A]">Esc</kbd> close
          </span>
        </div>
      </div>

      {/* Expanded cell modal */}
      <CellModal
        row={modalRow}
        cellRef={
          modalRow ? buildCellRef(selection.col, modalRow.rowIdx) : ""
        }
        onClose={() => setModalRow(null)}
      />
    </section>
  );
}
