/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "normal-orange": "hsl(26,100%,55%)",
        "pale-orange": "hsl(25,100%,94%)",
        "very-dark-blue": "hsl(220,13%,13%)",
        "dark-grayish-blue": "hsl(219,9%,45%)",
        "grayish-blue": "hsl(220,14%,75%)",
        "light-grayish-blue": "hsl(223,64%,98%)",
      },
      fontFamily: {
        sans: [
          "Kumbh SansVariable",
          "Kumbh Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
