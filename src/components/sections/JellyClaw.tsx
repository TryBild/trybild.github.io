import { Cpu, Network, FileCode2, Github, ArrowUpRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'

const FEATURES = [
  {
    icon: Cpu,
    title: 'Fully local',
    desc: 'Runs on Ollama. Nothing leaves your machine — no cloud, no API bills.',
  },
  {
    icon: Network,
    title: 'Agent hierarchy',
    desc: 'CEO → department heads → workers. A full org chart of agents, on your laptop.',
  },
  {
    icon: FileCode2,
    title: 'YAML config',
    desc: 'No code. Template-based setup — spin up a dev-team or a sales-office in minutes.',
  },
  {
    icon: Github,
    title: 'Open source',
    desc: 'CLI-first and built in public. Read the code, file issues, ship agents.',
  },
]

export function JellyClaw() {
  return (
    <section id="jellyclaw" className="relative bg-night-gradient border-t border-white/[0.06] overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 starfield pointer-events-none" />
      <div className="absolute inset-0 starfield-2 pointer-events-none" />
      {/* Pink nebula glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jelly/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <RevealOnScroll>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-white/20 mb-6">
            03 — In development
          </p>
        </RevealOnScroll>

        {/* Hero row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-jelly/10 border border-jelly/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-jelly animate-pulse" />
                <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-jelly">
                  In development · Open-source launch soon
                </span>
              </div>
            </div>

            <h2
              className="font-bebas leading-[0.88] tracking-[0.01em] text-white"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
            >
              JellyClaw
            </h2>
            <p
              className="font-serif italic text-jelly/60 mt-1"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
            >
              The Local AI Office.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="max-w-[440px]">
            <p className="font-sans text-[0.95rem] leading-[1.75] text-white/40 mb-8">
              Run a full AI team on your own machine — CEO agent, department heads,
              worker agents — powered by Ollama, configured in plain YAML.
              No cloud, no API bills, your data stays home.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/JellyClaw-org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold text-[#060814] bg-jelly hover:bg-jelly/90 px-5 py-2.5 rounded-sm transition-all duration-200 no-underline"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://reddit.com/r/jellyclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-medium text-white/50 hover:text-white px-5 py-2.5 transition-colors duration-200 no-underline border border-white/[0.08] hover:border-jelly/40 rounded-sm"
              >
                Community
                <ArrowUpRight size={13} />
              </a>
              <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-white/25">
                jellyclaw.in <span className="text-jelly/50">· coming soon</span>
              </span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {FEATURES.map((f, i) => (
            <RevealOnScroll
              key={f.title}
              delay={i * 0.07}
              className="relative bg-[#080a18]/80 hover:bg-[#10122a]/80 transition-colors duration-300 p-7 group overflow-hidden"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-jelly scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <f.icon
                size={18}
                className="text-white/20 mb-5 group-hover:text-jelly transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-sans text-sm font-semibold text-white mb-2">{f.title}</h3>
              <p className="font-sans text-[0.8rem] leading-[1.7] text-white/35">{f.desc}</p>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom strip */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-6 flex items-center justify-between px-6 py-4 border border-white/[0.06] bg-[#080a18]/80 rounded-sm">
            <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-white/20">
              JellyClaw · A TryBild product · Built in public
            </p>
            <span
              className="font-bebas text-stroke-white-sm hidden sm:block"
              style={{ fontSize: '3rem', lineHeight: 1 }}
            >
              LOCAL
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
