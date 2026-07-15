import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Business identity block required on every compliance page (Play Store / Razorpay).
export function BusinessIdentity() {
  return (
    <div className="border border-line bg-surface-2 rounded-xl px-6 py-5 mt-12">
      <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase mb-3">
        Business details
      </p>
      <p className="text-[16px] text-charcoal">
        TryBild (Sole Proprietorship — Proprietor: Rahul Satiram Yadav)
      </p>
      <p className="text-[15px] text-muted mt-1">
        T9A, Room No. 303, Juhu Koliwada, H.B. Gawde Marg, Near Vitthal Mandir, Santacruz (West),
        Mumbai, Maharashtra 400049
      </p>
      <p className="text-[15px] text-muted mt-1">Udyam Reg: UDYAM-MH-19-0448043</p>
      <p className="text-[15px] text-muted mt-1">
        Phone:{' '}
        <a href="tel:+918976683099" className="text-brand hover:underline">
          +91 89766 83099
        </a>{' '}
        · Email:{' '}
        <a href="mailto:rahul@trybild.com" className="text-brand hover:underline">
          rahul@trybild.com
        </a>
      </p>
      <p className="text-[15px] text-muted mt-1">
        Support &amp; privacy:{' '}
        <a href="mailto:support@trybild.com" className="text-brand hover:underline">
          support@trybild.com
        </a>{' '}
        · General:{' '}
        <a href="mailto:hello@trybild.com" className="text-brand hover:underline">
          hello@trybild.com
        </a>
      </p>
    </div>
  )
}

// Table of contents: anchor links that smooth-scroll to same-page sections
// (html { scroll-behavior: smooth } already set globally in index.css).
export function Toc({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav aria-label="Table of contents" className="border border-line bg-surface-2 rounded-xl px-6 py-5">
      <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase mb-3">
        Contents
      </p>
      <ol className="list-none flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-[15px] text-brand hover:underline">
              {i + 1}. {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Section({ id, title, children }: { id?: string; title: string; children?: ReactNode }) {
  return (
    <section>
      <h2 id={id} className="text-[20px] font-semibold text-charcoal mt-10 scroll-mt-24">
        {title}
      </h2>
      <div className="text-[16px] text-charcoal leading-[1.8] mt-3 flex flex-col gap-3">
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
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[760px] mx-auto px-6 pt-12 pb-16">
        <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">{badge}</p>

        <h1 className="text-[40px] font-bold text-charcoal mt-3 leading-[1.15]">{title}</h1>

        <div className="mt-8 flex flex-col gap-2">{children}</div>

        <BusinessIdentity />
      </main>

      <Footer />
    </div>
  )
}
