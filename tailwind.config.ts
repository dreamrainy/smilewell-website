import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4B6B",
        "primary-light": "#2A6B9C",
        accent: "#4DB8A0",
        accent2: "#E8A84C",
      },
      fontFamily: {
        serif: ["Noto Serif KR", "serif"],
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
