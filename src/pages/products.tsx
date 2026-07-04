import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Github } from 'lucide-react'
import '@/index.css'
import { CustomCursor } from '@/components/common/CustomCursor'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

type Cta = { label: string; href: string; icon?: 'github' | 'arrow' }

type Product = {
  id: string
  n: string
  name: string
  tagline: string
  desc: string
  badge: string
  badgeClass: string
  dotClass: string
  ctas: Cta[]
}

const PRODUCTS: Product[] = [
  {
    id: 'truckhisaab',
    n: '01',
    name: 'TruckHisaab',
    tagline: 'WhatsApp AI assistant for truck owners',
    desc: 'Trip logging, expense tracking, and P&L for Indian transport businesses — in Hindi and Hinglish, entirely inside WhatsApp. No app to install.',
    badge: 'Live product',
    badgeClass: 'border-white/[0.08] bg-white/[0.03] text-white/40',
    dotClass: 'bg-green-400',
    ctas: [],
  },
  {
    id: 'attendr',
    n: '02',
    name: 'Attendr',
    tagline: 'GPS attendance for Indian SMBs',
    desc: 'GPS-verified attendance, team management, department onboarding, and automated attendance reporting — all in one simple platform.',
    badge: 'Live product',
    badgeClass: 'border-white/[0.08] bg-white/[0.03] text-white/40',
    dotClass: 'bg-green-400',
    ctas: [{ label: 'Contact us', href: 'mailto:hello@trybild.com' }],
  },
  {
    id: 'jellyclaw',
    n: '03',
    name: 'JellyClaw',
    tagline: 'The AI team that works while you sleep',
    desc: 'Run a full AI team on your own machine — CEO agent, department heads, worker agents — powered by Ollama, configured in plain YAML. Open source, built in public.',
    badge: 'Open source',
    badgeClass: 'border-jelly/20 bg-jelly/10 text-jelly',
    dotClass: 'bg-jelly',
    ctas: [
      { label: 'jellyclaw.in', href: 'https://jellyclaw.in', icon: 'arrow' },
      { label: 'GitHub', href: 'https://github.com/JellyClaw-org/jellyclaw', icon: 'github' },
    ],
  },
  {
    id: 'rentpey',
    n: '04',
    name: 'RentPey',
    tagline: 'WhatsApp-native rent management for landlords',
    desc: 'Rent management for landlords, built where India already is: WhatsApp.',
    badge: 'In active development',
    badgeClass: 'border-accent/20 bg-accent/10 text-accent',
    dotClass: 'bg-accent',
    ctas: [],
  },
]

function CtaIcon({ icon }: { icon?: Cta['icon'] }) {
  if (icon === 'github') return <Github size={13} />
  if (icon === 'arrow') return <ArrowUpRight size={13} />
  return null
}

function ProductsPage() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />

      <main className="relative bg-brand-gradient">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-32 md:pt-40 pb-24 md:pb-32">
          {/* Page header */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-white/[0.08] rounded-full bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
              4 products · Mumbai, India
            </span>
          </div>

          <h1
            className="font-bebas leading-[0.9] tracking-[0.01em] text-white mb-6"
            style={{ fontSize: 'clamp(3.6rem, 8vw, 6.5rem)' }}
          >
            <em className="font-serif not-italic text-accent">Everything</em>
            <br />
            we build.
          </h1>

          <p className="font-sans text-[1rem] leading-[1.75] text-white/40 max-w-[420px] mb-16">
            Tools for business, logistics, and local AI. From Mumbai, for everywhere.
          </p>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
            {PRODUCTS.map((p, i) => (
              <RevealOnScroll
                key={p.id}
                delay={i * 0.07}
                className="relative bg-black hover:bg-surface transition-colors duration-300 group overflow-hidden"
              >
                <section id={p.id} className="scroll-mt-20 p-8 md:p-10 flex flex-col h-full">
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-white/20">
                      {p.n}
                    </span>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full ${p.badgeClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${p.dotClass}`} />
                      <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase">
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <h2
                    className="font-bebas leading-[0.9] tracking-[0.01em] text-white"
                    style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}
                  >
                    {p.name}
                  </h2>
                  <p className="font-serif italic text-white/30 text-[1.1rem] mt-1 mb-5">
                    {p.tagline}
                  </p>
                  <p className="font-sans text-[0.88rem] leading-[1.75] text-white/40 max-w-[420px] mb-8">
                    {p.desc}
                  </p>

                  {p.ctas.length > 0 && (
                    <div className="mt-auto flex flex-wrap items-center gap-3">
                      {p.ctas.map((cta, j) => (
                        <a
                          key={cta.label}
                          href={cta.href}
                          {...(cta.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener' }
                            : {})}
                          className={
                            j === 0
                              ? 'inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold text-black bg-white hover:bg-white/90 px-5 py-2.5 rounded-sm transition-all duration-200 no-underline'
                              : 'inline-flex items-center gap-2 font-sans text-[0.82rem] font-medium text-white/50 hover:text-white px-5 py-2.5 transition-colors duration-200 no-underline border border-white/[0.08] hover:border-white/20 rounded-sm'
                          }
                        >
                          {cta.label}
                          <CtaIcon icon={cta.icon} />
                        </a>
                      ))}
                    </div>
                  )}
                </section>
              </RevealOnScroll>
            ))}
          </div>
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
