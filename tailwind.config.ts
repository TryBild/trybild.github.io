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
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        vt:    ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
