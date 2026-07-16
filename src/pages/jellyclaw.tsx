import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StatusBadge } from '@/components/common/StatusBadge'

const STATS = [
  ['Free', 'Forever'],
  ['Local', 'No cloud'],
  ['Open', 'Source'],
  ['Python', '3.11+'],
]

const TECH = ['Python 3.11+', 'uv/uvx', 'Ollama', 'Typer CLI', 'asyncio', 'SQLite', 'Telegram (MVP)']

function JellyClawPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-20">
        <StatusBadge status="open-source" />

        <h1 className="text-[40px] sm:text-[56px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em] mt-4">
          JellyClaw
        </h1>
        <p className="text-[18px] text-muted mt-2 max-w-[560px]">
          Local multi-agent AI orchestration.
        </p>

        <div className="bg-charcoal rounded-xl px-6 py-4 mt-10 font-mono text-[16px] text-white">
          $ uvx jellyclaw
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {STATS.map(([value, label]) => (
            <div key={label} className="border border-line rounded-xl px-4 py-5 text-center">
              <p className="text-[24px] font-bold text-charcoal">{value}</p>
              <p className="text-[14px] text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-16">
          <section>
            <h2 className="text-[20px] font-semibold text-charcoal">// What it does</h2>
            <p className="text-[16px] text-charcoal leading-[1.8] mt-3">
              JellyClaw is a local multi-agent AI orchestration platform. Run a team of AI agents
              on your own machine using Ollama. Coordinate tasks, run pipelines, get results — no
              cloud, no API keys, no data leaving your machine.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-charcoal">// Tech stack</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {TECH.map((t) => (
                <span key={t} className="text-[13px] text-muted border border-line rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a
            href="https://github.com/JellyClaw-org/jellyclaw"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            &gt; GitHub
          </a>
          <a href="https://jellyclaw.in" target="_blank" rel="noopener" className="btn-secondary">
            &gt; jellyclaw.in
          </a>
          <a href="https://discord.gg/GUbgEhHvxt" target="_blank" rel="noopener" className="btn-secondary">
            &gt; JOIN DISCORD
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JellyClawPage />
  </StrictMode>,
)
