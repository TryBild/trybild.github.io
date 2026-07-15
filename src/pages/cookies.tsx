import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell, Section, Toc } from '@/components/layout/LegalShell'

const COOKIES = [
  {
    name: 'session_token',
    type: 'Essential',
    purpose: 'Keeps you logged in to the Attendr admin dashboard',
    duration: 'Session, or 7 days if Remember Me is selected',
  },
  {
    name: 'csrf_token',
    type: 'Essential',
    purpose: 'Protects against cross-site request forgery attacks',
    duration: 'Session',
  },
  {
    name: 'cookie_consent',
    type: 'Functional',
    purpose: 'Remembers that you have acknowledged this notice',
    duration: '1 year',
  },
]

const BROWSER_GUIDES = [
  { label: 'Chrome', href: 'https://support.google.com/chrome/answer/95647' },
  {
    label: 'Firefox',
    href: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
  },
  { label: 'Safari', href: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  {
    label: 'Edge',
    href: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
  },
]

const link = (href: string, label: string) => (
  <a href={href} className="text-amber hover:text-accent no-underline">
    {label}
  </a>
)

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'what-are-cookies',
    title: 'WHAT ARE COOKIES',
    body: (
      <p>
        Cookies are small text files stored on your device by your browser when you visit a
        website. They help websites remember information about your visit — such as whether you
        are logged in.
      </p>
    ),
  },
  {
    id: 'how-trybild-uses-cookies',
    title: 'HOW TRYBILD USES COOKIES',
    body: (
      <div className="overflow-x-auto">
        <table className="w-full border border-line border-collapse min-w-[640px] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-surface-2">
              {['COOKIE NAME', 'TYPE', 'PURPOSE', 'DURATION'].map((h) => (
                <th
                  key={h}
                  className="text-[13px] font-semibold text-charcoal text-left px-4 py-3 border border-line"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COOKIES.map((c) => (
              <tr key={c.name} className="bg-surface">
                <td className="text-[15px] text-amber px-4 py-3 border border-line">{c.name}</td>
                <td className="text-[15px] text-charcoal px-4 py-3 border border-line">{c.type}</td>
                <td className="text-[15px] text-charcoal px-4 py-3 border border-line">
                  {c.purpose}
                </td>
                <td className="text-[15px] text-charcoal px-4 py-3 border border-line">
                  {c.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'what-we-do-not-use',
    title: 'WHAT WE DO NOT USE',
    body: (
      <ul className="list-none flex flex-col gap-1.5">
        {[
          'Google Analytics or any third-party analytics',
          'Facebook Pixel or social media tracking',
          'Advertising or retargeting cookies',
          'Cross-site tracking or behavioural profiling cookies',
        ].map((item) => (
          <li key={item}>
            <span className="text-accent">&gt;</span> {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'cookies-in-our-products',
    title: 'COOKIES IN OUR PRODUCTS',
    body: (
      <>
        <p>
          <span className="text-amber">Attendr</span> — uses the session and security cookies
          listed above. No third-party tracking.
        </p>
        <p>
          <span className="text-amber">TruckHisaab and RentPey</span> — WhatsApp-based; no
          cookies used.
        </p>
        <p>
          <span className="text-amber">JellyClaw</span> — a local, open-source CLI tool. It runs
          on your machine, uses no cookies, and collects no data.
        </p>
      </>
    ),
  },
  {
    id: 'managing-cookies',
    title: 'MANAGING COOKIES',
    body: (
      <>
        <p>
          You can control cookies through your browser settings. Disabling essential cookies may
          prevent login to Attendr.
        </p>
        <p>
          Browser guides:{' '}
          {BROWSER_GUIDES.map((b, i) => (
            <span key={b.label}>
              {i > 0 && ' · '}
              <a
                href={b.href}
                target="_blank"
                rel="noopener"
                className="text-amber hover:text-accent no-underline"
              >
                {b.label}
              </a>
            </span>
          ))}
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'CHANGES',
    body: (
      <p>
        We will not introduce advertising or tracking cookies without updating this policy and
        notifying users.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'CONTACT',
    body: (
      <p>
        {link('mailto:hello@trybild.com', 'hello@trybild.com')} ·{' '}
        {link('/contact', 'trybild.com/contact')}
      </p>
    ),
  },
]

function CookiesPage() {
  return (
    <LegalShell
      badge="TRYBILD · LEGAL"
      title={
        <>
          <span className="text-accent">COOKIE</span> POLICY.
        </>
      }
    >
      <p className="text-[14px] text-muted">Last updated: 15 July 2026</p>

      <div className="border-l-4 border-amber bg-surface-2 rounded-r-xl px-6 py-4">
        <p className="text-[16px] text-charcoal">
          TryBild uses only essential cookies needed to run the website. We use no advertising,
          tracking, or third-party analytics cookies.
        </p>
      </div>

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
    <CookiesPage />
  </StrictMode>,
)
