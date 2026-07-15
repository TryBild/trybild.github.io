import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const STATS = [
  ['FREE', 'FOREVER'],
  ['LOCAL', 'NO CLOUD'],
  ['OPEN', 'SOURCE'],
  ['PYTHON', '3.11+'],
]

const TECH = ['Python 3.11+', 'uv/uvx', 'Ollama', 'Typer CLI', 'asyncio', 'SQLite', 'Telegram (MVP)']

function PinkSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-pixel text-[10px] sm:text-[11px] text-jelly leading-[1.8]">{title}</h2>
      <div className="font-vt text-[20px] text-cream leading-[1.35] mt-3 flex flex-col gap-3">
        {children}
      </div>
    </section>
  )
}

function JellyClawPage() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-16">
        <span className="inline-block border-2 border-jelly text-jelly font-vt text-[16px] tracking-[1px] px-2 py-0.5">
          ★ OPEN SOURCE
        </span>

        <h1 className="font-pixel text-white leading-[1.8] mt-6 text-[15px] sm:text-[20px] md:text-[24px]">
          <span className="text-jelly">&gt; JELLYCLAW</span>
          <span className="pixel-cursor" />
        </h1>
        <p className="font-vt text-[21px] text-muted mt-2 max-w-[560px]">
          LOCAL MULTI-AGENT AI ORCHESTRATION
        </p>

        <div className="border-2 border-jelly bg-surface px-5 py-4 mt-8 font-vt text-[20px] text-jelly">
          $ uvx jellyclaw
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {STATS.map(([value, label]) => (
            <div key={label} className="border-2 border-jelly px-4 py-4 text-center">
              <p className="font-pixel text-[14px] text-jelly">{value}</p>
              <p className="font-vt text-[15px] text-muted tracking-[0.5px] mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 mt-12">
          <PinkSection title="// WHAT IT DOES">
            <p>
              JellyClaw is a local multi-agent AI orchestration platform. Run a team of AI agents
              on your own machine using Ollama. Coordinate tasks, run pipelines, get results — no
              cloud, no API keys, no data leaving your machine.
            </p>
          </PinkSection>

          <PinkSection title="// HOW TO RUN">
            <pre className="border-2 border-jelly bg-surface px-5 py-4 font-vt text-[19px] text-cream leading-[1.5] whitespace-pre-wrap">
{`# Install and run
$ pip install uvx
$ uvx jellyclaw

# Or with uv
$ uv run jellyclaw`}
            </pre>
          </PinkSection>

          <PinkSection title="// TECH STACK">
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="border-2 border-jelly text-muted font-vt text-[15px] tracking-[0.5px] px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </PinkSection>

          <PinkSection title="// OPEN SOURCE">
            <p>JellyClaw is fully open source. Star us, fork us, contribute.</p>
          </PinkSection>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a
            href="https://github.com/JellyClaw-org/jellyclaw"
            target="_blank"
            rel="noopener"
            className="btn-pixel"
          >
            &gt; GITHUB
          </a>
          <a href="https://jellyclaw.in" target="_blank" rel="noopener" className="btn-pixel">
            &gt; JELLYCLAW.IN
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
