import { nextui } from "@nextui-org/theme";

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
          700: "#5E6282",
          800: "#1C3950",
          900: "#02062B",
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
            primary: {
              100: "#FFF1DA",
              200: "#c0e2e0",
              300: "#99d6d9",
              400: "#58D1D7",
              500: "#47C0C0",
              DEFAULT: "#58D1D7",
              foreground: "#1E1D4C",
            },
            secondary: {
              100: "#97C9ED",
              200: "#56B4F9",
              300: "#0F4A75",
              DEFAULT: "#407093",
              foreground: "#1E1D4C",
            },
          },
        },
        light: {
          colors: {
            primary: {
              background: "#14183E",
              100: "#99D6D9",
              200: "#c0e2e0",
              300: "#99d6d9",
              400: "#58D1D7",
              500: "#47C0C0",
              DEFAULT: "#58D1D7",
              foreground: "#14183E",
            },
            secondary: {
              background: "#14183E",
              100: "#407093",
              200: "#56B4F9",
              300: "#0F4A75",
              DEFAULT: "#407093",
              foreground: "#1E1D4C",
              foreground: "#ffff",
            },
            focus: "#58D1D7 ",
          },
        },
      },
    }),
  ],
};
