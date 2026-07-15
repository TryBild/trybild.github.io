import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/LegalShell'

const FEATURES = [
  'Automated rent reminders over WhatsApp',
  'Payment collection via UPI/Razorpay',
  'Tenant management (multiple properties)',
  'Monthly reports on chat',
  'Late payment tracking',
]

function RentPeyPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <span className="inline-block border-2 border-amber text-amber font-vt text-[16px] tracking-[1px] px-2 py-0.5">
          ◌ IN DEV
        </span>

        <h1 className="font-pixel text-white leading-[1.8] mt-6 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">&gt; RENTPEY</span>
          <span className="pixel-cursor" />
        </h1>
        <p className="font-vt text-[21px] text-muted mt-2 max-w-[560px]">
          RENT MANAGEMENT OVER WHATSAPP
        </p>

        <div className="border-2 border-amber px-5 py-4 mt-10">
          <p className="font-vt text-[19px] text-amber">
            ⚠ THIS PRODUCT IS IN ACTIVE DEVELOPMENT. NO PUBLIC ACCESS YET.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-12">
          <Section title="// WHAT IT WILL DO">
            <p>
              Landlords collect rent, send reminders, and track payments — all over WhatsApp. No
              app, no spreadsheet, no accountant.
            </p>
          </Section>

          <Section title="// PLANNED FEATURES">
            <ul className="list-none flex flex-col gap-1.5">
              {FEATURES.map((f) => (
                <li key={f}>
                  <span className="text-accent">&gt;</span> {f}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="// NOTIFY ME">
            <p>
              Drop us an email at{' '}
              <a
                href="mailto:hello@trybild.com"
                className="text-amber hover:text-accent no-underline"
              >
                hello@trybild.com
              </a>{' '}
              to get notified at launch.
            </p>
          </Section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href="mailto:hello@trybild.com" className="btn-pixel">
            &gt; EMAIL US
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
