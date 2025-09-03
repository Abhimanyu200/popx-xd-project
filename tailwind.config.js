/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        popx: {
          DEFAULT: '#6B21FF', /* purple used for create account */
          light: '#F5F2FF',
          deep: '#4C00D6'
        },
        uiGray: {
          50: '#FAFAFB',
          100: '#F3F4F6',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280'
        }
      },
      boxShadow: {
        phone: '0 18px 50px rgba(0,0,0,0.18)',
      }
    },
  },
  plugins: [],
}
