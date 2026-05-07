"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credentials = [
  { name: "PwC", sub: "Big 4 Audit", logo: "/images/logos/PwC.png" },
  { name: "Thermo Fisher", sub: "Fortune 500", logo: "/images/logos/Thermo Fisher.png" },
  { name: "ICAI", sub: "Chartered Accountant", logo: "/images/logos/CA Logo.png" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 w-[440px] h-[440px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.03)" }}
      />

      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* LEFT — heading + text (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Section heading — inside the column */}
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9933] mb-3">
              § 04 · About
            </div>
            <h2 className="font-display font-black text-[#FAFAFA] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] mb-8">
              The short version.
            </h2>

            {/* Body text */}
            <div className="space-y-5 text-[16px] md:text-[17px] text-[#D4D4D4] leading-[1.8]">
              <p>
                I can&apos;t code. But I&apos;ve learned how to use AI to build
                the tools finance professionals actually need — and that turns
                out to be enough.
              </p>

              <p>
                I spent time in technology consulting at{" "}
                <span className="text-[#FAFAFA] font-semibold">PwC</span> and
                FP&amp;A at{" "}
                <span className="text-[#FAFAFA] font-semibold">
                  Thermo Fisher Scientific
                </span>
                . Two very different vantage points, same takeaway — even at the
                top of the profession, most of the work still ran on manual
                spreadsheets and PDFs nobody had bothered to question.
              </p>

              <p>
                <span className="text-[#FAFAFA] font-semibold">
                  In 2023, I stopped waiting for someone else to fix it.
                </span>
              </p>

              <p>
                Now I ship AI-powered tools for finance — Excel toolkits that
                circle through LinkedIn, and full products like{" "}
                <span className="text-[#FAFAFA] font-semibold">
                  LockedPDFs
                </span>
                . A few more are shipping soon.
              </p>

              <p>
                I also guest lecture at{" "}
                <span className="text-[#FAFAFA] font-semibold">
                  SIBM Pune
                </span>
                ,{" "}
                <span className="text-[#FAFAFA] font-semibold">MIT WPU</span>{" "}
                and a few others, and take the occasional corporate training
                gig. Mostly I&apos;m heads-down, building.
              </p>

              <p className="pt-3 border-l-2 border-[#FF9933] pl-5 text-[#FAFAFA] font-medium">
                The future of finance isn&apos;t CAs getting replaced by AI.
                It&apos;s CAs who learn to build with it.
              </p>
            </div>

            {/* Teaching & Training — credibility strip */}
            <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.06)]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF9933] mb-4">
                Training &amp; Workshops
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { value: "300+", label: "Hours of training delivered" },
                  { value: "1,200+", label: "Students trained" },
                  { value: "3", label: "Top B-Schools" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-3 py-4"
                  >
                    <div className="font-display font-bold text-[#FAFAFA] text-[22px] md:text-[26px] leading-none">
                      {s.value}
                    </div>
                    <div className="text-[#8A8A9A] text-[10px] md:text-[11px] font-mono uppercase tracking-wider mt-2 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-[#8A8A9A]">
                <span className="text-[#555]">Institutions:</span>
                <span className="text-[#FAFAFA]">SIBM Pune</span>
                <span className="text-[#333]">·</span>
                <span className="text-[#FAFAFA]">MIT WPU</span>
                <span className="text-[#333]">·</span>
                <span className="text-[#FAFAFA]">DY Patil Business School</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — photo + credentials (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Photo */}
            <div className="relative w-full aspect-[4/3] rounded-[16px] border border-[rgba(255,153,51,0.2)] overflow-hidden">
              <Image
                src="/images/Rushabh.jpg"
                alt="CA Rushabh Jamdade"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>

            {/* Credentials — horizontal */}
            <div className="flex items-center gap-3">
              {credentials.map((c) => (
                <div
                  key={c.name}
                  className="flex-1 flex flex-col items-center gap-1.5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-2 py-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[#FAFAFA] font-semibold text-[11px]">
                      {c.name}
                    </div>
                    <div className="text-[#8A8A9A] text-[8px] font-mono uppercase tracking-wider mt-0.5">
                      {c.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats — single row */}
            <div className="flex items-center gap-3">
              {[
                { value: "6+", label: "Products" },
                { value: "850+", label: "Downloads" },
                { value: "Pune", label: "Based in" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-2 py-3 text-center"
                >
                  <div className="text-[#FAFAFA] font-bold text-sm font-display">
                    {s.value}
                  </div>
                  <div className="text-[#8A8A9A] text-[8px] font-mono uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
