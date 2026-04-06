"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  bgColor = "bg-white",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-24 ${bgColor} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-site mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
