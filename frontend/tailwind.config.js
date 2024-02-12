/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: {
          DEFAULT: '#f1f5f9'
        },
        darkSideNavColor: {
          DEFAULT: '#2D3250'
        },
        sideNavDarkText: {
          DEFAULT: '#f3f4f6',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}