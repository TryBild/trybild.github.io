import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Every top-level *.html file is a page entry (index, products, about, contact, …).
const pages = Object.fromEntries(
  fs
    .readdirSync(__dirname)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace('.html', ''), path.resolve(__dirname, f)]),
)

// GitHub Pages serves /products as products.html; do the same in `vite dev`.
function cleanUrls(): Plugin {
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const clean = req.url?.split(/[?#]/)[0]
        if (clean && clean !== '/' && pages[clean.slice(1)]) {
          req.url = `${clean}.html`
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: pages,
    },
  },
})
