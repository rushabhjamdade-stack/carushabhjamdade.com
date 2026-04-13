"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";

const stack = [
  { name: "Next.js 14", category: "Framework", color: "#FAFAFA" },
  { name: "Claude API", category: "AI Engine", color: "#FF9933" },
  { name: "Supabase", category: "Database", color: "#3ECF8E" },
  { name: "Vercel", category: "Deployment", color: "#FAFAFA" },
  { name: "Razorpay", category: "Payments", color: "#2B84EA" },
  { name: "Claude Code", category: "Dev Tool", color: "#FF9933" },
];

export default function TechStack() {
  return (
    <SectionWrapper id="stack">
      <p className="section-label">HOW I BUILD</p>
      <h2
        style={{
          fontSize: 38,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 16,
          color: "#FAFAFA",
          letterSpacing: -1,
          fontFamily: "var(--font-display)",
        }}
      >
        The stack behind the products.
      </h2>
      <p
        style={{
          color: "#555",
          fontSize: 14.5,
          maxWidth: 460,
          margin: "0 auto 40px",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        A non-technical CA who ships production apps. Here&apos;s what powers
        everything.
      </p>

      <div className="flex justify-center gap-3.5 flex-wrap">
        {stack.map((s) => (
          <div
            key={s.name}
            style={{
              background: "rgba(12,12,18,0.5)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12,
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              minWidth: 115,
            }}
          >
            <span style={{ color: s.color, fontWeight: 700, fontSize: 14.5 }}>
              {s.name}
            </span>
            <span style={{ color: "#444", fontSize: 10.5, marginTop: 3 }}>
              {s.category}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
