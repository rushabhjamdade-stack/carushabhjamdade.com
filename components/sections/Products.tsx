"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/constants";

export default function Products() {
  return (
    <SectionWrapper id="products" altBg>
      <p className="section-label">WHAT I&apos;VE SHIPPED</p>
      <h2
        style={{
          fontSize: 38,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 16,
          color: "#FAFAFA",
          letterSpacing: -1,
          fontFamily: "var(--font-display)",
        }}
      >
        Products, not slide decks.
      </h2>
      <p
        style={{
          color: "#555",
          fontSize: 14.5,
          maxWidth: 480,
          margin: "0 auto 48px",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        Live products used by real people. Not mockups. Not &quot;coming soon&quot; pages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
