import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#AA93B7",
        "purple-custom-1": "#A35DCA",
        "lightpink" : "#f8eefe"
      },
      fontFamily: {
        primary : "var(--primary), Arial"
      }
    },
  },
  plugins: [],
} satisfies Config;
