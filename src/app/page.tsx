import type { Metadata } from 'next';
import Link from 'next/link';
import { organizationSchema, websiteSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'SickLeaveRights — Free Workplace Rights Tools for Employees',
  description:
    'Know your sick leave rights, generate a professional resignation letter, and check if your employee rights are being violated. Free tools for workers worldwide.',
  alternates: { canonical: 'https://sickleaverights.com/' },
  openGraph: {
    title: 'SickLeaveRights — Free Workplace Rights Tools',
    description:
      'Free tools for employees: resignation letter generator, sick leave rights guide, and employee rights checker.',
    url: 'https://sickleaverights.com/',
    type: 'website',
  },
};

const tools = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Resignation Letter Generator',
    description:
      'Generate a professional resignation letter in seconds. 6 tone styles — two-week notice, immediate, friendly, and more.',
    href: '/resignation-letter-generator/',
    cta: 'Generate Free Letter',
    badge: 'Most Popular',
    accent: 'bg-ink',
    badgeBg: 'bg-coral/10 text-coral',
    iconBg: 'bg-ink/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Can Boss Force Earned Leave?',
    description:
      'Manager insisting you use vacation instead of sick leave? Know your legal rights — including India LWP rules and US state laws.',
    href: '/blog/can-boss-force-earned-leave/',
    cta: 'Know Your Rights',
    badge: 'This Week',
    accent: 'bg-coral',
    badgeBg: 'bg-gold/10 text-gold-muted',
    iconBg: 'bg-coral/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Sick Leave Rights Guide',
    description:
      'Can your boss deny your sick leave? Learn your legal rights under FMLA, state laws, and more.',
    href: '/blog/can-boss-deny-sick-leave/',
    cta: 'Learn Your Rights',
    badge: 'Trending',
    accent: 'bg-sage-dark',
    badgeBg: 'bg-sage/10 text-sage-dark',
    iconBg: 'bg-sage/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Earned Leave vs Sick Leave',
    description:
      'Understand the difference between earned leave, sick leave, PTO, and other types of employee leave.',
    href: '/blog/earned-leave-vs-sick-leave/',
    cta: 'Read the Guide',
    badge: 'Essential',
    accent: 'bg-ink',
    badgeBg: 'bg-ink/5 text-ink',
    iconBg: 'bg-ink/5',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '100% Free',
    description: 'All tools are completely free. No sign-up, no credit card required.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Results',
    description: 'Get your resignation letter or know your rights in under 60 seconds.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Coverage',
    description: 'US (all 50 states), UK, India, and 30+ countries worldwide.',
  },
];

const stats = [
  { value: '50+', label: 'US States Covered' },
  { value: '30+', label: 'Countries Worldwide' },
  { value: '6', label: 'Letter Templates' },
  { value: '100%', label: 'Free Forever' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-ink noise-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" />

        {/* Decorative dots */}
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-5" />
        <div className="absolute bottom-0 left-0 w-64 h-64 dot-pattern opacity-5" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/10 text-cream text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Free Workplace Rights Tools
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-[1.1] mb-6 tracking-tight">
              Know Your Rights.
              <br />
              <span className="gold-shimmer">Write Your Future.</span>
            </h1>

            {/* Subhead */}
            <p className="animate-fade-up delay-200 text-sage-light text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              Free tools for employees worldwide — check your sick leave rights, generate a
              professional resignation letter, and understand your workplace protections.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/resignation-letter-generator/"
                className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-xl font-bold text-base hover:bg-gold-soft transition-all shadow-gold"
              >
                Generate Resignation Letter
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/blog/can-boss-deny-sick-leave/"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/20 text-cream px-8 py-4 rounded-xl font-bold text-base hover:bg-cream/5 hover:border-cream/30 transition-all"
              >
                Check Sick Leave Rights
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-up delay-500 mt-16 pt-10 border-t border-cream/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl text-gold mb-1">{s.value}</div>
                  <div className="text-sage text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="max-w-2xl mb-14 animate-fade-up">
            <span className="editorial-line mb-4" />
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Tools &amp; Resources</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-4">
              Free Workplace Rights Tools
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Everything you need to protect your rights at work — completely free, no account
              needed.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <Link
                key={tool.title}
                href={tool.href}
                className={`animate-fade-up delay-${(i + 1) * 100} group relative bg-paper rounded-2xl p-7 border border-ink/5 card-lift flex flex-col`}
              >
                {/* Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center text-ink transition-colors group-hover:bg-ink group-hover:text-gold`}>
                    {tool.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeBg}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-ink mb-2 group-hover:text-ink-soft transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed flex-1 mb-6">
                  {tool.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-gold transition-colors">
                  {tool.cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${tool.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-cream-dark relative noise-bg overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-14 animate-fade-up">
            <span className="editorial-line mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              Why Use SickLeaveRights?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`animate-fade-up delay-${(i + 1) * 100} text-center bg-paper rounded-2xl p-8 border border-ink/5`}
              >
                <div className="w-14 h-14 bg-ink rounded-xl flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl text-ink mb-3">{f.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-ink rounded-3xl p-10 sm:p-14 text-center overflow-hidden noise-bg">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 dot-pattern opacity-5" />
            <div className="absolute bottom-0 left-0 w-32 h-32 dot-pattern opacity-5" />

            <div className="relative z-10">
              <span className="editorial-line mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4 leading-tight">
                Ready to Exercise
                <br />
                <span className="gold-shimmer">Your Rights?</span>
              </h2>
              <p className="text-sage-light text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                Join thousands of employees who use SickLeaveRights to navigate workplace challenges
                confidently.
              </p>
              <Link
                href="/resignation-letter-generator/"
                className="group inline-flex items-center gap-2 bg-gold text-ink px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold-soft transition-all shadow-gold"
              >
                Start with Free Resignation Letter
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
