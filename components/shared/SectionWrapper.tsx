"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
  compact?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  bgColor = "bg-white",
  compact = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${compact ? "py-8 md:py-10" : "py-12 md:py-16"} ${bgColor} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16"
      >
        {children}
      </motion.div>
    </section>
  );
}
