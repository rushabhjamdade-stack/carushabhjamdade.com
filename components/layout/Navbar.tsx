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
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter((id) => id && !id.startsWith("/"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
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
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold text-xl"
        >
          <span className="text-gradient">RJ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
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
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg shadow-md shadow-indigo-200/50"
            onClick={() => scrollTo("#booking")}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-xl md:hidden">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-gray-500"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col gap-6 px-6">
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
                  className="text-lg font-medium text-gray-700 hover:text-blue"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg shadow-md shadow-indigo-200/50 w-full mt-4"
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
