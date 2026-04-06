import { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-navy mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold text-navy mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold text-navy mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1" {...props} />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 text-navy font-mono text-sm px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-900 text-gray-100 font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue pl-4 italic text-gray-600 mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a className="text-blue hover:text-blue-hover underline" {...props} />
  ),
};
