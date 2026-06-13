import { RevealOnScroll } from '@/components/common/RevealOnScroll'

const PILLARS = [
  {
    n: '01',
    title: 'WhatsApp-First',
    desc: 'Built inside the app 500M Indians already use daily. No installs. No friction.',
  },
  {
    n: '02',
    title: 'AI in Hindi',
    desc: 'Understands Hinglish, dialects, and how Indian businesses actually communicate.',
  },
  {
    n: '03',
    title: 'Ship ruthlessly',
    desc: 'Three-person team. No committees. We validate, build, and launch — fast.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="bg-paper border-t border-black/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Label */}
        <RevealOnScroll>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-black/25 mb-6">
            03 — Studio
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left */}
          <RevealOnScroll>
            <h2
              className="font-bebas leading-[0.88] text-black tracking-[0.01em] mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              Building for
              <br />
              the next
              <br />
              <em className="font-serif not-italic text-accent">billion.</em>
            </h2>

            <div className="space-y-5 text-black/50 font-sans text-[0.9rem] leading-[1.75] max-w-[380px]">
              <p>
                Trybild is a product studio. We build software for the 1.4 billion —
                not Silicon Valley demos or YC pitches.
              </p>
              <p>
                Real tools. For truck drivers, small business owners, and ground-level
                teams. Delivered where India already is: WhatsApp.
              </p>
              <p>
                No app downloads. No English-only UX. No VC buzzwords. Just
                products that work.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-black/30">
                Mumbai · Est. 2025 · Team of 3
              </span>
            </div>
          </RevealOnScroll>

          {/* Right: pillars */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col gap-px bg-black/[0.06] border border-black/[0.06]">
              {PILLARS.map((p, i) => (
                <div
                  key={p.n}
                  className={`group bg-paper hover:bg-paper-dim transition-colors duration-200 px-6 py-7 relative overflow-hidden ${
                    i !== 0 ? 'border-t border-black/[0.06]' : ''
                  }`}
                >
                  {/* Accent left border on hover */}
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex items-start gap-6">
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-black/20 mt-1 shrink-0">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-sans text-[0.95rem] font-semibold text-black mb-2">{p.title}</h3>
                      <p className="font-sans text-[0.82rem] leading-[1.65] text-black/45">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-6 px-6 py-5 border border-black/[0.08] bg-black/[0.02] rounded-sm">
              <p className="font-serif italic text-black/50 text-[1rem] leading-[1.6] mb-3">
                "We build for India the way Cursor builds for developers —
                fast, intelligent, and built for real users."
              </p>
              <p className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-black/25">
                — Trybild Team, Mumbai
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
