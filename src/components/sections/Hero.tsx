import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Truck, Users } from 'lucide-react'

const STATS = [
  { value: '4',      label: 'Products' },
  { value: '1000+',  label: 'Users on WhatsApp' },
  { value: '0',      label: 'App downloads needed' },
  { value: '2025',   label: 'Founded, Mumbai' },
]

const MESSAGES = [
  {
    from: 'user',
    text: 'aaj ki trip record karo — Delhi se Mumbai',
  },
  {
    from: 'ai',
    text: 'Trip #047 logged ✓\nRoute: Delhi → Mumbai • 1,421 km\nDiesel: ₹4,200 · Toll: ₹850\nETA: On time',
    delay: 0.3,
  },
  {
    from: 'ai',
    text: 'Is hafte ka P&L update ho gaya 📊\nIncome: ₹45,200\nExpenses: ₹28,400\nNet Profit: ₹16,800 ↑8%',
    delay: 0.55,
  },
]

function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[420px] select-none"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      {/* Card */}
      <div className="relative bg-[#111113] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
        {/* App header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0F]">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <Truck size={14} className="text-accent" />
          </div>
          <div>
            <p className="font-sans text-xs font-semibold text-white">TruckHisaab</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[0.52rem] text-white/30 uppercase tracking-widest">WhatsApp · Active</span>
            </div>
          </div>
          <div className="ml-auto flex gap-1">
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[240px]">
          {MESSAGES.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + (msg.delay ?? 0) }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.from === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mr-2 mt-auto shrink-0">
                  <Truck size={10} className="text-accent" />
                </div>
              )}
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg text-[0.65rem] leading-[1.6] whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-white/[0.07] text-white/70 rounded-br-none'
                    : 'bg-[#1a1a1c] text-white/80 rounded-bl-none border border-white/[0.06]'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06]">
          {[
            { icon: Truck, val: '8', sub: 'Trips this month' },
            { icon: TrendingUp, val: '↑8%', sub: 'Profit vs last month' },
            { icon: Users, val: '3', sub: 'Trucks tracked' },
          ].map((s, i) => (
            <div key={i} className="px-3 py-2.5 text-center">
              <p className="font-mono text-[0.7rem] font-medium text-white">{s.val}</p>
              <p className="font-mono text-[0.48rem] text-white/25 uppercase tracking-wider mt-0.5 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Label badge */}
      <div className="absolute -top-3 -right-3 bg-accent px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-white font-medium">Live product</span>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-gradient overflow-hidden flex flex-col"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-100 pointer-events-none" />

      {/* Accent radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 max-w-[1200px] mx-auto w-full px-6 flex flex-col justify-center pt-32 pb-12 md:pt-36">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14">
          {/* Left: Copy */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-white/[0.08] rounded-full bg-white/[0.03]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
                4 products · Mumbai, India
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-bebas leading-[0.9] tracking-[0.01em] text-white"
                style={{ fontSize: 'clamp(3.6rem, 8.5vw, 7.5rem)' }}
              >
                AI-powered
                <br />
                <span className="text-white/[0.14]">tools for</span>
                <br />
                <em className="font-serif not-italic text-accent">modern</em>
                <br />
                businesses.
              </motion.h1>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="font-sans text-[1rem] leading-[1.75] text-white/40 max-w-[420px] mb-10"
            >
              We build tools for business, logistics, and local AI.
              From Mumbai, for everywhere.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold text-black bg-white hover:bg-white/90 px-5 py-2.5 rounded-sm transition-all duration-200 no-underline group"
              >
                See our products
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-medium text-white/50 hover:text-white px-5 py-2.5 transition-colors duration-200 no-underline border border-white/[0.08] hover:border-white/20 rounded-sm"
              >
                Our story
              </a>
            </motion.div>
          </div>

          {/* Right: Product mockup */}
          <div className="flex justify-center lg:justify-end lg:flex-1">
            <ProductMockup />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative border-t border-white/[0.06] bg-white/[0.015]"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 px-6 ${i !== 0 ? 'border-l border-white/[0.06]' : ''}`}
              >
                <p className="font-bebas text-[2rem] leading-none text-white tracking-wide mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-white/25">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
