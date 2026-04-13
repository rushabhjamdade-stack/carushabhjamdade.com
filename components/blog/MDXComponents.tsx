import { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      style={{
        fontSize: 32,
        fontWeight: 800,
        color: "#FAFAFA",
        marginTop: 32,
        marginBottom: 16,
        fontFamily: "var(--font-display)",
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      style={{
        fontSize: 24,
        fontWeight: 700,
        color: "#FAFAFA",
        marginTop: 32,
        marginBottom: 12,
        fontFamily: "var(--font-display)",
      }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      style={{
        fontSize: 20,
        fontWeight: 700,
        color: "#FAFAFA",
        marginTop: 24,
        marginBottom: 8,
      }}
      {...props}
    />
  ),
  p: (props) => (
    <p
      style={{
        color: "#8A8A9A",
        lineHeight: 1.75,
        marginBottom: 16,
        fontSize: 15.5,
      }}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      style={{
        color: "#8A8A9A",
        marginBottom: 16,
        paddingLeft: 20,
        listStyleType: "disc",
      }}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      style={{
        color: "#8A8A9A",
        marginBottom: 16,
        paddingLeft: 20,
        listStyleType: "decimal",
      }}
      {...props}
    />
  ),
  li: (props) => (
    <li
      style={{
        marginBottom: 4,
        lineHeight: 1.7,
      }}
      {...props}
    />
  ),
  code: (props) => (
    <code
      style={{
        background: "rgba(255,255,255,0.06)",
        color: "#FF9933",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        padding: "2px 6px",
        borderRadius: 4,
      }}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      style={{
        background: "rgba(12,12,18,0.8)",
        border: "1px solid rgba(255,255,255,0.05)",
        color: "#FAFAFA",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        overflowX: "auto",
      }}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      style={{
        borderLeft: "2px solid #FF9933",
        paddingLeft: 16,
        fontStyle: "italic",
        color: "#777",
        marginBottom: 16,
      }}
      {...props}
    />
  ),
  a: (props) => (
    <a
      style={{
        color: "#FF9933",
        textDecoration: "underline",
        textUnderlineOffset: 3,
      }}
      {...props}
    />
  ),
  strong: (props) => (
    <strong style={{ color: "#FAFAFA", fontWeight: 600 }} {...props} />
  ),
  em: (props) => (
    <em style={{ color: "#FAFAFA" }} {...props} />
  ),
};
