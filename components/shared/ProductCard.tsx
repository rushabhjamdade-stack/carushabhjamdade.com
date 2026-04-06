"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  tags: string[];
  url: string;
  emoji: string;
  featured?: boolean;
}

const statusConfig = {
  live: {
    label: "LIVE",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  beta: {
    label: "BETA",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "coming-soon": {
    label: "COMING SOON",
    className: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
};

export default function ProductCard({
  name,
  description,
  status,
  tags,
  url,
  emoji,
  featured,
}: ProductCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <a
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group block p-6 bg-white border border-gray-200 rounded-2xl card-premium relative ${
        featured ? "md:col-span-2 md:row-span-1 bg-gradient-to-br from-white to-indigo-50/30" : ""
      }`}
    >
      {/* Status badge */}
      <Badge
        variant="outline"
        className={`absolute top-4 right-4 text-xs font-medium ${statusInfo.className}`}
      >
        {status === "live" && (
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-green mr-1.5 inline-block" />
        )}
        {statusInfo.label}
      </Badge>

      <span className="text-3xl mb-4 block">{emoji}</span>
      <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-indigo-600 transition-colors">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 rounded-full border border-gray-200/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="text-indigo-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        {status === "coming-soon" ? "Learn more" : "Try it"}{" "}
        <ArrowRight size={14} />
      </span>
    </a>
  );
}
