import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/LegalShell'

const STATS = [
  ['1000+', 'ACTIVE USERS'],
  ['0', 'APP DOWNLOADS'],
  ['WHATSAPP', 'NATIVE'],
  ['AI', 'POWERED'],
]

const STEPS = [
  ['01', 'Add your truck on WhatsApp'],
  ['02', 'Log trips, expenses, driver details by chatting'],
  ['03', 'Get reports and summaries on demand'],
]

const TECH = ['WhatsApp Business API', 'Node.js', 'AI', 'MongoDB']

function TruckHisaabPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <span className="inline-block border-2 border-[#00ff41] text-[#00ff41] font-vt text-[16px] tracking-[1px] px-2 py-0.5">
          ● LIVE
        </span>

        <h1 className="font-pixel text-white leading-[1.8] mt-6 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">&gt; TRUCKHISAAB</span>
          <span className="pixel-cursor" />
        </h1>
        <p className="font-vt text-[21px] text-muted mt-2 max-w-[560px]">
          WHATSAPP FLEET AI FOR TRUCK OWNERS
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {STATS.map(([value, label]) => (
            <div key={label} className="border-2 border-amber px-4 py-4 text-center">
              <p className="font-pixel text-[14px] text-amber">{value}</p>
              <p className="font-vt text-[15px] text-muted tracking-[0.5px] mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 mt-12">
          <Section title="// WHAT IT DOES">
            <p>
              Truck owners manage their fleet hisaab entirely over WhatsApp — trip logs, expense
              tracking, driver records, and reports. No app install, and it works on basic
              smartphones.
            </p>
          </Section>

          <Section title="// HOW IT WORKS">
            <div className="flex flex-col gap-3">
              {STEPS.map(([n, text]) => (
                <p key={n}>
                  <span className="font-pixel text-[10px] text-amber">[{n}]</span> {text}
                </p>
              ))}
            </div>
          </Section>

          <Section title="// TECH STACK">
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="border-2 border-line text-muted font-vt text-[15px] tracking-[0.5px] px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href="https://wa.me/" target="_blank" rel="noopener" className="btn-pixel">
            &gt; START ON WHATSAPP
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
