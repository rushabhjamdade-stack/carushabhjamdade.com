import { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold text-[#FAFAFA] mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold text-[#FAFAFA] mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-[#8A8A9A] leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-[#8A8A9A] mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside text-[#8A8A9A] mb-4 space-y-1" {...props} />
  ),
  code: (props) => (
    <code
      className="bg-[rgba(255,255,255,0.06)] text-[#FAFAFA] font-mono text-sm px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[rgba(12,12,18,0.8)] text-[#FAFAFA] font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[#FF9933] pl-4 italic text-[#8A8A9A] mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a className="text-[#FF9933] hover:text-[#FFB366] underline" {...props} />
  ),
};
