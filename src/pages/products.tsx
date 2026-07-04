import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppMockup } from '@/components/common/WhatsAppMockup'

type Cta = { label: string; href: string }

type Product = {
  id: string
  name: string
  prompt: string // terminal-prompt one-liner, shown after "> NAME:"
  desc: string
  badge: string
  badgeClass: string
  ctas: Cta[]
}

const PRODUCTS: Product[] = [
  {
    id: 'truckhisaab',
    name: 'TRUCKHISAAB',
    prompt: 'WhatsApp AI assistant for truck owners',
    desc: 'Trip logging, expense tracking, and P&L for Indian transport businesses — in Hindi and Hinglish, entirely inside WhatsApp. No app to install.',
    badge: '● LIVE',
    badgeClass: 'text-amber',
    ctas: [],
  },
  {
    id: 'attendr',
    name: 'ATTENDR',
    prompt: 'GPS attendance for Indian SMBs',
    desc: 'GPS-verified attendance, team management, department onboarding, and automated attendance reporting — all in one simple platform.',
    badge: '● LIVE',
    badgeClass: 'text-amber',
    ctas: [{ label: 'CONTACT US', href: 'mailto:hello@trybild.com' }],
  },
  {
    id: 'jellyclaw',
    name: 'JELLYCLAW',
    prompt: 'The AI team that works while you sleep',
    desc: 'Run a full AI team on your own machine — CEO agent, department heads, worker agents — powered by Ollama, configured in plain YAML. Open source, built in public.',
    badge: 'OPEN SOURCE',
    badgeClass: 'text-jelly',
    ctas: [
      { label: 'JELLYCLAW.IN', href: 'https://jellyclaw.in' },
      { label: 'GITHUB', href: 'https://github.com/JellyClaw-org/jellyclaw' },
      { label: 'R/JELLYCLAW', href: 'https://reddit.com/r/JellyClaw' },
      { label: 'DISCORD', href: 'https://discord.gg/jellyclaw' },
    ],
  },
  {
    id: 'rentpey',
    name: 'RENTPEY',
    prompt: 'WhatsApp-native rent management for landlords',
    desc: 'Rent management for landlords, built where India already is: WhatsApp.',
    badge: 'IN ACTIVE DEVELOPMENT',
    badgeClass: 'text-muted',
    ctas: [],
  },
]

function ProductsPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        {/* Page header */}
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          4 PRODUCTS · MUMBAI, INDIA
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">EVERYTHING</span>
          <br />
          WE BUILD.
        </h1>

        <p className="font-vt text-[21px] text-muted mt-4 max-w-[560px]">
          TOOLS FOR BUSINESS, LOGISTICS, AND LOCAL AI. FROM MUMBAI, FOR EVERYWHERE.
          <span className="pixel-cursor" />
        </p>

        {/* Product sections */}
        <div className="flex flex-col gap-6 mt-12">
          {PRODUCTS.map((p) => (
            <section key={p.id} id={p.id} className="border-4 border-line bg-surface p-5 sm:p-8">
              <div
                className={
                  p.id === 'truckhisaab' ? 'flex flex-col lg:flex-row lg:items-start gap-8' : ''
                }
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h2 className="font-pixel text-[12px] sm:text-[14px] text-white leading-[1.6]">
                      {p.name}
                    </h2>
                    <span className={`font-vt text-[17px] tracking-[1px] ${p.badgeClass}`}>
                      {p.badge}
                    </span>
                  </div>

                  <p className="font-vt text-[21px] text-cream leading-[1.4] mt-5">
                    <span className="text-accent">&gt; {p.name}:</span> {p.prompt.toUpperCase()}
                  </p>
                  <p className="font-vt text-[19px] text-muted leading-[1.4] mt-3 max-w-[520px]">
                    {p.desc}
                  </p>

                  {p.ctas.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {p.ctas.map((cta) => (
                        <a
                          key={cta.label}
                          href={cta.href}
                          {...(cta.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener' }
                            : {})}
                          className="btn-pixel"
                        >
                          {cta.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {p.id === 'truckhisaab' && (
                  <div className="flex justify-center lg:justify-end shrink-0 max-w-full">
                    <WhatsAppMockup />
                  </div>
                )}
              </div>
            </section>
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
