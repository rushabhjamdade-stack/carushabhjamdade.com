"use client";

import { motion } from "framer-motion";

const credentials = [
  { name: "PwC", sub: "Big 4 Consulting" },
  { name: "Thermo Fisher", sub: "Fortune 500" },
  { name: "ICAI", sub: "Chartered Accountant" },
  { name: "SIBM Pune", sub: "Visiting Faculty" },
  { name: "MIT WPU", sub: "Adjunct Faculty" },
];

export default function CredibilityBar() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
        padding: "32px 24px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <p
          style={{
            color: "#333",
            fontSize: 10,
            letterSpacing: 3,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          TRUSTED BACKGROUND
        </p>
        <div className="flex justify-center gap-12 flex-wrap">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <span
                style={{
                  color: "#555",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                {cred.name}
              </span>
              <span
                style={{
                  color: "#333",
                  fontSize: 10,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {cred.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
