"use client";

import { useState } from "react";
import CountUpNumber from "@/components/shared/CountUpNumber";
import SectionWrapper from "@/components/shared/SectionWrapper";

function BentoCard({
  children,
  className = "",
  extraStyle,
}: {
  children: React.ReactNode;
  className?: string;
  extraStyle?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        background: "rgba(12,12,18,0.5)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(10px)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
        transform: hovered ? "translateY(-4px) scale(1.008)" : "none",
        borderColor: hovered
          ? "rgba(255,153,51,0.25)"
          : "rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,153,51,0.06)"
          : "0 2px 12px rgba(0,0,0,0.15)",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

export default function StatsBar() {
  const allProducts = [
    "FinLens",
    "AccoTrack",
    "LockedPDFs",
    "Money Smart Kids",
    "TaxPilot",
    "SplitEasy",
  ];

  return (
    <SectionWrapper id="numbers">
      <p className="section-label">THE REAL NUMBERS</p>
      <h2
        style={{
          fontSize: 38,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 48,
          color: "#FAFAFA",
          letterSpacing: -1,
          fontFamily: "var(--font-display)",
        }}
      >
        Built with proof,
        <br />
        not promises.
      </h2>

      <div
        className="grid gap-4 grid-cols-1 md:grid-cols-3"
      >
        {/* 500+ LockedPDFs */}
        <BentoCard>
          <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>
            🔒
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#FAFAFA",
              display: "block",
              lineHeight: 1.1,
              fontFamily: "var(--font-display)",
            }}
          >
            <CountUpNumber end={500} suffix="+" duration={2200} />
          </span>
          <span
            style={{
              display: "block",
              color: "#777",
              fontSize: 13.5,
              marginTop: 8,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Finance professionals used LockedPDFs
          </span>
          <span
            style={{
              display: "block",
              color: "#3A3A3A",
              fontSize: 11,
              marginTop: 6,
              letterSpacing: 0.3,
            }}
          >
            100% client-side · Zero server uploads
          </span>
        </BentoCard>

        {/* 300+ Ratio Toolkit */}
        <BentoCard>
          <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>
            📊
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#FAFAFA",
              display: "block",
              lineHeight: 1.1,
              fontFamily: "var(--font-display)",
            }}
          >
            <CountUpNumber end={300} suffix="+" duration={2200} />
          </span>
          <span
            style={{
              display: "block",
              color: "#777",
              fontSize: 13.5,
              marginTop: 8,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Downloaded the Ratio Analysis Toolkit
          </span>
          <span
            style={{
              display: "block",
              color: "#3A3A3A",
              fontSize: 11,
              marginTop: 6,
              letterSpacing: 0.3,
            }}
          >
            Fraud & distress scoring · Bajaj Auto demo
          </span>
        </BentoCard>

        {/* 150+ Tax Calculator */}
        <BentoCard>
          <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>
            🧾
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#FAFAFA",
              display: "block",
              lineHeight: 1.1,
              fontFamily: "var(--font-display)",
            }}
          >
            <CountUpNumber end={150} suffix="+" duration={2200} />
          </span>
          <span
            style={{
              display: "block",
              color: "#777",
              fontSize: 13.5,
              marginTop: 8,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Downloaded Income Tax Calculator
          </span>
          <span
            style={{
              display: "block",
              color: "#3A3A3A",
              fontSize: 11,
              marginTop: 6,
              letterSpacing: 0.3,
            }}
          >
            FY 2025-26 · Excel toolkit for CAs
          </span>
        </BentoCard>

        {/* 6 Products — span 2 */}
        <BentoCard
          className="md:col-span-2"
          extraStyle={{
            background:
              "linear-gradient(135deg, rgba(255,153,51,0.06) 0%, transparent 60%)",
          }}
        >
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div>
              <span
                style={{
                  color: "#FF9933",
                  fontSize: 52,
                  fontWeight: 800,
                  lineHeight: 1,
                  fontFamily: "var(--font-display)",
                }}
              >
                6
              </span>
              <p
                style={{
                  color: "#FAFAFA",
                  fontSize: 17,
                  fontWeight: 600,
                  marginTop: 8,
                }}
              >
                Products built as a solo founder
              </p>
              <p style={{ color: "#444", fontSize: 12, marginTop: 4 }}>
                2 live · 4 in development · All AI-powered
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {allProducts.map((p, i) => (
                <span
                  key={p}
                  style={{
                    background:
                      i <= 3
                        ? "rgba(255,153,51,0.1)"
                        : "rgba(255,255,255,0.04)",
                    color: i <= 3 ? "#FF9933" : "#555",
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Money Smart Kids spotlight */}
        <BentoCard
          extraStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 34, marginBottom: 8 }}>🧒</span>
          <span
            style={{ color: "#FAFAFA", fontSize: 15, fontWeight: 600 }}
          >
            Money Smart Kids
          </span>
          <span style={{ color: "#444", fontSize: 11, marginTop: 4 }}>
            30 lessons · Ages 5-13 · Indian context
          </span>
        </BentoCard>
      </div>
    </SectionWrapper>
  );
}
