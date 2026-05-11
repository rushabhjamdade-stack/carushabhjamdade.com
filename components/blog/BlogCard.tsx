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
      className="group block rounded-soft border border-line bg-bg-1 p-6 transition-colors hover:border-line-2"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-ink-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-3 font-serif text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mb-3 font-mono text-[11px] text-ink-4">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {readTime}
      </p>
      <p className="mb-4 text-[14px] leading-[1.5] text-ink-2">{description}</p>
      <span className="inline-flex items-center gap-1 font-mono text-[12px] text-accent">
        Read more <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  );
}
