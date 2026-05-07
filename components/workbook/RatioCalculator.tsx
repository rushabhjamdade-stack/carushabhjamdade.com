"use client";

import { useMemo, useState } from "react";
import {
  computeRatios,
  defaultInputs,
  healthScore,
  judge,
  judgeInverse,
  scoreVerdict,
  type RatioInputs,
  type Verdict,
} from "@/lib/ratios";

const INPUT_FIELDS: { key: keyof RatioInputs; label: string }[] = [
  { key: "ca", label: "Current Assets" },
  { key: "cl", label: "Current Liabilities" },
  { key: "inv", label: "Inventory" },
  { key: "rev", label: "Revenue" },
  { key: "ni", label: "Net Income" },
  { key: "eq", label: "Total Equity" },
  { key: "debt", label: "Total Debt" },
];

const BADGE_CLASS: Record<Verdict, string> = {
  good: "bg-[rgba(110,231,167,0.15)] text-accent",
  warn: "bg-[rgba(245,185,69,0.15)] text-accent-2",
  bad: "bg-[rgba(240,138,138,0.15)] text-danger",
};

export function RatioCalculator() {
  const [vals, setVals] = useState<RatioInputs>(defaultInputs);

  const r = useMemo(() => computeRatios(vals), [vals]);
  const score = useMemo(() => healthScore(vals), [vals]);

  const update = (k: keyof RatioInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((prev) => ({ ...prev, [k]: Number(e.target.value) || 0 }));

  const rows: { name: string; val: string; verdict: Verdict }[] = [
    { name: "Current Ratio", val: `${r.cur.toFixed(2)}x`, verdict: judge(r.cur, 1.5, 1) },
    { name: "Quick Ratio", val: `${r.quick.toFixed(2)}x`, verdict: judge(r.quick, 1, 0.7) },
    { name: "Net Profit Margin", val: `${r.npm.toFixed(1)}%`, verdict: judge(r.npm, 10, 5) },
    { name: "Debt / Equity", val: `${r.de.toFixed(2)}x`, verdict: judgeInverse(r.de, 0.5, 1) },
    { name: "Return on Equity", val: `${r.roe.toFixed(1)}%`, verdict: judge(r.roe, 15, 8) },
  ];

  return (
    <div className="mt-8 rounded-soft border border-line bg-bg-1 p-6">
      <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-ink-4">
        <span>{"// Try it — live ratio analysis on your numbers"}</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> recalculating live
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1.4fr_1fr]">
        {/* Inputs */}
        <div>
          {INPUT_FIELDS.map((f) => (
            <label
              key={f.key}
              className="flex items-baseline justify-between border-b border-line py-2 font-mono text-[12px] text-ink-3"
            >
              <span className="text-ink-2">{f.label}</span>
              <input
                type="number"
                value={vals[f.key]}
                onChange={update(f.key)}
                className="w-[90px] rounded-[2px] border border-line-2 bg-bg px-2 py-1 text-right font-mono text-[13px] text-accent-3 outline-none focus:border-accent focus:outline focus:outline-1 focus:outline-accent"
              />
            </label>
          ))}
        </div>

        {/* Results */}
        <div className="md:border-l md:border-line md:pl-8">
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-dashed border-line py-2.5 font-mono text-[12.5px]"
            >
              <span className="text-ink-2">{row.name}</span>
              <span className="min-w-[60px] text-right font-semibold text-ink">{row.val}</span>
              <span
                className={`min-w-[64px] rounded-[2px] px-1.5 py-0.5 text-center text-[10px] font-semibold uppercase tracking-[0.04em] ${BADGE_CLASS[row.verdict]}`}
              >
                {row.verdict}
              </span>
            </div>
          ))}
          <div className="mt-2 grid grid-cols-[1fr_auto_auto] items-center gap-3 border-t border-line pt-3.5 font-mono text-[12.5px]">
            <span className="text-[10px] uppercase tracking-[0.08em] text-ink-4">
              Z-Score (proxy)
            </span>
            <span className="min-w-[60px] text-right font-semibold text-accent">
              {r.zScore.toFixed(2)}
            </span>
            <span className={`min-w-[64px] rounded-[2px] px-1.5 py-0.5 text-center text-[10px] font-semibold uppercase tracking-[0.04em] ${BADGE_CLASS.good}`}>
              safe
            </span>
          </div>
        </div>

        {/* Verdict / Health Score */}
        <div className="rounded-chip border border-line bg-bg-2 p-[18px] font-mono text-[11.5px] leading-[1.6] text-ink-2">
          <div className="mb-3.5 text-[10px] uppercase tracking-[0.08em] text-ink-4">
            {"// Health Score"}
          </div>
          <div className="mb-1.5 font-serif text-[48px] italic leading-none text-accent">
            {score}
            <span className="ml-1 font-sans text-[18px] not-italic text-ink-4">/100</span>
          </div>
          <div className="mb-3 text-ink-2">{scoreVerdict(score)}</div>
          <a
            href="#services"
            className="border-b border-dotted border-accent text-[11px] text-accent"
          >
            → Get the full 51-ratio toolkit
          </a>
        </div>
      </div>
    </div>
  );
}
