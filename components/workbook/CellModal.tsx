"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowUpRight, Sparkles, FileSpreadsheet } from "lucide-react";
import ScreenshotTabs, {
  ScreenshotLightbox,
} from "@/components/shared/ScreenshotTabs";
import DownloadGate from "@/components/shared/DownloadPrompt";
import type { ToolScreenshot } from "@/lib/constants";
import type { WorkbookRow } from "./workbookData";

interface CellModalProps {
  row: WorkbookRow | null;
  cellRef: string;
  onClose: () => void;
}

export default function CellModal({ row, cellRef, onClose }: CellModalProps) {
  const [lightbox, setLightbox] = useState<{
    screenshots: ToolScreenshot[];
    idx: number;
  } | null>(null);

  const [downloadGate, setDownloadGate] = useState<{
    title: string;
    filename: string;
  } | null>(null);

  useEffect(() => {
    if (!row) return;
    const handleKey = (e: KeyboardEvent) => {
      // Only intercept ESC when no inner modal is active (those handle their own)
      if (e.key === "Escape" && !lightbox && !downloadGate) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [row, onClose, lightbox, downloadGate]);

  useEffect(() => {
    if (!row) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [row]);

  return (
    <>
      <AnimatePresence>
        {row && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8"
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.88)] backdrop-blur-md" />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header strip — fake sheet/cell breadcrumb */}
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-5 py-2.5 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,18,0.95)] backdrop-blur-sm">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8A8A9A]">
                  <span className="text-[#FF9933]">{cellRef}</span>
                  <span className="text-[#333]">→</span>
                  <span>expanded view</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md hover:bg-[rgba(255,255,255,0.06)] text-[#8A8A9A] hover:text-[#FAFAFA] transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                {row && row.kind === "toolkit" && (
                  <ToolkitDetail
                    row={row}
                    onOpenLightbox={(screenshots, idx) =>
                      setLightbox({ screenshots, idx })
                    }
                    onDownload={(title, filename) => {
                      // Close the product preview so the email gate takes the
                      // stage instead of stacking behind it.
                      setDownloadGate({ title, filename });
                      onClose();
                    }}
                  />
                )}
                {row && row.kind === "software" && <SoftwareDetail row={row} />}
                {row && row.kind === "summary" && <SummaryDetail row={row} />}
              </div>

              {/* Footer hint */}
              <div className="px-6 pb-4 font-mono text-[10px] text-[#555] flex justify-between">
                <span>Esc to close</span>
                <span>↑ ↓ to move · Enter to reopen</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <ScreenshotLightbox
            screenshots={lightbox.screenshots}
            initialIdx={lightbox.idx}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <DownloadGate
        open={!!downloadGate}
        toolTitle={downloadGate?.title || ""}
        filename={downloadGate?.filename || ""}
        onClose={() => setDownloadGate(null)}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*   Toolkit detail view                                                */
/* ------------------------------------------------------------------ */

function ToolkitDetail({
  row,
  onOpenLightbox,
  onDownload,
}: {
  row: Extract<WorkbookRow, { kind: "toolkit" }>;
  onOpenLightbox: (screenshots: ToolScreenshot[], idx: number) => void;
  onDownload: (title: string, filename: string) => void;
}) {
  const tool = row.source;
  const isNew = tool.label.startsWith("NEW");

  return (
    <div>
      {/* Label + status */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A9A]">
          {tool.label}
        </span>
        <span
          className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${
            isNew
              ? "border-[rgba(255,153,51,0.35)] bg-[rgba(255,153,51,0.08)] text-[#FF9933]"
              : "border-[rgba(40,202,65,0.25)] bg-[rgba(40,202,65,0.05)] text-[#28CA41]"
          }`}
        >
          {isNew && <Sparkles size={10} />}
          {isNew ? "New" : "Free"}
        </span>
      </div>

      <h3 className="font-display font-black tracking-tight leading-[1.05] text-[#FAFAFA] text-[28px] md:text-[34px]">
        {tool.title}
      </h3>

      <p className="mt-3 text-[#D4D4D4] leading-relaxed text-[15px] md:text-base">
        {tool.tagline}
      </p>

      <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#FF9933]">
        <span className="w-1 h-1 rounded-full bg-[#FF9933]" />
        {tool.hook}
      </div>

      {tool.act && (
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-2.5 py-1 text-[10px] font-mono text-[#8A8A9A] ml-2">
          <span>📜</span>
          {tool.act}
        </div>
      )}

      {tool.highlights && tool.highlights.length > 0 && (
        <ul className="mt-5 space-y-2">
          {tool.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[14px] text-[#D4D4D4] leading-relaxed"
            >
              <span className="text-[#28CA41] mt-[3px] flex-shrink-0">✓</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {tool.screenshots && tool.screenshots.length > 0 ? (
        <div className="mt-6">
          <ScreenshotTabs
            screenshots={tool.screenshots}
            onOpenLightbox={(idx) => onOpenLightbox(tool.screenshots!, idx)}
          />
        </div>
      ) : tool.image ? (
        <div className="mt-6 rounded-lg overflow-hidden border border-[rgba(255,255,255,0.08)]">
          <Image
            src={tool.image}
            alt={tool.title}
            width={1200}
            height={750}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto"
          />
        </div>
      ) : null}

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-md border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-2.5 py-1 font-mono text-[10px] text-[#555]">
          <FileSpreadsheet size={11} className="text-[#28CA41]" />
          <span className="truncate max-w-[240px]">{tool.filename}</span>
        </div>
        <button
          onClick={() => onDownload(tool.title, tool.filename)}
          className="group/btn inline-flex items-center justify-between gap-2 rounded-xl border border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.06)] px-5 py-3 text-sm font-semibold text-[#FF9933] transition-all hover:bg-[rgba(255,153,51,0.12)] hover:border-[rgba(255,153,51,0.45)]"
        >
          <span>Download</span>
          <Download
            size={16}
            className="transition-transform group-hover/btn:translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*   Software detail view                                               */
/* ------------------------------------------------------------------ */

function SoftwareDetail({
  row,
}: {
  row: Extract<WorkbookRow, { kind: "software" }>;
}) {
  const s = row.source;
  const isLive = s.status === "live";
  const isExternal = s.url.startsWith("http");

  const goToLink = () => {
    if (isExternal) {
      window.open(s.url, "_blank", "noopener,noreferrer");
    } else {
      const id = s.url.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A9A]">
          {s.label}
        </span>
        <span
          className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${
            isLive
              ? "border-[rgba(40,202,65,0.3)] bg-[rgba(40,202,65,0.08)] text-[#28CA41]"
              : "border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.06)] text-[#FF9933]"
          }`}
        >
          {isLive && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#28CA41] animate-pulse-green" />
          )}
          {isLive ? "Live" : "Soon"}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-[32px]">{s.emoji}</span>
        <h3 className="font-display font-black tracking-tight leading-[1.02] text-[#FAFAFA] text-[30px] md:text-[38px]">
          {s.title}
        </h3>
      </div>

      <p className="mt-2 text-[#D4D4D4] leading-relaxed text-[15px] md:text-base max-w-xl">
        {s.tagline}
      </p>

      {s.hook && (
        <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#FF9933]">
          <Sparkles size={11} />
          {s.hook}
        </div>
      )}

      {s.image && (
        <div className="mt-6 rounded-lg overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <Image
            src={s.image}
            alt={s.title}
            width={1200}
            height={750}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={goToLink}
          className={`group/btn inline-flex items-center justify-between gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
            isLive
              ? "border border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.06)] text-[#FF9933] hover:bg-[rgba(255,153,51,0.12)] hover:border-[rgba(255,153,51,0.45)]"
              : "border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.05)]"
          }`}
        >
          <span>{isLive ? `Visit ${s.title}` : "Notify me"}</span>
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*   Summary detail view                                                */
/* ------------------------------------------------------------------ */

function SummaryDetail({
  row,
}: {
  row: Extract<WorkbookRow, { kind: "summary" }>;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8A8A9A] mb-3">
        derived metric
      </div>
      <div className="font-mono text-sm text-[#D4D4D4] mb-5 break-all">
        {row.formula}
      </div>
      <div className="font-display font-black text-[64px] md:text-[96px] leading-none text-[#FF9933]">
        {row.value}
      </div>
      <p className="mt-4 text-[13px] text-[#8A8A9A] max-w-md leading-relaxed">
        The balance sheet of a one-person software company. Assets in code,
        liabilities in sleep.
      </p>
    </div>
  );
}
