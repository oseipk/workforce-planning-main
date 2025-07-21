import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Core Semantic Colors (using CSS variables still)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1FB6FF", // Aqua Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#FF7849", // Sunset Orange
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF4949", // Bright Red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F5F7FA", // Light Gray
          foreground: "#64748B", // Slate
        },
        accent: {
          DEFAULT: "#A78BFA", // Vivid Purple
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1F2937", // Gray-800
        },

        // SWP Custom Theme Colors (Rebranded)
        "swp-blue": "#00C2FF",     // Sky Blue
        "swp-red": "#FF4C61",      // Coral Red
        "swp-green": "#22C55E",    // Emerald
        "swp-orange": "#FDBA74",   // Light Orange
        "swp-teal": "#2DD4BF",     // Bright Teal

        // Chart Colors – Bright, Clean, Eye-Catching
        chart: {
          "1": "#00BFFF", // Deep Sky Blue
          "2": "#FF8C00", // Dark Orange
          "3": "#7C3AED", // Indigo
          "4": "#10B981", // Emerald
          "5": "#F43F5E", // Rose
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
