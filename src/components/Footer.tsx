import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-sage-light mt-16 relative noise-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top decorative line */}
        <div className="flex items-center gap-4 mb-12">
          <span className="editorial-line" />
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Workplace Rights</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-ink-soft rounded-lg flex items-center justify-center border border-sage/20">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.56 3.64L12 11.46 5.44 7.82 12 4.18zM5 8.82l6 3.33v6.67l-6-3.33V8.82zm14 6.67l-6 3.33v-6.67l6-3.33v6.67z" />
                </svg>
              </div>
              <span className="font-display text-xl text-cream tracking-tight">SickLeaveRights</span>
            </div>
            <p className="text-sage text-sm leading-relaxed max-w-sm">
              Free workplace rights tools for employees worldwide. Know your legal rights, write professional letters, and protect your career.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-cream font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
              Free Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/resignation-letter-generator/" className="text-sage hover:text-gold transition-colors">
                  Resignation Letter Generator
                </Link>
              </li>
              <li>
                <Link href="/blog/can-boss-force-earned-leave/" className="text-sage hover:text-gold transition-colors">
                  Can Boss Force Earned Leave?
                </Link>
              </li>
              <li>
                <Link href="/blog/can-boss-deny-sick-leave/" className="text-sage hover:text-gold transition-colors">
                  Sick Leave Rights Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/earned-leave-vs-sick-leave/" className="text-sage hover:text-gold transition-colors">
                  Earned Leave vs Sick Leave
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-cream font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy/" className="text-sage hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="text-sage hover:text-gold transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sage">
          <p>&copy; {year} SickLeaveRights.com &mdash; All rights reserved.</p>
          <p className="text-center max-w-md">
            <span className="text-gold/80 font-medium">Disclaimer:</span> This site provides general
            information only, not legal advice. Consult a qualified attorney for your specific
            situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
