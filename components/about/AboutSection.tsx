"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { StoryView } from "./StoryView";
import { SpecSheet } from "./SpecSheet";

type View = "story" | "spec";

export function AboutSection() {
  const [view, setView] = useState<View>("story");

  return (
    <section id="about" data-screen-label="05 About" className="border-b border-line">
      <SectionHeader
        num="05"
        kicker="About"
        title={
          <>
            The <em className="italic text-accent">short</em> version.
          </>
        }
        meta={
          <>
            Pune, India · Currently shipping
            <br />
            Reply window: usually &lt; 24h
          </>
        }
      />

      <div className="px-6 pb-20 pt-10 md:pl-[calc(var(--col-w)+56px)] md:pr-14">
        <div className="mb-8 inline-flex overflow-hidden rounded-chip border border-line bg-bg-1 font-mono text-[11.5px]">
          <button
            type="button"
            onClick={() => setView("story")}
            className={`flex items-center gap-2 px-4 py-2 transition-colors ${
              view === "story" ? "bg-accent font-semibold text-[#0b0d0c]" : "text-ink-3"
            }`}
          >
            📖 Story view
          </button>
          <button
            type="button"
            onClick={() => setView("spec")}
            className={`flex items-center gap-2 border-l border-line px-4 py-2 transition-colors ${
              view === "spec" ? "bg-accent font-semibold text-[#0b0d0c]" : "text-ink-3"
            }`}
          >
            ≡ Spec sheet
          </button>
        </div>

        {view === "story" ? <StoryView /> : <SpecSheet />}
      </div>
    </section>
  );
}
