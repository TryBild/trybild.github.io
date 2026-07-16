import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const FEATURES = [
  {
    title: 'Trip P&L in seconds',
    body: 'Log a trip in one line. Get instant profit and loss — freight earned minus every expense. Know if each trip made money before the next one starts.',
  },
  {
    title: 'Voice-first expense logging',
    body: "Say 'diesel teen hazaar' and it's logged. Hindi and Hinglish voice and text input. No forms, no training needed.",
  },
  {
    title: 'Document reminders',
    body: "Insurance, permits, fitness certificates — TruckHisaab tracks expiry dates and reminds you before fines happen. One fine costs more than a year's subscription.",
  },
]

const PRICING = [
  { name: 'Free', price: 'Rs.0', forWho: 'Try it out', feature: '10 trips/month, weekly summary', highlight: false },
  { name: 'Single', price: 'Rs.99', forWho: '1-truck owners', feature: 'Unlimited trips, document reminders', highlight: true },
  { name: 'Standard', price: 'Rs.199', forWho: '2–5 trucks', feature: 'Monthly PDF, driver analytics, all reminders', highlight: false },
  { name: 'Fleet', price: 'Rs.999', forWho: '6–25 trucks', feature: 'Dashboard, munshi login, leakage flags, consolidated statements', highlight: false },
]

const TECH = ['Android', 'Hindi AI', 'Voice Input', 'Offline-first', 'GPS']

function TruckHisaabPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
          <span className="inline-block text-[13px] font-medium leading-none px-3 py-1 rounded-full border bg-[#fff8e1] text-[#f57f17] border-[#ffe082]">
            COMING TO PLAY STORE
          </span>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-8 md:items-center">
            <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em]">
              Every rupee
              <br />
              your truck earns.
              <br />
              Tracked.
            </h1>

            <div>
              <p className="text-[18px] text-muted leading-[1.7]">
                TruckHisaab is a fleet management app for Indian truck owners. Log trips, track
                expenses, catch leakage — in Hindi. Coming to Play Store.
              </p>
              <div className="mt-8">
                <a href="mailto:hello@trybild.com" className="btn-primary">
                  Get notified at launch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Problem (dark, full-width) */}
        <section className="bg-charcoal py-20 md:py-28">
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white leading-[1.2] tracking-[-0.01em]">
              India's truck owners run lakh-rupee businesses on paper diaries.
            </h2>
            <p className="text-[17px] text-[#9a9a9a] leading-[1.7] mt-5">
              10–15% of every truck's revenue leaks silently — wrong slips, forgotten expenses,
              driver padding. TruckHisaab makes every rupee visible.
            </p>
          </div>
        </section>

        {/* Section 3 — Features */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-surface border border-line rounded-xl p-6">
                <h3 className="text-[20px] font-semibold text-charcoal">{f.title}</h3>
                <p className="text-[15px] text-muted leading-[1.7] mt-3">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Pricing */}
        <section className="max-w-[1200px] mx-auto px-6 pb-20 md:pb-24">
          <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">Pricing</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-charcoal leading-[1.2] tracking-[-0.01em] mt-3">
            Built for owners, not accountants.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`bg-surface rounded-xl p-6 border ${p.highlight ? 'border-brand' : 'border-line'}`}
              >
                <p className="text-[15px] font-semibold text-charcoal">{p.name}</p>
                <p className="text-[28px] font-bold text-charcoal mt-3">
                  {p.price}
                  <span className="text-[14px] font-medium text-muted">/mo</span>
                </p>
                <p className="text-[13px] text-muted mt-1">{p.forWho}</p>
                <p className="text-[14px] text-charcoal leading-[1.6] mt-4 pt-4 border-t border-line">
                  {p.feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — CTA strip (dark) */}
        <section className="bg-charcoal py-20 md:py-24">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-[1.2]">
              TruckHisaab is coming to Play Store.
            </h2>
            <p className="text-[16px] text-[#9a9a9a] leading-[1.7] mt-4">
              Leave your email and we'll notify you at launch.
            </p>
            <div className="mt-8">
              <a href="mailto:hello@trybild.com" className="btn-brand">
                Notify me
              </a>
            </div>
          </div>
        </section>

        {/* Section 6 — Tech tags */}
        <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">Built with</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {TECH.map((t) => (
              <span key={t} className="text-[13px] text-muted border border-line rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </section>
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
