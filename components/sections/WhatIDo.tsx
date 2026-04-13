"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Brain, Hammer, PenLine, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Products for Finance",
    description:
      "I design and build AI-powered tools for valuation, tax filing, practice management, and financial analysis — from idea to shipped product.",
    stat: "6+ products",
    link: "#products",
  },
  {
    icon: Hammer,
    title: "AI Product Builder",
    description:
      "I build AI-powered products end-to-end — from problem discovery to production deployment. Speed, iteration, and shipping what matters.",
    stat: "Full-stack",
    link: "#products",
  },
  {
    icon: PenLine,
    title: "Content & Thought Leadership",
    description:
      "I write about AI in finance, building products, and the future of the CA profession — on LinkedIn and my blog.",
    stat: "10+ articles",
    link: "#content",
  },
];

function DarkCard({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block h-full no-underline"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(10px)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-4px) scale(1.008)" : "none",
        borderColor: hovered
          ? "rgba(255,153,51,0.25)"
          : "rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,153,51,0.06)"
          : "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </a>
  );
}

export default function WhatIDo() {
  return (
    <SectionWrapper id="whatido">
      <p className="section-label">WHAT I DO</p>
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
        Three pillars. One mission.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <DarkCard href={pillar.link}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,153,51,0.1)",
                    border: "1px solid rgba(255,153,51,0.15)",
                  }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: "#FF9933" }} />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#FF9933",
                    background: "rgba(255,153,51,0.1)",
                    padding: "3px 10px",
                    borderRadius: 20,
                  }}
                >
                  {pillar.stat}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FAFAFA",
                  marginBottom: 8,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  color: "#8A8A9A",
                  fontSize: 15,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {pillar.description}
              </p>
              <span
                className="inline-flex items-center gap-1"
                style={{
                  color: "#FF9933",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Learn more <ArrowRight size={14} />
              </span>
            </DarkCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
