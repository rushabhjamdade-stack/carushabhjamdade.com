"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrambleText from "@/components/shared/ScrambleText";
import BrowserMockup from "@/components/shared/BrowserMockup";
import CountUpNumber from "@/components/shared/CountUpNumber";
import { scrambleWords } from "@/lib/constants";
import { ArrowRight, Users } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center relative overflow-hidden hero-gradient"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-32 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 pt-24 pb-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 mb-5 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-green" />
              rushabh@finance ~$
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1]"
            >
              <span className="text-navy">CA </span>
              <span className="text-gradient">Rushabh Jamdade</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.3)}
              className="text-xl md:text-2xl text-gray-700 mb-5"
            >
              I build <ScrambleText words={scrambleWords} />
            </motion.div>

            <motion.p
              {...fadeUp(0.45)}
              className="text-base md:text-lg text-gray-500 max-w-lg mb-6 leading-relaxed"
            >
              Chartered Accountant turned solo founder. I build AI-powered
              products that solve real problems in finance, tax, and accounting.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 mb-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-xl px-7 py-5 text-base shadow-lg shadow-indigo-200/50"
                onClick={() => scrollTo("products")}
              >
                Explore My Products <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 py-5 text-base border-gray-300 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50"
                onClick={() => scrollTo("booking")}
              >
                Book a Call
              </Button>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center gap-6 mb-5"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-indigo-400", "bg-violet-400", "bg-blue-400", "bg-emerald-400"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                      >
                        {["R", "S", "A", "M"][i]}
                      </div>
                    )
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  <strong className="text-gray-700">500+</strong> CAs trust my
                  tools
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500">
                <Users size={14} className="text-indigo-500" />
                <strong className="text-gray-700">6</strong> products shipped
              </div>
            </motion.div>

            {/* Terminal one-liner */}
            <motion.div
              {...fadeUp(0.75)}
              className="font-mono text-sm text-gray-400 bg-gray-50/80 border border-gray-100 rounded-lg px-4 py-2 inline-flex items-center gap-2"
            >
              <span className="text-indigo-400">&gt;</span>
              AI products shipped &middot; 51 ratios automated &middot; Big 4
              survivor &middot; chai-powered
            </motion.div>
          </div>

          {/* Right — Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main mockup */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <BrowserMockup
                  title="lockedpdfs.com"
                  gradient="from-indigo-500 to-violet-600"
                  mockupType="dashboard"
                  className="shadow-2xl shadow-indigo-200/30"
                />
              </div>
              {/* Floating card overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                  <span className="text-white text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    <CountUpNumber end={51} /> ratios automated
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Processing complete
                  </p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
                <p className="text-lg font-bold text-gradient">
                  <CountUpNumber end={6} suffix="+" />
                </p>
                <p className="text-[10px] text-gray-400">Products Live</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
