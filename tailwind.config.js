/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

