import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "480px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
