import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const link = (href: string, label: string) => (
  <a href={href} className="text-amber hover:text-accent no-underline">
    {label}
  </a>
)

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'agreement-scope',
    title: 'AGREEMENT & SCOPE',
    body: (
      <p>
        These Terms of Service govern your use of the websites and products of TryBild, a sole
        proprietorship operated by Rahul Satiram Yadav (&quot;we,&quot; &quot;us,&quot;
        &quot;our&quot;), including Attendr, a GPS-based digital attendance platform, and
        TruckHisaab, a WhatsApp-based fleet-management bot. Product-specific terms — including
        the {link('/attendr/terms', 'Attendr Terms of Service')} — apply in addition to these
        Terms and prevail for that product to the extent of any conflict. By using a TryBild
        product you accept these Terms.
      </p>
    ),
  },
  {
    id: 'eligibility-accounts',
    title: 'ELIGIBILITY & ACCOUNTS',
    body: (
      <p>
        You must provide accurate information when registering and keep your credentials
        confidential. You must be legally capable of entering into a contract under Indian law to
        purchase a paid plan. You are responsible for activity under your account.
      </p>
    ),
  },
  {
    id: 'the-services',
    title: 'THE SERVICES',
    body: (
      <>
        <p>
          <span className="text-amber">Attendr</span> — GPS-geofence attendance marking with OTP
          and password authentication. No biometric or facial recognition is used. Plans and
          prices are listed on the {link('/attendr/pricing', 'Attendr Pricing')} page.
        </p>
        <p>
          <span className="text-amber">TruckHisaab</span> — a fleet-management bot operating on
          the WhatsApp Business Platform, which records the vehicle, trip, and expense data you
          submit and reports it back to you.
        </p>
      </>
    ),
  },
  {
    id: 'payments-subscriptions',
    title: 'PAYMENTS & SUBSCRIPTIONS',
    body: (
      <p>
        Paid plans are billed in advance and renew automatically, with payments processed by
        Razorpay. All prices are exclusive of applicable GST. If you exceed your plan&apos;s
        limits you will be prompted to upgrade. We give at least 30 days&apos; notice of price
        changes. Custom and Enterprise arrangements are governed by a separate written agreement,
        which prevails over these Terms to the extent of any conflict.
      </p>
    ),
  },
  {
    id: 'cancellation-refunds',
    title: 'CANCELLATION & REFUNDS',
    body: (
      <p>
        You may cancel at any time, effective at the end of the current billing cycle.
        First-time paid subscribers may request a full refund within 7 days of their first
        charged payment. Full details, including processing timelines, are in the{' '}
        {link('/refund', 'Refund & Cancellation Policy')}.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'ACCEPTABLE USE',
    body: (
      <p>
        You may not misuse the services, interfere with their operation, attempt unauthorised
        access, submit false data (including spoofed GPS locations), or use the services for
        unlawful purposes. Enforcement is proportionate to severity: warning, suspension, or
        termination.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'INTELLECTUAL PROPERTY',
    body: (
      <p>
        The services, including their software, design, and branding, are owned by TryBild. You
        own the content and data you submit and grant us a limited licence to process it solely
        to provide the services.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'PRIVACY',
    body: (
      <p>
        Our {link('/privacy', 'Privacy Policy')} explains how we collect, use, and protect
        personal data, and is incorporated into these Terms by reference.
      </p>
    ),
  },
  {
    id: 'disclaimer-of-warranties',
    title: 'DISCLAIMER OF WARRANTIES',
    body: (
      <p>
        The services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;. We make no
        warranty as to GPS accuracy, SMS or WhatsApp message delivery timing, or uninterrupted
        service.
      </p>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'LIMITATION OF LIABILITY',
    body: (
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, or
        consequential damages, including those arising from OTP or message delivery failure, GPS
        inaccuracy, or service downtime. Our aggregate liability is capped at the fees you paid
        in the 12 months preceding the claim.
      </p>
    ),
  },
  {
    id: 'governing-law-disputes',
    title: 'GOVERNING LAW & DISPUTES',
    body: (
      <p>
        These Terms are governed by the laws of India. Disputes are first addressed by good-faith
        negotiation for 30 days; failing resolution, they are referred to arbitration under the
        Arbitration and Conciliation Act, 1996, before a sole arbitrator, seated in Mumbai, in
        English. Courts in Mumbai have jurisdiction for interim relief.
      </p>
    ),
  },
  {
    id: 'changes-to-these-terms',
    title: 'CHANGES TO THESE TERMS',
    body: (
      <p>
        We may update these Terms; material changes are notified via email or in-product notice.
        Continued use after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'CONTACT US',
    body: (
      <p>
        Questions about these Terms:{' '}
        <a href="mailto:rahul@trybild.com" className="text-amber hover:text-accent no-underline">
          rahul@trybild.com
        </a>{' '}
        or{' '}
        <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
          support@trybild.com
        </a>
        . Our business details are in the block below.
      </p>
    ),
  },
]

function TermsPage() {
  return (
    <LegalShell
      badge="TRYBILD · LEGAL"
      title={
        <>
          <span className="text-accent">TERMS</span> OF SERVICE.
        </>
      }
    >
      <p className="text-[14px] text-muted">Last updated: 12 July 2026</p>

      <Toc items={SECTIONS} />

      {SECTIONS.map((s, i) => (
        <Section key={s.id} id={s.id} title={`${i + 1}. ${s.title}`}>
          {s.body}
        </Section>
      ))}
    </LegalShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
)
