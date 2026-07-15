import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const support = (
  <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
    support@trybild.com
  </a>
)

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'scope',
    title: 'SCOPE',
    body: (
      <p>
        This policy applies to paid subscriptions of TryBild products (currently Attendr). The
        product-specific policy at{' '}
        <a href="/attendr/refund" className="text-amber hover:text-accent no-underline">
          Attendr Refund &amp; Cancellation Policy
        </a>{' '}
        contains the same terms.
      </p>
    ),
  },
  {
    id: 'cancelling-your-subscription',
    title: 'CANCELLING YOUR SUBSCRIPTION',
    body: (
      <>
        <p>
          You can cancel your subscription at any time from your dashboard, or by emailing{' '}
          {support}.
        </p>
        <p>
          Cancellation takes effect at the end of your current billing cycle. Paid features
          remain active until then.
        </p>
      </>
    ),
  },
  {
    id: 'seven-day-refund',
    title: '7-DAY REFUND FOR FIRST-TIME SUBSCRIBERS',
    body: (
      <>
        <p>
          First-time paid subscribers are eligible for a full refund within 7 days of their first
          charged payment. A free first month is not a payment — the 7-day window starts from the
          first payment that is actually charged.
        </p>
        <p>To request a refund, email {support} with your reason for the request.</p>
      </>
    ),
  },
  {
    id: 'after-the-7-day-window',
    title: 'AFTER THE 7-DAY WINDOW',
    body: (
      <p>
        After 7 days, fees for the current billing cycle are non-refundable, except where a
        refund is required by law, or in the event of a prolonged service outage attributable to
        TryBild (as per the SLA in our Terms of Service).
      </p>
    ),
  },
  {
    id: 'how-refunds-are-processed',
    title: 'HOW REFUNDS ARE PROCESSED',
    body: (
      <p>
        Approved refunds are processed within 5–7 business days to your original payment method
        via Razorpay, our payment processor.
      </p>
    ),
  },
  {
    id: 'downgrades',
    title: 'DOWNGRADES',
    body: (
      <p>
        Plan downgrades take effect at the end of your current billing cycle. You keep your
        current plan&apos;s features until then.
      </p>
    ),
  },
]

function RefundPage() {
  return (
    <LegalShell
      badge="TRYBILD · LEGAL"
      title={
        <>
          <span className="text-accent">REFUND</span> & CANCELLATION POLICY.
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
    <RefundPage />
  </StrictMode>,
)
