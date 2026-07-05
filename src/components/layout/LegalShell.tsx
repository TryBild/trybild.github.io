import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Business identity block required on every compliance page (Play Store / Razorpay).
export function BusinessIdentity() {
  return (
    <div className="border-4 border-line bg-surface px-5 py-4 mt-12">
      <p className="font-pixel text-[8px] text-muted mb-3">BUSINESS DETAILS</p>
      <p className="font-vt text-[20px] text-cream">
        TryBild (Sole Proprietorship — Proprietor: Rahul Yadav)
      </p>
      <p className="font-vt text-[19px] text-muted mt-1">
        T 9 A, Room No. 303, Juhu Koliwada, H. B. Gawde Marg, Near Vitthal Mandir, Juhu, Santacruz
        (West), Mumbai, Maharashtra, India (PO: Juhu)
      </p>
      <p className="font-vt text-[19px] text-muted mt-1">
        Support &amp; privacy:{' '}
        <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
          support@trybild.com
        </a>{' '}
        · General:{' '}
        <a href="mailto:hello@trybild.com" className="text-amber hover:text-accent no-underline">
          hello@trybild.com
        </a>
      </p>
    </div>
  )
}

export function Section({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section>
      <h2 className="font-pixel text-[10px] sm:text-[11px] text-accent leading-[1.8]">{title}</h2>
      <div className="font-vt text-[20px] text-cream leading-[1.35] mt-3 flex flex-col gap-3">
        {children}
      </div>
    </section>
  )
}

export function LegalShell({
  badge,
  title,
  children,
}: {
  badge: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[820px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          {badge}
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[24px]">
          {title}
        </h1>

        <div className="mt-10 flex flex-col gap-8">{children}</div>

        <BusinessIdentity />
      </main>

      <Footer />
    </div>
  )
}
