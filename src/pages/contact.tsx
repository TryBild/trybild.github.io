import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight } from 'lucide-react'
import '@/index.css'
import { CustomCursor } from '@/components/common/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const ITEMS = [
  { label: 'Email', value: 'hello@trybild.com', href: 'mailto:hello@trybild.com' },
  { label: 'Support', value: 'support@trybild.com', href: 'mailto:support@trybild.com' },
  { label: 'X', value: '@trybild', href: 'https://x.com/trybild' },
  { label: 'GitHub', value: 'github.com/trybild', href: 'https://github.com/trybild' },
  { label: 'JellyClaw', value: 'jellyclaw.in', href: 'https://jellyclaw.in' },
  { label: 'Location', value: 'Mumbai, India' },
]

function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />

      <main className="relative bg-brand-gradient">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-white/[0.08] rounded-full bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
              Get in touch · Mumbai, India
            </span>
          </div>

          <h1
            className="font-bebas leading-[0.9] tracking-[0.01em] text-white mb-8"
            style={{ fontSize: 'clamp(3.6rem, 8vw, 6.5rem)' }}
          >
            <em className="font-serif not-italic text-accent">Say</em> hello.
          </h1>

          <p className="font-sans text-[1rem] leading-[1.75] text-white/40 max-w-[420px] mb-12">
            Questions about a product, a partnership, or anything else — we read everything.
          </p>

          <div className="flex flex-col gap-px bg-white/[0.06] border border-white/[0.06] max-w-[640px]">
            {ITEMS.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                  className="group flex items-baseline justify-between gap-4 bg-black hover:bg-surface transition-colors duration-200 px-6 py-5 no-underline"
                >
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 shrink-0">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-[0.95rem] text-white/60 group-hover:text-white transition-colors duration-200">
                    {item.value}
                    <ArrowUpRight
                      size={13}
                      className="text-white/20 group-hover:text-accent transition-colors duration-200"
                    />
                  </span>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 bg-black px-6 py-5"
                >
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 shrink-0">
                    {item.label}
                  </span>
                  <span className="font-sans text-[0.95rem] text-white/60">{item.value}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)
