import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
          3: "var(--bg-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          2: "var(--line-2)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          2: "var(--accent-2)",
          3: "var(--accent-3)",
        },
        danger: "var(--danger)",
        selection: "var(--selection)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Newsreader", "Iowan Old Style", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1400px",
      },
      spacing: {
        "row-h": "var(--row-h)",
        "col-w": "var(--col-w)",
      },
      borderRadius: {
        sharp: "0px",
        chip: "3px",
        soft: "var(--radius-soft)",
      },
      boxShadow: {
        cmdk: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(110,231,167,0.1)",
        toast: "0 8px 24px rgba(0,0,0,0.4)",
      },
      keyframes: {
        blink: {
          to: { visibility: "hidden" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(3px)" },
        },
        "pulse-amber": {
          "0%": { boxShadow: "0 0 0 0 rgba(245, 185, 69, 0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(245, 185, 69, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245, 185, 69, 0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1.05s steps(2, start) infinite",
        bob: "bob 1.6s ease-in-out infinite",
        "pulse-amber": "pulse-amber 1.8s infinite",
        "fade-in": "fade-in 0.15s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
