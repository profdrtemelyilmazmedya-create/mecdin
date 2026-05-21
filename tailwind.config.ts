import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080d",
        ember: "#d51f2a",
        gold: "#f2b705",
        merlot: "#7a1420",
        graphite: "#15171f",
        steel: "#aeb6c7"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        cinematic: "0 24px 80px rgba(0,0,0,0.42)"
      }
    }
  },
  plugins: []
};

export default config;
