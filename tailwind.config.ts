import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        zig: {
          // Tudo via CSS vars -> troca no arquivo globals.css em -> :root / .dark
          bg: "var(--zig-bg)",
          surface: "var(--zig-surface)",
          card: "var(--zig-card)",
          text: "var(--zig-text)",
          muted: "var(--zig-muted)",
          border: "var(--zig-border)",

          gold: "var(--zig-gold)",
          amber: "var(--zig-amber)",
          orange: "var(--zig-orange)",
          warn: "var(--zig-warn)",
        },
      },
      boxShadow: {
        "zig-card": "0 12px 30px rgba(0,0,0,0.22)",
        "zig-soft": "0 8px 24px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        zig: "16px",
      },
      fontFamily: {
        brand: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
