export default function SocialProof() {
  return (
    <section className="w-full bg-dark text-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center justify-center">
          The Numbers
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center mb-16">
          This Guide Was Built from <span className="text-accent italic">Real Community</span> Demand
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Stat 1 */}
          <div className="fade-in text-center" style={{ transitionDelay: '0ms' }}>
            <p className="font-serif-display text-5xl font-bold text-accent mb-2">119K</p>
            <p className="font-serif text-lg">People following the journey</p>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mt-3">On Instagram alone</p>
          </div>

          {/* Stat 2 */}
          <div className="fade-in text-center" style={{ transitionDelay: '100ms' }}>
            <p className="font-serif-display text-5xl font-bold text-accent mb-2">28</p>
            <p className="font-serif text-lg">Dogs fostered and healed</p>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mt-3">Real experience, real lessons</p>
          </div>

          {/* Stat 3 */}
          <div className="fade-in text-center" style={{ transitionDelay: '200ms' }}>
            <p className="font-serif-display text-5xl font-bold text-accent mb-2">100s</p>
            <p className="font-serif text-lg">Weekly DMs asking "How do I start?"</p>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mt-3">This guide answers them</p>
          </div>
        </div>

        {/* Story */}
        <div className="fade-in bg-white/5 border border-white/10 rounded-lg p-8 text-center">
          <p className="font-serif text-lg italic mb-4">
            "Every week, we get the same questions in the DMs: How do I foster? What do I need? What if I get too attached? We decided to answer them all in one place, for everyone who has ever felt that pull to help."
          </p>
          <p className="font-sans text-sm text-muted uppercase tracking-widest">
            — The Reason This Guide Exists
          </p>
        </div>
      </div>
    </section>
  )
}
