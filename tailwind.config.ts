import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2F4F7",
        surf:  "#E8EBF0",
        ink:   "#111520",
        soft:  "#535A69",
        faint: "#98A0AE",
        line:  "#DDE1E8",
        acc:   "#2C3FE0", // electric cobalt — change this one value to restyle the accent
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1180px" },
    },
  },
  plugins: [],
};
export default config;
