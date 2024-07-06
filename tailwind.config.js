/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/index.css',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6950E8',
        primarySoft: '#9747FF1A',
      },
    },
  },
  plugins: [],
};
