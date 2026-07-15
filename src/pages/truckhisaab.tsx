import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StatusBadge } from '@/components/common/StatusBadge'

const STATS = [
  ['1000+', 'Active users'],
  ['0', 'App downloads'],
  ['WhatsApp', 'Native'],
  ['AI', 'Powered'],
]

const STEPS = [
  ['01', 'Add your truck on WhatsApp'],
  ['02', 'Log trips, expenses, driver details by chatting'],
  ['03', 'Get reports and summaries on demand'],
]

const TECH = ['WhatsApp Business API', 'Node.js', 'AI', 'MongoDB']

function TruckHisaabPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
        <StatusBadge status="live" />

        <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em] mt-4">
          TruckHisaab
        </h1>
        <p className="text-[18px] text-muted mt-2 max-w-[560px]">
          WhatsApp fleet AI for truck owners.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {STATS.map(([value, label]) => (
            <div key={label} className="border border-line rounded-xl px-4 py-5 text-center">
              <p className="text-[24px] font-bold text-charcoal">{value}</p>
              <p className="text-[14px] text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-16">
          <section>
            <h2 className="text-[20px] font-semibold text-charcoal">// What it does</h2>
            <p className="text-[16px] text-charcoal leading-[1.8] mt-3">
              Truck owners manage their fleet hisaab entirely over WhatsApp — trip logs, expense
              tracking, driver records, and reports. No app install, and it works on basic
              smartphones.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// How it works</h2>
            <div className="flex flex-col gap-3 mt-3">
              {STEPS.map(([n, text]) => (
                <p key={n} className="text-[16px] text-charcoal leading-[1.8]">
                  <span className="font-semibold text-brand">{n}.</span> {text}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// Tech stack</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {TECH.map((t) => (
                <span key={t} className="text-[13px] text-muted border border-line rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href="https://wa.me/" target="_blank" rel="noopener" className="btn-brand">
            &gt; Start on WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TruckHisaabPage />
  </StrictMode>,
)
