"use client";

import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  status: "live" | "in-dev";
  url: string;
  emoji: string;
  tags: string[];
}

export default function ProductCard({
  name,
  description,
  status,
  url,
  emoji,
  tags,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const isLive = status === "live";

  return (
    <a
      href={url}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block no-underline"
      style={{
        background: "rgba(12,12,18,0.5)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(10px)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "none",
        borderColor: hovered
          ? "rgba(255,153,51,0.25)"
          : "rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.45), 0 0 30px rgba(255,153,51,0.08)"
          : "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div
        className="flex justify-between items-start"
        style={{ marginBottom: 18 }}
      >
        <span style={{ fontSize: 38 }}>{emoji}</span>
        <span
          style={{
            padding: "4px 10px",
            borderRadius: 20,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1,
            background: isLive
              ? "rgba(40,202,65,0.12)"
              : "rgba(255,153,51,0.12)",
            color: isLive ? "#28ca41" : "#FF9933",
          }}
        >
          {isLive ? "LIVE" : "IN DEV"}
        </span>
      </div>
      <h3
        style={{
          color: "#FAFAFA",
          fontSize: 21,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {name}
      </h3>
      <p
        style={{
          color: "#777",
          fontSize: 13.5,
          lineHeight: 1.6,
          marginBottom: 18,
          minHeight: 44,
        }}
      >
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "#555",
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 20,
          color: "#FF9933",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.5,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.3s",
        }}
      >
        {isLive ? "Try it →" : "Coming soon →"}
      </div>
    </a>
  );
}
