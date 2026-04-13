import Hero from '@/components/landing/Hero'
import Services from '@/components/landing/Services'
import Clients from '@/components/landing/Clients'
import Contact from '@/components/landing/Contact'

export const metadata = {
  title: 'Zapp Freelance — SaaS & API Development for Indonesian Businesses',
  description:
    'We build affordable SaaS applications, REST APIs, and admin dashboards for micro companies across Indonesia. Fast delivery, clean code, affordable prices.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Contact />
    </main>
  )
}