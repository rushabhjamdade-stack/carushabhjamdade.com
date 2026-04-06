"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "Ex-PwC", sub: "Big 4", icon: "🏢" },
  { label: "Ex-Thermo Fisher", sub: "Fortune 500", icon: "🔬" },
  { label: "Chartered Accountant", sub: "ICAI", icon: "📜" },
  { label: "AI Products Shipped", sub: "Solo Founded", icon: "🚀" },
  { label: "Next.js + Claude + Supabase", sub: "Tech Stack", icon: "⚡" },
];

export default function CredibilityBar() {
  return (
    <section className="py-8 border-y border-gray-100 bg-gradient-to-r from-gray-50/80 via-white to-gray-50/80">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all"
            >
              <span className="text-base">{badge.icon}</span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-700 leading-tight">
                  {badge.label}
                </span>
                <span className="text-[10px] text-gray-400 leading-tight">{badge.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
