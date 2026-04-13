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
    <main className="min-h-screen bg-[#0A0A0F]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-24">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-[#FF9933] text-sm font-medium mb-8 hover:gap-2 transition-all"
        >
          <ArrowLeft size={14} /> Back to home
        </a>

        <h1 className="text-4xl font-bold text-[#FAFAFA] mb-3">Blog</h1>
        <p className="text-[#8A8A9A] mb-12">
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
