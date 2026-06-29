import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is this a physical book?',
    answer: 'No, it\'s an instant digital download. You\'ll get a PDF that you can read on your phone, tablet, or computer. You can save it and reference it anytime.'
  },
  {
    question: 'I don\'t live in Dallas. Is this still useful?',
    answer: 'Yes. The guide is written for fostering in any city. The appendix includes a blank resource template you fill in with your local shelters, rescues, and vets. Everything applies nationwide.'
  },
  {
    question: 'I\'ve never had a dog before. Can I still foster?',
    answer: 'Yes, and this is exactly why we wrote this guide. Section 2 covers exactly how to get started from zero. First-time foster homes are exactly who rescues want.'
  },
  {
    question: 'I\'m worried I\'ll get too attached. Does the guide address this?',
    answer: 'Section 5 covers the emotional side of fostering completely. We understand this fear—we\'ve been there. The guide walks you through managing attachment, handling the goodbye, and fostering after loss.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes. If the guide isn\'t what you expected, reach out within 7 days and we\'ll refund you. No questions asked. We want you to feel good about your purchase.'
  },
  {
    question: 'Where does the money go?',
    answer: 'A portion of every sale goes directly to supporting shelter dogs. We donate to the rescues and shelters that helped us learn everything in this guide.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full bg-blush py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Label */}
        <div className="section-label text-center">
          Questions
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-center text-dark mb-16">
          Common <span className="text-accent italic">Questions</span> Answered
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="fade-in bg-white rounded-lg border border-border overflow-hidden transition-all"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors"
              >
                <h3 className="font-serif text-lg text-dark text-left">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 ml-4 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="font-serif text-dark/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-dark/70 text-sm">
            Still have questions?{' '}
            <a
              href="https://instagram.com/kensingtoncampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent hover:text-purple transition-colors"
            >
              DM us on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
