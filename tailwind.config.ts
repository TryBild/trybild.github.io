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
        // Anthropic-style clean palette
        cream:        '#f5f0e8',  // page background
        charcoal:     '#1a1a1a',  // primary text, dark sections, primary buttons
        'charcoal-2': '#2a2a2a',  // dark card bg, primary button hover
        surface:      '#ffffff',  // card background
        'surface-2':  '#f0ece4',  // hover / header row tint
        line:         '#e0dbd0',  // borders, dividers (light contexts)
        'line-2':     '#2a2a2a',  // dividers on dark backgrounds (e.g. footer)
        muted:        '#6b6b6b',  // secondary text
        accent:       '#fe3c00',  // TryBild orange
        brand:        '#fe3c00',  // alias of accent, used for CTAs/links
        'brand-hover':'#e03500',
        amber:        '#b45309',  // secondary highlight text (legal-page tables)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
