import { MapPin, Users, BookOpen, BarChart3, Sparkles } from 'lucide-react'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { NotifyForm } from '@/components/common/NotifyForm'
import { BREVO_ATTENDR_FORM_URL } from '@/lib/forms'

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
  return (
    <section id="attendr" className="bg-brand-gradient-r border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <RevealOnScroll>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/20 mb-6">
            02 — Coming soon
          </p>
        </RevealOnScroll>

        {/* Hero row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <Sparkles size={10} className="text-accent" />
                <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-accent">
                  Soon on Play Store
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
              Attendance, verified.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="max-w-[440px]">
            <p className="font-sans text-[0.95rem] leading-[1.75] text-white/40 mb-8">
              GPS-based attendance, team management, department onboarding, and attendance
              reporting — all in one simple platform.
            </p>

            {/* Waitlist form */}
            <NotifyForm
              formUrl={BREVO_ATTENDR_FORM_URL}
              successText="You're on the early access list."
            />

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
              Attendr · A TryBild product · Soon on Play Store
            </p>
            <span
              className="font-bebas text-stroke-white-sm hidden sm:block"
              style={{ fontSize: '3rem', lineHeight: 1 }}
            >
              SOON
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
