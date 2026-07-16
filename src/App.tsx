import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .anim-card')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <style>{`
        .fade-up { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .anim-card { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease, box-shadow .2s ease; }
        .anim-card.visible { opacity: 1; transform: translateY(0); }
        .anim-card.visible:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,.08); transition: transform .2s ease, box-shadow .2s ease; }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .anim-card { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
      <Navbar />

      <main>
        <Hero />

        {/* Belief section */}
        <section className="bg-charcoal text-white py-20 md:py-24 mt-16">
          <div className="max-w-[760px] mx-auto px-6 text-center">
            <h2 className="fade-up text-[32px] sm:text-[40px] font-bold leading-[1.2]">
              TryBild is built on one belief.
            </h2>
            <p className="text-[18px] text-[#9a9a9a] mt-5 leading-[1.7]">
              Technology should work for the people who actually run India&apos;s economy. Not
              just the ones in glass offices.
            </p>
          </div>
        </section>

        <Products id="products" />
      </main>

      <Footer />
    </div>
  )
}
