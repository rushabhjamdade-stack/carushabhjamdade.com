"use client";

import { useCallback, useEffect } from "react";

export type Selection = { col: number; row: number };

interface Options {
  // Grid bounds — inclusive.
  minCol: number;
  maxCol: number;
  minRow: number; // typically 2 (row 1 is header)
  maxRow: number;
  selection: Selection;
  setSelection: (s: Selection) => void;
  active: boolean; // only respond when grid has focus
  onActivate: () => void; // Enter / Space
  onEscape: () => void;
  onSheetShortcut?: (sheetIdx: number) => void; // 1/2/3
}

export function useGridNavigation({
  minCol,
  maxCol,
  minRow,
  maxRow,
  selection,
  setSelection,
  active,
  onActivate,
  onEscape,
  onSheetShortcut,
}: Options) {
  const clamp = useCallback(
    (col: number, row: number): Selection => ({
      col: Math.max(minCol, Math.min(maxCol, col)),
      row: Math.max(minRow, Math.min(maxRow, row)),
    }),
    [minCol, maxCol, minRow, maxRow],
  );

  useEffect(() => {
    if (!active) return;

    const handleKey = (e: KeyboardEvent) => {
      // Ignore when user is typing into another focused element (inputs, textareas)
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      const { col, row } = selection;
      const ctrl = e.ctrlKey || e.metaKey;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          setSelection(clamp(col, ctrl ? minRow : row - 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelection(clamp(col, ctrl ? maxRow : row + 1));
          break;
        case "ArrowLeft":
          e.preventDefault();
          setSelection(clamp(ctrl ? minCol : col - 1, row));
          break;
        case "ArrowRight":
          e.preventDefault();
          setSelection(clamp(ctrl ? maxCol : col + 1, row));
          break;
        case "Home":
          e.preventDefault();
          setSelection(clamp(minCol, row));
          break;
        case "End":
          e.preventDefault();
          setSelection(clamp(maxCol, row));
          break;
        case "Tab":
          e.preventDefault();
          if (e.shiftKey) {
            if (col > minCol) setSelection({ col: col - 1, row });
            else if (row > minRow) setSelection({ col: maxCol, row: row - 1 });
          } else {
            if (col < maxCol) setSelection({ col: col + 1, row });
            else if (row < maxRow) setSelection({ col: minCol, row: row + 1 });
          }
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          onActivate();
          break;
        case "Escape":
          e.preventDefault();
          onEscape();
          break;
        case "1":
        case "2":
        case "3":
          if (!ctrl && !e.altKey && !e.shiftKey) {
            onSheetShortcut?.(parseInt(e.key, 10) - 1);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, selection, setSelection, clamp, minCol, maxCol, minRow, maxRow, onActivate, onEscape, onSheetShortcut]);
}
