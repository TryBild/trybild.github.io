import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringRef = useRef<HTMLDivElement>(null)

  const springX = useSpring(x, { damping: 28, stiffness: 600, mass: 0.4 })
  const springY = useSpring(y, { damping: 28, stiffness: 600, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const grow = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(2.4)'
        ringRef.current.style.opacity = '0.5'
      }
    }
    const shrink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
        ringRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999] hidden md:block"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/20 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'transform 0.15s ease, opacity 0.15s ease',
        }}
      />
    </>
  )
}
