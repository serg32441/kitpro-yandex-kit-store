import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/custom/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import BenefitsSection from './sections/BenefitsSection'
import ProcessSection from './sections/ProcessSection'
import PortfolioSection from './sections/PortfolioSection'
import PricingSection from './sections/PricingSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Page load fade in
    gsap.to(appRef.current, {
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    })

    // Refresh ScrollTrigger after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div ref={appRef} className="opacity-0 min-h-screen bg-[#1B4332]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
