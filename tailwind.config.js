/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-farecalls': '#f77a00',
        'blue-farecalls': '#0c4ea6',
        'regal-blue': '#243c5a',
        'pal-white':'#F2F3F4',
      },
    },
  },
  plugins: [],
}
