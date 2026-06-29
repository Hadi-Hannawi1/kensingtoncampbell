import { ReactNode } from 'react'

interface PainPoint {
  icon: ReactNode
  text: string
}

const painPoints: PainPoint[] = [
  { icon: '💔', text: 'You want to help shelter dogs but don\'t know where to start.' },
  { icon: '🏠', text: 'You\'ve wondered if you have enough space, time, or experience to foster.' },
  { icon: '❓', text: 'You\'ve asked "What does the first week actually look like?" and got no clear answer.' },
  { icon: '😰', text: 'You\'re worried about getting too attached and not being able to let go.' },
  { icon: '🐕', text: 'You\'ve seen scared shelter dogs and wondered if you could help them feel safe.' },
  { icon: '✨', text: 'You believe in rescue and adoption but want practical guidance on how to contribute.' },
]

export default function IsThisYou() {
  return (
    <section className="w-full bg-blush py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center">
          Is This You
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center text-dark mb-4">
          You're Already <span className="text-accent italic">Thinking</span> About Fostering
        </h2>

        {/* Subtitle */}
        <p className="text-center text-dark/70 text-lg mb-16 max-w-2xl mx-auto">
          If any of these feel true, this guide was written for you.
        </p>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="fade-in bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">{point.icon}</span>
                <p className="font-serif text-dark leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-16 text-center">
          <p className="text-dark/80 text-lg">
            You don't need to have all the answers yet. That's what this guide is for.
          </p>
        </div>
      </div>
    </section>
  )
}
