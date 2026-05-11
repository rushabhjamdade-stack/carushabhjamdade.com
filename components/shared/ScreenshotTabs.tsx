"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import type { ToolScreenshot } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*   Lightbox modal — rendered ONCE at section level                   */
/* ------------------------------------------------------------------ */

export function ScreenshotLightbox({
  screenshots,
  initialIdx = 0,
  onClose,
}: {
  screenshots: ToolScreenshot[];
  initialIdx?: number;
  onClose: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(initialIdx);
  const active = screenshots[activeIdx];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setActiveIdx((i) => Math.min(i + 1, screenshots.length - 1));
      if (e.key === "ArrowLeft")
        setActiveIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [screenshots.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.92)] backdrop-blur-md" />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] text-[#FAFAFA] transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {activeIdx > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIdx((i) => i - 1);
          }}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] text-[#FAFAFA] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {activeIdx < screenshots.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveIdx((i) => i + 1);
          }}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] text-[#FAFAFA] transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="relative z-10 w-[92vw] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative w-full rounded-lg overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)]"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={active.src}
              alt={active.tab}
              fill
              sizes="92vw"
              className="object-contain bg-white"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-end mt-3 px-1 overflow-x-auto scrollbar-none gap-1">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-shrink-0 px-3 py-1.5 text-[11px] md:text-[12px] font-medium rounded-md border transition-all ${
                i === activeIdx
                  ? "bg-[#217346] text-white border-[#217346]"
                  : "bg-[rgba(255,255,255,0.05)] text-[#8A8A9A] border-[rgba(255,255,255,0.08)] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="mt-2 text-center text-[11px] text-[#555] font-mono">
          {activeIdx + 1} / {screenshots.length} · {active.tab} · ESC to close
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*   ScreenshotTabs (inline in tile) — no internal lightbox            */
/* ------------------------------------------------------------------ */

interface ScreenshotTabsProps {
  screenshots: ToolScreenshot[];
  onOpenLightbox?: (idx: number) => void;
  className?: string;
}

export default function ScreenshotTabs({
  screenshots,
  onOpenLightbox,
  className = "",
}: ScreenshotTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = screenshots[activeIdx];

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {/* Image area — clickable to open lightbox */}
      <button
        onClick={() => onOpenLightbox?.(activeIdx)}
        className="relative w-full border border-[rgba(255,255,255,0.08)] border-b-0 rounded-t-lg overflow-hidden bg-[#0A0A0F] cursor-zoom-in group/zoom"
        style={{ aspectRatio: "16/10" }}
        aria-label="Click to expand screenshot"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.tab}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain bg-white"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[rgba(0,0,0,0)] group-hover/zoom:bg-[rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 rounded-full bg-[rgba(0,0,0,0.7)] px-3 py-1.5 text-[11px] text-white font-medium">
            <ZoomIn size={14} />
            Click to expand
          </div>
        </div>
      </button>

      {/* Excel-style sheet tabs */}
      <div className="flex items-end bg-[rgba(12,12,18,0.6)] border border-[rgba(255,255,255,0.08)] border-t-0 rounded-b-lg px-1 pt-1 pb-0 overflow-x-auto scrollbar-none">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 px-2.5 py-1.5 text-[10px] font-medium rounded-t-md border border-b-0 transition-all whitespace-nowrap ${
              i === activeIdx
                ? "bg-[#217346] text-white border-[#217346]"
                : "bg-[rgba(255,255,255,0.03)] text-[#8A8A9A] border-[rgba(255,255,255,0.06)] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.06)]"
            }`}
          >
            {s.tab}
          </button>
        ))}
        <div className="flex-1 border-b border-[rgba(255,255,255,0.06)]" />
      </div>
    </div>
  );
}
