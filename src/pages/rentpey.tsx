import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StatusBadge } from '@/components/common/StatusBadge'

const FEATURES = [
  'Automated rent reminders over WhatsApp',
  'Payment collection via UPI/Razorpay',
  'Tenant management (multiple properties)',
  'Monthly reports on chat',
  'Late payment tracking',
]

function RentPeyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
        <StatusBadge status="in-dev" />

        <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em] mt-4">
          RentPey
        </h1>
        <p className="text-[18px] text-muted mt-2 max-w-[560px]">Rent collection over WhatsApp.</p>

        <div className="bg-[#fff8e1] border border-[#ffe082] rounded-xl px-6 py-4 mt-10">
          <p className="text-[16px] text-[#f57f17]">
            This product is in active development. No public access yet.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-16">
          <section>
            <h2 className="text-[20px] font-semibold text-charcoal">// What it will do</h2>
            <p className="text-[16px] text-charcoal leading-[1.8] mt-3">
              Landlords collect rent, send reminders, and track payments — all over WhatsApp. No
              app, no spreadsheet, no accountant.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// Planned features</h2>
            <ul className="list-none flex flex-col gap-2 mt-3">
              {FEATURES.map((f) => (
                <li key={f} className="text-[16px] text-charcoal leading-[1.8]">
                  <span className="text-brand">&gt;</span> {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href="mailto:hello@trybild.com" className="btn-brand">
            &gt; Email us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RentPeyPage />
  </StrictMode>,
)
