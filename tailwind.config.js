/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-360': 'rotateY(360deg)',
      },
      // visibility: ['backface-hidden'],
      screens: {
        "mobile-lg": { min: "425px" },
        "mobile-md": { min: "392px" },
        "mobile-sm": { min: "355px" },
        "mobile-xs": { min: "310px" },
        "tablet-md": { min: "872px" }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-360': { transform: 'rotateY(360deg)' },
      }, ['responsive', 'hover'])
    },
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.backface-hidden': {
    //       'backface-visibility': 'hidden',
    //     },
    //     '.backface-visible': {
    //       'backface-visibility': 'visible',
    //     },
    //   };
    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
  ],
}

