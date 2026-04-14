import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, articleSchema, breadcrumbSchema } from '@/lib/seo';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  ...genMeta({
    title: 'Earned Leave vs Sick Leave: Key Differences Explained (2026)',
    description:
      'What is the difference between earned leave and sick leave? Understand PTO, casual leave, privilege leave, and sick leave — with comparisons across the US, India, and UK.',
    path: '/blog/earned-leave-vs-sick-leave/',
  }),
};

export default function EarnedLeaveVsSickLeavePage() {
  const ldArticle = articleSchema({
    title: 'Earned Leave vs Sick Leave: Key Differences Explained',
    description:
      'What is the difference between earned leave and sick leave? Understand PTO, casual leave, privilege leave, and sick leave with comparisons across US, India, and UK.',
    url: '/blog/earned-leave-vs-sick-leave/',
    datePublished: '2026-04-14',
    dateModified: '2026-04-14',
  });

  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Earned Leave vs Sick Leave', url: '/blog/earned-leave-vs-sick-leave/' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-slate flex items-center gap-2">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-ink/80">Leave Types Guide</span>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="inline-block bg-gold/10 text-gold-muted text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Leave Types Guide
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-4">
            Earned Leave vs Sick Leave: Key Differences Explained (2025)
          </h1>
          <p className="text-xl text-slate leading-relaxed mb-4">
            Confused about the difference between earned leave, sick leave, PTO, and casual leave?
            You&apos;re not alone. This guide breaks down every type of employee leave in plain
            English — so you can use your entitlements confidently.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate">
            <span>April 14, 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </header>

        <AdSlot slot="article-top" format="horizontal" className="h-24 mb-8" />

        {/* Quick Reference Table */}
        <div className="bg-gradient-to-br from-ink/5 to-sage/5 rounded-2xl p-6 mb-10 border border-ink/5">
          <h2 className="font-display text-xl text-ink mb-4">
            Quick Reference: Earned Leave vs Sick Leave
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-paper">
                  <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10 rounded-tl-lg">
                    Feature
                  </th>
                  <th className="text-left p-3 font-semibold text-gold-muted border border-ink/10 bg-ink/5">
                    Earned Leave
                  </th>
                  <th className="text-left p-3 font-semibold text-green-700 border border-ink/10 bg-sage/5">
                    Sick Leave
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, earned, sick], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-paper' : 'bg-cream-dark/50'}>
                    <td className="p-3 font-medium text-gray-800 border border-ink/5">{feature}</td>
                    <td className="p-3 text-ink/80 border border-ink/5">{earned}</td>
                    <td className="p-3 text-ink/80 border border-ink/5">{sick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">What Is Earned Leave?</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              <strong>Earned leave</strong> (also called <em>privilege leave</em>,{' '}
              <em>annual leave</em>, or <em>vacation leave</em>) is paid time off that you
              accumulate over time based on how long you have worked. The name says it all — you{' '}
              <em>earn</em> this leave through your work.
            </p>
            <p className="text-ink/80 leading-relaxed mb-4">
              Key characteristics of earned leave:
            </p>
            <ul className="space-y-2 text-ink/80 mb-6">
              {[
                'Accrues over time (e.g., 1.25 days per month = 15 days per year)',
                'Can be planned and requested in advance',
                'Typically requires manager approval',
                'Unused days often carry over to the next year (with caps)',
                'May be paid out upon resignation or termination in some states',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-ink/5 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-ink text-sm">
                <strong>US Note:</strong> The US has no federal law requiring paid vacation/earned
                leave. Employer policies vary widely. However, if your company offers it, they must
                honor what&apos;s in your contract or handbook.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">What Is Sick Leave?</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              <strong>Sick leave</strong> is specifically designated time off for illness, injury,
              medical appointments, or caring for a sick family member. Unlike earned leave, it is
              meant to be used only when you are unwell.
            </p>
            <p className="text-ink/80 leading-relaxed mb-4">
              Key characteristics of sick leave:
            </p>
            <ul className="space-y-2 text-ink/80 mb-6">
              {[
                'Used for illness, injury, medical visits, or family care',
                'Often does not require advance notice (emergencies happen)',
                'Some states mandate paid sick leave (California, NY, WA, etc.)',
                'May require a doctor\'s note for extended absences',
                'FMLA provides additional job-protected sick leave for serious conditions',
                'Typically does not carry over as generously as earned leave',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <AdSlot slot="article-mid" format="rectangle" className="h-60 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">
              Other Types of Leave: Complete Glossary
            </h2>
            <div className="space-y-4">
              {otherLeaveTypes.map((leave) => (
                <div key={leave.name} className="bg-cream-dark/50 rounded-2xl p-4 border border-ink/10">
                  <h3 className="font-bold text-ink mb-1">
                    {leave.name}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{leave.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">
              Country Comparison: US vs India vs UK
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-cream-dark">
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Aspect</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">USA</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">India</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">UK</th>
                  </tr>
                </thead>
                <tbody>
                  {countryComparison.map(([aspect, us, india, uk], i) => (
                    <tr key={aspect} className={i % 2 === 0 ? 'bg-paper' : 'bg-cream-dark/50'}>
                      <td className="p-3 font-medium text-gray-800 border border-ink/10">{aspect}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{us}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{india}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-6">
              Common Misconceptions About Leave Types
            </h2>
            <div className="space-y-4">
              {misconceptions.map((item) => (
                <div key={item.myth} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span className="bg-coral/10 text-red-600 text-xs font-bold px-2 py-1 rounded">MYTH</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-ink mb-1">&ldquo;{item.myth}&rdquo;</p>
                    <div className="flex gap-2 items-start">
                      <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded flex-shrink-0 mt-0.5">FACT</span>
                      <p className="text-slate text-sm">{item.fact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSlot slot="article-bottom" format="horizontal" className="h-24 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-6">FAQ</h2>
            <div className="space-y-5">
              {pageFaqs.map((faq) => (
                <div key={faq.q} className="border-b border-ink/10 pb-5">
                  <h3 className="font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-ink to-ink-soft text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Need to Write a Resignation Letter?</h2>
            <p className="text-sage-light mb-6">
              Whether you&apos;re leaving because of leave policy issues or moving to a better
              opportunity, our free generator makes it effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/resignation-letter-generator/"
                className="inline-block bg-paper text-gold-muted px-8 py-3 rounded-2xl font-bold hover:bg-ink/5 transition-colors"
              >
                Generate Free Resignation Letter →
              </Link>
              <Link
                href="/blog/can-boss-deny-sick-leave/"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-2xl font-bold hover:bg-paper/10 transition-colors"
              >
                Can Boss Deny Sick Leave?
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

const comparisonRows = [
  ['Purpose', 'Vacation, personal time, rest', 'Illness, injury, medical care'],
  ['Notice Required', 'Usually advance notice needed', 'Often no advance notice (emergencies)'],
  ['Manager Approval', 'Required in most cases', 'Usually automatic for short absences'],
  ['Accrual Rate', 'Fixed rate over time', 'Fixed rate or lump sum'],
  ['Carryover', 'Usually allowed (with caps)', 'Limited carryover in most policies'],
  ['Payout on Exit', 'Often paid out (varies by state)', 'Rarely paid out'],
  ['Federal Law (US)', 'No federal mandate', 'FMLA for serious conditions (12 wks)'],
  ['Common Names', 'Privilege leave, annual leave, PTO', 'Medical leave, health leave'],
];

const otherLeaveTypes = [
  {
    icon: '',
    name: 'PTO (Paid Time Off)',
    desc: 'A US policy where sick leave and vacation are combined into a single "bank" of days. More flexible, but you must budget both vacation and illness from the same pool.',
  },
  {
    icon: '',
    name: 'Casual Leave',
    desc: 'Common in India and some Commonwealth countries — short-notice unplanned leave for personal reasons. Typically 7-12 days per year, cannot be carried over.',
  },
  {
    icon: '',
    name: 'Maternity / Paternity Leave',
    desc: 'Leave for new parents. US federal law provides 12 weeks unpaid under FMLA. Many states add paid leave. India provides 26 weeks paid maternity leave for the first two children.',
  },
  {
    icon: '',
    name: 'Bereavement Leave',
    desc: 'Leave to mourn the death of a family member. The US has no federal mandate. Most employers provide 3-5 days. Oregon was the first state to mandate paid bereavement leave.',
  },
  {
    icon: '',
    name: 'FMLA Leave',
    desc: 'Up to 12 weeks of unpaid, job-protected leave per year for serious health conditions or family care. Requires FMLA eligibility (50+ employee company, 12+ months tenure).',
  },
];

const countryComparison = [
  ['Annual/Earned Leave', 'No federal mandate; typically 10-15 days by employer', '15-21 days (varies by state law)', '28 days statutory minimum (including bank holidays)'],
  ['Sick Leave (paid)', 'Varies by state; 0-10 days mandate', '7-14 days (varies)', 'Statutory Sick Pay (SSP) after 3 days, up to 28 weeks'],
  ['Governing Law', 'No federal vacation law; FMLA for medical leave', 'Factories Act, Shops & Establishments Act (state-specific)', 'Working Time Regulations 1998'],
  ['Carry Forward', 'Employer policy (common)', '30 days max carry-over typically', 'Up to 4 weeks can carry over'],
  ['Sick Leave Proof', 'Often required (company policy)', 'Medical certificate common', 'Self-certify up to 7 days; doctor\'s note after'],
];

const misconceptions = [
  {
    myth: 'I can use sick leave for anything I want.',
    fact: 'Sick leave is designated for illness or medical reasons. Misusing it can be grounds for discipline. Use earned/PTO leave for personal activities.',
  },
  {
    myth: 'My unused sick leave must be paid out when I leave.',
    fact: "Most states don't require payout of unused sick leave (unlike vacation in some states). Check your state law and employer policy.",
  },
  {
    myth: 'If I have sick leave, my boss can\'t deny it.',
    fact: 'For non-FMLA sick leave, employers retain some discretion. FMLA-protected leave is much harder to deny lawfully.',
  },
  {
    myth: 'PTO is always better than separate sick/vacation days.',
    fact: 'PTO is flexible but can disadvantage employees who get sick often, as illness days eat into vacation time. Separate banks protect both.',
  },
];

const pageFaqs = [
  {
    q: 'Can I use earned leave for sick days?',
    a: "Generally yes, if your employer allows it. Many companies let you use vacation/PTO for illness when sick leave is exhausted. Always check your employee handbook.",
  },
  {
    q: 'Is earned leave and privilege leave the same thing?',
    a: "Yes — in India and many Commonwealth countries, 'earned leave' and 'privilege leave' are used interchangeably. They both refer to leave accumulated based on days worked.",
  },
  {
    q: 'What happens to earned leave when I resign?',
    a: "In many US states (California, for example), unused accrued vacation must be paid out at separation. Sick leave usually is not. India's gratuity laws cover privileged leave encashment in some scenarios.",
  },
  {
    q: 'How many sick days is normal in the US?',
    a: "According to the BLS, US private-sector workers average about 7 sick days per year. State minimums range from 3 (Massachusetts) to 10 (some CA contexts). No federal minimum exists.",
  },
];
