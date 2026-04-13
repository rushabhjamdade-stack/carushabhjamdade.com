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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-primary": "#0A0A0F",
        "bg-secondary": "rgba(12,12,18,0.5)",
        accent: {
          DEFAULT: "#FF9933",
          hover: "#FFB366",
          dark: "#E68A2E",
          glow: "rgba(255,153,51,0.15)",
          subtle: "rgba(255,153,51,0.08)",
        },
        "text-primary": "#FAFAFA",
        "text-secondary": "#8A8A9A",
        "text-muted": "#555555",
        "text-faint": "#333333",
        green: {
          DEFAULT: "#28CA41",
        },
        blue: {
          DEFAULT: "#2B84EA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cabinet Grotesk", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Outfit", "Satoshi", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["Outfit", "Satoshi", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.15)",
        "card-hover":
          "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,153,51,0.06)",
        glow: "0 0 30px rgba(255,153,51,0.35), 0 8px 32px rgba(0,0,0,0.4)",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.05)",
        hover: "rgba(255,153,51,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
