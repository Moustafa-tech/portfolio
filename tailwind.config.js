/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: '#0A1220',
          soft: '#0F1A2C',
        },
        surface: {
          DEFAULT: '#101B30',
          raised: '#152238',
          border: '#22314B',
        },
        ink: {
          DEFAULT: '#E8EDF7',
          muted: '#9BAAC4',
          dim: '#6B7A96',
        },
        accent: {
          DEFAULT: '#3E8BFF',
          soft: '#7CB2FF',
          deep: '#1D5FD1',
        },
        signal: {
          teal: '#2DD4BF',
          amber: '#F5A524',
        },
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(62,139,255,0.08), transparent 70%)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 30px -12px rgba(4,10,22,0.55)',
        glow: '0 0 0 1px rgba(62,139,255,0.35), 0 8px 24px -8px rgba(62,139,255,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'tick-scan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -400px' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'tick-scan': 'tick-scan 20s linear infinite',
      },
    },
  },
  plugins: [],
}
