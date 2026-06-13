import { Github, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] pb-14 pt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <a href="/" className="font-bebas text-[2.2rem] tracking-[0.06em] text-white no-underline leading-none">
              TRY<span className="text-accent">BILD</span>
            </a>
            <p className="font-sans text-sm text-white/30 mt-3 max-w-[260px] leading-relaxed">
              AI-powered tools for modern businesses.<br />
              Built in Mumbai.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-4">Products</p>
              <div className="flex flex-col gap-3">
                <a href="#products" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">MaalSaathi</a>
                <a href="#attendr" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">Attendr</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-4">Company</p>
              <div className="flex flex-col gap-3">
                <a href="#about" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">About</a>
                <a href="mailto:trybild@gmail.com" className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline">Contact</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/TryBild"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-white/30 hover:text-white hover:border-white/20 transition-all duration-200 rounded-sm"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://instagram.com/trybilds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-white/30 hover:text-white hover:border-white/20 transition-all duration-200 rounded-sm"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="mailto:trybild@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-white/30 hover:text-white hover:border-white/20 transition-all duration-200 rounded-sm"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-6">
          <p className="font-sans text-xs text-white/20">
            © 2025 TryBild. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Established 2025 · Building AI-powered tools for modern businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
