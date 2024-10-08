/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-img' : "url('/images/image1.webp')",
      }
    },
  },
  plugins: [],
}

