import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PixelLogo } from '@/components/common/PixelLogo'

const FULL_WIDTH = 120

function StaticWordmark() {
  return (
    <div className="flex items-center gap-2" style={{ width: FULL_WIDTH }}>
      <PixelLogo size={22} />
      <span className="text-[18px] font-bold text-charcoal">TRYB\LD</span>
    </div>
  )
}

export function LogoMorph() {
  const { scrollY } = useScroll()
  const logoWidth = useTransform(scrollY, [0, 80], [FULL_WIDTH, 28], { clamp: true })

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

  if (!isDesktop || prefersReduced) {
    return <StaticWordmark />
  }

  return (
    <motion.div style={{ width: logoWidth, overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <StaticWordmark />
    </motion.div>
  )
}
