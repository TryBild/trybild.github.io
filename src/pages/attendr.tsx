import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StatusBadge } from '@/components/common/StatusBadge'

const STATS = [
  ['121', 'Paid users'],
  ['₹499', 'Starting · mo'],
  ['200+', 'Free users'],
  ['0', 'App downloads needed'],
]

const TECH = ['Kotlin', 'Jetpack Compose', 'Node.js', 'MongoDB', 'Razorpay', 'Google Maps API']

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/attendr/privacy' },
  { label: 'Terms of Service', href: '/attendr/terms' },
  { label: 'Refund Policy', href: '/attendr/refund' },
  { label: 'Delete Account', href: '/attendr/delete-account' },
]

function AttendrPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
        <StatusBadge status="live" />

        <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em] mt-4">
          Attendr
        </h1>
        <p className="text-[18px] text-muted mt-2 max-w-[560px]">
          GPS attendance for Indian SMBs. No app needed for employees.
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
              Admins set a GPS geofence around each work site. Employees mark attendance from
              inside that geofence — either via a WhatsApp OTP flow or the Attendr Android app.
              No app install is required for employees to clock in and out.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// Pricing</h2>
            <p className="text-[16px] text-charcoal leading-[1.8] mt-3">
              Plans scale from a free tier up to Enterprise. See the full breakdown on the{' '}
              <a href="/attendr/pricing" className="text-brand hover:underline">
                Attendr Pricing
              </a>{' '}
              page.
            </p>
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

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// Legal</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
              {LEGAL_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-[16px] text-brand hover:underline">
                  {l.label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a
            href="https://play.google.com/store/search?q=attendr%20trybild&c=apps"
            target="_blank"
            rel="noopener"
            className="btn-brand"
          >
            &gt; Get on Play Store
          </a>
          <a href="/contact" className="btn-secondary">
            &gt; Contact us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AttendrPage />
  </StrictMode>,
)
