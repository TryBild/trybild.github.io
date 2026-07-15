import { PixelLogo } from '@/components/common/PixelLogo'

const NAV_LINKS = [
  { label: 'PRODUCTS', href: '/products' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'ATTENDR', href: '/attendr' },
  { label: 'TRUCKHISAAB', href: '/truckhisaab' },
  { label: 'RENTPEY', href: '/rentpey' },
  { label: 'JELLYCLAW', href: '/jellyclaw' },
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
          {NAV_LINKS.map((link) =>
            link.label === 'PRODUCTS' ? (
              <div key={link.label} className="relative group/products">
                <a
                  href={link.href}
                  className={`font-pixel text-[8px] sm:text-[9px] no-underline transition-colors duration-150 ${
                    link.href === currentPath ? 'text-accent' : 'text-muted hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>

                <div className="hidden group-hover/products:block absolute top-full left-0 pt-2 z-50">
                  <div className="bg-black border-2 border-accent min-w-[190px]">
                    {PRODUCT_LINKS.map((p, i) => (
                      <a
                        key={p.label}
                        href={p.href}
                        className={`group/item flex items-center px-3 py-2 font-vt text-[18px] text-amber hover:text-accent no-underline ${
                          i > 0 ? 'border-t border-[#3a1f17]' : ''
                        }`}
                      >
                        <span className="opacity-0 group-hover/item:opacity-100">&gt;&nbsp;</span>
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-pixel text-[8px] sm:text-[9px] no-underline transition-colors duration-150 ${
                  link.href === currentPath ? 'text-accent' : 'text-muted hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
