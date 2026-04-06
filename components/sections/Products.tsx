"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/constants";

export default function Products() {
  return (
    <SectionWrapper id="products" bgColor="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3 text-center">
        Products I&apos;ve built
      </h2>
      <p className="text-gray-500 text-center mb-12">
        Solo-founded. AI-powered. Solving real problems.
      </p>

      {/* Bento Grid - featured card spans 2 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={product.featured ? "md:col-span-2" : ""}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
