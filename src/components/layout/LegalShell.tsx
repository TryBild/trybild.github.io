import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Business identity block required on every compliance page (Play Store / Razorpay).
export function BusinessIdentity() {
  return (
    <div className="border-4 border-line bg-surface px-5 py-4 mt-12">
      <p className="font-pixel text-[8px] text-muted mb-3">BUSINESS DETAILS</p>
      <p className="font-vt text-[20px] text-cream">
        TryBild (Sole Proprietorship — Proprietor: Rahul Satiram Yadav)
      </p>
      <p className="font-vt text-[19px] text-muted mt-1">
        T9A, Room No. 303, Juhu Koliwada, H.B. Gawde Marg, Near Vitthal Mandir, Santacruz (West),
        Mumbai, Maharashtra 400049
      </p>
      <p className="font-vt text-[19px] text-muted mt-1">Udyam Reg: UDYAM-MH-19-0448043</p>
      <p className="font-vt text-[19px] text-muted mt-1">
        Phone:{' '}
        <a href="tel:+917738821379" className="text-amber hover:text-accent no-underline">
          +91 77388 21379
        </a>{' '}
        · Email:{' '}
        <a href="mailto:rahul@trybild.com" className="text-amber hover:text-accent no-underline">
          rahul@trybild.com
        </a>
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

// Table of contents: anchor links that smooth-scroll to same-page sections
// (html { scroll-behavior: smooth } already set globally in index.css).
export function Toc({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav aria-label="Table of contents" className="border-4 border-line bg-surface px-5 py-4">
      <p className="font-pixel text-[8px] text-muted mb-3">CONTENTS</p>
      <ol className="list-none flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-vt text-[19px] tracking-[1px] text-amber hover:text-accent transition-colors duration-150 no-underline"
            >
              <span className="text-accent">&gt;</span> {i + 1}. {item.title}
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
      <h2 id={id} className="font-pixel text-[10px] sm:text-[11px] text-accent leading-[1.8] scroll-mt-24">
        {title}
      </h2>
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
