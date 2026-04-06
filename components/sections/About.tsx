"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";

const stats = [
  { label: "PwC + Thermo Fisher", value: "Big 4 & Fortune 500" },
  { label: "AI Products", value: "Multiple Shipped" },
  { label: "Ratios Automated", value: "51" },
  { label: "Status", value: "Solo Founder" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
        My story
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* Text - 3 cols */}
        <div className="md:col-span-3 space-y-4 text-gray-600 leading-relaxed">
          <p>
            I started my career at PwC, where I learned that the financial world
            runs on spreadsheets, PDFs, and a lot of manual work. Then at Thermo
            Fisher Scientific, I saw how technology could transform operations at
            Fortune 500 scale.
          </p>
          <p>
            Somewhere between audit reports and board meetings, I had a
            realization: the tools finance professionals use haven&apos;t kept up
            with AI.
          </p>
          <p>So I quit the comfortable path and started building.</p>
          <p>
            Today, I&apos;m a solo founder shipping AI-powered products for
            finance — from PDF toolkits used by professionals to financial
            literacy courses for children. My tech stack is Next.js, Claude, and
            Supabase. My fuel is chai.
          </p>
          <p className="font-medium text-navy">
            I believe the future of finance isn&apos;t about replacing CAs with
            AI — it&apos;s about CAs who know how to build with AI.
          </p>
        </div>

        {/* Photo placeholder - 2 cols */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-100 flex items-center justify-center text-gray-400 text-sm shadow-lg shadow-indigo-100/50">
            Your Photo Here
          </div>
        </div>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-lg font-bold text-navy">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
