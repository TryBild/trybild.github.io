import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { CustomCursor } from '@/components/common/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const TEAM = [
  { name: 'Rahul Yadav', role: 'Founder' },
  { name: 'Viraaj', role: 'COO' },
]

function AboutPage() {
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
              Product studio · Mumbai, India
            </span>
          </div>

          <h1
            className="font-bebas leading-[0.9] tracking-[0.01em] text-white mb-8"
            style={{ fontSize: 'clamp(3.6rem, 8vw, 6.5rem)' }}
          >
            About
            <br />
            <em className="font-serif not-italic text-accent">TryBild.</em>
          </h1>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24">
            <div className="space-y-5 font-sans text-[0.95rem] leading-[1.75] text-white/40 max-w-[440px]">
              <p>
                TryBild Technologies is a Mumbai-based product studio building tools for
                business, logistics, and local AI.
              </p>
              <p>
                We build TruckHisaab, Attendr, JellyClaw, and RentPey — real products for
                real users, delivered where they already are.
              </p>
            </div>

            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-4">
                Team
              </p>
              <div className="flex flex-col gap-px bg-white/[0.06] border border-white/[0.06]">
                {TEAM.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-baseline justify-between bg-black hover:bg-surface transition-colors duration-200 px-6 py-5"
                  >
                    <span className="font-sans text-[0.95rem] font-semibold text-white">
                      {m.name}
                    </span>
                    <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/30">
                      {m.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)
