import { storyParagraphs, trackRecord, credentialLogos } from "@/lib/aboutData";

export function StoryView() {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
      <div className="font-serif text-[19px] leading-[1.55] tracking-[-0.005em] text-ink-2">
        {storyParagraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "mb-6 text-[28px] leading-[1.35] tracking-[-0.015em] text-ink"
                : "mb-4 [&_strong]:font-medium [&_strong]:italic [&_strong]:text-ink"
            }
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>

      <aside className="rounded-chip border border-line bg-bg-1 p-6">
        <h4 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-4">
          {"// Track record"}
        </h4>
        {trackRecord.map((r, i) => (
          <div
            key={r.label}
            className={`flex items-baseline justify-between border-b border-dashed border-line py-3 font-mono text-[12px] text-ink-3 ${
              i === trackRecord.length - 1 ? "border-b-0" : ""
            }`}
          >
            <span>{r.label}</span>
            <span className="text-right font-medium text-ink">
              {r.accent ? <span className="text-[16px] text-accent">{r.value}</span> : r.value}
            </span>
          </div>
        ))}
        <div className="mt-4 flex gap-3 border-t border-line pt-4">
          {credentialLogos.map((l) => (
            <div
              key={l.name}
              className="flex-1 border border-line p-3 text-center font-mono text-[10px] text-ink-3"
            >
              <span className="mb-0.5 block text-[11px] text-ink">{l.name}</span>
              {l.caption}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
