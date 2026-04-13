"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import CountUpNumber from "@/components/shared/CountUpNumber";

const timeline = [
  { year: "2019", label: "CA Qualified", sub: "ICAI" },
  { year: "2020", label: "PwC", sub: "Big 4 Audit" },
  { year: "2022", label: "Thermo Fisher", sub: "Fortune 500" },
  { year: "2024", label: "AI Product Builder", sub: "Building for Finance" },
];

const stats = [
  { end: 2, label: "Global Companies", suffix: "" },
  { end: 6, label: "Products Shipped", suffix: "+" },
  { end: 51, label: "Ratios Automated", suffix: "" },
  { end: 500, label: "CAs Reached", suffix: "+" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-10 text-center">
        My story
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Text — 3 cols */}
        <div className="lg:col-span-3 space-y-4 text-[#8A8A9A] text-base md:text-lg leading-relaxed">
          <p>
            I started my career at <strong className="text-[#FAFAFA]">PwC</strong>,
            where I learned that the financial world runs on spreadsheets, PDFs,
            and a lot of manual work. Then at{" "}
            <strong className="text-[#FAFAFA]">Thermo Fisher Scientific</strong>, I
            saw how technology could transform operations at Fortune 500 scale.
          </p>
          <p>
            Somewhere between audit reports and board meetings, I had a
            realization:{" "}
            <em>
              the tools finance professionals use haven&apos;t kept up with AI.
            </em>
          </p>
          <p>
            <strong className="text-[#FAFAFA]">
              So I quit the comfortable path and started building.
            </strong>
          </p>
          <p>
            Today, I build AI-powered products for finance — from PDF
            toolkits used by professionals to financial literacy courses for
            children. My fuel is chai and an obsession with shipping fast.
          </p>
          <p className="text-[#FAFAFA] font-semibold border-l-4 border-[#FF9933] pl-4 py-1">
            I believe the future of finance isn&apos;t about replacing CAs with
            AI — it&apos;s about CAs who know how to build with AI.
          </p>
        </div>

        {/* Photo placeholder — 2 cols */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            {/* Offset decorative border */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-[rgba(255,153,51,0.15)]" />
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl bg-[rgba(255,153,51,0.06)] flex flex-col items-center justify-center shadow-lg overflow-hidden">
              <span className="text-6xl font-bold text-gradient opacity-40">
                RJ
              </span>
              <p className="text-sm text-[#FF9933] mt-2">Photo coming soon</p>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[rgba(255,153,51,0.15)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="mt-12 mb-10">
        <div className="flex items-center justify-center gap-0 overflow-x-auto pb-2">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex items-center">
              <div className="flex flex-col items-center px-4 md:px-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9933] to-[#E68A2E] flex items-center justify-center text-white text-xs font-bold shadow-md">
                  {item.year.slice(2)}
                </div>
                <p className="text-sm font-semibold text-[#FAFAFA] mt-2">
                  {item.label}
                </p>
                <p className="text-xs text-[#555555]">{item.sub}</p>
              </div>
              {i < timeline.length - 1 && (
                <div className="w-10 md:w-16 h-0.5 bg-gradient-to-r from-[rgba(255,153,51,0.3)] to-[rgba(255,153,51,0.5)] -mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[rgba(255,255,255,0.05)]">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
              <CountUpNumber end={stat.end} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-[#8A8A9A]">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
