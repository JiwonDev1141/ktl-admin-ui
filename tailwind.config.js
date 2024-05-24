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
        primaryColor: '#6950E8',
      },
    },
  },
  plugins: [],
};
