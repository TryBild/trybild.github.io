import { CustomCursor } from '@/components/common/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Marquee } from '@/components/layout/Marquee'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { TruckHisaab } from '@/components/sections/TruckHisaab'
import { Attendr } from '@/components/sections/Attendr'
import { JellyClaw } from '@/components/sections/JellyClaw'
import { About } from '@/components/sections/About'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <TruckHisaab />
        <Attendr />
        <JellyClaw />
        <About />
      </main>

      <Footer />
      <Marquee />
    </div>
  )
}
