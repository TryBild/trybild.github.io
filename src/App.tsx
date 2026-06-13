import { CustomCursor } from '@/components/common/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Marquee } from '@/components/layout/Marquee'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { MaalSaathi } from '@/components/sections/MaalSaathi'
import { Attendr } from '@/components/sections/Attendr'
import { About } from '@/components/sections/About'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <MaalSaathi />
        <Attendr />
        <About />
      </main>

      <Footer />
      <Marquee />
    </div>
  )
}
