export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-dark/95 text-cream/60 py-12 px-6 border-t border-white/10">
      <div className="max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif-display font-bold text-cream mb-3">
              Foster With Confidence
            </h3>
            <p className="text-sm">
              A real-world guide to fostering dogs, based on 28 fostering experiences.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-accent mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/kensingtoncampbell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @kensingtoncampbell
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/hadibuilds_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Built by Hadi
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-accent mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://whop.com/fosterwithconfidence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Get the Guide
                </a>
              </li>
              <li>
                <a
                  href="mailto:h.hannawi1@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p className="mb-2">
            © {currentYear} Foster With Confidence. All rights reserved.
          </p>
          <p className="text-cream/40">
            A portion of every sale goes to supporting shelter dogs.
          </p>
        </div>
      </div>
    </footer>
  )
}
