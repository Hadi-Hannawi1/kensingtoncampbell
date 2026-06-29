export default function WhoMadeThis() {
  return (
    <section className="w-full bg-blush py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center">
          Who Made This
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center text-dark mb-16">
          Built by People Who <span className="text-accent italic">Know</span> This Work
        </h2>

        {/* Author Card */}
        <div className="fade-in bg-white rounded-lg p-8 border border-border">
          
          

          {/* Name & Handle */}
          <h3 className="font-serif-display text-2xl font-bold text-dark text-center mb-2">
            The Family Behind @kensingtoncampbell
          </h3>
          
          <p className="text-center text-dark/60 font-sans mb-6">
            Ryan & Tracey Campbell, Dallas, Texas
          </p>

          {/* Bio Quote */}
          <blockquote className="border-l-4 border-accent pl-6 mb-8">
            <p className="font-serif text-lg italic text-dark/80 mb-4">
              "We started this account to share our life with Kensington. When she passed, we realized we could honor her legacy by helping more dogs find their way home. We've fostered 28 dogs. We've learned everything the hard way. This guide is what we wish we knew when we started."
            </p>
            <footer className="font-sans text-sm font-bold text-accent uppercase tracking-widest">
              — Ryan & Tracey
            </footer>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-border text-center">
            <div>
              <p className="font-serif-display text-3xl font-bold text-accent">119K</p>
              <p className="font-sans text-xs uppercase tracking-widest text-dark/60">Followers</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl font-bold text-accent">28</p>
              <p className="font-sans text-xs uppercase tracking-widest text-dark/60">Dogs Fostered</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl font-bold text-accent">11</p>
              <p className="font-sans text-xs uppercase tracking-widest text-dark/60">Currently in Care</p>
            </div>
          </div>

          {/* Instagram Link */}
          <div className="text-center mt-8">
            <p className="text-sm text-dark/60 mb-4">Follow their journey</p>
            <a
              href="https://instagram.com/kensingtoncampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-accent hover:text-purple transition-colors uppercase tracking-widest text-sm"
            >
              @kensingtoncampbell →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
