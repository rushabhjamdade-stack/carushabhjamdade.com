"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Shield, Clock, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Saffron glow band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,153,51,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,153,51,0.25), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,153,51,0.15), transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-16 text-center"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9933] mb-4">
          § 05 · Newsletter
        </div>
        <h2 className="font-display font-black text-[#FAFAFA] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[64px] leading-[0.98] mb-5">
          Get the next tool first.
        </h2>
        <p className="text-base md:text-lg text-[#C4C4C4] max-w-xl mx-auto mb-10 leading-relaxed">
          I ship a new tool every few weeks. Subscribe to get it before
          LinkedIn sees it.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 text-[#28CA41] text-base">
            <CheckCircle2 size={20} />
            <span>You&apos;re in. Check your inbox soon.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] focus:border-[rgba(255,153,51,0.4)] rounded-xl px-5 h-12 text-[#FAFAFA] placeholder-[#555] outline-none focus:ring-2 focus:ring-[rgba(255,153,51,0.15)] transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 h-12 text-sm font-semibold text-[#0A0A0F] transition-all hover:-translate-y-0.5 disabled:opacity-60 whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FFD700 100%)",
              }}
            >
              {status === "loading" ? "…" : "Subscribe"}
              <Send size={15} />
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-4">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-[11px] font-mono uppercase tracking-widest text-[#555]">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={11} /> Weekly-ish
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Shield size={11} /> No spam
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail size={11} /> Unsubscribe anytime
          </span>
        </div>
      </motion.div>
    </section>
  );
}
