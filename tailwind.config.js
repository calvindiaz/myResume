/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: "Caveat",
      },
      backgroundImage: {
        space: "url('./src/assets/banner.png')",
      },

      keyframes: {
        down: {
          "0%, 100%": { transform: "translateY(35%);" },
          "50%": { transform: "translateY(0);" },
        },
      },

      animation: {
        down: "down 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
