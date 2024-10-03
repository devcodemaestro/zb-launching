import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gray-300",
    "border-gray-500",
    "bg-gray-500",
    "border-gray-700",
    "border-solid",
    "bg-gray-300",
    "border-gray-600",
    "bg-gray-700",
    "border-dashed",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      width: {
        "22": "88px",
        "62": "246px",
        "63": "250px",
        "69": "276px",
      },
      height: {
        "46": "184px",
        "47": "188px",
      },
      borderRadius: {
        "32": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
