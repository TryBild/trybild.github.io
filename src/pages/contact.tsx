import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BusinessIdentity } from '@/components/layout/LegalShell'

const PRODUCT_SUPPORT = [
  { label: 'Attendr', href: '/attendr' },
  { label: 'TruckHisaab', href: '/truckhisaab' },
  { label: 'RentPey', href: '/rentpey' },
  { label: 'JellyClaw', href: '/jellyclaw' },
]

function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
        <div className="grid md:grid-cols-[55%_45%] gap-10">
          <div>
            <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em]">
              Get in touch.
            </h1>
            <p className="text-[18px] text-muted mt-4 leading-[1.7]">
              We respond within 24 hours on business days.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-xl p-7 h-fit">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
                  Email
                </p>
                <a href="mailto:hello@trybild.com" className="text-[16px] text-brand hover:underline">
                  hello@trybild.com
                </a>
              </div>
              <div>
                <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
                  Location
                </p>
                <p className="text-[16px] text-charcoal">Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
                  Response time
                </p>
                <p className="text-[16px] text-charcoal">Within 24 business hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase mb-3">
            For product-specific support
          </p>
          <div className="flex flex-wrap gap-4">
            {PRODUCT_SUPPORT.map((p) => (
              <a key={p.label} href={p.href} className="text-[16px] text-brand hover:underline">
                {p.label}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-[640px] mt-4">
          <BusinessIdentity />
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)
