"use client";

import { useEffect, useState } from "react";

const FORMULAS = [
  '=PRODUCT(<span class="str">"Debit"</span>, <span class="str">"Credit"</span>, <span class="kw">DEPLOY</span>())',
  '=IF(<span class="kw">CA</span>=<span class="num">TRUE</span>, <span class="kw">BUILD</span>(<span class="str">"tools"</span>), <span class="kw">WAIT</span>())',
  '=SUM(<span class="num">850</span>+<span class="num">1200</span>) <span class="cmt">// downloads + students</span>',
  '=VLOOKUP(<span class="str">"your spreadsheet"</span>, <span class="kw">FIX</span>, <span class="num">2</span>, <span class="num">FALSE</span>)',
  '=<span class="kw">SHIP</span>(<span class="str">"new tool"</span>, <span class="kw">EVERY</span>(<span class="num">14</span>, <span class="str">"days"</span>))',
];

export function FormulaBar({ cellRef = "B2 · hero" }: { cellRef?: string }) {
  const [formula, setFormula] = useState(FORMULAS[0]);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % FORMULAS.length;
      setFormula(FORMULAS[i]);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="sticky top-11 z-40 flex h-8 items-stretch border-b border-line bg-bg font-mono text-[12px]">
      <div className="flex w-[110px] items-center border-r border-line px-2.5 font-medium text-ink-2">
        {cellRef}
      </div>
      <div className="grid w-[38px] place-items-center border-r border-line font-serif text-[14px] italic text-accent">
        fx
      </div>
      <div className="formula-input flex flex-1 items-center overflow-hidden whitespace-nowrap px-3 text-ink">
        <span dangerouslySetInnerHTML={{ __html: formula }} />
        <span className="formula-caret" />
      </div>

      <style jsx>{`
        .formula-input :global(.kw) { color: var(--accent-3); }
        .formula-input :global(.str) { color: var(--accent); }
        .formula-input :global(.num) { color: var(--accent-2); }
        .formula-input :global(.cmt) { color: var(--ink-4); }
        .formula-caret {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: var(--accent);
          margin-left: 1px;
          vertical-align: -2px;
          animation: blink 1.05s steps(2, start) infinite;
        }
      `}</style>
    </div>
  );
}
