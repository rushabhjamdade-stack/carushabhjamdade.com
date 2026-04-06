"use client";

import { motion } from "framer-motion";

const credentials = [
  { name: "PwC", sub: "Big 4 Experience" },
  { name: "Thermo Fisher", sub: "Fortune 500" },
  { name: "ICAI", sub: "Chartered Accountant" },
  { name: "AI Product Builder", sub: "Products for Finance" },
];

export default function CredibilityBar() {
  return (
    <section className="py-6 border-y border-gray-100 bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gray-200 max-w-[60px]" />
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Trusted Background
          </p>
          <div className="h-px flex-1 bg-gray-200 max-w-[60px]" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="text-center">
                <span className="text-base md:text-lg font-bold text-gray-700 tracking-tight">
                  {cred.name}
                </span>
                <p className="text-[10px] text-gray-400 mt-0.5">{cred.sub}</p>
              </div>
              {i < credentials.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-gray-200 ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
