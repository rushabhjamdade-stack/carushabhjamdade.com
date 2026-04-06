"use client";

import { motion } from "framer-motion";

function PwCLogo() {
  return (
    <svg width="48" height="22" viewBox="0 0 48 22" fill="none" className="text-gray-600">
      <text x="0" y="18" fontSize="20" fontWeight="800" fontFamily="Georgia, serif" fill="currentColor">
        PwC
      </text>
    </svg>
  );
}

function ThermoFisherLogo() {
  return (
    <span className="text-sm md:text-base font-bold text-gray-600 tracking-tight leading-none">
      Thermo Fisher<br />
      <span className="text-[10px] md:text-xs font-normal text-gray-400 tracking-normal">Scientific</span>
    </span>
  );
}

function ICAILogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" className="text-gray-600">
        {/* Shield shape */}
        <path d="M10 1L19 5V11C19 16.5 15 20 10 21C5 20 1 16.5 1 11V5L10 1Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="10" y="14" fontSize="8" fontWeight="700" textAnchor="middle" fill="currentColor">CA</text>
      </svg>
      <span className="text-sm md:text-base font-bold text-gray-600">ICAI</span>
    </div>
  );
}

const credentials = [
  { key: "pwc", logo: <PwCLogo />, sub: "Big 4 Experience" },
  { key: "thermo", logo: <ThermoFisherLogo />, sub: "" },
  { key: "icai", logo: <ICAILogo />, sub: "Chartered Accountant" },
  { key: "builder", logo: <span className="text-sm md:text-base font-bold text-gray-600">AI Product Builder</span>, sub: "Products for Finance" },
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
              key={cred.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="text-center">
                {cred.logo}
                {cred.sub && <p className="text-[10px] text-gray-400 mt-0.5">{cred.sub}</p>}
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
