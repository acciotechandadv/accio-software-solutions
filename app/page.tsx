import { Testimonials } from '@/components/sections/Testimonials'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  )
}
