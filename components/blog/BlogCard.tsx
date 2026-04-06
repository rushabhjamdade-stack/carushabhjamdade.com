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
      className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs text-blue bg-blue-light/50 border-blue/20"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">
        {title}
      </h3>
      <p className="text-xs text-gray-400 mb-3">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        &middot; {readTime}
      </p>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-blue text-sm font-medium inline-flex items-center gap-1">
        Read more <ArrowRight size={14} />
      </span>
    </a>
  );
}
