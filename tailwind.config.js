/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          primary: "#7ACC3E ",
          secondary: "#81D742",
        },
        "ask-to-mentor-primary": "#124E66",
      },
      screens: {
        "mobile-lg":{ min: "425px" },
        "mobile-md":{ min: "392px" },
        "mobile-sm":{ min: "355px" },
        "mobile-xs":{ min: "310px" },
        "tablet-md":{min:"872px"}
      }
    },
  },
  plugins: [],
}

