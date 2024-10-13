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
        "15": "3.75rem",
        "17": "4.25rem",
        "22": "5.5rem",
        "37": "9.25rem",
        "39": "9.75rem",
        "62": "15.375rem",
        "63": "15.625rem",
        "69": "17.25rem",
        "78": "19.5rem",
        "84": "21rem",
        "86": "21.5rem",
        "94": "23.5rem",
      },
      height: {
        "15": "3.75rem",
        "18": "4.5rem",
        "30": "7.5rem",
        "46": "11.5rem",
        "47": "11.75rem",
        "86": "21.5rem",
      },
      borderRadius: {
        "32": "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
