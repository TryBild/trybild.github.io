import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Every top-level *.html file is a page entry (index, products, about, contact, …),
// plus nested attendr/*/index.html pages (served as /attendr/<name>/ on GitHub Pages).
const pages = Object.fromEntries(
  [
    ...fs.readdirSync(__dirname).filter((f) => f.endsWith('.html')),
    ...fs.readdirSync(path.resolve(__dirname, 'attendr')).map((d) => `attendr/${d}/index.html`),
  ].map((f) => [f.replace(/(\/index)?\.html$/, ''), path.resolve(__dirname, f)]),
)

// GitHub Pages serves /products as products.html; do the same in `vite dev`.
function cleanUrls(): Plugin {
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const clean = req.url?.split(/[?#]/)[0]
        const page = clean && clean !== '/' && pages[clean.replace(/\/$/, '').slice(1)]
        if (page) {
          req.url = `/${path.relative(__dirname, page)}`
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
