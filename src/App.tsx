import Navbar from './components/custom/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import BenefitsSection from './sections/BenefitsSection'
import ProcessSection from './sections/ProcessSection'
import PortfolioSection from './sections/PortfolioSection'
import PricingSection from './sections/PricingSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-[#1B4332]">
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
