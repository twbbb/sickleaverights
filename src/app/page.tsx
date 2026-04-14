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
    icon: '📝',
    title: 'Resignation Letter Generator',
    description:
      'Generate a professional resignation letter in seconds. 6 tone styles — two-week notice, immediate, friendly, and more.',
    href: '/resignation-letter-generator/',
    cta: 'Generate Free Letter →',
    badge: '🔥 Most Popular',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    icon: '🔥',
    title: 'Can Boss Force Earned Leave?',
    description:
      'Manager insisting you use vacation instead of sick leave? Know your legal rights — including India LWP rules and US state laws.',
    href: '/blog/can-boss-force-earned-leave/',
    cta: 'Know Your Rights →',
    badge: '🚨 This Week',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    icon: '🏥',
    title: 'Sick Leave Rights Guide',
    description:
      'Can your boss deny your sick leave? Learn your legal rights under FMLA, state laws, and more.',
    href: '/blog/can-boss-deny-sick-leave/',
    cta: 'Learn Your Rights →',
    badge: '📈 Trending',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: '📊',
    title: 'Earned Leave vs Sick Leave',
    description:
      'Understand the difference between earned leave, sick leave, PTO, and other types of employee leave.',
    href: '/blog/earned-leave-vs-sick-leave/',
    cta: 'Read the Guide →',
    badge: '📚 Essential',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
];

const features = [
  {
    icon: '🆓',
    title: '100% Free',
    description: 'All tools are completely free to use. No sign-up, no credit card required.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    description: 'Get your resignation letter or know your rights in under 60 seconds.',
  },
  {
    icon: '🌍',
    title: 'Global Coverage',
    description: 'Covers US (all 50 states), UK, India, and 30+ countries worldwide.',
  },
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
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ⚖️ Free Workplace Rights Tools
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Know Your Rights.
            <br />
            <span className="text-blue-200">Write Your Future.</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Free tools for employees worldwide — check your sick leave rights, generate a
            professional resignation letter, and understand your workplace protections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resignation-letter-generator/"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              📝 Generate Resignation Letter
            </Link>
            <Link
              href="/blog/can-boss-deny-sick-leave/"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              🏥 Check Sick Leave Rights
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Workplace Rights Tools</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to protect your rights at work — completely free, no account
              needed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="block text-center bg-blue-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors"
                >
                  {tool.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use SickLeaveRights?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Exercise Your Rights?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of employees who use SickLeaveRights to navigate workplace challenges
            confidently.
          </p>
          <Link
            href="/resignation-letter-generator/"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start with Free Resignation Letter →
          </Link>
        </div>
      </section>
    </>
  );
}
