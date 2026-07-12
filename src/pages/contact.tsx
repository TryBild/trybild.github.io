import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BusinessIdentity } from '@/components/layout/LegalShell'

const ITEMS: { label: string; value: string; href?: string }[] = [
  { label: 'EMAIL', value: 'RAHUL@TRYBILD.COM', href: 'mailto:rahul@trybild.com' },
  { label: 'GENERAL', value: 'HELLO@TRYBILD.COM', href: 'mailto:hello@trybild.com' },
  { label: 'SUPPORT', value: 'SUPPORT@TRYBILD.COM', href: 'mailto:support@trybild.com' },
  { label: 'PHONE', value: '+91 77388 21379', href: 'tel:+917738821379' },
  { label: 'X', value: '@TRYBILD', href: 'https://x.com/trybild' },
  { label: 'GITHUB', value: 'GITHUB.COM/TRYBILD', href: 'https://github.com/trybild' },
  { label: 'REDDIT', value: 'R/JELLYCLAW', href: 'https://reddit.com/r/JellyClaw' },
  { label: 'DISCORD', value: 'JELLYCLAW SERVER', href: 'https://discord.gg/GUbgEhHvxt' },
  { label: 'JELLYCLAW', value: 'JELLYCLAW.IN', href: 'https://jellyclaw.in' },
  { label: 'LOCATION', value: 'MUMBAI, INDIA' },
]

function ContactPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          GET IN TOUCH · MUMBAI, INDIA
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-accent">SAY</span> HELLO.
        </h1>

        <p className="font-vt text-[21px] text-muted mt-4 max-w-[560px]">
          <span className="text-accent">&gt; CONTACT:</span> QUESTIONS ABOUT A PRODUCT, A
          PARTNERSHIP, OR ANYTHING ELSE — WE READ EVERYTHING.
          <span className="pixel-cursor" />
        </p>

        <div className="flex flex-col gap-px bg-line border-4 border-line max-w-[640px] mt-10">
          {ITEMS.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-surface hover:bg-surface-2 transition-colors duration-150 px-5 py-4 no-underline"
              >
                <span className="font-pixel text-[8px] text-muted">{item.label}</span>
                <span className="font-vt text-[20px] tracking-[1px] text-amber hover:text-accent transition-colors duration-150">
                  {item.value}
                </span>
              </a>
            ) : (
              <div
                key={item.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-surface px-5 py-4"
              >
                <span className="font-pixel text-[8px] text-muted">{item.label}</span>
                <span className="font-vt text-[20px] tracking-[1px] text-cream">{item.value}</span>
              </div>
            ),
          )}
        </div>

        <p className="font-vt text-[20px] text-cream mt-8 max-w-[640px]">
          <span className="text-accent">&gt; SUPPORT HOURS:</span> MON–SAT, 10 AM – 7 PM IST. WE
          RESPOND WITHIN 24–48 HOURS.
        </p>

        <div className="max-w-[640px]">
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
