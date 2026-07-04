import { Github, Instagram, Facebook, Mail, type LucideIcon } from 'lucide-react'
import logoMark from '../../../android-chrome-192x192.png'

// Brand icons lucide doesn't ship (X, Reddit, Bluesky) as inline SVG paths.
const X_PATH =
  'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
const REDDIT_PATH =
  'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z'
const BLUESKY_PATH =
  'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z'

function BrandIcon({ path, size = 14 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const SOCIALS: { label: string; href: string; icon?: LucideIcon; path?: string }[] = [
  { label: 'X', href: 'https://x.com/trybild', path: X_PATH },
  { label: 'Instagram', href: 'https://instagram.com/try.bild', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/trybild/', icon: Facebook },
  { label: 'Reddit', href: 'https://reddit.com/r/trybild', path: REDDIT_PATH },
  { label: 'Bluesky', href: 'https://bsky.app/profile/trybild.bsky.social', path: BLUESKY_PATH },
  { label: 'GitHub', href: 'https://github.com/TryBild', icon: Github },
  { label: 'Email', href: 'mailto:hello@trybild.com', icon: Mail },
]

const PRODUCTS = [
  { label: 'TruckHisaab', href: '/products#truckhisaab' },
  { label: 'Attendr', href: '/products#attendr' },
  { label: 'JellyClaw', href: '/products#jellyclaw' },
  { label: 'RentPey', href: '/products#rentpey' },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] pb-14 pt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2.5 font-bebas text-[2.2rem] tracking-[0.06em] text-white no-underline leading-none">
              <img src={logoMark} alt="" width={32} height={32} className="w-8 h-8" />
              <span>
                TRY<span className="text-accent">BILD</span>
              </span>
            </a>
            <p className="font-sans text-sm text-white/30 mt-3 max-w-[280px] leading-relaxed">
              TryBild Technologies · Mumbai, India
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-4">Products</p>
              <div className="flex flex-col gap-3">
                {PRODUCTS.map((p) => (
                  <a key={p.label} href={p.href} className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-4">Company</p>
              <div className="flex flex-col gap-3">
                <a href="/about" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">About</a>
                <a href="/contact" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">Contact</a>
                <a href="mailto:hello@trybild.com" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">hello@trybild.com</a>
                <a href="mailto:support@trybild.com" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">support@trybild.com</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-3 max-w-[200px]">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-white/30 hover:text-white hover:border-white/20 transition-all duration-200 rounded-sm"
                aria-label={s.label}
              >
                {s.icon ? <s.icon size={15} /> : <BrandIcon path={s.path!} />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-6">
          <p className="font-sans text-xs text-white/20">
            © 2026 TryBild Technologies. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Established 2025 · Building tools for business, logistics & local AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
