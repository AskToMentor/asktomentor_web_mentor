/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "mobile-lg": "425px",
        "mobile-md": "392px",
        "mobile-sm": "355px",
        "mobile-xs": "310px",
        "tablet-lg": "680px",
        "tablet-md": "550px",
        "tablet-sm": "480px",
        "desktop-sm": "950px",
        "desktop-md": "1080px",
        "desktop-lg": "1180px",
      },
    },
  },
  plugins: [],
};
