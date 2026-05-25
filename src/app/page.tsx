import Navbar from '../components/layout/Navbar'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import Portfolio from '../components/landing/Portfolio'
import Clients from '../components/landing/Clients'
import Values from '../components/landing/Values'
import Contact from '../components/landing/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
