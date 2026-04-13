"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/shared/MagneticButton";
import TerminalTyper from "@/components/shared/TerminalTyper";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden hero-gradient"
      style={{ padding: "120px 24px 80px" }}
    >
      <div
        className="max-w-[1200px] mx-auto w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Label */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-7"
          style={{
            color: "#6A6A7A",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span
            className="animate-pulse-green"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28ca41",
              boxShadow: "0 0 12px rgba(40,202,65,0.5)",
              display: "inline-block",
            }}
          />
          CHARTERED ACCOUNTANT x AI PRODUCT BUILDER · PUNE, INDIA
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.15)}
          className="hero-h1"
          style={{
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: "#FAFAFA",
            marginBottom: 24,
            fontFamily: "var(--font-display)",
          }}
        >
          I build <span style={{ color: "#FF9933" }}>AI products</span>
          <br />
          that make finance
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #FF9933, #FFD700, #FF6B00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            smarter.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          style={{
            color: "#555",
            fontSize: 16.5,
            lineHeight: 1.65,
            maxWidth: 500,
            marginBottom: 32,
          }}
        >
          From PDF toolkits used by 500+ professionals to financial literacy for
          kids — I ship products that solve real problems in finance, tax, and
          accounting.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex gap-4 flex-wrap"
        >
          <MagneticButton
            primary
            onClick={() => scrollTo("products")}
          >
            Explore Products
          </MagneticButton>
          <MagneticButton
            primary={false}
            onClick={() => scrollTo("connect")}
          >
            Book a Call ↗
          </MagneticButton>
        </motion.div>

        {/* Terminal */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 max-w-[560px]"
        >
          <TerminalTyper />
        </motion.div>
      </div>
    </section>
  );
}
