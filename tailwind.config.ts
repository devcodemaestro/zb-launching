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
        dark1: "var(--color-dark-1)",
        dark2: "var(--color-dark-2)",
        dark3: "var(--color-dark-3)",
        dark4: "var(--color-dark-4)",
        dark5: "var(--color-dark-5)",
        light1: "var(--color-light-1)",
        light2: "var(--color-light-1)",
        light3: "var(--color-light-1)",
        light4: "var(--color-light-1)",
        disabled: "var(--color-disabled)",
        selected: "var(--color-menu-selected)",
      },
      width: {
        "15": "60px",
        "17": "68px",
        "22": "88px",
        "37": "148px",
        "39": "156px",
        "62": "246px",
        "63": "250px",
        "69": "276px",
        "78": "312px",
        "84": "336px",
      },
      height: {
        "15": "60px",
        "18": "72px",
        "46": "184px",
        "47": "188px",
        "30": "120px",
      },
      borderRadius: {
        "32": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
