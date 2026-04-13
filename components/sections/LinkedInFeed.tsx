"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArrowRight, ThumbsUp, MessageCircle, Repeat2 } from "lucide-react";

const linkedInPosts = [
  {
    title: "Why I left a Fortune 500 job to build AI products for finance",
    preview:
      "Most people thought I was crazy. A stable career at Thermo Fisher, great pay, good trajectory. But I saw something they didn't — the gap between AI capabilities and finance tools...",
    date: "Mar 2026",
    likes: 342,
    comments: 47,
    reposts: 28,
  },
  {
    title: "I automated 51 financial ratios. Here's what I learned.",
    preview:
      "CAs spend 3-4 hours manually computing ratios for a single company. I built a tool that does it in minutes. The key wasn't just automation — it was understanding which ratios actually matter...",
    date: "Feb 2026",
    likes: 518,
    comments: 63,
    reposts: 41,
  },
  {
    title: "The future of the CA profession isn't what you think",
    preview:
      "Every CA I talk to is worried about AI replacing them. They're asking the wrong question. The real question is: which CAs will learn to build with AI, and which will be left behind?",
    date: "Jan 2026",
    likes: 891,
    comments: 124,
    reposts: 67,
  },
];

export default function LinkedInFeed() {
  return (
    <SectionWrapper id="linkedin">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-2">
            On LinkedIn
          </h2>
          <p className="text-gray-500">
            Where I share insights on AI, finance, and building products
          </p>
        </div>
        <a
          href="https://linkedin.com/in/carushabhjamdade"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
        >
          Follow on LinkedIn <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {linkedInPosts.map((post, i) => (
          <motion.a
            key={post.title}
            href="https://linkedin.com/in/carushabhjamdade"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group block bg-white border border-gray-200 rounded-2xl p-6 card-premium"
          >
            {/* LinkedIn header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
                RJ
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  CA Rushabh Jamdade
                </p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
              {post.preview}
            </p>

            {/* Engagement stats */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <ThumbsUp size={12} /> {post.likes}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <MessageCircle size={12} /> {post.comments}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Repeat2 size={12} /> {post.reposts}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-6 md:hidden">
        <a
          href="https://linkedin.com/in/carushabhjamdade"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-medium inline-flex items-center gap-1"
        >
          Follow on LinkedIn <ArrowRight size={16} />
        </a>
      </div>
    </SectionWrapper>
  );
}
