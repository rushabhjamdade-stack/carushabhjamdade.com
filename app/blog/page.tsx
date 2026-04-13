import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog — CA Rushabh Jamdade",
  description:
    "Thoughts on AI, finance, building in public, and the future of the CA profession.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium mb-8 transition-all"
          style={{ color: "#FF9933" }}
        >
          <ArrowLeft size={14} /> Back to home
        </a>

        <h1
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 12,
            fontFamily: "var(--font-display)",
          }}
        >
          Blog
        </h1>
        <p style={{ color: "#555", marginBottom: 48 }}>
          Thoughts on AI, finance, and building in public
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
