/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brightly-orange": "#f43a09",
        "grandpa-orange": "#ffb766",
        "grandpa-orange-25": "rgb(255, 183, 102, .25)",
        "grey-blue-green": "#c2edda",
        "live-green": "#68d388",
        "live-green-25": "rgb(104, 211, 136, .25)",
        "dark-green": "#032d36",
        "dark-green-25": "rgb(3, 45, 54, .25)",
        "tiffany-green": "#08b6a6",
        "tiffany-green-25": "rgb(8, 182, 166, .25)",
        mustard: "#f8961d",
        "sky-blue": "#7ABEDB",
        black: {
          100: "#333333",
          75: "rgb(51, 51, 51, .75)",
        },
      },
      screens: {
        xs: "560px",
      },
    },
  },
  plugins: [],
};

// source: https://hookagency.com/blog/website-color-schemes-2020/
// source: https://www.pinterest.com/pin/575686764879195075/
