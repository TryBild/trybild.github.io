import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const email = (addr: string) => (
  <a href={`mailto:${addr}`} className="text-amber hover:text-accent no-underline">
    {addr}
  </a>
)

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'introduction',
    title: 'INTRODUCTION',
    body: (
      <p>
        This Privacy Policy describes how TryBild, a sole proprietorship operated by Rahul Yadav
        (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), the operator of Attendr, a GPS-based
        digital attendance platform, collects, uses, stores, and protects personal data of Admins
        (employers) and Employees (individuals marking attendance). This Policy is framed in
        accordance with the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and
        other applicable Indian law. By registering for or using Attendr, you consent to the
        practices described here. Each company on Attendr is a &quot;Tenant&quot; — data belonging
        to one Tenant is logically isolated from every other Tenant and never shared across
        Tenants.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'INFORMATION WE COLLECT',
    body: (
      <>
        <p>
          <span className="text-amber">Information you provide</span> — Admin: full name, company
          name, work email, password (stored as salted bcrypt hash, never plain text). Employee:
          full name, mobile number, Team ID, and a password set after OTP verification (bcrypt
          hashed).
        </p>
        <p>
          <span className="text-amber">Collected automatically</span> — GPS location captured ONLY
          at clock-in/clock-out, encrypted at rest with AES-256-GCM; no continuous or background
          tracking. Mock-location flag if device reports spoofed GPS. Device info (model, OS, app
          version, IP) for security/debugging. OTP logs (delivery/verification status; OTP codes
          stored only as one-way hashes, deleted on verification or expiry). Security event logs
          (logins, lockouts, password changes) with IP/device, kept 90 days.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'HOW WE USE YOUR INFORMATION',
    body: (
      <p>
        To create and authenticate accounts (JWT sessions); verify and record attendance against
        Admin-defined geofences; generate reports, dashboards, and CSV exports scoped to the same
        Tenant only; deliver OTPs via SMS; send security alerts to the registered Admin email;
        respond to support tickets; detect and prevent fraud and GPS spoofing; and comply with
        law. We never use personal data for advertising and never sell it.
      </p>
    ),
  },
  {
    id: 'location-data',
    title: 'LOCATION DATA',
    body: (
      <p>
        GPS coordinates are captured only at the moment of marking attendance, used solely to
        verify presence within the employer&apos;s geofence, encrypted at rest (AES-256-GCM),
        visible only to the Employee&apos;s own employer (Admin), and never shared outside that
        Tenant. Employees grant location consent at registration before device permission is
        requested; withdrawing consent (uninstalling the app or contacting your Admin or support)
        stops attendance marking.
      </p>
    ),
  },
  {
    id: 'data-sharing-disclosure',
    title: 'DATA SHARING & DISCLOSURE',
    body: (
      <>
        <p>
          Shared only with: Fast2SMS (India) for OTP SMS delivery; MongoDB Atlas (hosted in
          Singapore) for database; Render for backend hosting; Razorpay (India) for payment
          processing of paid plans (card/UPI details are handled entirely by Razorpay and never
          stored by us); and law enforcement only where legally mandated.
        </p>
        <p>
          Cross-border note: our primary database is in Singapore — by using Attendr you consent
          to storage and processing there; we comply with any DPDP Act cross-border restrictions
          notified by the Central Government.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'DATA RETENTION',
    body: (
      <p>
        Attendance and location records: for the duration of the Tenant&apos;s active subscription
        plus a reasonable period for legal compliance. OTP hashes: deleted on verification or
        expiry. Security logs: auto-deleted after 90 days. Account data: until deletion is
        requested or prolonged inactivity per our retention schedule.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'SECURITY',
    body: (
      <p>
        bcrypt-hashed passwords (unique salt per user); AES-256-GCM encryption on GPS coordinates
        at rest; cryptographically generated single-use OTPs with 10-minute expiry; JWT with
        enforced signing algorithm; automatic account lockout after repeated failed logins with
        email alerts; rate limiting on sensitive endpoints; NoSQL-injection input sanitisation;
        HTTPS/TLS for all traffic; and least-privilege access to production data. No method is
        100% secure; we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'YOUR RIGHTS',
    body: (
      <p>
        Under the DPDP Act, 2023 you may: access your personal data; request correction; request
        erasure (subject to legal retention); withdraw consent; nominate someone to exercise your
        rights on your behalf in case of death or incapacity; and lodge a grievance with us and,
        if unresolved, with the Data Protection Board of India. Write to {email('support@trybild.com')}.
        Employee deletion and correction requests are generally routed through the Employee&apos;s
        Admin as the primary data controller for that Tenant.
      </p>
    ),
  },
  {
    id: 'account-deletion',
    title: 'ACCOUNT DELETION',
    body: (
      <p>
        To request deletion of your Attendr account and data, see{' '}
        <a href="/attendr/delete-account" className="text-amber hover:text-accent no-underline">
          Delete Your Attendr Account
        </a>
        .
      </p>
    ),
  },
  {
    id: 'changes-to-this-policy',
    title: 'CHANGES TO THIS POLICY',
    body: (
      <p>
        We may update this Policy; material changes are notified to Admins via email or in-app
        notice. Continued use after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'CONTACT US',
    body: (
      <p>
        Grievance handling per the DPDP Act, 2023: grievances are acknowledged within 48 hours and
        resolved within 30 days where feasible; you may escalate to the Data Protection Board of
        India if unresolved. Privacy questions: {email('support@trybild.com')}. Our business
        details are in the block below.
      </p>
    ),
  },
]

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
      <p className="text-[14px] text-muted">Last updated: 5 July 2026</p>

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
    <PrivacyPage />
  </StrictMode>,
)
