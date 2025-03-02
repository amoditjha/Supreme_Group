/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}" // Add this for Next.js App Router
    ],
    theme: {
      extend: {
        fontFamily: {
          manrope: ["Manrope", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  