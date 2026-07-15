const STATS = [
  { value: '4', label: 'Products' },
  { value: '1000+', label: 'WhatsApp users' },
  { value: '0', label: 'App downloads needed' },
  { value: '2025', label: 'Founded, Mumbai' },
]

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-4 md:pt-20">
      <div className="grid md:grid-cols-[60%_40%] gap-10 items-center">
        <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-bold text-charcoal leading-[1.1] tracking-[-0.02em]">
          Tools that <span className="underline decoration-brand text-brand">work</span>.
          <br />
          For businesses that
          <br />
          can&apos;t afford to wait.
        </h1>

        <div>
          <p className="text-[18px] text-muted leading-[1.7]">
            TryBild builds practical software for Indian SMBs — GPS attendance, WhatsApp fleet
            management, and open-source local AI. Built in Mumbai.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#products" className="btn-primary">
              See our products
            </a>
            <a href="/about" className="btn-secondary">
              Our story
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-line">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-6 px-4 sm:px-6 text-center ${i !== 0 ? 'border-l border-line' : ''}`}
          >
            <p className="text-[32px] font-bold text-charcoal">{stat.value}</p>
            <p className="text-[14px] text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
