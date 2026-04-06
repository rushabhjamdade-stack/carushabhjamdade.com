"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Every CA Should Learn to Build AI Products",
    category: "AI IN FINANCE",
    categoryColor: "from-indigo-400 to-blue-500",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt:
      "The CA profession is evolving. Those who learn to build with AI will define the next decade of financial services.",
    slug: "why-cas-should-build-ai",
  },
  {
    title: "How I Automated 51 Financial Ratios with Claude",
    category: "BUILDING IN PUBLIC",
    categoryColor: "from-violet-400 to-purple-500",
    date: "March 8, 2026",
    readTime: "7 min read",
    excerpt:
      "A deep dive into how I used the Claude API to automate comprehensive financial ratio analysis for Indian companies.",
    slug: "automating-51-ratios",
  },
  {
    title: "The Solo Founder's Guide to Shipping AI Products",
    category: "SOLO FOUNDER",
    categoryColor: "from-amber-400 to-orange-500",
    date: "March 1, 2026",
    readTime: "6 min read",
    excerpt:
      "From idea to production in weeks, not months. Here's how I ship AI products as a one-person team.",
    slug: "solo-founder-guide",
  },
];

export default function FeaturedContent() {
  return (
    <SectionWrapper id="content" bgColor="bg-gray-50/50">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 text-center">
        Latest insights
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-md mx-auto">
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
            className="group block bg-white border border-gray-200 rounded-2xl card-premium overflow-hidden"
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
                className="text-[10px] text-indigo-600 bg-indigo-50 border-indigo-200/50 mb-3"
              >
                {post.category}
              </Badge>
              <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                {post.date} &middot; {post.readTime}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <span className="text-indigo-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/blog"
          className="text-indigo-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          View all posts <ArrowRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
