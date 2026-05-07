import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Blog — CA Rushabh Jamdade",
  description:
    "Thoughts on AI, finance, building in public, and the future of the CA profession.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen border-b border-line">
      <div className="mx-auto max-w-site px-6 pb-20 pt-16 md:px-14 md:pt-20">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-3 transition-colors hover:text-accent"
        >
          ← Back to home
        </a>

        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-4">
          <span className="text-accent">§</span> · Blog
        </div>
        <h1
          className="mb-3 font-serif font-normal leading-none tracking-[-0.03em]"
          style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          Notes from the workbook.
        </h1>
        <p className="mb-12 max-w-[560px] text-[16px] text-ink-2">
          Thoughts on AI, finance, and building in public.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
