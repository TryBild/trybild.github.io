import { WhatsAppMockup } from '@/components/common/WhatsAppMockup'

const PRODUCTS = [
  { id: 'truckhisaab', name: ['TRUCK', 'HISAAB'], badge: '● LIVE', badgeClass: 'text-amber' },
  { id: 'attendr', name: ['ATTENDR'], badge: '● LIVE', badgeClass: 'text-amber' },
  { id: 'jellyclaw', name: ['JELLY', 'CLAW'], badge: 'OPEN SOURCE', badgeClass: 'text-jelly' },
  { id: 'rentpey', name: ['RENTPEY'], badge: 'IN DEV', badgeClass: 'text-muted' },
]

// Verified real numbers — keep as-is.
const STATS = [
  { value: '4', label: 'PRODUCTS' },
  { value: '1000+', label: 'USERS ON WHATSAPP' },
  { value: '0', label: 'APP DOWNLOADS NEEDED' },
  { value: '2025', label: 'FOUNDED, MUMBAI' },
]

export function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="text-center px-4 sm:px-6 pt-12 md:pt-16 pb-4">
        <div className="inline-block border-[3px] border-amber text-amber font-vt text-[18px] tracking-[2px] px-3 py-0.5">
          4 PRODUCTS · MUMBAI, INDIA
          <span className="pixel-cursor" />
        </div>

        <h1 className="font-pixel text-white leading-[1.8] mt-8 text-[15px] sm:text-[20px] md:text-[26px]">
          AI-POWERED TOOLS
          <br />
          FOR <span className="text-accent">MODERN</span>
          <br />
          BUSINESSES.
        </h1>

        <p className="font-vt text-[21px] text-muted mt-4">SELECT A PRODUCT TO CONTINUE ▼</p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="#products" className="btn-pixel">
            SEE OUR PRODUCTS
          </a>
          <a href="/about" className="btn-pixel">
            OUR STORY
          </a>
        </div>
      </section>

      {/* Level-select product grid */}
      <section id="products" className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              href={`/${p.id}`}
              className="border-4 border-line bg-surface hover:border-accent hover:bg-surface-2 transition-colors duration-150 px-3 py-5 text-center no-underline"
            >
              <div className="font-pixel text-[9px] sm:text-[10px] text-white leading-[1.6]">
                {p.name.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
              <div className={`font-vt text-[17px] tracking-[1px] mt-3 ${p.badgeClass}`}>
                {p.badge}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TruckHisaab live mockup */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 flex flex-col items-center">
        <p className="font-vt text-[21px] text-cream mb-5">
          <span className="text-accent">&gt; TRUCKHISAAB:</span> SEE IT IN ACTION
          <span className="pixel-cursor" />
        </p>
        <WhatsAppMockup />
      </section>

      {/* Stats strip */}
      <section className="border-t-4 border-line-2 mt-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 px-4 sm:px-6 text-center ${i !== 0 ? 'border-l-4 border-line-2' : ''}`}
            >
              <p className="font-pixel text-[14px] sm:text-[16px] text-white">{stat.value}</p>
              <p className="font-vt text-[17px] text-muted mt-2 tracking-[1px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
