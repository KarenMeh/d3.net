/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e1ebfe',
          200: '#c3d9fd',
          300: '#a4c7fc',
          400: '#86b4fa',
          500: '#6795f5',
          600: '#4682B4', // Steel Blue
          700: '#0F52BA', // Primary Blue
          800: '#0A3B86',
          900: '#0059a9',
        },
        teal: {
          50: '#f0fdfd',
          100: '#ccfcfc',
          200: '#99f6f9',
          300: '#5ecbcb',
          400: '#2caab6',
          500: '#088A85', // Darker teal
          600: '#008080', // Teal
          700: '#006666',
          800: '#004D4D',
          900: '#003333',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};