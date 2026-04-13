"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  altBg?: boolean;
  compact?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  altBg = false,
  compact = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${compact ? "py-8 md:py-10" : "py-16 md:py-20"} ${
        altBg ? "section-alt" : ""
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="max-w-[1200px] mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
