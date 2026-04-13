"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";

const resources = [
  {
    name: "Financial Ratio Analysis Toolkit",
    desc: "Fraud scores, distress models, Bajaj Auto demo data. The toolkit 300+ CAs downloaded.",
    stat: "300+ downloads",
    type: "Excel",
  },
  {
    name: "Income Tax Calculator FY 25-26",
    desc: "Complete ITR computation toolkit for the current financial year.",
    stat: "150+ downloads",
    type: "Excel",
  },
];

function ResourceCard({
  resource,
  delay,
}: {
  resource: (typeof resources)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(12,12,18,0.5)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 28,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-4px)" : "none",
        borderColor: hovered
          ? "rgba(255,153,51,0.25)"
          : "rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,153,51,0.06)"
          : "none",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: 16 }}
      >
        <span
          style={{
            background: "rgba(255,153,51,0.1)",
            color: "#FF9933",
            padding: "3px 10px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {resource.type}
        </span>
        <span
          style={{
            color: "#28ca41",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {resource.stat}
        </span>
      </div>
      <h3
        style={{
          color: "#FAFAFA",
          fontSize: 17,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {resource.name}
      </h3>
      <p style={{ color: "#555", fontSize: 13, lineHeight: 1.5 }}>
        {resource.desc}
      </p>
    </motion.div>
  );
}

export default function Resources() {
  return (
    <SectionWrapper id="resources">
      <p className="section-label">FREE RESOURCES</p>
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
        Tools that people actually download.
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto"
      >
        {resources.map((r, i) => (
          <ResourceCard key={r.name} resource={r} delay={i * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}
