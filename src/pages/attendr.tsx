import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/LegalShell'

const STATS = [
  ['121', 'PAID USERS'],
  ['₹499', 'STARTING · MO'],
  ['200+', 'FREE USERS'],
  ['0', 'APP DOWNLOADS NEEDED'],
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
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <span className="inline-block border-2 border-[#00ff41] text-[#00ff41] font-vt text-[16px] tracking-[1px] px-2 py-0.5">
          ● LIVE
        </span>

        <h1 className="font-pixel text-white leading-[1.8] mt-6 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">&gt; ATTENDR</span>
          <span className="pixel-cursor" />
        </h1>
        <p className="font-vt text-[21px] text-muted mt-2 max-w-[560px]">
          GPS ATTENDANCE FOR INDIAN SMBs
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
              Admins set a GPS geofence around each work site. Employees mark attendance from
              inside that geofence — either via a WhatsApp OTP flow or the Attendr Android app.
              No app install is required for employees to clock in and out.
            </p>
          </Section>

          <Section title="// PRICING">
            <p>
              Plans scale from a free tier up to Enterprise. See the full breakdown on the{' '}
              <a href="/attendr/pricing" className="text-amber hover:text-accent no-underline">
                Attendr Pricing
              </a>{' '}
              page.
            </p>
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

          <Section title="// LEGAL">
            <div className="flex flex-col gap-1.5">
              {LEGAL_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-vt text-[19px] text-accent hover:text-amber no-underline"
                >
                  &gt; {l.label}
                </a>
              ))}
            </div>
          </Section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a
            href="https://play.google.com/store/search?q=attendr%20trybild&c=apps"
            target="_blank"
            rel="noopener"
            className="btn-pixel"
          >
            &gt; GET ON PLAY STORE
          </a>
          <a href="/contact" className="btn-pixel">
            &gt; CONTACT US
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
