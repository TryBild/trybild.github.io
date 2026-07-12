import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const link = (href: string, label: string) => (
  <a href={href} className="text-amber hover:text-accent no-underline">
    {label}
  </a>
)
const email = (addr: string) => link(`mailto:${addr}`, addr)

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'introduction',
    title: 'INTRODUCTION',
    body: (
      <>
        <p>
          This Privacy Policy describes how TryBild, a sole proprietorship operated by Rahul
          Satiram Yadav (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), collects, uses, stores,
          and protects personal data across our products: Attendr, a GPS-based digital attendance
          platform, and TruckHisaab, a WhatsApp-based fleet-management bot. This Policy is framed
          in accordance with the Digital Personal Data Protection Act, 2023 (&quot;DPDP
          Act&quot;) and other applicable Indian law. By registering for or using a TryBild
          product, you consent to the practices described here.
        </p>
        <p>
          Attendr also has a product-specific policy at {link('/attendr/privacy', 'Attendr Privacy Policy')},
          which provides additional detail and prevails for Attendr-specific matters.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'INFORMATION WE COLLECT',
    body: (
      <>
        <p>
          <span className="text-amber">Attendr</span> — Admin: full name, company name, work
          email, password (stored as salted bcrypt hash, never plain text). Employee: full name,
          mobile number, Team ID, and a password set after OTP verification (bcrypt hashed). GPS
          location captured ONLY at clock-in/clock-out, encrypted at rest with AES-256-GCM; no
          continuous or background tracking. Device info (model, OS, app version, IP) for
          security and debugging. OTP logs (codes stored only as one-way hashes, deleted on
          verification or expiry). Security event logs, kept 90 days.
        </p>
        <p>
          <span className="text-amber">TruckHisaab</span> — your WhatsApp phone number and name,
          and the fleet and business data you submit through the bot (such as vehicle, trip, and
          expense entries), used solely to provide the service back to you.
        </p>
        <p>
          <span className="text-amber">Website</span> — trybild.com is a static website and does
          not set tracking or advertising cookies.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'HOW WE USE YOUR INFORMATION',
    body: (
      <p>
        To create and authenticate accounts; verify and record attendance against Admin-defined
        geofences (Attendr); maintain your fleet records and respond to your commands
        (TruckHisaab); generate reports and exports; deliver OTPs via SMS; send security alerts;
        respond to support requests; detect and prevent fraud and GPS spoofing; and comply with
        law. We never use personal data for advertising and never sell it.
      </p>
    ),
  },
  {
    id: 'location-data',
    title: 'LOCATION DATA (ATTENDR)',
    body: (
      <p>
        GPS coordinates are captured only at the moment of marking attendance, used solely to
        verify presence within the employer&apos;s geofence, encrypted at rest (AES-256-GCM),
        visible only to the Employee&apos;s own employer (Admin), and never shared outside that
        company&apos;s workspace. Employees grant location consent at registration before the
        device permission is requested; withdrawing consent (uninstalling the app or contacting
        your Admin or support) stops attendance marking.
      </p>
    ),
  },
  {
    id: 'data-sharing-disclosure',
    title: 'DATA SHARING & DISCLOSURE',
    body: (
      <>
        <p>
          Shared only with the service providers needed to run our products: Fast2SMS (India) for
          OTP SMS delivery; MongoDB Atlas (hosted in Singapore) for database; Render for backend
          hosting; Razorpay (India) for payment processing of paid plans (card/UPI details are
          handled entirely by Razorpay and never stored by us); and the WhatsApp Business Platform
          (Meta), through which TruckHisaab messages are necessarily transmitted. Data is
          disclosed to law enforcement only where legally mandated.
        </p>
        <p>
          Cross-border note: our primary database is in Singapore — by using our products you
          consent to storage and processing there; we comply with any DPDP Act cross-border
          restrictions notified by the Central Government.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'DATA RETENTION',
    body: (
      <p>
        Attendance and location records: for the duration of the customer&apos;s active
        subscription plus a reasonable period for legal compliance. TruckHisaab records: while
        you use the service. OTP hashes: deleted on verification or expiry. Security logs:
        auto-deleted after 90 days. Account data: until deletion is requested or prolonged
        inactivity per our retention schedule.
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
        if unresolved, with the Data Protection Board of India. Write to {email('rahul@trybild.com')}{' '}
        or {email('support@trybild.com')}. Attendr Employee deletion and correction requests are
        generally routed through the Employee&apos;s Admin as the primary data controller for
        that company.
      </p>
    ),
  },
  {
    id: 'account-deletion',
    title: 'ACCOUNT DELETION',
    body: (
      <p>
        Attendr: see {link('/attendr/delete-account', 'Delete Your Attendr Account')}. TruckHisaab:
        email {email('support@trybild.com')} from or mentioning your registered WhatsApp number to
        request deletion of your data.
      </p>
    ),
  },
  {
    id: 'changes-to-this-policy',
    title: 'CHANGES TO THIS POLICY',
    body: (
      <p>
        We may update this Policy; material changes are notified via email or in-product notice.
        Continued use after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'CONTACT US & GRIEVANCES',
    body: (
      <p>
        Grievance handling per the DPDP Act, 2023: grievances are acknowledged within 48 hours
        and resolved within 30 days where feasible; you may escalate to the Data Protection Board
        of India if unresolved. Privacy questions: {email('rahul@trybild.com')} or{' '}
        {email('support@trybild.com')}. Our business details are in the block below.
      </p>
    ),
  },
]

function PrivacyPage() {
  return (
    <LegalShell
      badge="TRYBILD · LEGAL"
      title={
        <>
          <span className="text-accent">PRIVACY</span> POLICY.
        </>
      }
    >
      <p className="font-vt text-[19px] text-muted">Last updated: 12 July 2026</p>

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
