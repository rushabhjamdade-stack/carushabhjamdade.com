import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { ArrowLeft } from "lucide-react";
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
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <article className="max-w-3xl mx-auto px-6 py-24">
        <a
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium mb-8 transition-all"
          style={{ color: "#FF9933" }}
        >
          <ArrowLeft size={14} /> All posts
        </a>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#FF9933",
                background: "rgba(255,153,51,0.1)",
                padding: "3px 10px",
                borderRadius: 20,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 12,
            fontFamily: "var(--font-display)",
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </h1>
        <p style={{ color: "#444", fontSize: 13, marginBottom: 48 }}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </p>

        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
