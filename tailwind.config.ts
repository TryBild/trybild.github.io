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
        // Retro pixel-arcade palette
        black:        '#140d0a',  // page background
        surface:      '#1c120c',  // card/panel background
        'surface-2':  '#241610',  // panel hover/active
        line:         '#3a2618',  // default 4px borders
        'line-2':     '#2b1c12',  // nav/footer divider borders
        white:        '#ffffff',  // headings
        cream:        '#e9d8cc',  // body text
        accent:       '#fe3c00',  // TryBild orange
        amber:        '#ffb000',  // badges, LIVE status, footer links
        jelly:        '#ff4fa3',  // JellyClaw OPEN SOURCE badge only
        muted:        '#c9a48f',  // muted text (minimum contrast)
        green:        '#22C55E',
        // Transitional tokens still used by pages awaiting the pixel rewrite
        paper:        '#F5F1E8',
        'paper-dim':  '#EDE9DE',
        'muted-dark': '#52525B',
        'border-d':   'rgba(255,255,255,0.07)',
        'border-l':   '#E4E4E7',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        vt:    ['VT323', 'monospace'],
        // Transitional fonts still used by pages awaiting the pixel rewrite
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
