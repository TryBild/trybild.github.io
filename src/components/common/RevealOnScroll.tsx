import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export function RevealOnScroll({ children, delay = 0, className, y = 24 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-7% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
