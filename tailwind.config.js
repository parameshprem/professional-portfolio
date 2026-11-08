/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080B12',
          secondary: '#101522',
          tertiary: '#161D2E',
        },
        accent: {
          primary: '#6366F1',
          secondary: '#38BDF8',
          highlight: '#A78BFA',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)',
        'gradient-brand-alt': 'linear-gradient(135deg, #38BDF8 0%, #A78BFA 100%)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out infinite 1.5s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 30px rgba(56, 189, 248, 0.2)',
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '390px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
