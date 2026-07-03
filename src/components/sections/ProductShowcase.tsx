import { motion } from 'framer-motion'
import { Truck, TrendingUp, MessageSquare } from 'lucide-react'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'

const CONVERSATION = [
  { from: 'user', text: 'Aaj ki trip record karo — Delhi se Mumbai' },
  {
    from: 'ai',
    text: 'Trip #047 logged ✓\nRoute: Delhi → Mumbai · 1,421 km\nDiesel: ₹4,200 · Toll: ₹850\nETA: On time',
  },
  { from: 'user', text: 'Is hafte ka P&L report bhejo' },
  {
    from: 'ai',
    text: 'Weekly Report — Week 23\nTotal trips: 8 · Distance: 9,847 km\nGross income: ₹45,200\nNet profit: ₹16,800 ↑8%',
  },
]

const METRICS = [
  { label: 'Trips this month', value: '8' },
  { label: 'Revenue', value: '₹45.2K' },
  { label: 'Net profit', value: '₹16.8K' },
  { label: 'Trucks active', value: '3' },
]

const BAR_HEIGHTS = [38, 52, 44, 68, 55, 72, 88]

export function ProductShowcase() {
  return (
    <section className="bg-black border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <RevealOnScroll>
          <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-white/20 mb-10">
            See it in action
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06}>
          <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-[#0B0B0D] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-accent/[0.04] blur-3xl pointer-events-none" />

            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06] bg-[#0D0B0A]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 max-w-[260px] mx-auto bg-white/[0.03] border border-white/[0.05] rounded-full px-4 py-1 text-center">
                <span className="font-mono text-[0.52rem] text-white/20 tracking-widest">
                  TruckHisaab · WhatsApp AI for Transport
                </span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[0.48rem] text-white/20 tracking-widest uppercase">Live</span>
              </div>
            </div>

            {/* App layout */}
            <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px]">
              {/* Chat column */}
              <div className="border-r border-white/[0.05] p-6 flex flex-col gap-4 min-h-[340px]">
                {/* Conversation header */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Truck size={13} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-white">TruckHisaab</p>
                    <p className="font-mono text-[0.46rem] text-white/25 uppercase tracking-wider">
                      Hinglish AI · Trip Management
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex flex-col gap-2.5 flex-1">
                  {CONVERSATION.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: 0.2 + i * 0.14 }}
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.from === 'ai' && (
                        <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mr-1.5 mt-auto shrink-0">
                          <Truck size={8} className="text-accent" />
                        </div>
                      )}
                      <div
                        className={`max-w-[74%] px-3 py-2 rounded-lg text-[0.65rem] leading-[1.65] whitespace-pre-line ${
                          msg.from === 'user'
                            ? 'bg-white/[0.06] text-white/55 rounded-br-none'
                            : 'bg-[#181819] border border-white/[0.05] text-white/70 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
                  <MessageSquare size={11} className="text-white/15 shrink-0" />
                  <span className="font-sans text-[0.65rem] text-white/15">
                    Message in Hindi or English...
                  </span>
                </div>
              </div>

              {/* Dashboard column */}
              <div className="p-5 flex flex-col gap-4">
                <p className="font-mono text-[0.52rem] tracking-[0.2em] uppercase text-white/20">
                  Live Dashboard
                </p>

                {/* Metric tiles */}
                <div className="grid grid-cols-2 gap-2">
                  {METRICS.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                      className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3"
                    >
                      <p className="font-bebas text-[1.4rem] leading-none text-white mb-0.5">
                        {m.value}
                      </p>
                      <p className="font-mono text-[0.44rem] text-white/20 tracking-wider uppercase leading-tight">
                        {m.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Revenue bar chart */}
                <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-white/20">
                      Revenue trend
                    </p>
                    <TrendingUp size={10} className="text-accent/70" />
                  </div>
                  <div className="flex items-end gap-1 flex-1 min-h-[64px]">
                    {BAR_HEIGHTS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.55 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex-1 rounded-sm origin-bottom"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            i === BAR_HEIGHTS.length - 1
                              ? 'rgba(255,69,20,0.65)'
                              : 'rgba(255,255,255,0.06)',
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'].map((w) => (
                      <span key={w} className="font-mono text-[0.4rem] text-white/15">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
