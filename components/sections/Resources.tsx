"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Financial Ratio Analysis Toolkit",
    description:
      "51 ratios, fraud/distress scores, Bajaj Auto demo data. Used by 500+ CAs.",
    cta: "Download Free",
    format: "Excel",
    gated: true,
  },
  {
    title: "AI Valuation Range Tool",
    description:
      "Get an instant AI-powered valuation range for your startup. Free.",
    cta: "Try it",
    format: "Web App",
    gated: false,
  },
];

export default function Resources() {
  return (
    <SectionWrapper id="resources" bgColor="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3 text-center">
        Free resources
      </h2>
      <p className="text-gray-500 text-center mb-12">
        Tools, templates, and downloads — no catch (okay, maybe your email)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {resources.map((resource, i) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl card-premium"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-xs font-medium text-gray-400 uppercase">
                  {resource.format}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg"
                >
                  {resource.cta} <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
