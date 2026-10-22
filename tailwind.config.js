/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E02D6C',
          'pink-deep': '#C41C58',
          'pink-light': '#FFF0F5',
          green: '#70B82F',
          'green-dark': '#248447',
          'green-light': '#F1F9E9',
          blue: '#078EE8',
          'blue-light': '#EDF6FF',
          violet: '#712ACB',
          orange: '#FF970F',
          'orange-light': '#FFF6EB',
          navy: '#191F30',
          'navy-light': '#252D42',
          soft: '#F7F8FC',
          muted: '#657085',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(25, 31, 48, 0.06), 0 2px 6px -1px rgba(25, 31, 48, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(25, 31, 48, 0.12), 0 4px 12px -2px rgba(25, 31, 48, 0.08)',
        'brand-glow': '0 0 25px -5px rgba(240, 0, 91, 0.35)',
        'green-glow': '0 0 25px -5px rgba(112, 184, 47, 0.35)',
      }
    },
  },
  plugins: [],
}
