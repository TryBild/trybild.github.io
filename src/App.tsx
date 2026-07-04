import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

export default function App() {
  return (
    <div className="crt bg-black min-h-screen">
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  )
}
