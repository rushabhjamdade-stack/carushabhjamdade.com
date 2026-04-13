"use client";

import { useEffect, useState, useRef } from "react";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";

function MagneticNavBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
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

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setOffset({ x: 0, y: 0 }); }}
      onClick={onClick}
      className="px-5 py-2 text-[13px] font-bold rounded-lg transition-all duration-300 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #FF9933, #E68A2E)",
        color: "#0A0A0F",
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${hovered ? 1.05 : 1})`,
        boxShadow: hovered ? "0 0 30px rgba(255,153,51,0.35), 0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[20px] border-b"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        borderColor: scrolled ? "rgba(255,255,255,0.04)" : "transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-0"
        >
          <span className="text-[#FF9933] font-[800] text-[20px]">RJ</span>
          <span className="text-[rgba(255,255,255,0.15)] mx-[10px] text-[18px]">|</span>
          <span className="text-[#FAFAFA] font-medium text-[13px] tracking-[1.5px]">
            CA x AI BUILDER
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-[13px] font-medium tracking-[0.5px] transition-colors"
              style={{ color: "#6A6A7A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6A6A7A")}
            >
              {link.label}
            </a>
          ))}
          <MagneticNavBtn onClick={() => scrollTo("#connect")}>
            Book a Call
          </MagneticNavBtn>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: "#FAFAFA" }}
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed top-0 right-0 w-72 h-full z-50 shadow-xl lg:hidden backdrop-blur-[20px]"
            style={{
              background: "rgba(10,10,15,0.95)",
              borderLeft: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-xl"
                style={{ color: "#6A6A7A" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-5 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-lg font-medium transition-colors"
                  style={{ color: "#8A8A9A" }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollTo("#connect")}
                className="mt-2 py-3 rounded-lg font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #FF9933, #E68A2E)",
                  color: "#0A0A0F",
                }}
              >
                Book a Call
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
