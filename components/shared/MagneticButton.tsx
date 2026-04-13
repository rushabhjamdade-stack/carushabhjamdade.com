"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  href = "#",
  primary = true,
  onClick,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - r.left - r.width / 2) * 0.18,
      y: (e.clientY - r.top - r.height / 2) * 0.18,
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const baseStyle = primary
    ? {
        background: "linear-gradient(135deg, #FF9933, #E68A2E)",
        color: "#0A0A0F",
        border: "none",
      }
    : {
        background: "transparent",
        color: "#FAFAFA",
        border: "1px solid rgba(255,255,255,0.1)",
      };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setOffset({ x: 0, y: 0 });
      }}
      onClick={handleClick}
      className={`inline-flex items-center px-8 py-3.5 font-bold text-sm rounded-lg no-underline cursor-pointer transition-all duration-300 ${className}`}
      style={{
        ...baseStyle,
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${hovered ? 1.05 : 1})`,
        boxShadow: hovered
          ? primary
            ? "0 0 30px rgba(255,153,51,0.35), 0 8px 32px rgba(0,0,0,0.4)"
            : "0 0 20px rgba(255,153,51,0.12)"
          : "none",
      }}
    >
      {children}
    </a>
  );
}
