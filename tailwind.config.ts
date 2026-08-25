import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:    "#F1EEF8", // lavender background
        ink:   "#000000", // black body text
        link:  "#5B3E8E", // deep purple — legible link color (white would vanish on lavender)
        faint: "#5b5560",
        rule:  "rgba(0,0,0,0.14)",
        lilac: "#7A4F87",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { prose: "1400px" },
    },
  },
  plugins: [],
};
export default config;
