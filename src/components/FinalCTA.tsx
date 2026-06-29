import { useState } from 'react'

const CHECKOUT_URL = 'https://whop.com/fosterwithconfidence'

export default function FinalCTA() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
    setIsLoading(false)
  }

  return (
    <section className="w-full bg-dark text-cream py-20 px-6">
      <div className="max-w-3xl mx-auto text-center fade-in">
        
        <h2 className="font-serif-display text-5xl md:text-6xl font-bold mb-6">
          Ready to Foster
        </h2>

        <p className="font-serif text-xl italic text-cream/90 mb-12 max-w-2xl mx-auto">
          You don't need to have all the answers yet. You just need to take the first step. This guide will handle the rest.
        </p>

        {/* Price Highlight */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
          <p className="font-sans text-xs uppercase tracking-widest text-muted mb-4">
            Special Launch Price
          </p>
          <p className="font-serif-display text-6xl font-bold text-accent mb-4">
            $57
          </p>
          <p className="text-cream/80 text-sm">
            Instant digital download. Read forever.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed mb-8"
        >
          {isLoading ? 'Loading...' : 'Get the Guide'}
        </button>

        {/* Reassurance */}
        <div className="space-y-6 text-sm text-cream/70">
          <p>
            <strong className="text-accent">Every foster saves two lives.</strong> The one you take in, and the one who gets their spot at the shelter.
          </p>
          <p>
            <strong className="text-accent">7-day refund guarantee.</strong> If the guide isn't right for you, we'll refund you no questions asked.
          </p>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-cream/60 text-sm mb-3">Made with love by</p>
          <a
            href="https://instagram.com/kensingtoncampbell"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold text-accent hover:text-purple transition-colors uppercase tracking-widest"
          >
            @kensingtoncampbell
          </a>
        </div>
      </div>
    </section>
  )
}
