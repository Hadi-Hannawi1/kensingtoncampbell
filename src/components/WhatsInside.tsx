interface Section {
  number: number
  title: string
  description: string
  icon: string
}

const sections: Section[] = [
  {
    number: 1,
    title: 'Why Foster',
    description: 'The case for fostering, the shelter crisis, and how it saved us after losing Kensington.',
    icon: '💜'
  },
  {
    number: 2,
    title: 'Getting Started',
    description: 'How to apply to foster in your city, what you actually need, and how to prepare.',
    icon: '🏠'
  },
  {
    number: 3,
    title: 'The First 72 Hours',
    description: 'What decompression means, reading body language, and setting up a safe space.',
    icon: '🐾'
  },
  {
    number: 4,
    title: 'Fostering Litters & Mama Dogs',
    description: 'Space, feeding schedules, socialization windows, and the reality of fostering 9+ puppies.',
    icon: '👶'
  },
  {
    number: 5,
    title: 'The Emotional Side',
    description: 'Managing attachment, handling the goodbye, and fostering after loss.',
    icon: '💭'
  },
  {
    number: 6,
    title: 'Finding Them Homes',
    description: 'Writing adoption bios, taking great photos, screening adopters, and adoption updates.',
    icon: '🎯'
  },
]

export default function WhatsInside() {
  return (
    <section className="w-full bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center">
          What's Inside
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center text-dark mb-4">
          Six Sections of Real, Practical <span className="text-accent italic">Guidance</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-dark/70 text-lg mb-16 max-w-2xl mx-auto">
          Everything from getting started to saying goodbye. Based on 28 fostering experiences.
        </p>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={section.number}
              className="fade-in bg-white rounded-lg p-8 border border-border hover:border-accent transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="font-serif-display text-3xl font-bold text-accent">
                  {section.number.toString().padStart(2, '0')}
                </div>
                <div className="text-4xl">{section.icon}</div>
              </div>
              <h3 className="font-serif-display text-xl font-bold text-dark mb-2">
                {section.title}
              </h3>
              <p className="font-serif text-dark/70">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="mt-12 text-center">
          <p className="text-dark font-sans font-bold uppercase tracking-widest text-accent text-sm mb-2">
            Plus
          </p>
          <p className="font-serif text-lg text-dark">
            A printable Foster Resource Directory template you can fill in for your city.
          </p>
        </div>
      </div>
    </section>
  )
}
