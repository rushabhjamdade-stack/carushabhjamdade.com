"use client";

import { useState, useEffect } from "react";

const lines = [
  { text: '> rushabh init --mode="CA x AI Builder"', status: "" },
  { text: "> deploying lockedpdfs.com", status: "       \u2713 live" },
  { text: "> deploying moneysmartkids.in", status: "    \u2713 live" },
  { text: "> building taxpilot", status: "              \u23F3 in dev" },
  { text: "> building finlens-ratio-engine", status: "  \u23F3 in dev" },
  { text: "> status: brewing chai", status: "           \u2615 \u221E" },
];

function colorLine(text: string) {
  if (text.includes("\u2713")) {
    const idx = text.indexOf("\u2713");
    const cmd = text.slice(0, idx);
    const rest = text.slice(idx);
    return (
      <>
        <span style={{ color: "#6A6A7A" }}>{cmd}</span>
        <span style={{ color: "#28ca41", fontWeight: 700 }}>{rest}</span>
      </>
    );
  }
  if (text.includes("\u23F3")) {
    const idx = text.indexOf("\u23F3");
    const cmd = text.slice(0, idx);
    const rest = text.slice(idx);
    return (
      <>
        <span style={{ color: "#6A6A7A" }}>{cmd}</span>
        <span style={{ color: "#FF9933" }}>{rest}</span>
      </>
    );
  }
  if (text.includes("\u2615")) {
    const idx = text.indexOf("\u2615");
    const cmd = text.slice(0, idx);
    const rest = text.slice(idx);
    return (
      <>
        <span style={{ color: "#6A6A7A" }}>{cmd}</span>
        <span style={{ color: "#FF9933" }}>{rest}</span>
      </>
    );
  }
  if (text.includes('--mode=')) {
    const idx = text.indexOf('--mode=');
    const before = text.slice(0, idx);
    const after = text.slice(idx + 7);
    return (
      <>
        <span style={{ color: "#FF9933" }}>{before}</span>
        <span style={{ color: "#ccc" }}>--mode=</span>
        <span style={{ color: "#28ca41" }}>{after}</span>
      </>
    );
  }
  return <span style={{ color: "#6A6A7A" }}>{text}</span>;
}

export default function TerminalTyper() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (curLine >= lines.length) return;
    const line = lines[curLine];
    const fullText = line.text + line.status;
    if (curChar < fullText.length) {
      const speed = curChar < line.text.length ? 25 : 10;
      const t = setTimeout(() => setCurChar((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, fullText]);
        setCurLine((l) => l + 1);
        setCurChar(0);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [curLine, curChar]);

  const currentFullText =
    curLine < lines.length ? lines[curLine].text + lines[curLine].status : "";
  const currentPartial = currentFullText.slice(0, curChar);

  return (
    <div
      style={{
        background: "rgba(12,12,18,0.85)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 12,
        overflow: "hidden",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          background: "rgba(255,255,255,0.02)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff5f57",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ffbd2e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#28ca41",
              display: "inline-block",
            }}
          />
        </div>
        <span
          style={{
            color: "#444",
            fontSize: 11,
            fontFamily: "var(--font-mono)",
          }}
        >
          rushabh@finlens ~ %
        </span>
        <div style={{ width: 52 }} />
      </div>

      {/* Terminal body */}
      <div style={{ padding: "16px 20px", minHeight: 155 }}>
        {displayed.map((l, i) => (
          <div
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12.5,
              lineHeight: 1.85,
              whiteSpace: "pre",
            }}
          >
            {colorLine(l)}
          </div>
        ))}
        {curLine < lines.length && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12.5,
              lineHeight: 1.85,
              whiteSpace: "pre",
            }}
          >
            {colorLine(currentPartial)}
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                color: "#FF9933",
                fontWeight: 700,
              }}
            >
              ▊
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
