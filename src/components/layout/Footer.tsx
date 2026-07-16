import { Github, Youtube, Linkedin, Mail, type LucideIcon } from 'lucide-react'
import { PixelLogo } from '@/components/common/PixelLogo'

// X brand icon (lucide doesn't ship it) as an inline SVG path.
const X_PATH =
  'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
function BrandIcon({ path, size = 14 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const SOCIALS: { label: string; href: string; icon?: LucideIcon; path?: string }[] = [
  { label: 'X', href: 'https://x.com/trybild', path: X_PATH },
  { label: 'GitHub', href: 'https://github.com/trybild', icon: Github },
  { label: 'YouTube', href: 'https://www.youtube.com/@trybild', icon: Youtube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/trybild/', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@trybild.com', icon: Mail },
]

const PRODUCTS = [
  { label: 'Attendr', href: '/attendr' },
  { label: 'TruckHisaab', href: '/truckhisaab' },
  { label: 'RentPey', href: '/rentpey' },
  { label: 'JellyClaw', href: '/jellyclaw' },
]

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const linkClass = 'text-[15px] text-[#9a9a9a] hover:text-white transition-colors duration-150 no-underline'
const headingClass = 'text-[12px] font-semibold tracking-[0.08em] text-[#9a9a9a] uppercase mb-4'

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 mt-12">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-[18px] font-bold text-white no-underline">
              <PixelLogo size={22} />
              TryBild
            </a>
            <p className="text-[14px] text-[#9a9a9a] mt-3 max-w-[220px]">
              Building tools for Indian businesses. Mumbai, India.
            </p>
          </div>

          <div>
            <p className={headingClass}>Products</p>
            <div className="flex flex-col gap-2.5">
              {PRODUCTS.map((p) => (
                <a key={p.label} href={p.href} className={linkClass}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={headingClass}>Company</p>
            <div className="flex flex-col gap-2.5">
              {COMPANY.map((c) => (
                <a key={c.label} href={c.href} className={linkClass}>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={headingClass}>Legal</p>
            <div className="flex flex-col gap-2.5">
              {LEGAL.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pt-8 mt-10 border-t border-[#2a2a2a]">
          {/* Left: copyright + social icons stacked */}
          <div className="flex flex-col gap-3">
            <p className="text-[14px] text-[#9a9a9a]">© 2025 TryBild Technologies. All rights reserved.</p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.filter((s) => s.label !== 'Email').map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center text-[#9a9a9a] hover:text-white transition-colors duration-150"
                  aria-label={s.label}
                >
                  {s.icon ? <s.icon size={18} /> : <BrandIcon path={s.path!} size={18} />}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[14px] text-[#9a9a9a]">
            Established 2025 · Building tools for business, logistics &amp; local AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
