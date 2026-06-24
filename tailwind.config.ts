import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#020617",
        ink: "#0f172a",
        cyan: {
          glow: "#38bdf8"
        },
        violet: {
          glow: "#8b5cf6"
        }
      },
      fontFamily: {
        sans: ["Geist", "Inter", "Segoe UI", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(56, 189, 248, 0.18)",
        violet: "0 0 45px rgba(139, 92, 246, 0.18)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
