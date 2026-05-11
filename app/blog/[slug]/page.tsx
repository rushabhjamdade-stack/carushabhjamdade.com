import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — CA Rushabh Jamdade`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen border-b border-line">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-16 md:pt-20">
        <a
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-3 transition-colors hover:text-accent"
        >
          ← All posts
        </a>

        <div className="mb-4 flex flex-wrap gap-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[2px] border border-line-2 bg-bg-3 px-2 py-0.5 text-ink-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="mb-4 font-serif font-normal leading-[1.05] tracking-[-0.025em] text-ink"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          {post.title}
        </h1>
        <p className="mb-12 font-mono text-[12px] text-ink-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </p>

        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
