"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", color: "bg-gray-900 text-white" },
  { name: "TypeScript", color: "bg-blue-600 text-white" },
  { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
  { name: "Claude API", color: "bg-amber-600 text-white" },
  { name: "Supabase", color: "bg-emerald-600 text-white" },
  { name: "Vercel", color: "bg-gray-800 text-white" },
  { name: "shadcn/ui", color: "bg-gray-700 text-white" },
  { name: "Framer Motion", color: "bg-purple-600 text-white" },
];

export default function TechStack() {
  return (
    <section className="py-10 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5">
          The stack I use to ship fast
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} shadow-sm`}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
