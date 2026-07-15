import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Products } from '@/components/sections/Products'

const VALUES = [
  {
    title: 'Practical over perfect',
    desc: 'We ship tools that work today, not vaporware for tomorrow.',
  },
  {
    title: 'No bloat',
    desc: 'WhatsApp-native means zero downloads, zero onboarding friction.',
  },
  {
    title: 'Honest',
    desc: 'No fake stats, no inflated user counts, no VC hype.',
  },
]

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-4 md:pt-20">
          <div className="grid md:grid-cols-[60%_40%] gap-10 items-center">
            <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em]">
              We build tools
              <br />
              for real businesses.
            </h1>
            <p className="text-[18px] text-muted leading-[1.7]">
              TryBild Technologies is a software studio based in Juhu, Mumbai. Founded in 2025 by
              Rahul Yadav.
            </p>
          </div>
        </section>

        <Products />

        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <h2 className="text-[32px] font-semibold text-charcoal">// Our values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-surface border border-line rounded-xl p-7">
                <h3 className="text-[20px] font-semibold text-charcoal">{v.title}</h3>
                <p className="text-[16px] text-muted mt-3 leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 pb-20">
          <h2 className="text-[32px] font-semibold text-charcoal">// The founder</h2>
          <p className="text-[18px] text-charcoal leading-[1.7] mt-6 max-w-[640px]">
            Rahul Yadav, Mumbai. BAF degree, US CMA, SAP FICO.{' '}
            <a href="/contact" className="text-brand hover:underline">
              Get in touch
            </a>
            .
          </p>
        </section>
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
