import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section } from '@/components/layout/LegalShell'

function RefundPage() {
  return (
    <LegalShell
      badge="ATTENDR · LEGAL"
      title={
        <>
          <span className="text-accent">REFUND</span> & CANCELLATION POLICY.
        </>
      }
    >
      <Section title="1. CANCELLING YOUR SUBSCRIPTION">
        <p>
          You can cancel your Attendr subscription at any time from the Admin dashboard, or by
          emailing{' '}
          <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
            support@trybild.com
          </a>
          .
        </p>
        <p>
          Cancellation takes effect at the end of your current billing cycle. Paid features remain
          active until then.
        </p>
      </Section>

      <Section title="2. 7-DAY REFUND FOR FIRST-TIME SUBSCRIBERS">
        <p>
          First-time paid subscribers are eligible for a full refund within 7 days of their first
          charged payment. The Starter plan&apos;s free first month is not a payment — the 7-day
          window starts from the first payment that is actually charged.
        </p>
        <p>
          To request a refund, email{' '}
          <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
            support@trybild.com
          </a>{' '}
          with your reason for the request.
        </p>
      </Section>

      <Section title="3. AFTER THE 7-DAY WINDOW">
        <p>
          After 7 days, fees for the current billing cycle are non-refundable, except where a
          refund is required by law, or in the event of a prolonged service outage attributable to
          TryBild (as per the SLA in our Terms of Service).
        </p>
      </Section>

      <Section title="4. HOW REFUNDS ARE PROCESSED">
        <p>
          Approved refunds are processed within 5–7 business days to your original payment method
          via Razorpay, our payment processor.
        </p>
      </Section>

      <Section title="5. DOWNGRADES">
        <p>
          Plan downgrades take effect at the end of your current billing cycle. You keep your
          current plan&apos;s features until then.
        </p>
      </Section>
    </LegalShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RefundPage />
  </StrictMode>,
)
