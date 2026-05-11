"use client";

import { useEffect, useRef, useState } from "react";
import { afterStats, beforeStats, type CaseStat } from "@/lib/caseStudyData";

function StatGrid({ stats, side }: { stats: CaseStat[]; side: "before" | "after" }) {
  const accentClass = side === "before" ? "border-danger text-danger" : "border-accent text-accent";
  const valueClass = side === "before" ? "text-danger" : "text-accent";
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`rounded-[2px] border-l-2 bg-black/25 p-4 ${accentClass}`}
        >
          <div className={`mb-1.5 font-serif text-[32px] leading-none ${valueClass}`}>
            {s.value} <em className="italic">{s.emphasis}</em>
          </div>
          <div className="font-mono text-[11px] leading-[1.4] text-ink-3">{s.note}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudy() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const x = clientX - r.left;
      const p = Math.max(2, Math.min(98, (x / r.width) * 100));
      setPos(p);
    };
    const stop = () => {
      dragging.current = false;
      document.body.style.cursor = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    document.body.style.cursor = "ew-resize";
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - r.left;
    setPos(Math.max(2, Math.min(98, (x / r.width) * 100)));
  };

  return (
    <div className="mt-14 overflow-hidden rounded-soft border border-line bg-bg-1">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-7 py-5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
        <span>{"// Real MIS transformation · client anonymized"}</span>
        <span className="font-serif text-[22px] font-normal normal-case tracking-[-0.01em] text-ink">
          From <em className="italic text-accent">broken</em> to{" "}
          <em className="italic text-accent">bulletproof.</em>
        </span>
        <span>Drag the handle ⇆</span>
      </div>

      <div
        ref={ref}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="relative h-[480px] overflow-hidden bg-bg select-none"
        style={{ cursor: "ew-resize" }}
      >
        {/* Before pane (full) */}
        <div className="absolute inset-0 flex flex-col gap-4 bg-bg-2 p-9">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-danger">
            ↩ Before · what they sent me
          </div>
          <StatGrid stats={beforeStats} side="before" />
        </div>

        {/* After pane (clipped) */}
        <div
          className="absolute inset-0 flex flex-col gap-4 p-9"
          style={{
            background: "linear-gradient(135deg, #0d1612 0%, #131b17 100%)",
            clipPath: `inset(0 0 0 ${pos}%)`,
          }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            ↪ After · 3 weeks of work
          </div>
          <StatGrid stats={afterStats} side="after" />
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 -translate-x-px bg-accent"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent font-mono text-[18px] font-bold text-[#0b0d0c]">
            ⇆
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-7 py-5 font-mono text-[12px] text-ink-3">
        <span>
          The quick look is free. I&apos;ll spot 2–3 issues in your file. WhatsApp replies fastest.
        </span>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="mailto:rushabh.jamdade@mail.ca.in?subject=Excel%20File%20Assessment%20Request"
            className="rounded-chip border border-accent bg-accent px-3.5 py-2 text-[#0b0d0c] transition-colors hover:bg-[#84efb6]"
          >
            Audit my file
          </a>
          <a
            href="mailto:rushabh.jamdade@mail.ca.in?subject=New%20Build%20Enquiry"
            className="rounded-chip border border-line-2 px-3.5 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Build something new
          </a>
          <a
            href="https://wa.me/918805155767"
            className="rounded-chip border border-line-2 px-3.5 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Just want to chat
          </a>
        </div>
      </div>
    </div>
  );
}
