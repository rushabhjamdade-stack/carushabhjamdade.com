"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type CmdKContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const CmdKContext = createContext<CmdKContextValue | null>(null);

export function CmdKProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "/" && !isTyping && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <CmdKContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </CmdKContext.Provider>
  );
}

export function useCmdK() {
  const ctx = useContext(CmdKContext);
  if (!ctx) throw new Error("useCmdK must be used within CmdKProvider");
  return ctx;
}
