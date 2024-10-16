const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      jersey: ['"Jersey 20"', 'sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}

