"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import { useCmdK } from "./CmdKProvider";
import { cmdActions, type CmdAction } from "@/lib/cmdkActions";

function runAction(action: CmdAction) {
  if (!action.href) return;
  if (action.download) {
    const a = document.createElement("a");
    a.href = action.href;
    a.download = action.download;
    document.body.appendChild(a);
    a.click();
    a.remove();
    return;
  }
  if (action.href.startsWith("#")) {
    const el = document.querySelector(action.href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = action.href;
    return;
  }
  if (action.href.startsWith("http") || action.href.startsWith("mailto:") || action.href.startsWith("/")) {
    window.location.href = action.href;
  }
}

export function CmdK() {
  const { open, setOpen } = useCmdK();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid animate-fade-in place-items-start justify-items-center bg-black/70 pt-[12vh] backdrop-blur"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[min(640px,90vw)] overflow-hidden rounded-md border border-line-2 bg-bg-1 shadow-cmdk"
      >
        <Command label="Quick find" loop>
          <div className="flex items-center gap-3 border-b border-line px-[18px] py-3.5 font-mono">
            <span className="font-serif text-[16px] italic text-accent">fx</span>
            <Command.Input
              autoFocus
              placeholder="Type a command, sheet, or person..."
              className="flex-1 border-none bg-transparent font-mono text-[14px] text-ink outline-none"
            />
            <span className="kbd">esc</span>
          </div>
          <Command.List className="max-h-[50vh] overflow-y-auto">
            <Command.Empty className="px-[18px] py-6 font-mono text-[12px] text-ink-4">
              No results — try &quot;audit&quot; or &quot;download&quot;
            </Command.Empty>
            <Command.Group
              heading="// Quick actions"
              className="[&_[cmdk-group-heading]]:px-[18px] [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em] [&_[cmdk-group-heading]]:text-ink-4"
            >
              {cmdActions.map((action) => (
                <Command.Item
                  key={action.id}
                  value={`${action.label} ${action.meta}`}
                  onSelect={() => {
                    runAction(action);
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 px-[18px] py-2.5 font-mono text-[13px] text-ink-2 data-[selected=true]:bg-selection data-[selected=true]:text-ink"
                >
                  <span className="w-4 text-center text-ink-4 group-data-[selected=true]:text-accent">
                    {action.glyph}
                  </span>
                  <span>{action.label}</span>
                  <span className="ml-auto text-[11px] text-ink-4">{action.meta}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
          <div className="flex items-center justify-between border-t border-line px-[18px] py-2.5 font-mono text-[10.5px] text-ink-4">
            <span className="flex items-center gap-1.5">
              <span className="kbd">↑↓</span> navigate · <span className="kbd">↵</span> open
            </span>
            <span>Powered by =VLOOKUP()</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
