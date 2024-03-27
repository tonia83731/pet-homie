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
        blueberry: {
          100: "rgb(107, 122, 143)",
          80: "rgb(107, 122, 143, .8)",
          60: "rgb(107, 122, 143, .6)",
          40: "rgb(107, 122, 143, .4)",
          0: "rgb(107, 122, 143, .2)",
        },
        sky: "#94CEC6",
        indigo: "#3B4A95",
        mustard: "#E2AA4B",
        pink: "#DC929C",
        brick: "#E2664A",
        black: {
          100: "#333333",
          80: "rgb(51, 51, 51, .8)",
          60: "rgb(51, 51, 51, .6)",
          40: "rgb(51, 51, 51, .4)",
          20: "rgb(51, 51, 51, .2)",
        },
        "custom-white": "#f5f5f5",
      },
      screens: {
        xs: "560px",
      },
    },
  },
  plugins: [],
};
