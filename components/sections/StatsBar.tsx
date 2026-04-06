"use client";

import CountUpNumber from "@/components/shared/CountUpNumber";

const stats = [
  { end: 6, suffix: "+", label: "Products Shipped" },
  { end: 51, suffix: "", label: "Ratios Automated" },
  { end: 500, suffix: "+", label: "CAs Reached" },
  { end: 3, suffix: "+", label: "Years Building" },
];

export default function StatsBar() {
  return (
    <section className="py-10 bg-gradient-to-r from-indigo-50/50 via-violet-50/30 to-indigo-50/50 border-y border-indigo-100/50">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                <CountUpNumber
                  end={stat.end}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
