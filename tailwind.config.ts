import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        "brand-gray": "#171717",
        hostinger: {
          purple: "#673de6",
          "purple-dark": "#5025d1",
          "purple-light": "#8c85ff",
          dark: "#0c0d0d",
          card: "#18191c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
