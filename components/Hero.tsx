import {
  trustLedger,
  institutions,
  currentlyShipping,
  techStack,
} from "@/lib/heroData";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export function Hero() {
  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="relative border-b border-line"
    >
      {/* Column letter headers — sticky below the FormulaBar */}
      <div className="sticky top-[76px] z-10 hidden h-[26px] grid-cols-[var(--col-w)_repeat(12,1fr)] border-b border-line bg-bg-1 font-mono text-[11px] text-ink-4 md:grid">
        <div className="grid place-items-center border-r border-line bg-bg-2" />
        {COLUMNS.map((c) => (
          <div key={c} className="grid place-items-center border-r border-line">
            {c}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[var(--col-w)_1fr] min-h-[calc(100vh-76px-36px)]">
        {/* Row gutter */}
        <aside className="flex flex-col items-center gap-[14px] border-r border-line bg-bg-1 pt-[26px] font-mono text-[11px] text-ink-4">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
            const active = n === 2;
            return (
              <div
                key={n}
                className={`grid h-[var(--row-h)] w-full place-items-center border-b ${
                  active
                    ? "border-line bg-bg-2 text-accent"
                    : "border-transparent"
                }`}
              >
                {n}
              </div>
            );
          })}
        </aside>

        {/* Hero body */}
        <div className="grid grid-cols-1 gap-8 px-6 pb-20 pt-8 md:grid-cols-[1fr_380px] md:gap-14 md:px-14 md:pb-20 md:pt-14">
          {/* Left column */}
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4">
              <span className="h-px w-7 bg-accent" />
              <span>§ 01 — The Operator</span>
            </div>

            <h1
              className="mb-7 font-serif font-normal leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
            >
              <span className="hero-word inline-block">Debit</span>
              <span className="hero-word inline-block">Credit</span>
              <span className="hero-word hero-word--deploy inline-block italic text-accent">
                Deploy
              </span>
            </h1>

            <p className="mb-9 max-w-[580px] text-[19px] leading-[1.45] text-ink-2">
              Chartered Accountant. I build the tools finance professionals
              <strong className="font-medium text-ink"> actually need</strong>{" "}
              — Excel toolkits, AI-powered products, and custom MIS that turn
              data dumps into decision tools.
            </p>

            <div className="mb-14 flex flex-wrap gap-3">
              <a
                href="#workbook"
                className="group inline-flex items-center gap-2.5 rounded-chip bg-accent px-[18px] py-3 font-mono text-[13px] font-medium text-[#0b0d0c] transition-transform hover:-translate-y-px"
              >
                Grab the Toolkits{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 rounded-chip border border-line-2 bg-transparent px-[18px] py-3 font-mono text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                See the Software{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>

            <div className="flex flex-wrap gap-12 border-t border-line pt-6 font-mono text-[12px] text-ink-3">
              <div>
                <div className="mb-1.5 text-[10px] uppercase tracking-[0.08em] text-ink-4">
                  Currently shipping
                </div>
                <div className="text-ink-2">{currentlyShipping}</div>
              </div>
              <div>
                <div className="mb-1.5 text-[10px] uppercase tracking-[0.08em] text-ink-4">
                  Stack
                </div>
                <div className="text-ink-2">{techStack}</div>
              </div>
            </div>
          </div>

          {/* Right column — trust ledger */}
          <aside className="self-start rounded-soft border border-line bg-bg-1 p-6 md:sticky md:top-[120px]">
            <h4 className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-4">
              {"// Trust ledger"}
            </h4>
            {trustLedger.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-baseline justify-between border-b border-dashed border-line py-2.5 font-mono text-[12px] ${
                  i === trustLedger.length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="text-ink-3">{s.label}</span>
                <span className="font-mono text-[16px] font-semibold text-ink">
                  {s.accent ? (
                    <span className="text-accent">{s.value}</span>
                  ) : (
                    s.value
                  )}
                </span>
              </div>
            ))}
            <div className="mt-4 border-t border-line pt-4 font-mono text-[11px] leading-[1.7] text-ink-3">
              <div className="mb-1.5 text-[10px] uppercase tracking-[0.08em] text-ink-4">
                {"// Workshops delivered at"}
              </div>
              {institutions.join(" · ")}
            </div>
          </aside>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-12 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-ink-4 md:flex">
          scroll <span className="inline-block animate-bob">↓</span> or{" "}
          <span className="kbd">J</span> for next sheet
        </div>
      </div>
    </section>
  );
}
