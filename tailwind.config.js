// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
              "color-primary-100": "#CCE3FD",
              "color-primary-200": "#99C4FB",
              "color-primary-300": "#669EF3",
              "color-primary-400": "#3F7DE8",
              "color-primary-500": "#074DD9",
              "color-primary-600": "#053BBA",
              "color-primary-700": "#032B9C",
              "color-primary-800": "#021E7D",
              "color-primary-900": "#011568",
              "color-success-100": "#E1FAD3",
              "color-success-200": "#BDF6A9",
              "color-success-300": "#8CE479",
              "color-success-400": "#5ECA54",
              "color-success-500": "#25A825",
              "color-success-600": "#1B9025",
              "color-success-700": "#127824",
              "color-success-800": "#0B6122",
              "color-success-900": "#075020",
              "color-info-100": "#CAFDFB",
              "color-info-200": "#97F7FB",
              "color-info-300": "#62E3F3",
              "color-info-400": "#3BC9E7",
              "color-info-500": "#02A3D8",
              "color-info-600": "#017FB9",
              "color-info-700": "#015F9B",
              "color-info-800": "#00437D",
              "color-info-900": "#003067",
              "color-warning-100": "#FDF4CB",
              "color-warning-200": "#FCE699",
              "color-warning-300": "#F6D165",
              "color-warning-400": "#EDBC3E",
              "color-warning-500": "#E29C04",
              "color-warning-600": "#C27F02",
              "color-warning-700": "#A26502",
              "color-warning-800": "#834D01",
              "color-warning-900": "#6C3C00",
              "color-danger-100": "#FBE3CE",
              "color-danger-200": "#F8C29F",
              "color-danger-300": "#EB946C",
              "color-danger-400": "#D86946",
              "color-danger-500": "#BF2F13",
              "color-danger-600": "#A41A0D",
              "color-danger-700": "#890A09",
              "color-danger-800": "#6E060D",
              "color-danger-900": "#5B0310"
          }
        }
      }
    })
  ]
}