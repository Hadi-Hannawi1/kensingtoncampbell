import { useEffect } from 'react'
import Hero from './components/Hero'
import IsThisYou from './components/IsThisYou'
import WhatsInside from './components/WhatsInside'
import WhoMadeThis from './components/WhoMadeThis'
import SocialProof from './components/SocialProof'
import WhatYouGet from './components/WhatYouGet'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <IsThisYou />
      <WhatsInside />
      <WhoMadeThis />
      <SocialProof />
      <WhatYouGet />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
