import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  slug: string;
}

export default function BlogCard({
  title,
  date,
  description,
  tags,
  readTime,
  slug,
}: BlogCardProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="group block p-6 bg-[rgba(12,12,18,0.5)] border border-[rgba(255,255,255,0.05)] rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs text-[#FF9933] bg-[rgba(255,153,51,0.1)] border-[rgba(255,153,51,0.2)]"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#FF9933] transition-colors">
        {title}
      </h3>
      <p className="text-xs text-[#555555] mb-3">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        &middot; {readTime}
      </p>
      <p className="text-[#8A8A9A] text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-[#FF9933] text-sm font-medium inline-flex items-center gap-1">
        Read more <ArrowRight size={14} />
      </span>
    </a>
  );
}
