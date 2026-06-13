import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Users, BookOpen, BarChart3, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'

const FEATURES = [
  {
    icon: MapPin,
    title: 'GPS-based attendance',
    desc: 'Mark attendance from anywhere — verified by GPS location, not trust.',
  },
  {
    icon: Users,
    title: 'Team management',
    desc: 'Manage entire teams across departments from a single dashboard.',
  },
  {
    icon: BookOpen,
    title: 'Department onboarding',
    desc: 'Onboard full departments in minutes. No IT overhead, no complexity.',
  },
  {
    icon: BarChart3,
    title: 'Attendance reporting',
    desc: 'Automated reports delivered weekly. Know who showed up, who didn\'t, and why.',
  },
]

export function Attendr() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <section id="attendr" className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <RevealOnScroll>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/20 mb-6">
            02 — Coming next
          </p>
        </RevealOnScroll>

        {/* Hero row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <Sparkles size={10} className="text-accent" />
                <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-accent">
                  Building · 2026
                </span>
              </div>
            </div>

            <h2
              className="font-bebas leading-[0.88] tracking-[0.01em] text-white"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
            >
              Attendr
            </h2>
            <p
              className="font-serif italic text-white/25 mt-1"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
            >
              Launching Soon.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="max-w-[440px]">
            <p className="font-sans text-[0.95rem] leading-[1.75] text-white/40 mb-8">
              GPS-based attendance, team management, department onboarding, and attendance
              reporting — all in one simple platform.
            </p>

            {/* Waitlist form */}
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-0 max-w-[380px]"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.1] border-r-0 px-4 py-2.5 font-sans text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20 transition-colors duration-200 rounded-l-sm"
                  />
                  <motion.button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-sans text-[0.78rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-accent/90 rounded-r-sm shrink-0"
                    whileTap={{ scale: 0.98 }}
                  >
                    Notify me <ArrowRight size={12} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2.5 text-green-400"
                >
                  <CheckCircle size={16} />
                  <span className="font-sans text-sm">You're on the early access list.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-white/15 mt-3">
              No spam. Early access notification only.
            </p>
          </RevealOnScroll>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {FEATURES.map((f, i) => (
            <RevealOnScroll
              key={f.title}
              delay={i * 0.07}
              className="relative bg-black hover:bg-surface transition-colors duration-300 p-7 group overflow-hidden"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <f.icon
                size={18}
                className="text-white/20 mb-5 group-hover:text-accent transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-sans text-sm font-semibold text-white mb-2">{f.title}</h3>
              <p className="font-sans text-[0.8rem] leading-[1.7] text-white/35">{f.desc}</p>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom strip */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-6 flex items-center justify-between px-6 py-4 border border-white/[0.06] bg-surface rounded-sm">
            <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-white/20">
              Attendr · A Trybild product · In active development
            </p>
            <span
              className="font-bebas text-stroke-white-sm hidden sm:block"
              style={{ fontSize: '3rem', lineHeight: 1 }}
            >
              2026
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
