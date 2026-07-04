import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const TEAM = [
  { name: 'RAHUL YADAV', role: 'FOUNDER' },
  { name: 'VIRAAJ', role: 'COO' },
]

function AboutPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          PRODUCT STUDIO · MUMBAI, INDIA
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[24px]">
          ABOUT
          <br />
          <span className="text-accent">TRYBILD.</span>
        </h1>

        <p className="font-vt text-[21px] text-muted mt-4">
          <span className="text-accent">&gt; ABOUT:</span> WHO WE ARE
          <span className="pixel-cursor" />
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10">
          <div className="space-y-5 font-vt text-[21px] leading-[1.4] text-cream max-w-[480px]">
            <p>
              TryBild Technologies is a Mumbai-based product studio building tools for business,
              logistics, and local AI.
            </p>
            <p>
              We build TruckHisaab, Attendr, JellyClaw, and RentPey — real products for real
              users, delivered where they already are.
            </p>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-white mb-4">TEAM</p>
            <div className="flex flex-col gap-3">
              {TEAM.map((m) => (
                <div
                  key={m.name}
                  className="flex items-baseline justify-between gap-4 border-4 border-line bg-surface hover:border-accent hover:bg-surface-2 transition-colors duration-150 px-5 py-4"
                >
                  <span className="font-pixel text-[10px] text-white leading-[1.6]">{m.name}</span>
                  <span className="font-vt text-[17px] tracking-[1px] text-muted">{m.role}</span>
                </div>
              ))}
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
