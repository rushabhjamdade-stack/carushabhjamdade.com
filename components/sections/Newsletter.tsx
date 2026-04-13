"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
      className="bg-gradient-to-br from-[#0A0A0F] via-[#0A0A0F] to-[#0A0A0F] py-16 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 text-center relative z-10">
        <p className="text-[#FF9933] text-sm font-medium mb-3">
          Join 200+ finance professionals
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get my weekly take on AI in Finance
        </h2>
        <p className="text-[#555555] mb-6 max-w-md mx-auto">
          No spam. No fluff. Just what&apos;s working — from someone who builds.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <CheckCircle size={20} />
            <span>You&apos;re in! Check your inbox.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl focus:ring-indigo-400 focus:border-indigo-400"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-[#FF9933] to-[#E68A2E] hover:from-[#FFB366] hover:to-[#FF9933] text-white h-12 px-6 rounded-xl whitespace-nowrap shadow-lg"
            >
              {status === "loading" ? "..." : "Subscribe"}
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { icon: Clock, text: "Weekly delivery" },
            { icon: Shield, text: "No spam ever" },
            { icon: Mail, text: "Unsubscribe anytime" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-1.5 text-xs text-[#8A8A9A]"
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
