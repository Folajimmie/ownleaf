import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A5390",
        secondary: "#EAF5FF",
        separator: "#949494",
        banner: "#E5E2D8",
        selectBlue: "#0061E0",
        midGrey: "#6D7074",
        darkGrey: "#434343",
        borderGrey: "#C4C4C4",
      },
      fontFamily: {
        optima: ["var(--font-optima)"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        subHeading: [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "19.36px",
          },
        ],
        base: [
          "20px",
          {
            fontWeight: 400,
            lineHeight: "29.09px",
          },
        ],
        menu: [
          "14px",
          {
            fontWeight: 500,
            lineHeight: "16.94px",
          },
        ],
        buttonText: [
          "16px",
          {
            fontWeight: 400,
            lineHeight: "19.36px",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
