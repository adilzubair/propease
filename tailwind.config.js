/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      // Your other theme extensions
    },
  },
  plugins: [],
}
