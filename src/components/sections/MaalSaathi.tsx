import { CheckCircle2, MessageSquare, BarChart2, Languages, Zap } from 'lucide-react'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'WhatsApp-native',
    desc: 'Runs entirely inside WhatsApp. No downloads, no logins, no separate app.',
  },
  {
    icon: Languages,
    title: 'Hindi & Hinglish AI',
    desc: 'Understands how truck drivers actually speak — in mixed Hindi and English.',
  },
  {
    icon: BarChart2,
    title: 'Automated P&L',
    desc: 'Trip logs, diesel costs, and toll payments compile into real-time profit reports.',
  },
  {
    icon: Zap,
    title: 'Instant setup',
    desc: 'Start in under 60 seconds. Send a WhatsApp message — you\'re onboarded.',
  },
]

const WORKFLOW = [
  'Send a WhatsApp message: "Delhi se Mumbai trip record karo"',
  'AI logs route, distance, and prompts for expenses',
  'Diesel, toll, and loading charges captured in Hindi',
  'Automated P&L and monthly report — zero spreadsheets',
]

export function MaalSaathi() {
  return (
    <section id="products" className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <RevealOnScroll>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/20 mb-6">
            01 — Live product
          </p>
        </RevealOnScroll>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <RevealOnScroll>
            <h2
              className="font-bebas leading-[0.88] tracking-[0.01em] text-white"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
            >
              Maal
              <br />
              <span className="text-accent">Saathi</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="max-w-[400px]">
            <p className="font-sans text-[0.95rem] leading-[1.7] text-white/40 mb-6">
              WhatsApp AI for Indian truck owners and transport businesses.
              Trip logging, expense tracking, and P&L — in Hindi, without any app.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-white/[0.08] rounded-sm bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/35">Currently in Development</span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] mb-16">
          {FEATURES.map((f, i) => (
            <RevealOnScroll
              key={f.title}
              delay={i * 0.07}
              className="bg-black hover:bg-surface transition-colors duration-300 p-7"
            >
              <f.icon
                size={18}
                className="text-accent mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-sans text-sm font-semibold text-white mb-2">{f.title}</h3>
              <p className="font-sans text-[0.8rem] leading-[1.7] text-white/35">{f.desc}</p>
            </RevealOnScroll>
          ))}
        </div>

        {/* How it works */}
        <RevealOnScroll>
          <div className="border border-white/[0.06] rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-surface">
              <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/20">
                How it works
              </p>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-accent/60" />
              </div>
            </div>
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              {WORKFLOW.map((step, i) => (
                <div key={i} className="p-6 bg-[#0C0C0E]">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={12} className="text-accent shrink-0" />
                    <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-accent/60">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-sans text-[0.78rem] leading-[1.65] text-white/40">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Pricing strip */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 border border-white/[0.06] bg-surface rounded-sm">
            <div className="flex-1">
              <p className="font-sans text-sm font-medium text-white mb-1">Currently serving paying customers</p>
              <p className="font-sans text-xs text-white/30">
                Plans from <span className="text-white/60">₹199/month</span> · No app download required · Works on WhatsApp
              </p>
            </div>
            <a
              href="mailto:trybild@gmail.com"
              className="font-sans text-[0.78rem] font-medium text-white/50 hover:text-white border border-white/[0.08] hover:border-white/20 px-4 py-2 rounded-sm transition-all duration-200 no-underline shrink-0"
            >
              Contact us →
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
