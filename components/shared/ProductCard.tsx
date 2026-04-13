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
    className: "bg-[rgba(40,202,65,0.08)] text-[#28CA41] border-[rgba(40,202,65,0.15)]",
  },
  beta: {
    label: "BETA",
    className: "bg-[rgba(255,153,51,0.08)] text-[#FF9933] border-[rgba(255,153,51,0.15)]",
  },
  "coming-soon": {
    label: "COMING SOON",
    className: "bg-[rgba(255,153,51,0.08)] text-[#FF9933] border-[rgba(255,153,51,0.15)]",
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
      className="group block bg-[rgba(12,12,18,0.5)] border border-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-2xl card-premium overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Badge
            variant="outline"
            className={`text-xs font-medium w-fit mb-3 ${statusInfo.className}`}
          >
            {status === "live" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#28CA41] animate-pulse-green mr-1.5 inline-block" />
            )}
            {statusInfo.label}
          </Badge>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{emoji}</span>
            <h3 className="text-2xl font-bold text-[#FAFAFA] group-hover:text-[#FF9933] transition-colors">
              {name}
            </h3>
          </div>
          <p className="text-[#8A8A9A] text-base leading-relaxed mb-4">
            {description}
          </p>
          {stats && (
            <p className="text-sm font-medium text-[#FF9933] mb-3">
              {stats}
            </p>
          )}
          <span className="text-[#FF9933] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            {status === "coming-soon" ? "Learn more" : "Try it"}{" "}
            <ArrowRight size={14} />
          </span>
        </div>
        {/* Screenshot */}
        <div className="relative bg-[rgba(255,255,255,0.008)] flex items-center justify-center overflow-hidden min-h-[220px]">
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
