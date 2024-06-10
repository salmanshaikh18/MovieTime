/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        mobileMenu: {
          '0%': { transform: 'translateY(-130%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        mobileMenu: 'mobileMenu 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}

