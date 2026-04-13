"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Every CA Should Learn to Build AI Products",
    category: "AI IN FINANCE",
    categoryColor: "from-[#FF9933] to-[#E68A2E]",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt:
      "The CA profession is evolving. Those who learn to build with AI will define the next decade of financial services.",
    slug: "why-cas-should-build-ai",
  },
  {
    title: "How I Automated 51 Financial Ratios with AI",
    category: "BUILDING IN PUBLIC",
    categoryColor: "from-[#FFD700] to-[#FF9933]",
    date: "March 8, 2026",
    readTime: "7 min read",
    excerpt:
      "A deep dive into how I used AI to automate comprehensive financial ratio analysis for Indian companies.",
    slug: "automating-51-ratios",
  },
  {
    title: "How to Ship AI Products Fast — A Practical Guide",
    category: "PRODUCT BUILDING",
    categoryColor: "from-[#E68A2E] to-[#FF6B00]",
    date: "March 1, 2026",
    readTime: "6 min read",
    excerpt:
      "From idea to production in weeks, not months. Here's how I ship AI products as a one-person team.",
    slug: "solo-founder-guide",
  },
];

export default function FeaturedContent() {
  return (
    <SectionWrapper id="content" bgColor="bg-[rgba(255,255,255,0.008)]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-3 text-center">
        Latest insights
      </h2>
      <p className="text-[#8A8A9A] text-center mb-10 max-w-md mx-auto">
        Thoughts on AI, finance, and building in public
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group block bg-[rgba(12,12,18,0.5)] border border-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-2xl card-premium overflow-hidden"
          >
            {/* Gradient thumbnail */}
            <div
              className={`h-32 bg-gradient-to-br ${post.categoryColor} relative`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-1 bg-white/30 rounded" />
              </div>
            </div>
            <div className="p-5">
              <Badge
                variant="outline"
                className="text-[10px] text-[#FF9933] bg-[rgba(255,153,51,0.08)] border-[rgba(255,153,51,0.15)] mb-3"
              >
                {post.category}
              </Badge>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#FF9933] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-[#555555] mb-2">
                {post.date} &middot; {post.readTime}
              </p>
              <p className="text-[#8A8A9A] text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <span className="text-[#FF9933] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/blog"
          className="text-[#FF9933] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          View all posts <ArrowRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
