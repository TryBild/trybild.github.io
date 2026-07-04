import { Github, Mail, type LucideIcon } from 'lucide-react'
import { PixelLogo } from '@/components/common/PixelLogo'

// Brand icons lucide doesn't ship (X, Reddit) as inline SVG paths.
const X_PATH =
  'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
const REDDIT_PATH =
  'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z'

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
  { label: 'Email', href: 'mailto:hello@trybild.com', icon: Mail },
]

const PRODUCTS = [
  { label: 'TRUCKHISAAB', href: '/products#truckhisaab' },
  { label: 'ATTENDR', href: '/products#attendr' },
  { label: 'JELLYCLAW', href: '/products#jellyclaw' },
  { label: 'RENTPEY', href: '/products#rentpey' },
]

const COMPANY = [
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'HELLO@TRYBILD.COM', href: 'mailto:hello@trybild.com' },
  { label: 'SUPPORT@TRYBILD.COM', href: 'mailto:support@trybild.com' },
]

const linkClass =
  'font-vt text-[17px] tracking-[1px] text-amber hover:text-accent transition-colors duration-150 no-underline'

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-line-2 pt-10 pb-8 mt-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 border-b-4 border-line-2">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2.5 font-pixel text-[12px] text-white no-underline"
            >
              <PixelLogo />
              TRYBILD
            </a>
            <p className="font-vt text-[18px] text-muted mt-3">
              TryBild Technologies · Mumbai, India
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 sm:gap-16">
            <div>
              <p className="font-pixel text-[8px] text-white mb-4">PRODUCTS</p>
              <div className="flex flex-col gap-2.5">
                {PRODUCTS.map((p) => (
                  <a key={p.label} href={p.href} className={linkClass}>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-pixel text-[8px] text-white mb-4">COMPANY</p>
              <div className="flex flex-col gap-2.5">
                {COMPANY.map((c) => (
                  <a key={c.label} href={c.href} className={linkClass}>
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                className="w-10 h-10 flex items-center justify-center border-4 border-line bg-surface text-muted hover:text-accent hover:border-accent transition-colors duration-150"
                aria-label={s.label}
              >
                {s.icon ? <s.icon size={15} /> : <BrandIcon path={s.path!} />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 pt-5">
          <p className="font-vt text-[17px] text-muted">
            © 2026 TryBild Technologies. All rights reserved.
          </p>
          <p className="font-vt text-[17px] text-muted">
            Established 2025 · Building tools for business, logistics &amp; local AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
