/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: paletteOptions,
    },
    screens: {
      xl: { max: "1367px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    animation: {
      fade: "fadeOut 5s ease-in-out",
    },
    // that is actual animation
    keyframes: (theme) => ({
      fadeOut: {
        "0%": { color: theme("colors.red.300") },
        "100%": { color: theme("colors.transparent") },
      },
    }),
  },
  plugins: [],
};
