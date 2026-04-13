"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";

const timeline = [
  { year: "2019", title: "CA Qualified", sub: "ICAI", active: false },
  { year: "2020", title: "PwC India", sub: "Technology Consulting", active: false },
  { year: "2022", title: "Thermo Fisher", sub: "Fortune 500 Finance", active: false },
  { year: "2024", title: "AI Builder", sub: "FinLens Advisory", active: true },
];

export default function About() {
  return (
    <SectionWrapper id="story" altBg>
      <p className="section-label">THE JOURNEY</p>
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
        From audit rooms to AI products.
      </h2>

      {/* Horizontal Timeline */}
      <div className="relative py-10 mb-12">
        {/* Timeline line */}
        <div
          className="absolute hidden md:block"
          style={{
            top: "50%",
            left: "8%",
            right: "8%",
            height: 2,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,153,51,0.25), rgba(255,153,51,0.5))",
            transform: "translateY(-50%)",
          }}
        />
        <div className="flex flex-col md:flex-row justify-between relative px-[4%] gap-8 md:gap-0">
          {timeline.map((n) => (
            <div
              key={n.year}
              className="flex flex-col items-center gap-2.5"
              style={{ flex: 1 }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: n.active ? "#FF9933" : "#444",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                }}
              >
                {n.year}
              </span>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: n.active ? "#FF9933" : "rgba(255,255,255,0.08)",
                  border: `2px solid ${n.active ? "#FF9933" : "rgba(255,255,255,0.1)"}`,
                  boxShadow: n.active
                    ? "0 0 20px rgba(255,153,51,0.4)"
                    : "none",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: n.active ? "#FAFAFA" : "#555",
                }}
              >
                {n.title}
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "#444",
                  textAlign: "center",
                }}
              >
                {n.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="max-w-[620px] mx-auto">
        <p style={{ color: "#777", fontSize: 15.5, lineHeight: 1.75, marginBottom: 20 }}>
          I started at{" "}
          <strong style={{ color: "#FF9933" }}>PwC</strong> and saw that the
          financial world runs on spreadsheets, PDFs, and manual work. At{" "}
          <strong style={{ color: "#FF9933" }}>Thermo Fisher Scientific</strong>,
          I saw how technology transforms operations at Fortune 500 scale.
        </p>
        <p style={{ color: "#777", fontSize: 15.5, lineHeight: 1.75, marginBottom: 20 }}>
          The gap was obvious:{" "}
          <em style={{ color: "#FAFAFA" }}>
            the tools finance professionals use haven&apos;t kept up with AI.
          </em>
        </p>
        <p style={{ color: "#777", fontSize: 15.5, lineHeight: 1.75, marginBottom: 20 }}>
          So I started building. Not as a developer — as a{" "}
          <strong style={{ color: "#FAFAFA" }}>
            CA who uses AI to ship products
          </strong>
          . I build with Claude Code, deploy on Vercel, and solve problems
          I&apos;ve lived through in audit rooms and boardrooms.
        </p>
        <p
          style={{
            color: "#FF9933",
            fontStyle: "italic",
            fontSize: 15.5,
            lineHeight: 1.75,
            borderLeft: "2px solid #FF9933",
            paddingLeft: 20,
            marginTop: 28,
          }}
        >
          The future of finance isn&apos;t CAs vs AI. It&apos;s CAs who build
          with AI.
        </p>
      </div>
    </SectionWrapper>
  );
}
