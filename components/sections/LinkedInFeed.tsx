"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArrowRight } from "lucide-react";

const linkedInPosts = [
  {
    title: "Why I left a Fortune 500 job to build AI products for finance",
    preview:
      "Most people thought I was crazy. A stable career at Thermo Fisher, great pay, good trajectory. But I saw something they didn't — the gap between AI capabilities and finance tools...",
    date: "Mar 2026",
  },
  {
    title: "I automated 51 financial ratios. Here's what I learned.",
    preview:
      "CAs spend 3-4 hours manually computing ratios for a single company. I built a tool that does it in minutes. The key wasn't just automation — it was understanding which ratios actually matter...",
    date: "Feb 2026",
  },
  {
    title: "The future of the CA profession isn't what you think",
    preview:
      "Every CA I talk to is worried about AI replacing them. They're asking the wrong question. The real question is: which CAs will learn to build with AI, and which will be left behind?",
    date: "Jan 2026",
  },
];

function LinkedInCard({
  post,
  delay,
}: {
  post: (typeof linkedInPosts)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href="https://linkedin.com/in/carushabhjamdade"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block no-underline"
      style={{
        background: "rgba(12,12,18,0.5)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 24,
        backdropFilter: "blur(10px)",
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
      {/* LinkedIn header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #FF9933, #E68A2E)",
            color: "#0A0A0F",
          }}
        >
          RJ
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA" }}>
            CA Rushabh Jamdade
          </p>
          <p style={{ fontSize: 11, color: "#444" }}>{post.date}</p>
        </div>
      </div>

      <h3
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "#FAFAFA",
          marginBottom: 8,
          lineHeight: 1.4,
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "#8A8A9A",
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {post.preview}
      </p>
    </motion.a>
  );
}

export default function LinkedInFeed() {
  return (
    <SectionWrapper id="linkedin" altBg>
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="section-label" style={{ textAlign: "left" }}>
            ON LINKEDIN
          </p>
          <h2
            style={{
              fontSize: 38,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#FAFAFA",
              letterSpacing: -1,
              fontFamily: "var(--font-display)",
            }}
          >
            Insights I share online
          </h2>
        </div>
        <a
          href="https://linkedin.com/in/carushabhjamdade"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2"
          style={{
            color: "#FF9933",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Follow on LinkedIn <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {linkedInPosts.map((post, i) => (
          <LinkedInCard key={post.title} post={post} delay={i * 0.1} />
        ))}
      </div>

      <div className="text-center mt-6 md:hidden">
        <a
          href="https://linkedin.com/in/carushabhjamdade"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1"
          style={{
            color: "#FF9933",
            fontWeight: 600,
          }}
        >
          Follow on LinkedIn <ArrowRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
