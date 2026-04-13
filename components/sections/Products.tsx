"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/constants";

export default function Products() {
  return (
    <SectionWrapper id="products" bgColor="bg-[rgba(255,255,255,0.008)]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-3 text-center">
        Products I&apos;ve built
      </h2>
      <p className="text-[#8A8A9A] text-center mb-10 max-w-md mx-auto">
        AI-powered. Purpose-built. Solving real problems in finance.
      </p>

      <div className="space-y-5">
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

      <p className="text-center text-sm text-[#555555] mt-6">
        More products in the pipeline. Stay tuned.
      </p>
    </SectionWrapper>
  );
}
