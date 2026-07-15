import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { WhatsAppMockup } from '@/components/common/WhatsAppMockup'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <Hero />

        {/* Belief section */}
        <section className="bg-charcoal text-white py-20 md:py-24 mt-16">
          <div className="max-w-[760px] mx-auto px-6 text-center">
            <h2 className="text-[32px] sm:text-[40px] font-bold leading-[1.2]">
              TryBild is built on one belief.
            </h2>
            <p className="text-[18px] text-[#9a9a9a] mt-5 leading-[1.7]">
              Technology should work for the people who actually run India&apos;s economy. Not
              just the ones in glass offices.
            </p>
          </div>
        </section>

        <Products id="products" />

        {/* TruckHisaab live mockup */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-2">
              <WhatsAppMockup />
            </div>
            <div className="md:order-1">
              <h2 className="text-[32px] font-semibold text-charcoal">See it in action</h2>
              <p className="text-[18px] text-muted mt-4 leading-[1.7]">
                TruckHisaab runs entirely inside WhatsApp — no app to install. Truck owners log
                trips and expenses by chatting, and get their P&amp;L back the same way.
              </p>
              <a href="/truckhisaab" className="btn-primary mt-6 inline-block">
                See TruckHisaab
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
