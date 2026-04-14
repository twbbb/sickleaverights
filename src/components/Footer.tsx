import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-3 9 3M3 6v12l9 3 9-3V6M12 3v18" />
              </svg>
              <span>SickLeaveRights</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free workplace rights tools for employees worldwide. Know your rights, write your
              future.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Free Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resignation-letter-generator/" className="hover:text-white transition-colors">
                  Resignation Letter Generator
                </Link>
              </li>
              <li>
                <Link href="/blog/can-boss-force-earned-leave/" className="hover:text-white transition-colors">
                  Can Boss Force Earned Leave?
                </Link>
              </li>
              <li>
                <Link href="/blog/can-boss-deny-sick-leave/" className="hover:text-white transition-colors">
                  Sick Leave Rights Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/earned-leave-vs-sick-leave/" className="hover:text-white transition-colors">
                  Earned Leave vs Sick Leave
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} SickLeaveRights.com — All rights reserved.</p>
          <p className="text-center">
            <strong className="text-gray-300">Disclaimer:</strong> This site provides general
            information only, not legal advice. Consult a qualified attorney for your specific
            situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
