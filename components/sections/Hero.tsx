"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Package, Zap, Users } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Hero() {
  const scrollTo = (target: string) => {
    // Accept either a plain id ("workbook") or a compound hash suffix
    // ("workbook-toolkits"). The base id is the actual DOM element to scroll to.
    const baseId = target.split("-")[0];
    document.getElementById(baseId)?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      const href = `#${target}`;
      if (window.location.hash !== href) {
        history.replaceState(null, "", href);
      }
      window.dispatchEvent(new CustomEvent("workbook:navigate"));
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-28 pb-16"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.06)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.04)" }}
      />

      {/* Ruled-paper overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 48px)",
        }}
      />

      <div className="relative z-10 w-full max-w-site mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* LEFT — headline + tagline + CTAs */}
          <div>
            <h1 className="font-display font-black tracking-[-0.035em] leading-[0.88] text-[56px] sm:text-[80px] md:text-[100px] lg:text-[112px] xl:text-[128px] mb-8 md:mb-10">
              <motion.span {...fadeUp(0.15)} className="block text-[#FAFAFA]">
                Debit.
              </motion.span>
              <motion.span {...fadeUp(0.3)} className="block text-[#FAFAFA]">
                Credit.
              </motion.span>
              <motion.span {...fadeUp(0.45)} className="block relative">
                <span
                  className="text-transparent bg-clip-text animate-gradient"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FF9933 0%, #FFD700 45%, #FF6B00 100%)",
                  }}
                >
                  Deploy.
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                  className="inline-block ml-2 md:ml-3 w-[0.08em] h-[0.75em] -mb-[0.08em] bg-[#FF9933] animate-blink align-baseline"
                  aria-hidden
                />
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.75)}
              className="text-lg md:text-xl lg:text-[22px] text-[#FAFAFA] leading-relaxed max-w-xl mb-8 font-medium"
            >
              Chartered Accountant.{" "}
              <span className="text-[#C4C4C4] font-normal">
                I build the tools finance professionals actually need.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.9)}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollTo("workbook-toolkits")}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm md:text-base font-semibold text-[#0A0A0F] shadow-lg shadow-[rgba(255,153,51,0.2)] transition-all hover:shadow-[rgba(255,153,51,0.35)] hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FFD700 100%)",
                }}
              >
                Grab the Toolkits
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollTo("workbook-softwares")}
                className="group inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] px-6 py-3.5 text-sm md:text-base font-medium text-[#FAFAFA] backdrop-blur-sm transition-all hover:border-[rgba(255,153,51,0.4)] hover:text-[#FF9933]"
              >
                See the Software
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <a
                href="https://www.linkedin.com/in/rushabhjamdade/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] text-[#8A8A9A] transition-all hover:border-[rgba(255,153,51,0.4)] hover:text-[#FF9933]"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>

            {/* Training credibility strip */}
            <motion.div
              {...fadeUp(1.05)}
              className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.08)]"
            >
              <div className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[#FF9933] mb-5">
                Training &amp; Workshops delivered at
              </div>
              <div className="flex items-center gap-x-5 lg:gap-x-6 whitespace-nowrap overflow-x-auto scrollbar-none">
                <span className="font-display font-bold text-base md:text-lg lg:text-xl text-[#FAFAFA] leading-none">
                  SIBM Pune
                </span>
                <span className="text-[#444] text-xl">·</span>
                <span className="font-display font-bold text-base md:text-lg lg:text-xl text-[#FAFAFA] leading-none">
                  MIT WPU
                </span>
                <span className="text-[#444] text-xl">·</span>
                <span className="font-display font-bold text-base md:text-lg lg:text-xl text-[#FAFAFA] leading-none">
                  DY Patil Business School
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — stat bento cards (desktop) / proof strip (mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.7,
            }}
            className="grid grid-cols-4 lg:grid-cols-2 gap-3 lg:gap-5"
          >
            {/* Card 1 — Downloads */}
            <div className="rounded-2xl border border-[rgba(255,153,51,0.2)] bg-[rgba(12,12,18,0.5)] backdrop-blur-sm p-5 lg:p-8 flex flex-col justify-between lg:aspect-square">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] items-center justify-center">
                <Download size={28} className="text-[#FF9933]" />
              </div>
              <div>
                <div className="font-display font-black text-xl lg:text-[52px] text-[#FAFAFA] leading-none">
                  850+
                </div>
                <div className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-[#C4C4C4] mt-2">
                  Downloads
                </div>
              </div>
            </div>

            {/* Card 2 — Toolkits */}
            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,18,0.5)] backdrop-blur-sm p-5 lg:p-8 flex flex-col justify-between lg:aspect-square">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] items-center justify-center">
                <Package size={28} className="text-[#FAFAFA]" />
              </div>
              <div>
                <div className="font-display font-black text-xl lg:text-[52px] text-[#FAFAFA] leading-none">
                  3
                </div>
                <div className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-[#C4C4C4] mt-2">
                  Excel Toolkits
                </div>
              </div>
            </div>

            {/* Card 3 — Live Product */}
            <div className="rounded-2xl border border-[rgba(40,202,65,0.2)] bg-[rgba(12,12,18,0.5)] backdrop-blur-sm p-5 lg:p-8 flex flex-col justify-between lg:aspect-square">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-[rgba(40,202,65,0.08)] border border-[rgba(40,202,65,0.2)] items-center justify-center">
                <Zap size={28} className="text-[#28CA41]" />
              </div>
              <div>
                <div className="font-display font-black text-xl lg:text-[52px] text-[#FAFAFA] leading-none">
                  1
                </div>
                <div className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-[#C4C4C4] mt-2">
                  Live Product
                </div>
              </div>
            </div>

            {/* Card 4 — Shipping */}
            <div className="rounded-2xl border border-[rgba(255,153,51,0.2)] bg-[rgba(12,12,18,0.5)] backdrop-blur-sm p-5 lg:p-8 flex flex-col justify-between lg:aspect-square">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] items-center justify-center">
                <Users size={28} className="text-[#FF9933]" />
              </div>
              <div>
                <div className="font-display font-black text-xl lg:text-[52px] text-[#FAFAFA] leading-none">
                  1,200+
                </div>
                <div className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-[#C4C4C4] mt-2">
                  Students Trained
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
