import { PixelLogo } from '@/components/common/PixelLogo'

const NAV_LINKS = [
  { label: 'PRODUCTS', href: '/products' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

// GitHub Pages serves /products.html at /products — normalize both to one form.
const currentPath = window.location.pathname.replace(/\.html$/, '')

export function Navbar() {
  return (
    <header className="border-b-4 border-line-2 bg-black">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <a
          href="/"
          className="flex items-center gap-2.5 font-pixel text-[11px] sm:text-[12px] text-white no-underline"
        >
          <PixelLogo />
          TRYBILD
        </a>

        <nav className="flex items-center gap-3.5 sm:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-pixel text-[8px] sm:text-[9px] no-underline transition-colors duration-150 ${
                link.href === currentPath ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
