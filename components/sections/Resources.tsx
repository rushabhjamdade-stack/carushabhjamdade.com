"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/shared/BrowserMockup";

const resources = [
  {
    title: "Financial Ratio Analysis Toolkit",
    description:
      "51 ratios, fraud/distress scores (Altman Z-Score, Beneish M-Score), Bajaj Auto demo data. Used by 500+ CAs across India.",
    cta: "Download Free",
    format: "Excel",
    icon: Download,
    stats: "500+ downloads",
    gradient: "from-emerald-400 to-teal-500",
    mockupType: "spreadsheet" as const,
  },
  {
    title: "AI Valuation Range Tool",
    description:
      "Get an instant AI-powered valuation range for your startup using multiple methodologies. Free, no login required.",
    cta: "Try it Free",
    format: "Web App",
    icon: ExternalLink,
    gradient: "from-indigo-400 to-violet-500",
    mockupType: "dashboard" as const,
  },
  {
    title: "CA Practice Automation Guide",
    description:
      "A practical guide on how CA firms can automate repetitive tasks using AI — from document processing to client communication.",
    cta: "Coming Soon",
    format: "PDF Guide",
    icon: Download,
    gradient: "from-blue-400 to-indigo-500",
    mockupType: "document" as const,
  },
];

export default function Resources() {
  return (
    <SectionWrapper id="resources">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 text-center">
        Free resources
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
        Tools, templates, and downloads for finance professionals — no catch
        (okay, maybe your email)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {resources.map((resource, i) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl card-premium overflow-hidden"
          >
            {/* Mockup preview */}
            <div className="p-3 pb-0">
              <div className="rounded-lg overflow-hidden">
                <BrowserMockup
                  title={resource.title.toLowerCase().replace(/\s/g, "-")}
                  gradient={resource.gradient}
                  mockupType={resource.mockupType}
                  className="!shadow-none !border-0"
                />
              </div>
            </div>
            <div className="p-5 pt-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  {resource.format}
                </span>
                {resource.stats && (
                  <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {resource.stats}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {resource.description}
              </p>
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-lg w-full"
              >
                {resource.cta}{" "}
                <resource.icon size={14} className="ml-1.5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
