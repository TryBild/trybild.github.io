import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoMark from '../../../android-chrome-192x192.png'

const NAV_LINKS = [
  { label: 'TruckHisaab', href: '/products#truckhisaab' },
  { label: 'Attendr', href: '/products#attendr' },
  { label: 'JellyClaw', href: '/products#jellyclaw' },
  { label: 'About', href: '/about' },
]

// GitHub Pages serves /products.html at /products — normalize both to one form.
const currentPath = window.location.pathname.replace(/\.html$/, '')

const isActive = (href: string) => href.split('#')[0] === currentPath

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-black/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bebas text-[1.4rem] tracking-[0.08em] text-white leading-none no-underline"
          >
            <img src={logoMark} alt="" width={28} height={28} className="w-7 h-7" />
            <span>
              TRYBILD
              <sup className="font-mono text-[0.32rem] tracking-[0.2em] align-super text-white/30 ml-0.5">®</sup>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-[0.82rem] font-medium transition-colors duration-200 no-underline ${
                  isActive(link.href) ? 'text-accent' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className={`font-sans text-[0.8rem] font-medium transition-colors duration-200 no-underline ${
                isActive('/contact') ? 'text-accent' : 'text-white/50 hover:text-white'
              }`}
            >
              Contact
            </a>
            <a
              href="/products"
              className="font-sans text-[0.8rem] font-semibold text-black bg-white hover:bg-white/90 px-4 py-1.5 rounded-sm transition-all duration-200 no-underline"
            >
              See products
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-sans text-2xl font-medium no-underline ${
                    isActive(link.href) ? 'text-accent' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`font-sans text-2xl font-medium no-underline ${
                  isActive('/contact') ? 'text-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
