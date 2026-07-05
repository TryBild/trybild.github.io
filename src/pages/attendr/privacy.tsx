import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section } from '@/components/layout/LegalShell'

function PrivacyPage() {
  return (
    <LegalShell
      badge="ATTENDR · LEGAL"
      title={
        <>
          <span className="text-accent">PRIVACY</span> POLICY.
        </>
      }
    >
      <p className="font-vt text-[19px] text-muted">Last updated: {/* FINAL LEGAL TEXT HERE */}</p>

      {/* FINAL LEGAL TEXT HERE — paste approved text from the .docx into the sections below. */}
      <Section title="1. INTRODUCTION">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="2. INFORMATION WE COLLECT">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="3. HOW WE USE YOUR INFORMATION">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="4. LOCATION DATA">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="5. DATA SHARING & DISCLOSURE">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="6. DATA RETENTION">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="7. SECURITY">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="8. YOUR RIGHTS">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="9. ACCOUNT DELETION">
        <p>
          To request deletion of your Attendr account and data, see{' '}
          <a href="/attendr/delete-account" className="text-amber hover:text-accent no-underline">
            Delete Your Attendr Account
          </a>
          .
        </p>
      </Section>
      <Section title="10. CHANGES TO THIS POLICY">{/* FINAL LEGAL TEXT HERE */}</Section>
      <Section title="11. CONTACT US">
        <p>
          Privacy questions:{' '}
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
    <PrivacyPage />
  </StrictMode>,
)
