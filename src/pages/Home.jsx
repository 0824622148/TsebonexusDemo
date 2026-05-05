import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustSection from '../components/TrustSection'
import ServicesSection from '../components/ServicesSection'
import FreeCyberReview from '../components/FreeCyberReview'
import AlreadyProtected from '../components/AlreadyProtected'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <FreeCyberReview />
        <AlreadyProtected />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
