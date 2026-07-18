import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const STATS = [
  { value: '4', label: 'Products' },
  { value: '1000+', label: 'WhatsApp users' },
  { value: '0', label: 'App downloads needed' },
  { value: '2025', label: 'Founded, Mumbai' },
]

const HERO_HEADING_CLASS =
  'text-[40px] sm:text-[56px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.02em]'

export function Hero() {
  // Same raw scrollY timeline LogoMorph uses, so the two stay in lockstep.
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 200], [0, -20], { clamp: true })
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7], { clamp: true })

  const [isDesktop, setIsDesktop] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    setIsDesktop(desktopQuery.matches)
    setPrefersReduced(reducedQuery.matches)

    const onDesktopChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    const onReducedChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)

    desktopQuery.addEventListener('change', onDesktopChange)
    reducedQuery.addEventListener('change', onReducedChange)
    return () => {
      desktopQuery.removeEventListener('change', onDesktopChange)
      reducedQuery.removeEventListener('change', onReducedChange)
    }
  }, [])

  const heading = (
    <>
      Tools that <span className="underline decoration-brand text-brand">work</span>.
      <br />
      For businesses that
      <br />
      can&apos;t afford to wait.
    </>
  )

  return (
    // Full-bleed background; the 1200px cap moves to the inner wrapper.
    // ::before is the dark scrim — content sits above it via `relative` (later in DOM order).
    <section className="relative isolate bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat [background-position:center_right] before:absolute before:inset-0 before:content-[''] before:bg-black/55">
      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 pb-4 md:pt-20">
        <div className="grid md:grid-cols-[60%_40%] gap-10 items-center">
          {isDesktop && !prefersReduced ? (
            <motion.h1 className={HERO_HEADING_CLASS} style={{ y: heroY, opacity: heroOpacity }}>
              {heading}
            </motion.h1>
          ) : (
            <h1 className={HERO_HEADING_CLASS}>{heading}</h1>
          )}

          <div>
            <p className="text-[18px] text-white/80 leading-[1.7]">
              TryBild builds practical software for Indian SMBs — GPS attendance, WhatsApp fleet
              management, and open-source local AI. Built in Mumbai.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#products" className="btn-brand">
                See our products
              </a>
              {/* Utilities layer overrides .btn-secondary's dark-on-light colours. */}
              <a href="/about" className="btn-secondary text-white border-white hover:bg-white/10">
                Our story
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-white/20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 px-4 sm:px-6 text-center ${i !== 0 ? 'border-l border-white/20' : ''}`}
            >
              <p className="text-[32px] font-bold text-white">{stat.value}</p>
              <p className="text-[14px] text-white/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
