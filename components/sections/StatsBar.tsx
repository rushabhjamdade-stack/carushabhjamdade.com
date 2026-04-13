"use client";

import CountUpNumber from "@/components/shared/CountUpNumber";

const stats = [
  { end: 1000, suffix: "+", label: "PDFs Processed", sub: "LockedPDFs" },
  { end: 51, suffix: "", label: "Ratios Automated", sub: "Financial Toolkit" },
  { end: 500, suffix: "+", label: "CAs Reached", sub: "Across India" },
  { end: 4, suffix: "", label: "Products Live", sub: "And counting" },
];

export default function StatsBar() {
  return (
    <section className="py-10 bg-gradient-to-r from-[rgba(255,153,51,0.04)] via-[rgba(255,153,51,0.02)] to-[rgba(255,153,51,0.04)] border-y border-[rgba(255,153,51,0.08)]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                <CountUpNumber end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-medium text-[#FAFAFA]">{stat.label}</p>
              <p className="text-xs text-[#555555]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
