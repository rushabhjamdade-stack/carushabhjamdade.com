import { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 font-serif text-[36px] font-normal leading-tight tracking-[-0.02em] text-ink"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-3 font-serif text-[28px] font-normal leading-tight tracking-[-0.02em] text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-2 font-serif text-[22px] font-normal leading-tight tracking-[-0.01em] text-ink"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-[16px] leading-[1.7] text-ink-2" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-ink-2 marker:text-accent" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-ink-2 marker:text-accent" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded-[3px] border border-line bg-bg-2 px-1.5 py-0.5 font-mono text-[13px] text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-soft border border-line bg-bg-2 p-4 font-mono text-[13px] text-ink"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-2 border-accent bg-bg-1 px-4 py-2 italic text-ink-2"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="border-b border-dotted border-accent text-accent transition-colors hover:border-solid"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-ink" {...props} />,
  hr: () => <hr className="my-8 border-line" />,
};
