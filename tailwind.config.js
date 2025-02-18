/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ph': '480px',
        'tab': '640px',
        'mac': '840px',
        'lap': '1000px',
        'lg': '1920px',
      },
    },
  },
  plugins: [],
}
