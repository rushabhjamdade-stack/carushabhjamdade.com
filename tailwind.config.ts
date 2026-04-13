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
        navy: {
          DEFAULT: "#FAFAFA",
          light: "#8A8A9A",
        },
        blue: {
          DEFAULT: "#FF9933",
          hover: "#FFB366",
          light: "rgba(255,153,51,0.1)",
        },
        indigo: {
          50: "rgba(255,153,51,0.08)",
          100: "rgba(255,153,51,0.1)",
          200: "rgba(255,153,51,0.15)",
          300: "#E68A2E",
          400: "#FF9933",
          500: "#FF9933",
          600: "#FF9933",
          700: "#E68A2E",
          950: "#0A0A0F",
        },
        violet: {
          50: "rgba(255,153,51,0.06)",
          200: "rgba(255,153,51,0.12)",
          300: "#FFB366",
          400: "#FFD700",
          500: "#FFD700",
          600: "#E68A2E",
        },
        gray: {
          50: "rgba(255,255,255,0.008)",
          100: "rgba(255,255,255,0.03)",
          200: "rgba(255,255,255,0.05)",
          300: "rgba(255,255,255,0.08)",
          400: "#8A8A9A",
          500: "#8A8A9A",
          600: "#8A8A9A",
          700: "#FAFAFA",
          800: "#FAFAFA",
          900: "#FAFAFA",
          950: "#0A0A0F",
        },
        emerald: {
          50: "rgba(40,202,65,0.08)",
          200: "rgba(40,202,65,0.15)",
          400: "#28CA41",
          500: "#28CA41",
          700: "#28CA41",
        },
        amber: {
          50: "rgba(255,153,51,0.08)",
          200: "rgba(255,153,51,0.15)",
          400: "#FF9933",
          700: "#FF9933",
        },
        green: {
          400: "#28CA41",
          500: "#28CA41",
        },
        cyan: {
          500: "#FFB366",
        },
        purple: {
          500: "#FFD700",
        },
        teal: {
          500: "#28CA41",
        },
        orange: {
          500: "#FF6B00",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Outfit", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        display: ["var(--font-display)", "Cabinet Grotesk", "Outfit", "sans-serif"],
      },
      maxWidth: {
        site: "1400px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.15)",
        "card-hover": "0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255,153,51,0.06)",
        avatar: "0 4px 12px rgba(0,0,0,0.3)",
        sm: "0 1px 4px rgba(0,0,0,0.2)",
        md: "0 4px 12px rgba(0,0,0,0.3)",
        lg: "0 8px 24px rgba(0,0,0,0.4)",
        xl: "0 16px 48px rgba(0,0,0,0.5)",
        "2xl": "0 24px 64px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
