"use client";

import { useState } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MagneticButton from "@/components/shared/MagneticButton";

const topics = [
  "AI strategy for your CA practice",
  "Product collaboration",
  "Startup valuation consultation",
  "Speaking & podcast invitations",
];

const socials = [
  {
    name: "LinkedIn",
    handle: "/in/carushabhjamdade",
    url: "https://linkedin.com/in/carushabhjamdade",
  },
  {
    name: "Email",
    handle: "rushabh@carushabhjamdade.com",
    url: "mailto:rushabh@carushabhjamdade.com",
  },
  {
    name: "LockedPDFs",
    handle: "lockedpdfs.com",
    url: "https://lockedpdfs.com",
  },
  {
    name: "Money Smart Kids",
    handle: "moneysmartkids.in",
    url: "https://moneysmartkids.in",
  },
];

function HoverCard({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(12,12,18,0.5)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 28,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        borderColor: hovered
          ? "rgba(255,153,51,0.25)"
          : "rgba(255,255,255,0.05)",
      }}
    >
      {children}
    </div>
  );
}

export default function BookACall() {
  return (
    <SectionWrapper id="connect" altBg>
      <p className="section-label">LET&apos;S CONNECT</p>
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
        Have a problem in finance?
        <br />
        Let&apos;s solve it with AI.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
        {/* What we can discuss */}
        <HoverCard>
          <h3
            style={{
              color: "#FAFAFA",
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            What we can discuss
          </h3>
          {topics.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5"
              style={{ marginBottom: 14 }}
            >
              <span style={{ color: "#FF9933", fontSize: 14 }}>→</span>
              <span style={{ color: "#777", fontSize: 13.5 }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: 24 }}>
            <MagneticButton href="https://cal.com" primary>
              Book a Call ↗
            </MagneticButton>
          </div>
        </HoverCard>

        {/* Find me on */}
        <HoverCard>
          <h3
            style={{
              color: "#FAFAFA",
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Find me on
          </h3>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center no-underline"
              style={{
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.3s",
              }}
            >
              <span
                style={{ color: "#FAFAFA", fontWeight: 600, fontSize: 13.5 }}
              >
                {s.name}
              </span>
              <span style={{ color: "#444", fontSize: 11.5 }}>{s.handle}</span>
            </a>
          ))}
        </HoverCard>
      </div>
    </SectionWrapper>
  );
}
