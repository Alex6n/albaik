import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "hsl(37, 91%, 5%)",
        background: "hsl(30, 90%, 90%)",
        primary: "hsl(39, 88%, 57%)",
        secondary: "hsl(16, 89%, 52%)",
        accent: "hsl(0, 96%, 48%)",
      },
    },
  },
  plugins: [],
};
export default config;
