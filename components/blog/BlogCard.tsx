"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  slug: string;
}

export default function BlogCard({
  title,
  date,
  description,
  tags,
  readTime,
  slug,
}: BlogCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/blog/${slug}`}
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
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#FF9933",
              background: "rgba(255,153,51,0.1)",
              padding: "2px 8px",
              borderRadius: 20,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#FAFAFA",
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 12, color: "#444", marginBottom: 8 }}>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {readTime}
      </p>
      <p
        style={{
          color: "#8A8A9A",
          fontSize: 13.5,
          lineHeight: 1.6,
          marginBottom: 12,
        }}
      >
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1"
        style={{ color: "#FF9933", fontSize: 13, fontWeight: 600 }}
      >
        Read more <ArrowRight size={14} />
      </span>
    </a>
  );
}
