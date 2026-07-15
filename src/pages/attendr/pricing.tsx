import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { LegalShell } from '@/components/layout/LegalShell'

const PLANS = [
  { name: 'FREE', monthly: 'Rs.0 forever', yearly: '—', team: 'Up to 5 employees' },
  {
    name: 'STARTER',
    monthly: 'Rs.299/mo (first month free)',
    yearly: 'Rs.2,990/yr (2 months free)',
    team: 'Up to 10 employees',
  },
  {
    name: 'PRO',
    monthly: 'Rs.449/mo',
    yearly: 'Rs.4,490/yr (2 months free)',
    team: 'Up to 25 employees',
  },
  {
    name: 'GROWTH',
    monthly: 'Rs.699/mo',
    yearly: 'Rs.6,990/yr (2 months free)',
    team: 'Up to 50 employees',
  },
  { name: 'ENTERPRISE', monthly: 'Rs.2,999/mo', yearly: 'Custom yearly', team: '50+ employees' },
  { name: 'CUSTOM', monthly: 'Quote basis', yearly: 'Quote basis', team: '100+ employees' },
]

function PricingPage() {
  return (
    <LegalShell
      badge="ATTENDR · PLANS"
      title={
        <>
          <span className="text-accent">ATTENDR</span> PRICING.
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full border border-line border-collapse min-w-[640px] rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-surface-2">
              <th className="text-[13px] font-semibold text-charcoal text-left px-5 py-4 border border-line">
                PLAN
              </th>
              <th className="text-[13px] font-semibold text-charcoal text-left px-5 py-4 border border-line">
                MONTHLY
              </th>
              <th className="text-[13px] font-semibold text-charcoal text-left px-5 py-4 border border-line">
                YEARLY
              </th>
              <th className="text-[13px] font-semibold text-charcoal text-left px-5 py-4 border border-line">
                TEAM SIZE
              </th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((p) => (
              <tr key={p.name} className="bg-surface">
                <td className="text-[15px] font-semibold text-amber px-5 py-4 border border-line">
                  {p.name}
                </td>
                <td className="text-[15px] text-charcoal px-5 py-4 border border-line">
                  {p.monthly}
                </td>
                <td className="text-[15px] text-charcoal px-5 py-4 border border-line">
                  {p.yearly}
                </td>
                <td className="text-[15px] text-charcoal px-5 py-4 border border-line">
                  {p.team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[14px] text-muted">
        All prices exclusive of applicable GST. Custom plans:{' '}
        <a href="mailto:hello@trybild.com" className="text-brand hover:underline">
          hello@trybild.com
        </a>
      </p>
    </LegalShell>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingPage />
  </StrictMode>,
)
