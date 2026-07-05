import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const link = (href: string, label: string) => (
  <a href={href} className="text-amber hover:text-accent no-underline">
    {label}
  </a>
)

const PLANS = [
  ['FREE', '₹0 forever', '—', 'Up to 5 employees'],
  ['STARTER', '₹299/mo (first month free)', '₹2,990/yr (2 months free)', 'Up to 10 employees'],
  ['PRO', '₹449/mo', '₹4,490/yr (2 months free)', 'Up to 25 employees'],
  ['GROWTH', '₹699/mo', '₹6,990/yr (2 months free)', 'Up to 50 employees'],
  ['ENTERPRISE', '₹2,999/mo', 'Custom yearly', '50+ employees'],
  ['CUSTOM', 'Quote basis', 'Quote basis', '100+ employees'],
]

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="font-pixel text-[9px] text-white leading-[1.8] mt-2">{children}</h3>
}

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'definitions',
    title: 'DEFINITIONS',
    body: (
      <ul className="list-none flex flex-col gap-1.5">
        <li>
          <span className="text-amber">&quot;Admin&quot;</span> — the employer (or its authorised
          representative) who registers a company on Attendr and manages its workspace.
        </li>
        <li>
          <span className="text-amber">&quot;Employee&quot;</span> — an individual who marks
          attendance within an Admin&apos;s workspace.
        </li>
        <li>
          <span className="text-amber">&quot;Tenant&quot;</span> — a single company workspace on
          Attendr; each Tenant&apos;s data is logically isolated from every other Tenant.
        </li>
        <li>
          <span className="text-amber">&quot;Content&quot;</span> — data you submit to the
          Service, including profiles, attendance records, and reports.
        </li>
        <li>
          <span className="text-amber">&quot;Plan&quot;</span> — a subscription tier described in
          Section 4.
        </li>
      </ul>
    ),
  },
  {
    id: 'eligibility-account-registration',
    title: 'ELIGIBILITY & ACCOUNT REGISTRATION',
    body: (
      <p>
        Admins register with a company name, work email, and password, and receive a Team ID for
        their Tenant. Employees register with their full name, mobile number, and Team ID, verify
        via OTP, and then set a password. You must provide accurate information and keep your
        credentials confidential. You must be legally capable of entering into a contract under
        Indian law to register as an Admin.
      </p>
    ),
  },
  {
    id: 'description-of-the-service',
    title: 'DESCRIPTION OF THE SERVICE',
    body: (
      <p>
        Attendr is a GPS-based digital attendance platform: Employees mark attendance from within
        Admin-defined geofences, authenticated by OTP and password. Attendr does NOT use biometric
        or facial recognition of any kind.
      </p>
    ),
  },
  {
    id: 'subscription-plans-payment',
    title: 'SUBSCRIPTION PLANS & PAYMENT',
    body: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full border-4 border-line border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-surface-2">
                {['PLAN', 'MONTHLY', 'YEARLY', 'TEAM SIZE'].map((h) => (
                  <th
                    key={h}
                    className="font-pixel text-[8px] text-white text-left px-4 py-3 border-4 border-line"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PLANS.map((row) => (
                <tr key={row[0]} className="bg-surface">
                  <td className="font-pixel text-[8px] text-amber px-4 py-3 border-4 border-line">
                    {row[0]}
                  </td>
                  {row.slice(1).map((cell, i) => (
                    <td
                      key={i}
                      className="font-vt text-[19px] text-cream px-4 py-3 border-4 border-line"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted">All prices are exclusive of applicable GST.</p>

        <SubHeading>4.1 FREE TRIAL</SubHeading>
        <p>
          The Starter plan&apos;s first month is free and auto-converts to a paid subscription
          unless cancelled before the free month ends. The Free plan never expires and requires no
          payment details.
        </p>

        <SubHeading>4.2 BILLING & RENEWAL</SubHeading>
        <p>
          Subscriptions are billed in advance and renew automatically. If your team exceeds your
          Plan&apos;s employee limit, you will be prompted to upgrade. We give at least 30
          days&apos; notice of price changes.
        </p>

        <SubHeading>4.3 CUSTOM / ENTERPRISE</SubHeading>
        <p>
          Custom and Enterprise arrangements are governed by a separate written agreement, which
          prevails over these Terms to the extent of any conflict.
        </p>
      </>
    ),
  },
  {
    id: 'cancellation-refunds',
    title: 'CANCELLATION & REFUNDS',
    body: (
      <p>
        You may cancel at any time, effective at the end of the current billing cycle. First-time
        paid subscribers may request a full refund within 7 days of their first charged payment;
        after that, fees are non-refundable except as required by law or for an SLA breach under
        Section 6. Downgrades take effect at the end of the billing cycle. Full details are in the{' '}
        {link('/attendr/refund', 'Refund & Cancellation Policy')}.
      </p>
    ),
  },
  {
    id: 'service-availability-sla',
    title: 'SERVICE AVAILABILITY & SLA',
    body: (
      <p>
        We target 99% monthly uptime for core attendance marking. If we fall short, you may
        request a pro-rata service credit within 14 days of the incident. Service credits are your
        sole and exclusive remedy for availability failures.
      </p>
    ),
  },
  {
    id: 'admin-responsibilities',
    title: 'ADMIN RESPONSIBILITIES',
    body: (
      <p>
        Admins are responsible for the accuracy of data they enter, for obtaining any consents
        required from their Employees under the DPDP Act, 2023, and for ensuring their geofence
        and attendance policies are lawful.
      </p>
    ),
  },
  {
    id: 'employee-responsibilities',
    title: 'EMPLOYEE RESPONSIBILITIES',
    body: (
      <p>
        Employees must provide accurate details, must not spoof or falsify GPS location, and must
        not share their login credentials with anyone.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'ACCEPTABLE USE',
    body: (
      <p>
        You may not misuse the Service, interfere with its operation, attempt unauthorised access,
        or use it for unlawful purposes. Enforcement is proportionate to severity: warning,
        suspension, or termination. GPS spoofing attempts are flagged to the relevant Admin.
      </p>
    ),
  },
  {
    id: 'force-majeure',
    title: 'FORCE MAJEURE',
    body: (
      <p>
        We are not liable for delay or failure to perform caused by events beyond our reasonable
        control, including natural disasters, war, civil unrest, government action, internet or
        telecom failures, and failures of third-party providers.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'INTELLECTUAL PROPERTY',
    body: (
      <p>
        The Service, including its software, design, and branding, is owned by TryBild. You own
        your Content and grant us a limited licence to process it solely to provide the Service.
      </p>
    ),
  },
  {
    id: 'data-privacy',
    title: 'DATA PRIVACY',
    body: (
      <p>
        Our {link('/attendr/privacy', 'Privacy Policy')} explains how we collect, use, and protect
        personal data, and is incorporated into these Terms by reference.
      </p>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'LIMITATION OF LIABILITY',
    body: (
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, or
        consequential damages, including those arising from OTP delivery failure, GPS inaccuracy,
        or service downtime. Our aggregate liability is capped at the fees you paid in the 12
        months preceding the claim.
      </p>
    ),
  },
  {
    id: 'indemnification',
    title: 'INDEMNIFICATION',
    body: (
      <p>
        You agree to indemnify and hold TryBild harmless from claims, losses, and expenses
        (including reasonable legal fees) arising from your breach of these Terms, your misuse of
        the Service, or your violation of applicable law.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'TERMINATION',
    body: (
      <p>
        You may stop using the Service and cancel at any time. We may suspend or terminate access
        for breach of these Terms, with notice proportionate to the severity of the breach. On
        termination, access to the Service ends and your data is handled per the retention terms
        of the Privacy Policy.
      </p>
    ),
  },
  {
    id: 'governing-law-dispute-resolution',
    title: 'GOVERNING LAW & DISPUTE RESOLUTION',
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
        We may update these Terms; material changes are notified to Admins via email or in-app
        notice. Continued use after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: 'disclaimer-of-warranties',
    title: 'DISCLAIMER OF WARRANTIES',
    body: (
      <p>
        The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;. We make no
        warranty as to GPS accuracy, SMS delivery timing, or uninterrupted service.
      </p>
    ),
  },
  {
    id: 'general-provisions',
    title: 'GENERAL PROVISIONS',
    body: (
      <p>
        Entire Agreement: these Terms and the documents they reference are the entire agreement
        between you and us. Severability: if a provision is unenforceable, the rest remains in
        force. Waiver: failure to enforce a right is not a waiver. Assignment: you may not assign
        these Terms without our consent; we may assign them to a successor of the business.
        Notices: we notify you at your registered email. Relationship of Parties: the parties are
        independent; TryBild is NOT the employer of any Employee using the Service. Survival:
        provisions that by their nature should survive termination (including Sections 11, 13, 14,
        and 16) survive.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'CONTACT US',
    body: (
      <p>
        Questions about these Terms:{' '}
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
      badge="ATTENDR · LEGAL"
      title={
        <>
          <span className="text-accent">TERMS</span> OF SERVICE.
        </>
      }
    >
      <p className="font-vt text-[19px] text-muted">Last updated: 5 July 2026</p>

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
