import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section } from '@/components/layout/LegalShell'

function TermsPage() {
  return (
    <LegalShell
      badge="ATTENDR · LEGAL"
      title={
        <>
          <span className="text-accent">TERMS</span> OF SERVICE.
        </>
      }
    >
      <p className="font-vt text-[19px] text-muted">Last updated: {/* FINAL LEGAL TEXT HERE */}</p>

      {/* FINAL LEGAL TEXT HERE — paste approved text from the .docx into the sections below. */}
      <Section title="1. ACCEPTANCE OF TERMS">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="2. THE SERVICE">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="3. ACCOUNTS & ELIGIBILITY">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="4. SUBSCRIPTIONS, BILLING & PAYMENTS">
        <p>
          Plans and prices are listed on the{' '}
          <a href="/attendr/pricing" className="text-amber hover:text-accent no-underline">
            Pricing
          </a>{' '}
          page. Cancellations and refunds are governed by the{' '}
          <a href="/attendr/refund" className="text-amber hover:text-accent no-underline">
            Refund &amp; Cancellation Policy
          </a>
          .{/* FINAL LEGAL TEXT HERE */}
        </p>
      </Section>
      <Section title="5. ACCEPTABLE USE">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="6. INTELLECTUAL PROPERTY">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="7. SERVICE AVAILABILITY & SLA">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="8. TERMINATION">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="9. LIMITATION OF LIABILITY">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="10. GOVERNING LAW">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="11. CHANGES TO THESE TERMS">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="12. CONTACT US">
        <p>
          Questions about these terms:{' '}
          <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
            support@trybild.com
          </a>
        </p>
      </Section>
    </LegalShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
)
