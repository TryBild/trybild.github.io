import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section } from '@/components/layout/LegalShell'

function DeleteAccountPage() {
  return (
    <LegalShell
      badge="ATTENDR · ACCOUNT"
      title={
        <>
          DELETE YOUR <span className="text-accent">ATTENDR</span> ACCOUNT.
        </>
      }
    >
      <Section title="1. HOW TO REQUEST DELETION">
        <p>
          Email{' '}
          <a href="mailto:support@trybild.com" className="text-amber hover:text-accent no-underline">
            support@trybild.com
          </a>{' '}
          with the subject line &quot;Account Deletion Request&quot;, and include:
        </p>
        <ul className="list-none flex flex-col gap-1.5">
          <li>
            <span className="text-accent">&gt;</span> Your full name
          </li>
          <li>
            <span className="text-accent">&gt;</span> Your registered mobile number (employees) or
            admin email (admins)
          </li>
          <li>
            <span className="text-accent">&gt;</span> Your Team ID
          </li>
        </ul>
      </Section>

      <Section title="2. WHAT GETS DELETED">
        <p>Your profile, attendance records, and login credentials.</p>
        <p>
          Employees: your request is coordinated with your employer (Admin), who is the data
          controller for your organisation&apos;s records under labour-law retention requirements.
        </p>
      </Section>

      <Section title="3. TIMELINE">
        <p>
          Requests are acknowledged within 48 hours and completed within 30 days, subject to
          statutory record-keeping obligations.
        </p>
        <p>Security logs are automatically deleted after 90 days regardless of any request.</p>
      </Section>
    </LegalShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeleteAccountPage />
  </StrictMode>,
)
