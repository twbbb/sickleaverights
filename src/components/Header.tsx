'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resignation-letter-generator/', label: 'Resignation Letter' },
  { href: '/blog/can-boss-force-earned-leave/', label: 'Force Earned Leave?' },
  { href: '/blog/can-boss-deny-sick-leave/', label: 'Sick Leave Rights' },
  { href: '/blog/earned-leave-vs-sick-leave/', label: 'Leave Types' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-paper/90 backdrop-blur-md border-b border-ink/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center group-hover:bg-ink-soft transition-colors">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.56 3.64L12 11.46 5.44 7.82 12 4.18zM5 8.82l6 3.33v6.67l-6-3.33V8.82zm14 6.67l-6 3.33v-6.67l6-3.33v6.67z" />
              </svg>
            </div>
            <span className="font-display text-xl text-ink tracking-tight">SickLeaveRights</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate hover:text-ink px-3 py-2 rounded-lg hover:bg-cream-dark font-medium transition-all text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resignation-letter-generator/"
              className="ml-2 bg-ink text-cream px-5 py-2 rounded-lg text-sm font-semibold hover:bg-ink-soft transition-colors shadow-sm"
            >
              Free Generator
              <span className="ml-1.5 text-gold">→</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate hover:text-ink rounded-lg hover:bg-cream-dark transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-ink/5 pt-3 animate-fade-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-3 text-slate hover:text-ink hover:bg-cream-dark rounded-lg font-medium transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resignation-letter-generator/"
              className="block mt-3 bg-ink text-cream px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-ink-soft text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Free Generator <span className="text-gold">→</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
