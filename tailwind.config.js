/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      false,
      {
        mytheme: {

          "primary": "#cf2e2e",

          "secondary": "#161616",

          "info": "#707070",

          "customGray": "#E5E5E5",
        },
      },
    ],
  },

}
