import { specRows } from "@/lib/aboutData";

export function SpecSheet() {
  return (
    <div className="overflow-hidden rounded-chip border border-line bg-bg-1">
      {specRows.map((row, i) => (
        <div
          key={row.k}
          className={`grid grid-cols-1 font-mono text-[12.5px] md:grid-cols-[200px_1fr] ${
            i === specRows.length - 1 ? "" : "border-b border-line"
          }`}
        >
          <div className="flex items-center border-b border-line bg-bg-2 px-5 py-3.5 text-[10.5px] uppercase tracking-[0.06em] text-ink-4 md:border-b-0 md:border-r">
            {row.k}
          </div>
          <div
            className="px-5 py-3.5 text-ink"
            dangerouslySetInnerHTML={{ __html: row.html }}
          />
        </div>
      ))}
    </div>
  );
}
