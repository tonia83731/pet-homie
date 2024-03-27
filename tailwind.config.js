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
        blueberry: "#6b7a8f",
        apricot: "#f7882f",
        citrus: "#f7c331",
        "apple-core": "#dcc7aa",
        light: {
          primary: "#e5553d",
          secondary: "#e77746",
          support: "#e7a975",
          additional: "#e5d0a9",
        },
        dark: {
          primary: "#273f62",
          secondary: "#237A95",
          support: "#24929C",
          additional: "#71A9A1",
        },
        black: {
          100: "#0b0b0b",
          80: "rgb(11, 11, 11, .8)",
          60: "rgb(11, 11, 11, .6)",
          40: "rgb(11, 11, 11, .4)",
          20: "rgb(11, 11, 11, .2)",
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
