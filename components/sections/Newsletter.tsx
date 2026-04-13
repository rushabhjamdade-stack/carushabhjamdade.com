"use client";

import { useState } from "react";
import { Send, CheckCircle, Shield, Clock, Mail } from "lucide-react";

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
        body: JSON.stringify({ email }),
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
      style={{
        padding: "64px 24px",
        background: "var(--bg-section-alt)",
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="section-label">STAY IN THE LOOP</p>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 12,
            fontFamily: "var(--font-display)",
          }}
        >
          Get my weekly take on AI in Finance
        </h2>
        <p
          style={{
            color: "#555",
            marginBottom: 24,
            maxWidth: 400,
            margin: "0 auto 24px",
            fontSize: 14.5,
          }}
        >
          No spam. No fluff. Just what&apos;s working — from someone who builds.
        </p>

        {status === "success" ? (
          <div
            className="flex items-center justify-center gap-2"
            style={{ color: "#28ca41" }}
          >
            <CheckCircle size={20} />
            <span>You&apos;re in! Check your inbox.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 rounded-xl px-4 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#FAFAFA",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-12 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FF9933, #E68A2E)",
                color: "#0A0A0F",
                border: "none",
              }}
            >
              {status === "loading" ? "..." : "Subscribe"}
              <Send size={16} />
            </button>
          </form>
        )}

        {status === "error" && (
          <p style={{ color: "#EF4444", fontSize: 13, marginTop: 12 }}>
            Something went wrong. Please try again.
          </p>
        )}

        {/* Trust indicators */}
        <div
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {[
            { icon: Clock, text: "Weekly delivery" },
            { icon: Shield, text: "No spam ever" },
            { icon: Mail, text: "Unsubscribe anytime" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-1.5"
              style={{ fontSize: 12, color: "#444" }}
            >
              <item.icon size={12} />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
