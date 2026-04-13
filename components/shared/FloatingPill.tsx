"use client";

import { useState, useEffect } from "react";

export default function FloatingPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="hidden md:flex"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        zIndex: 999,
        background: "rgba(10,10,15,0.92)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 40,
        padding: "10px 24px",
        display: undefined,
        gap: 12,
        alignItems: "center",
        fontSize: 12,
        fontWeight: 600,
        backdropFilter: "blur(20px)",
        fontFamily: "var(--font-mono)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(-50%, 0)" : "translate(-50%, 20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <span style={{ color: "#28ca41" }}>🚀 2 live</span>
      <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
      <span style={{ color: "#FF9933" }}>950+ users</span>
      <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
      <span style={{ color: "#6A6A7A" }}>☕ ∞ chai</span>
    </div>
  );
}
