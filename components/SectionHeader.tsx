import type { ReactNode } from "react";

type Props = {
  num: string;
  kicker: string;
  title: ReactNode;
  meta?: ReactNode;
};

export function SectionHeader({ num, kicker, title, meta }: Props) {
  return (
    <div className="flex flex-col items-start gap-4 border-b border-line px-6 pb-6 pt-20 md:flex-row md:items-end md:justify-between md:gap-12 md:pl-[calc(var(--col-w)+56px)] md:pr-14">
      <div>
        <div className="mb-4 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4">
          <span className="text-accent">§ {num}</span> · {kicker}
        </div>
        <h2
          className="max-w-[720px] font-serif font-normal leading-none tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          {title}
        </h2>
      </div>
      {meta && (
        <div className="whitespace-nowrap text-left font-mono text-[11px] leading-[1.7] text-ink-4 md:text-right">
          {meta}
        </div>
      )}
    </div>
  );
}
