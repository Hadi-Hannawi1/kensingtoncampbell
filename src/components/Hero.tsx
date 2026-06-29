import { useState } from 'react'

const CHECKOUT_URL = 'https://whop.com/fosterwithconfidence'

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
    setIsLoading(false)
  }

  return (
    <div className="relative w-full min-h-screen bg-dark text-cream overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{backgroundImage: "url('/images/hero_background.jpeg')"}}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 max-w-4xl mx-auto">
        <div className="fade-in text-center space-y-8">
          
          {/* Subtitle */}
          <div className="section-label flex justify-center">
            A Real-World Guide
          </div>

          {/* Main Title */}
          <h1 className="font-serif-display text-5xl md:text-7xl font-bold leading-tight">
            Foster With Confidence
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-accent"></div>
          </div>

          {/* Author Quote */}
          <p className="font-serif text-lg md:text-xl italic max-w-2xl mx-auto opacity-90">
            "Everything we learned fostering 28 dogs, in one guide."
          </p>

          {/* Product Image Placeholder */}
          <div className="my-8">
            <div 
              className="w-48 h-64 md:w-64 md:h-80 mx-auto bg-cream rounded-lg shadow-2xl flex items-center justify-center"
              style={{backgroundImage: "url('/images/product_cover.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <span className="text-dark/30 text-sm">Product Cover</span>
            </div>
          </div>

          {/* Price & CTA Section */}
          <div className="space-y-6 pt-8">
            <div className="font-serif-display text-5xl font-bold text-accent">
              $57
            </div>
            
            <p className="text-sm uppercase tracking-widest text-muted">
              Instant Digital Download
            </p>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Get the Guide'}
            </button>

            <p className="text-xs text-muted max-w-sm mx-auto">
              A portion of every sale goes to supporting shelter dogs.
            </p>
          </div>

          {/* Author Credit */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm">By</p>
            <a 
              href="https://instagram.com/kensingtoncampbell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans font-bold text-accent hover:text-purple transition-colors"
            >
              @kensingtoncampbell
            </a>
            <p className="text-xs text-muted mt-2">Honoring Kensington's legacy through fostering & rescue</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-accent opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
