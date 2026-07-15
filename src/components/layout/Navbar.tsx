import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PixelLogo } from '@/components/common/PixelLogo'

const NAV_LINKS: { label: string; href?: string }[] = [
  { label: 'PRODUCTS' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'Attendr', href: '/attendr' },
  { label: 'TruckHisaab', href: '/truckhisaab' },
  { label: 'RentPey', href: '/rentpey' },
  { label: 'JellyClaw', href: '/jellyclaw' },
]

// GitHub Pages serves e.g. /about.html at /about — normalize both to one form.
const currentPath = window.location.pathname.replace(/\.html$/, '')

const navLinkClass = (href?: string) =>
  `text-[15px] font-medium no-underline transition-colors duration-150 ${
    href === currentPath ? 'text-brand' : 'text-charcoal hover:text-brand'
  }`

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 text-[18px] font-bold text-charcoal no-underline">
          <PixelLogo size={22} />
          TRYB\LD
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.label === 'PRODUCTS' ? (
              <div key={link.label} className="relative group/products">
                <span className="text-[15px] font-medium text-charcoal cursor-default select-none">
                  Products
                </span>

                <div className="hidden group-hover/products:block absolute top-full left-0 pt-3 z-50">
                  <div className="bg-surface border border-line rounded-lg shadow-md min-w-[190px] py-1">
                    {PRODUCT_LINKS.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        className="block px-4 py-2 text-[15px] text-charcoal hover:text-brand no-underline"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className={navLinkClass(link.href)}>
                {link.label === 'ABOUT' ? 'About' : 'Contact'}
              </a>
            ),
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-charcoal"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 bg-cream">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase mb-2">
              Products
            </p>
            <div className="flex flex-col gap-2">
              {PRODUCT_LINKS.map((p) => (
                <a key={p.label} href={p.href} className="text-[15px] text-charcoal no-underline">
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          <a href="/about" className={navLinkClass('/about')}>
            About
          </a>
          <a href="/contact" className={navLinkClass('/contact')}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
