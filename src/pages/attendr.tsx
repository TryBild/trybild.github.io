import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const FEATURES = [
  {
    title: 'GPS-Verified Check-In',
    body: 'Employees check in only within your defined geofence. No proxy, no guesswork — every attendance record is tied to a verified location and timestamp.',
  },
  {
    title: 'Statutory Muster Roll',
    body: 'Auto-generate Form 29-compliant muster rolls in one tap. Built for Indian labour law — ready for inspections, audits, and payroll processing without manual entry.',
  },
  {
    title: 'Multi-Site Management',
    body: 'Manage attendance across multiple offices, warehouses, or sites from a single admin dashboard. Assign geofences, set shift rules, and monitor in real time.',
  },
  {
    title: 'Payroll-Ready Reports',
    body: 'Export monthly attendance summaries formatted for payroll. Reduce processing time, eliminate manual reconciliation, and close payroll on time — every time.',
  },
]

const PRICING = [
  { name: 'Starter', price: '₹0', forWho: 'Up to 5 employees', feature: 'GPS check-in, basic reports, 1 geofence', highlight: false },
  { name: 'Growth', price: '₹399', forWho: 'Up to 12 employees', feature: 'Muster roll export, multi-site, payroll summary', highlight: true },
  { name: 'Business', price: '₹499', forWho: 'Up to 25 employees', feature: 'Custom geofences, shift management, priority support', highlight: false },
  { name: 'Enterprise', price: 'Custom', forWho: '50+ employees', feature: 'Dedicated onboarding, SLA, API access, compliance audit support', highlight: false },
]

const TECH = ['Android', 'GPS Geofencing', 'Kotlin', 'Offline-first', 'Cloud Sync', 'Form 29 Compliance']

function AttendrPage() {
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
              Workforce visibility.
              <br />
              Without the
              <br />
              complexity.
            </h1>

            <div>
              <p className="text-[18px] text-muted leading-[1.7]">
                Attendr is a GPS-powered attendance management platform built for Indian businesses.
                Real-time location verification, automated payroll-ready reports, and statutory
                compliance — in one app.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="mailto:hello@trybild.com" className="btn-primary">
                  Get notified at launch
                </a>
                <a href="#features" className="btn-secondary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Problem (dark, full-width) */}
        <section className="bg-charcoal py-20 md:py-28">
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white leading-[1.2] tracking-[-0.01em]">
              Manual attendance is costing you more than you think.
            </h2>
            <p className="text-[17px] text-[#9a9a9a] leading-[1.7] mt-5">
              Proxy attendance, misreported hours, and missing muster rolls expose businesses to
              compliance risk and payroll leakage. Attendr eliminates the gap between who's present
              and what's paid.
            </p>
          </div>
        </section>

        {/* Section 3 — Features */}
        <section id="features" className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 scroll-mt-20">
          <div className="grid sm:grid-cols-2 gap-6">
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
            Transparent pricing. No hidden fees.
          </h2>
          <p className="text-[16px] text-muted leading-[1.7] mt-3 max-w-[560px]">
            All plans include GPS verification, admin dashboard, and Play Store app access.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`bg-surface rounded-xl p-6 border ${p.highlight ? 'border-brand' : 'border-line'}`}
              >
                <p className="text-[15px] font-semibold text-charcoal">{p.name}</p>
                <p className="text-[28px] font-bold text-charcoal mt-3">
                  {p.price}
                  {p.price !== 'Custom' && (
                    <span className="text-[14px] font-medium text-muted">/mo</span>
                  )}
                </p>
                <p className="text-[13px] text-muted mt-1">{p.forWho}</p>
                <p className="text-[14px] text-charcoal leading-[1.6] mt-4 pt-4 border-t border-line">
                  {p.feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — Compliance highlight (dark) */}
        <section className="bg-charcoal py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-6 text-center">
            <h3 className="text-[24px] sm:text-[30px] font-bold text-white leading-[1.25]">
              Built for Indian labour compliance from day one.
            </h3>
            <p className="text-[16px] text-[#9a9a9a] leading-[1.7] mt-4">
              Form 29 muster roll generation, shift-wise attendance tracking, and audit-ready
              records — Attendr is designed around the regulatory requirements Indian businesses
              actually face.
            </p>
          </div>
        </section>

        {/* Section 6 — CTA waitlist (cream) */}
        <section className="max-w-[720px] mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-charcoal leading-[1.2] tracking-[-0.01em]">
            Be the first to know when Attendr launches.
          </h2>
          <p className="text-[16px] text-muted leading-[1.7] mt-4">
            Join the waitlist and get early access when we go live on Play Store.
          </p>
          <div className="mt-8">
            <a href="mailto:hello@trybild.com" className="btn-primary">
              Join the waitlist
            </a>
          </div>
        </section>

        {/* Section 7 — Tech tags */}
        <section className="max-w-[1200px] mx-auto px-6 pb-20 md:pb-24">
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
    <AttendrPage />
  </StrictMode>,
)
