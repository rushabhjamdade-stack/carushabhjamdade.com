"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { FileSpreadsheet } from "lucide-react";

const placeholderTools = [
  {
    name: "Financial Ratio Toolkit",
    description:
      "51 ratios, fraud/distress scores, ready-to-use for Indian companies. Used by 500+ CAs.",
    emoji: "📊",
  },
  {
    name: "Valuation Templates",
    description:
      "DCF, comparable company analysis, and precedent transaction templates for Indian startups.",
    emoji: "📈",
  },
  {
    name: "More tools coming soon",
    description:
      "I'm building more Excel tools for CA professionals. Check back or subscribe to get notified.",
    emoji: "🔧",
  },
];

export default function ExcelTools() {
  return (
    <SectionWrapper id="tools">
      <div className="flex items-center justify-center gap-3 mb-3">
        <FileSpreadsheet className="w-8 h-8 text-green-600" />
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Excel Tools
        </h2>
      </div>
      <p className="text-gray-500 text-center mb-12">
        Finance tools and templates for professionals — details coming soon
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {placeholderTools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl card-premium"
          >
            <span className="text-3xl mb-4 block">{tool.emoji}</span>
            <h3 className="text-lg font-semibold text-navy mb-2">
              {tool.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {tool.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
