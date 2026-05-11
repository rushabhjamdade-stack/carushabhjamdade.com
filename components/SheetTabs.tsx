"use client";

import { useEffect, useState } from "react";
import { sheets } from "@/lib/sheets";

export function SheetTabs() {
  const [active, setActive] = useState<string>(sheets[0]?.id ?? "");

  useEffect(() => {
    const elements = sheets
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-9 items-stretch border-t border-line bg-bg-1 font-mono text-[11.5px]">
      <div className="no-scrollbar flex flex-1 items-stretch overflow-x-auto">
        {sheets.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`flex items-center gap-2 whitespace-nowrap border-r border-line px-4 transition-colors ${
                isActive
                  ? "bg-bg text-ink shadow-[inset_0_2px_0_var(--accent)]"
                  : "text-ink-3 hover:bg-bg-2 hover:text-ink-2"
              }`}
            >
              <span className={`text-[10px] ${isActive ? "text-accent" : "text-ink-4"}`}>
                §{s.num}
              </span>
              {s.label}
            </a>
          );
        })}
      </div>
      <div className="hidden items-center gap-3.5 border-l border-line px-4 text-[11px] text-ink-3 md:flex">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse-amber rounded-full bg-accent" />
          available · accepting 2 audits / mo
        </span>
        <span className="text-ink-4">·</span>
        <span>Pune, IN · UTC+5:30</span>
        <span className="text-ink-4">·</span>
        <span>v2.1</span>
      </div>
    </nav>
  );
}
