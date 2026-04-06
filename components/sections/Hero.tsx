"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrambleText from "@/components/shared/ScrambleText";
import { scrambleWords } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-6 py-32 relative z-10">
        {/* Terminal prompt */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 mb-6 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-green" />
          rushabh@finance ~$
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-navy">CA </span>
          <span className="text-gradient">Rushabh Jamdade</span>
        </motion.h1>

        {/* Subheading with scramble */}
        <motion.div
          {...fadeUp(0.5)}
          className="text-xl md:text-2xl text-gray-700 mb-6"
        >
          I build <ScrambleText words={scrambleWords} />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.8)}
          className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed"
        >
          Chartered Accountant turned solo founder.
          <br />I build AI-powered products that solve real problems in finance,
          tax, and accounting.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.0)} className="flex flex-wrap gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-xl px-8 py-6 text-base shadow-lg shadow-indigo-200/50"
            onClick={() => scrollTo("products")}
          >
            Explore My Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl px-8 py-6 text-base border-gray-300 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50"
            onClick={() => scrollTo("booking")}
          >
            Book a Call
          </Button>
        </motion.div>

        {/* Terminal one-liner */}
        <motion.div
          {...fadeUp(1.2)}
          className="font-mono text-sm text-gray-400 flex items-center gap-2"
        >
          <span className="text-indigo-400">&gt;</span>
          AI products shipped &middot; 51 ratios automated &middot; Big 4
          survivor &middot; chai-powered
        </motion.div>
      </div>
    </section>
  );
}
