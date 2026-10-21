/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce6ff',
          300: '#8ed6ff',
          400: '#59beff',
          500: '#2f9fff',
          600: '#1a80f0',
          700: '#1666dc',
          800: '#1854b3',
          900: '#1a4a8e',
          950: '#142e57',
        },
        aqua: {
          50: '#ecfdff',
          100: '#cff7fe',
          200: '#a4eefc',
          300: '#6cdef9',
          400: '#22c5ed',
          500: '#06aad6',
          600: '#0887b3',
          700: '#0e6c8f',
          800: '#155a75',
          900: '#164b63',
        },
        ink: {
          50: '#f4f8fc',
          100: '#e6eef7',
          200: '#cbdcec',
          300: '#a3bcd6',
          400: '#6f93ba',
          500: '#4d729e',
          600: '#3c5a80',
          700: '#324968',
          800: '#2d3e55',
          900: '#1f2c3d',
          950: '#131c29',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(47, 159, 255, 0.5)',
        card: '0 10px 30px -12px rgba(20, 46, 87, 0.25)',
        'card-hover': '0 22px 50px -16px rgba(20, 46, 87, 0.35)',
      },
      backgroundImage: {
        'water-grid': 'radial-gradient(circle at 1px 1px, rgba(47,159,255,0.12) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'wave-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'wave-move': 'wave-move 18s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
