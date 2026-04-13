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
    stat: "6+ products",
    gradient: "from-[#FF9933] to-[#E68A2E]",
    link: "#products",
  },
  {
    icon: Hammer,
    title: "AI Product Builder",
    description:
      "I build AI-powered products end-to-end — from problem discovery to production deployment. Speed, iteration, and shipping what matters.",
    stat: "Full-stack",
    gradient: "from-[#FFD700] to-[#FF9933]",
    link: "#products",
  },
  {
    icon: PenLine,
    title: "Content & Thought Leadership",
    description:
      "I write about AI in finance, building products, and the future of the CA profession — on LinkedIn and my blog.",
    stat: "10+ articles",
    gradient: "from-[#E68A2E] to-[#FFB366]",
    link: "#content",
  },
];

export default function WhatIDo() {
  return (
    <SectionWrapper id="whatido">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-3 text-center">
        What I do
      </h2>
      <p className="text-[#8A8A9A] text-center mb-10 max-w-lg mx-auto">
        Three pillars. One mission — making finance smarter with AI.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
              className="group block p-6 bg-[rgba(12,12,18,0.5)] border border-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-2xl card-premium h-full relative overflow-hidden"
            >
              {/* Top gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient}`}
              />
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-sm`}
                >
                  <pillar.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-[#FF9933] bg-[rgba(255,153,51,0.08)] px-2.5 py-1 rounded-full">
                  {pillar.stat}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">
                {pillar.title}
              </h3>
              <p className="text-[#8A8A9A] text-base leading-relaxed mb-4">
                {pillar.description}
              </p>
              <span className="text-[#FF9933] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
