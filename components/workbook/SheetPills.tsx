"use client";

type Props = {
  active: number;
  onChange: (i: number) => void;
};

const PILLS = [
  { label: "Toolkits" },
  { label: "Softwares" },
  { label: "∑ Summary" },
];

export function SheetPills({ active, onChange }: Props) {
  return (
    <div className="mt-6 flex flex-wrap items-center border-t border-line pt-3.5 font-mono text-[11.5px]">
      {PILLS.map((p, i) => {
        const isActive = active === i;
        return (
          <button
            key={p.label}
            type="button"
            onClick={() => onChange(i)}
            className={`flex items-center gap-2 border-r border-line px-4 py-2 transition-colors first:pl-0 ${
              isActive ? "text-ink" : "text-ink-3 hover:text-ink"
            }`}
          >
            <span
              className={`grid h-4 min-w-[16px] place-items-center rounded-[2px] px-1 text-[10px] ${
                isActive
                  ? "bg-accent text-[#0b0d0c]"
                  : "bg-bg-3 text-ink-3"
              }`}
            >
              {i + 1}
            </span>
            {p.label}
          </button>
        );
      })}
      <div className="ml-auto hidden items-center gap-3 text-[11px] text-ink-4 md:flex">
        <span className="flex items-center gap-1.5">
          <span className="kbd">↑↓←→</span> move
        </span>
        <span className="flex items-center gap-1.5">
          <span className="kbd">↵</span> open
        </span>
        <span className="flex items-center gap-1">
          <span className="kbd">1</span>
          <span className="kbd">2</span>
          <span className="kbd">3</span> sheet
        </span>
      </div>
    </div>
  );
}
