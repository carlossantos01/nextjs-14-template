import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    colors: {
      black: "#000000",
    },
    fontFamily: {
      frutiger: ["Frutiger", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "*": {
          boxSizing: "border-box",
          "-moz-box-sizing": "border-box",
          fontFamily: theme("fontFamily.frutiger"),
          fontSize: theme("fontSize.base"),
          margin: "0px",
          padding: "0px",
          border: "none",
        },
        "html, body": {
          height: "100%",
          width: "100%",
          color: theme("colors.black"),
          backgroundColor: theme("colors.alabaster"),
        },
        "ol, ul": {
          listStyle: "none",
        },
        a: {
          textDecoration: "none",
        },
        "input, input:focus, textarea, textarea:focus, button:focus": {
          outline: "none",
        },
        "input::-ms-clear, input::-ms-reveal": {
          display: "none",
          width: "0px",
          height: "0px",
        },
      });
    }),
  ],
};
export default config;
