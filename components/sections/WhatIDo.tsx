"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Brain, Hammer, PenLine, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Products for Finance",
    description:
      "I design and build AI-powered tools for valuation, tax filing, practice management, and financial analysis — from idea to shipped product.",
    link: "#products",
  },
  {
    icon: Hammer,
    title: "AI Product Builder",
    description:
      "I build full-stack AI products solo — from architecture to deployment. My stack: Next.js, Claude API, Supabase, and relentless iteration.",
    link: "#products",
  },
  {
    icon: PenLine,
    title: "Content & Thought Leadership",
    description:
      "I write about AI in finance, building products as a solo founder, and the future of the CA profession — on LinkedIn and beyond.",
    link: "#content",
  },
];

export default function WhatIDo() {
  return (
    <SectionWrapper id="whatido">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
        What I do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <a
              href={pillar.link}
              className="block p-6 bg-white border border-gray-200 rounded-xl card-premium h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center mb-4"><pillar.icon className="w-5 h-5 text-indigo-600" /></div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              <span className="text-indigo-600 text-sm font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight size={14} />
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
