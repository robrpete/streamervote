import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
