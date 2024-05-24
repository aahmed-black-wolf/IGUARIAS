import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        drk: {
          100: "",
          200: "",
          300: "",
          400: "",
          500: "",
          600: "",
          700: "#424769",
          800: "#1C3950",
          900: "#7077A1",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        dark: {
          colors: {
            background: "#111",
            primary: {
              100: "#FFF1DA",
              200: "#c0e2e0",
              300: "#99d6d9",
              400: "#58D1D7",
              500: "#47C0C0",
              DEFAULT: "#60A5FA",
              foreground: "#1C3950",
            },
            secondary: {
              background: "#1C3950",
              100: "#535C91",
              200: "#424769",
              300: "#424769",
              DEFAULT: "#1C3950",
            },
          },
        },
        light: {
          colors: {
            background: "#fcfcfc",
            primary: {
              background: "#1C3950",
              100: "#99D6D9",
              200: "#ADE4DB",
              300: "#99d6d9",
              400: "#58D1D7",
              500: "#47C0C0",
              DEFAULT: "#60A5FA",
              foreground: "#1C3950",
            },
            secondary: {
              background: "#1C3950",
              100: "#535C91",
              200: "#424769",
              300: "#424769",
              DEFAULT: "#1C3950",
            },
            focus: "#60A5FA ",
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
