import { useState } from 'react'

const CHECKOUT_URL = 'https://whop.com/fosterwithconfidence'

interface ValueItem {
  label: string
  name: string
  individual_price: string
}

const valueStack: ValueItem[] = [
  { label: 'Section 1: Why Foster', name: 'Complete guide', individual_price: '$19' },
  { label: 'Section 2: Getting Started', name: 'Step-by-step walkthrough', individual_price: '$17' },
  { label: 'Section 3: The First 72 Hours', name: 'Decompression guide', individual_price: '$15' },
  { label: 'Section 4: Fostering Litters', name: 'Comprehensive mama & puppy guide', individual_price: '$19' },
  { label: 'Section 5: The Emotional Side', name: 'Processing attachment & goodbye', individual_price: '$17' },
  { label: 'Section 6: Finding Them Homes', name: 'Adoption bio templates & tips', individual_price: '$16' },
  { label: 'Bonus: Resource Directory', name: 'Printable template for your city', individual_price: '$12' },
]

export default function WhatYouGet() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
    setIsLoading(false)
  }

  const totalValue = 125
  const salePrice = 57
  const savings = totalValue - salePrice

  return (
    <section className="w-full bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center">
          What You Get
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center text-dark mb-4">
          The Complete Value <span className="text-accent italic">Stack</span>
        </h2>

        <p className="text-center text-dark/70 text-lg mb-16 max-w-2xl mx-auto">
          Everything you need to foster with confidence, plus bonuses.
        </p>

        {/* Value Items */}
        <div className="space-y-4 mb-12">
          {valueStack.map((item, index) => (
            <div
              key={index}
              className="fade-in flex items-center justify-between p-6 bg-white rounded-lg border border-border hover:border-accent transition-all"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex-1">
                <p className="font-sans font-bold text-accent uppercase text-xs tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-dark">
                  {item.name}
                </p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <p className="font-serif text-dark/50 line-through text-right">
                  {item.individual_price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="bg-white border-2 border-accent rounded-lg p-8 mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-muted mb-4">Total Value</p>
          <p className="font-serif-display text-5xl font-bold text-dark/40 line-through mb-2">
            ${totalValue}
          </p>
          <p className="font-sans text-sm text-muted mb-6">if purchased individually</p>
          
          <div className="border-t border-border pt-8">
            <p className="font-sans text-xs uppercase tracking-widest text-dark/60 mb-4">You pay only</p>
            <p className="font-serif-display text-6xl font-bold text-accent mb-3">
              ${salePrice}
            </p>
            <p className="font-sans font-bold text-accent text-sm uppercase tracking-widest">
              You save ${savings}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
          >
            {isLoading ? 'Loading...' : 'Get the Guide Now'}
          </button>
          <p className="text-dark/60 text-sm">
            Instant digital download. Read on any device.
          </p>
        </div>
      </div>
    </section>
  )
}
