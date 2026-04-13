"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  url: string;
  emoji: string;
  image?: string;
  stats?: string;
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
  url,
  emoji,
  image,
  stats,
}: ProductCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <a
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block bg-white border border-gray-200 rounded-2xl card-premium overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Badge
            variant="outline"
            className={`text-xs font-medium w-fit mb-3 ${statusInfo.className}`}
          >
            {status === "live" && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-green mr-1.5 inline-block" />
            )}
            {statusInfo.label}
          </Badge>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{emoji}</span>
            <h3 className="text-2xl font-bold text-navy group-hover:text-indigo-600 transition-colors">
              {name}
            </h3>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            {description}
          </p>
          {stats && (
            <p className="text-sm font-medium text-indigo-600 mb-3">
              {stats}
            </p>
          )}
          <span className="text-indigo-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            {status === "coming-soon" ? "Learn more" : "Try it"}{" "}
            <ArrowRight size={14} />
          </span>
        </div>
        {/* Screenshot */}
        <div className="relative bg-gray-50 flex items-center justify-center overflow-hidden min-h-[220px]">
          {image && (
            <Image
              src={image}
              alt={`${name} screenshot`}
              width={700}
              height={450}
              className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </div>
    </a>
  );
}
