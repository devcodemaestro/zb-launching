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
    "border-solid", // 선택된 항목 스타일
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
      },
      width: {
        "22": "88px",
        "69": "276px",
      },
    },
  },
  plugins: [],
};
export default config;
