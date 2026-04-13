"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter((id) => id && !id.startsWith("/"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
          ? "bg-[rgba(10,10,15,0.9)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        {/* Branded Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF9933] to-[#E68A2E] flex items-center justify-center shadow-md">
            <span className="text-[#0A0A0F] font-bold text-sm tracking-tight">
              RJ
            </span>
          </div>
          <span className="hidden md:block font-semibold text-[#FAFAFA] text-sm">
            CA Rushabh Jamdade
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  scrollTo(link.href);
                }
              }}
              className={`text-[15px] font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#FF9933]"
                  : "text-[#8A8A9A] hover:text-[#FAFAFA]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#FF9933] to-[#E68A2E] hover:from-[#FFB366] hover:to-[#FF9933] text-[#0A0A0F] font-bold rounded-lg shadow-md px-5"
            onClick={() => scrollTo("#booking")}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#FAFAFA]"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 w-72 h-full bg-[rgba(10,10,15,0.95)] backdrop-blur-[20px] border-l border-[rgba(255,255,255,0.05)] z-50 shadow-xl lg:hidden">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#8A8A9A] text-xl"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col gap-5 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      scrollTo(link.href);
                    }
                  }}
                  className="text-lg font-medium text-[#8A8A9A] hover:text-[#FF9933]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-[#FF9933] to-[#E68A2E] hover:from-[#FFB366] hover:to-[#FF9933] text-[#0A0A0F] font-bold rounded-lg w-full mt-2"
                onClick={() => scrollTo("#booking")}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
