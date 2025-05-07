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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        muted_foreground: "var(--muted-foreground)",
        destructive: "var(--destructive)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        heading: ["Montserrat", "serif"],
        type: [ "Playfair Display", 'serif']

      }
    },
  },
  plugins: [],
} satisfies Config;
