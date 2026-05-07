"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bell, Check, Lock } from "lucide-react";
import { premiumToolkits, type PremiumToolkit } from "@/lib/constants";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function ToolkitCard({ toolkit }: { toolkit: PremiumToolkit }) {
  const isAvailable = toolkit.status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-[rgba(12,12,18,0.5)] p-6 md:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,153,51,0.25)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_60px_rgba(255,153,51,0.08)] h-full overflow-hidden"
      style={{
        backgroundImage: isAvailable
          ? "linear-gradient(180deg, rgba(255,153,51,0.05) 0%, transparent 50%)"
          : undefined,
      }}
    >
      {/* Top row — tag + price */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.16em] border rounded-full px-2.5 py-0.5 ${
            isAvailable
              ? "border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.06)] text-[#FF9933]"
              : "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[#8A8A9A]"
          }`}
        >
          {toolkit.tag}
        </span>
        {isAvailable && toolkit.price && (
          <span className="inline-flex items-center font-display font-black text-[20px] md:text-[22px] leading-none text-[#FF9933]">
            {toolkit.price}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-black text-[#FAFAFA] tracking-tight leading-[1.05] text-[22px] md:text-[26px]">
        {toolkit.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[14px] md:text-[15px] text-[#D4D4D4] leading-relaxed">
        {toolkit.description}
      </p>

      {/* Proof line */}
      <p className="mt-3 font-mono text-[11px] leading-relaxed text-[#8A8A9A] italic">
        {toolkit.proofLine}
      </p>

      {/* Highlights */}
      <ul className="mt-4 space-y-2">
        {toolkit.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[13px] md:text-sm text-[#D4D4D4] leading-relaxed"
          >
            <Check
              size={14}
              strokeWidth={3}
              className="text-[#28CA41] mt-[3px] flex-shrink-0"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Spacer */}
      <div className="flex-1 min-h-[16px]" />

      {/* Footer — CTA / status */}
      <div className="mt-6">
        {isAvailable ? (
          <div className="inline-flex items-center gap-2 self-start rounded-md border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-3 py-2 font-mono text-[11px] text-[#8A8A9A]">
            <Lock size={11} className="text-[#FF9933]" />
            Purchase link — coming soon
          </div>
        ) : (
          <button
            onClick={() => scrollToId("newsletter")}
            className="group/btn inline-flex items-center justify-between gap-2 w-full rounded-xl border border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.06)] px-5 py-3 text-sm font-semibold text-[#FF9933] transition-all hover:bg-[rgba(255,153,51,0.12)] hover:border-[rgba(255,153,51,0.45)]"
          >
            <span className="inline-flex items-center gap-2">
              <Bell size={14} />
              Notify me
            </span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function PremiumToolkits() {
  return (
    <section
      id="premium-toolkits"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-40 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.03)" }}
      />

      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9933] mb-3">
            § 03 · Premium Toolkits
          </div>
          <h2 className="font-display font-black text-[#FAFAFA] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95]">
            Premium toolkits.{" "}
            <span className="text-[#FF9933]">Grab, pay, ship.</span>
          </h2>
          <p className="mt-4 text-[16px] md:text-lg text-[#C4C4C4] leading-relaxed">
            Industry-specific Excel tools with intelligence built in. Not
            templates you fill — systems that think. One-time purchase.
          </p>
        </motion.div>

        {/* 3 toolkit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {premiumToolkits.map((toolkit) => (
            <ToolkitCard key={toolkit.id} toolkit={toolkit} />
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-10 text-[14px] md:text-[15px] text-[#8A8A9A] leading-relaxed"
        >
          Looking for something specific? I also build custom toolkits for any
          industry.{" "}
          <button
            onClick={() => scrollToId("services")}
            className="inline-flex items-center gap-1 text-[#FF9933] hover:text-[#FFB366] font-semibold transition-colors"
          >
            See Services
            <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
