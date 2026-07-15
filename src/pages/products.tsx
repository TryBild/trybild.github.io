import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

type Status = 'live' | 'in-dev' | 'open-source'

type Product = {
  id: string
  name: string
  status: Status
  accent: string // tailwind text color class for the product name + tagline
  tagline: string
  tags: string[]
  stats: string[]
  platform: string
  href: string
}

const STATUS_META: Record<Status, { label: string; badge: string; colorClass: string }> = {
  live: { label: 'LIVE', badge: '●', colorClass: 'text-[#00ff41] border-[#00ff41]' },
  'in-dev': { label: 'IN DEV', badge: '◌', colorClass: 'text-amber border-amber' },
  'open-source': { label: 'OPEN SOURCE', badge: '★', colorClass: 'text-jelly border-jelly' },
}

const PRODUCTS: Product[] = [
  {
    id: 'attendr',
    name: 'ATTENDR',
    status: 'live',
    accent: 'text-accent',
    tagline: 'GPS attendance for Indian SMBs. No app needed for employees.',
    tags: ['Android', 'Node.js', 'MongoDB', 'SaaS'],
    stats: ['121 paid users', '₹499/mo onwards'],
    platform: 'Play Store',
    href: '/attendr',
  },
  {
    id: 'truckhisaab',
    name: 'TRUCKHISAAB',
    status: 'live',
    accent: 'text-accent',
    tagline: 'WhatsApp fleet AI for truck owners. Hisaab on chat.',
    tags: ['WhatsApp', 'AI', 'Fleet'],
    stats: ['1000+ users', '0 app downloads needed'],
    platform: 'WhatsApp',
    href: '/truckhisaab',
  },
  {
    id: 'rentpey',
    name: 'RENTPEY',
    status: 'in-dev',
    accent: 'text-accent',
    tagline: 'Rent collection over WhatsApp. For landlords, not accountants.',
    tags: ['WhatsApp', 'Payments', 'Real Estate'],
    stats: ['Active development'],
    platform: 'WhatsApp',
    href: '/rentpey',
  },
  {
    id: 'jellyclaw',
    name: 'JELLYCLAW',
    status: 'open-source',
    accent: 'text-jelly',
    tagline: 'Local multi-agent AI. The AI team that works while you sleep.',
    tags: ['Python', 'Ollama', 'CLI', 'Local AI'],
    stats: ['uvx jellyclaw', 'Free forever'],
    platform: 'github.com/JellyClaw-org',
    href: '/jellyclaw',
  },
]

const FILTERS: { key: 'all' | Status; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'live', label: 'LIVE' },
  { key: 'in-dev', label: 'IN DEV' },
  { key: 'open-source', label: 'OPEN SOURCE' },
]

// Pixel corner accents: small amber L-marks at all 4 corners of a card.
function CornerAccents() {
  const corner = 'absolute w-2 h-2 border-amber pointer-events-none'
  return (
    <>
      <span className={`${corner} -top-0.5 -left-0.5 border-t-2 border-l-2`} />
      <span className={`${corner} -top-0.5 -right-0.5 border-t-2 border-r-2`} />
      <span className={`${corner} -bottom-0.5 -left-0.5 border-b-2 border-l-2`} />
      <span className={`${corner} -bottom-0.5 -right-0.5 border-b-2 border-r-2`} />
    </>
  )
}

function ProductCard({ product }: { product: Product }) {
  const status = STATUS_META[product.status]
  return (
    <section
      id={product.id}
      className="relative border-2 border-accent bg-surface p-5 flex flex-col"
    >
      <CornerAccents />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className={`font-pixel text-[9px] leading-[1.6] ${product.accent}`}>{product.name}</h2>
        <span
          className={`inline-block border-2 font-vt text-[16px] tracking-[1px] px-2 py-0.5 ${status.colorClass}`}
        >
          {status.badge} {status.label}
        </span>
      </div>

      <p className={`font-vt text-[18px] leading-[1.4] mt-3 ${product.accent}`}>
        {product.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="border-2 border-line text-muted font-vt text-[15px] tracking-[0.5px] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-1 mt-4">
        {product.stats.map((stat) => (
          <p key={stat} className="font-vt text-[18px] text-amber">
            {stat}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t-2 border-line">
        <span className="font-vt text-[16px] tracking-[1px] text-muted">{product.platform}</span>
        <a href={product.href} className="btn-pixel !text-[8px] !px-3 !py-2">
          &gt; VIEW →
        </a>
      </div>
    </section>
  )
}

function ProductsPage() {
  const [filter, setFilter] = useState<'all' | Status>('all')

  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          // PRODUCT CATALOG
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">EVERYTHING</span>
          <br />
          WE BUILD.
        </h1>

        <p className="font-vt text-[21px] text-muted mt-4 max-w-[560px]">
          <span className="text-accent">&gt;</span> 4 PRODUCTS. BUILT IN MUMBAI. NO VC MONEY.
          <span className="pixel-cursor" />
        </p>

        <div className="flex flex-wrap gap-3 mt-10">
          {FILTERS.map((f) => {
            const count =
              f.key === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.status === f.key).length
            const active = filter === f.key
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`font-pixel text-[8px] tracking-[1px] px-3 py-2 border-2 transition-colors duration-150 ${
                  active
                    ? 'border-accent text-accent'
                    : 'border-line text-muted hover:border-amber hover:text-amber'
                }`}
              >
                {f.label} [{count}]
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          {PRODUCTS.filter((p) => filter === 'all' || p.status === filter).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsPage />
  </StrictMode>,
)
