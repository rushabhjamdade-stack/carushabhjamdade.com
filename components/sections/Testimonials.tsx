"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Financial Ratio Toolkit saved our team hours of manual work. 51 ratios computed instantly with proper Indian accounting standards — this is exactly what the CA community needed.",
    name: "Priya Sharma",
    title: "Practicing CA, Mumbai",
    initials: "PS",
    gradient: "from-indigo-400 to-blue-500",
  },
  {
    quote:
      "Money Smart Kids made financial literacy fun for my children. My 8-year-old now understands saving vs spending better than most adults. Brilliant concept and execution.",
    name: "Ankit Mehta",
    title: "Parent & Startup Founder, Pune",
    initials: "AM",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "Rushabh combines deep finance knowledge with real technical skills. His valuation tools are being used by our advisory team — rare to find a CA who actually ships products.",
    name: "Vikram Desai",
    title: "CFO, SaaS Startup, Bangalore",
    initials: "VD",
    gradient: "from-violet-400 to-purple-500",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 text-center">
        What people say
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-md mx-auto">
        From CAs, founders, and professionals who use my products
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 card-premium relative"
          >
            <Quote className="w-8 h-8 text-indigo-100 mb-3" />
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-400">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
