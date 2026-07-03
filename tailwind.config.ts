import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:        '#100E0D',
        surface:      '#16120F',
        'surface-2':  '#201913',
        white:        '#F0EEEB',
        paper:        '#F5F1E8',
        'paper-dim':  '#EDE9DE',
        accent:       '#FF4514',
        jelly:        '#FF8CC8',
        muted:        '#71717A',
        'muted-dark': '#52525B',
        green:        '#22C55E',
        'border-d':   'rgba(255,255,255,0.07)',
        'border-l':   '#E4E4E7',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono:  ['"Geist Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-dark': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        'grid-light': `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}

export default config
