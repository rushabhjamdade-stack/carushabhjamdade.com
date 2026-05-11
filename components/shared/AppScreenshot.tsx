"use client";

import Image from "next/image";
import { ReactNode } from "react";

/**
 * AppScreenshot — browser-chrome wrapper that either shows:
 *  - a real screenshot image (when `src` is provided), OR
 *  - a stylized HTML mockup passed as children
 *
 * Use for Softwares shelf tiles. Swap from mockup → real screenshot later
 * by adding `src="/images/tools/lockedpdfs.png"` and dropping the file in.
 */

interface AppScreenshotProps {
  url: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  children?: ReactNode;
  className?: string;
}

export default function AppScreenshot({
  url,
  src,
  alt,
  width = 600,
  height = 360,
  children,
  className = "",
}: AppScreenshotProps) {
  return (
    <div
      className={`rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0A0A0F] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a22] border-b border-[rgba(255,255,255,0.05)]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 ml-2 flex justify-center">
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md px-3 py-0.5 text-[10px] text-[#8A8A9A] font-mono max-w-[240px] truncate">
            🔒 {url}
          </div>
        </div>
      </div>

      {/* Content area */}
      {src ? (
        <div className="relative" style={{ aspectRatio: `${width}/${height}` }}>
          <Image
            src={src}
            alt={alt || url}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative bg-gradient-to-br from-[#0F0F17] via-[#0A0A0F] to-[#0F0F17]">
          {children}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*   LockedPDFs mockup content                                         */
/* ------------------------------------------------------------------ */

export function LockedPDFsMockup() {
  const tools = [
    { label: "Merge", active: true },
    { label: "Split", active: false },
    { label: "Compress", active: false },
    { label: "Protect", active: false },
  ];

  return (
    <div className="p-4 md:p-5 space-y-4">
      {/* Tool tabs */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {tools.map((t) => (
          <div
            key={t.label}
            className={`px-2.5 py-1 rounded-md text-[10px] font-medium border ${
              t.active
                ? "bg-[rgba(255,153,51,0.12)] border-[rgba(255,153,51,0.35)] text-[#FF9933]"
                : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.06)] text-[#8A8A9A]"
            }`}
          >
            {t.label}
          </div>
        ))}
      </div>

      {/* Drop zone / file strip */}
      <div className="rounded-lg border border-dashed border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.02)] p-3 space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-[#8A8A9A] font-mono">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
          Drop PDFs · processed locally
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Q1_Audit.pdf", "Q2_Audit.pdf", "Q3_Audit.pdf"].map((name, i) => (
            <div
              key={i}
              className="relative rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] aspect-[3/4] flex flex-col justify-between p-1.5 overflow-hidden"
            >
              {/* Lines that look like page content */}
              <div className="space-y-1">
                <div className="h-[2px] bg-[rgba(255,255,255,0.15)] rounded w-3/4" />
                <div className="h-[2px] bg-[rgba(255,255,255,0.08)] rounded w-full" />
                <div className="h-[2px] bg-[rgba(255,255,255,0.08)] rounded w-5/6" />
                <div className="h-[2px] bg-[rgba(255,255,255,0.08)] rounded w-full" />
                <div className="h-[2px] bg-[rgba(255,255,255,0.08)] rounded w-2/3" />
              </div>
              <div className="text-[7px] text-[#555] font-mono truncate">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row — action button + privacy chip */}
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-[#28CA41]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28CA41]" />
          Client-side · zero uploads
        </div>
        <div
          className="rounded-md px-3 py-1 text-[10px] font-semibold text-[#0A0A0F]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FFD700 100%)",
          }}
        >
          Merge PDFs →
        </div>
      </div>
    </div>
  );
}
