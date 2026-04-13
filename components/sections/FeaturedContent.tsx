"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Every CA Should Learn to Build AI Products",
    category: "AI IN FINANCE",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt:
      "The CA profession is evolving. Those who learn to build with AI will define the next decade of financial services.",
    slug: "why-cas-should-build-ai",
  },
  {
    title: "How I Automated 51 Financial Ratios with AI",
    category: "BUILDING IN PUBLIC",
    date: "March 8, 2026",
    readTime: "7 min read",
    excerpt:
      "A deep dive into how I used AI to automate comprehensive financial ratio analysis for Indian companies.",
    slug: "automating-51-ratios",
  },
  {
    title: "How to Ship AI Products Fast — A Practical Guide",
    category: "PRODUCT BUILDING",
    date: "March 1, 2026",
    readTime: "6 min read",
    excerpt:
      "From idea to production in weeks, not months. Here's how I ship AI products as a one-person team.",
    slug: "solo-founder-guide",
  },
];

function BlogCard({ post, delay }: { post: (typeof posts)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={`/blog/${post.slug}`}
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
        overflow: "hidden",
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
      <div style={{ padding: 24 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#FF9933",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 12,
            display: "block",
          }}
        >
          {post.category}
        </span>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#FAFAFA",
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: "#444",
            marginBottom: 8,
          }}
        >
          {post.date} · {post.readTime}
        </p>
        <p
          style={{
            color: "#8A8A9A",
            fontSize: 13.5,
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {post.excerpt}
        </p>
        <span
          className="inline-flex items-center gap-1"
          style={{
            color: "#FF9933",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Read more <ArrowRight size={14} />
        </span>
      </div>
    </motion.a>
  );
}

export default function FeaturedContent() {
  return (
    <SectionWrapper id="content">
      <p className="section-label">INSIGHTS</p>
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
        Latest insights
      </h2>
      <p
        style={{
          color: "#555",
          fontSize: 14.5,
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        Thoughts on AI, finance, and building in public
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={i * 0.1} />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-1"
          style={{
            color: "#FF9933",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          View all posts <ArrowRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
