import { Github, Mail, type LucideIcon } from 'lucide-react'
import { PixelLogo } from '@/components/common/PixelLogo'

// Brand icons lucide doesn't ship (X, Reddit, Discord) as inline SVG paths.
const X_PATH =
  'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
const REDDIT_PATH =
  'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z'

const DISCORD_PATH =
  'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'

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
  { label: 'Reddit', href: 'https://reddit.com/r/JellyClaw', path: REDDIT_PATH },
  { label: 'Discord', href: 'https://discord.gg/GUbgEhHvxt', path: DISCORD_PATH },
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

        {/* Social row */}
        <div className="flex flex-wrap gap-3 mt-10">
          {SOCIALS.filter((s) => s.label !== 'Email').map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a3a] text-[#9a9a9a] hover:text-white hover:border-[#5a5a5a] transition-colors duration-150"
              aria-label={s.label}
            >
              {s.icon ? <s.icon size={15} /> : <BrandIcon path={s.path!} />}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-8 mt-8 border-t border-[#2a2a2a]">
          <p className="text-[14px] text-[#9a9a9a]">© 2025 TryBild Technologies. All rights reserved.</p>
          <p className="text-[14px] text-[#9a9a9a]">
            Established 2025 · Building tools for business, logistics &amp; local AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
