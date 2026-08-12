import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper:   "#F4F3EE",
        surface: "#EEEDE6",
        ink:     "#1A1A17",
        soft:    "#6A6A62",
        faint:   "#9A9A90",
        line:    "#DCDBD3",
        liness:  "#C9C8BF",
        oxblood: "#9E1B2F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { site: "1180px" },
    },
  },
  plugins: [],
};
export default config;
