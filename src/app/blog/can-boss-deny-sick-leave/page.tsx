import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  ...genMeta({
    title: 'Can Your Boss Deny Sick Leave? Your Complete Legal Guide (2025)',
    description:
      'Can your boss deny sick leave? Learn when employers can legally refuse sick days, your rights under FMLA, state laws, and exactly what to do if your sick leave is denied.',
    path: '/blog/can-boss-deny-sick-leave/',
  }),
};

export default function CanBossDenySickLeavePage() {
  const ldArticle = articleSchema({
    title: 'Can Your Boss Deny Sick Leave? Your Complete Legal Guide',
    description:
      'Learn when employers can legally refuse sick days, your rights under FMLA, state laws, and exactly what to do if your sick leave is denied.',
    url: '/blog/can-boss-deny-sick-leave/',
    datePublished: '2026-04-14',
    dateModified: '2026-04-14',
  });

  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Can Boss Deny Sick Leave', url: '/blog/can-boss-deny-sick-leave/' },
  ]);

  const ldFaq = faqPageSchema(articleFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <span className="text-gray-700">Sick Leave Rights</span>
        </nav>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            🏥 Sick Leave Rights
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Can Your Boss Deny Sick Leave? Your Complete Legal Guide (2026)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Your boss just denied your sick day request. Your heart sinks. Is this even legal? The
            short answer: <strong>it depends</strong> — and knowing the difference could save your
            job and protect your health.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 Updated April 14, 2026</span>
            <span>•</span>
            <span>⏱️ 8 min read</span>
            <span>•</span>
            <span>⚖️ Legal guide</span>
          </div>
        </header>

        {/* Top Ad */}
        <AdSlot slot="article-top" format="horizontal" className="h-24 mb-8" />

        {/* Table of Contents */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
            📋 Table of Contents
          </h2>
          <ol className="space-y-1.5 text-sm">
            {[
              ['#short-answer', 'The Short Answer'],
              ['#fmla-rights', 'FMLA: Your Federal Protection'],
              ['#state-laws', 'State Sick Leave Laws'],
              ['#when-boss-can-deny', 'When Your Boss CAN Legally Deny Sick Leave'],
              ['#when-boss-cannot', 'When Your Boss CANNOT Deny Sick Leave'],
              ['#what-to-do', 'What To Do If Your Sick Leave Is Denied'],
              ['#retaliation', 'Protected From Retaliation?'],
              ['#faq', 'Frequently Asked Questions'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-blue-700 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section id="short-answer" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes, in many situations your boss <em>can</em> deny sick leave — but there are
              critical circumstances where they absolutely <strong>cannot</strong>. Whether your
              employer can legally deny your sick day depends on:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              {[
                'Whether you qualify for FMLA (Family and Medical Leave Act) protection',
                'Your state\'s specific sick leave laws',
                'Your employment contract or company policy',
                'The reason for your absence',
                'Whether you\'ve followed proper notification procedures',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-yellow-900 text-sm">
              <strong>⚠️ Important:</strong> This guide provides general legal information, not
              legal advice. For your specific situation, consult a licensed employment attorney.
            </div>
          </section>

          <section id="fmla-rights" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              FMLA: Your Federal Protection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Family and Medical Leave Act (FMLA)</strong> is your most powerful
              federal protection. Under FMLA, eligible employees can take up to{' '}
              <strong>12 weeks of unpaid leave per year</strong> for serious health conditions — and
              your employer cannot deny this leave or retaliate against you for taking it.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              FMLA Eligibility Requirements
            </h3>
            <p className="text-gray-700 mb-3">You qualify for FMLA if ALL of these apply:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Requirement</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employer size', 'Works for an employer with 50+ employees'],
                    ['Employment duration', 'Worked for this employer for at least 12 months'],
                    ['Hours worked', 'Worked at least 1,250 hours in the past 12 months'],
                    ['Work location', 'Works within 75 miles of a location with 50+ employees'],
                    ['Qualifying reason', 'Serious health condition, family care, or qualifying military exigency'],
                  ].map(([req, detail]) => (
                    <tr key={req} className="border-b border-gray-200">
                      <td className="p-3 font-medium text-gray-900 border border-gray-200">{req}</td>
                      <td className="p-3 text-gray-600 border border-gray-200">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>What counts as a &quot;serious health condition&quot;?</strong> Under FMLA, this
              includes any illness, injury, impairment, or physical/mental condition requiring:
              inpatient care, or continuing treatment by a healthcare provider. A common cold or
              flu typically does <em>not</em> qualify — but a severe flu with doctor visits likely
              does.
            </p>
          </section>

          {/* Mid Article Ad */}
          <AdSlot slot="article-mid" format="rectangle" className="h-60 my-8" />

          <section id="state-laws" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">State Sick Leave Laws</h2>
            <p className="text-gray-700 mb-4">
              Beyond FMLA, many states have enacted their <strong>own paid sick leave laws</strong>{' '}
              that provide even stronger protections. These state laws often cover smaller employers
              and shorter waiting periods than FMLA.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="text-left p-3 font-semibold text-blue-900 border border-blue-200">State</th>
                    <th className="text-left p-3 font-semibold text-blue-900 border border-blue-200">Paid Sick Leave Law</th>
                    <th className="text-left p-3 font-semibold text-blue-900 border border-blue-200">Accrual Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {stateLaws.map((row) => (
                    <tr key={row[0]} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900 border border-gray-200">{row[0]}</td>
                      <td className="p-3 text-gray-700 border border-gray-200">{row[1]}</td>
                      <td className="p-3 text-gray-600 border border-gray-200">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              * Check your state&apos;s Department of Labor for the most current requirements, as laws change.
            </p>
          </section>

          <section id="when-boss-can-deny" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When Your Boss CAN Legally Deny Sick Leave
            </h2>
            <div className="space-y-4">
              {canDenyReasons.map((item) => (
                <div key={item.title} className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="font-semibold text-red-900 mb-1">{item.title}</h3>
                  <p className="text-red-800 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="when-boss-cannot" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When Your Boss CANNOT Deny Sick Leave
            </h2>
            <div className="space-y-4">
              {cannotDenyReasons.map((item) => (
                <div key={item.title} className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h3 className="font-semibold text-green-900 mb-1">✓ {item.title}</h3>
                  <p className="text-green-800 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="what-to-do" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What To Do If Your Sick Leave Is Denied
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Review Your Employment Contract and Policy',
                  desc: 'Locate your employee handbook and any written sick leave policy. Know exactly what you are entitled to in writing before escalating.',
                },
                {
                  step: '2',
                  title: 'Document Everything',
                  desc: 'Save all communications (emails, texts, written notices). Note dates, times, and what was said. This documentation is essential if you later need to file a complaint.',
                },
                {
                  step: '3',
                  title: 'Check FMLA and State Law Eligibility',
                  desc: 'Determine if your situation qualifies for federal or state protected leave. If so, formally request FMLA paperwork from HR — your employer must provide it within 5 business days.',
                },
                {
                  step: '4',
                  title: 'Escalate to HR in Writing',
                  desc: 'Send a written request to HR documenting your concern. Frame it as seeking clarification on your entitlements, not as an accusation. Paper trail matters.',
                },
                {
                  step: '5',
                  title: 'File a Complaint if Necessary',
                  desc: 'If your legal rights are being violated, you can file a complaint with the US Department of Labor\'s Wage and Hour Division (for FMLA) or your state\'s labor board. This is free.',
                },
                {
                  step: '6',
                  title: 'Consult an Employment Attorney',
                  desc: 'For serious cases — especially discrimination or repeated violations — consult an employment lawyer. Many offer free initial consultations. Your job protections may be stronger than you think.',
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Search CTA / Affiliate */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">
                🔍 Ready to find a better workplace?
              </h3>
              <p className="text-blue-800 text-sm mb-3">
                If your sick leave rights are consistently being violated, it may be time to explore
                better opportunities. Search thousands of jobs at companies with better cultures.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.indeed.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  Search Jobs on Indeed →
                </a>
                <a
                  href="https://www.ziprecruiter.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="border border-blue-300 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors"
                >
                  Try ZipRecruiter →
                </a>
              </div>
            </div>
          </section>

          <section id="retaliation" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Are You Protected From Retaliation?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Yes — if you took legally protected leave.</strong> Under FMLA and most state
              sick leave laws, your employer cannot:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              {[
                'Terminate you for taking FMLA or protected sick leave',
                'Demote you or cut your pay',
                'Reduce your hours or job responsibilities',
                'Give you a negative performance review solely because of your absence',
                'Deny you a promotion because of protected leave',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Employer cannot: {item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              If you experience retaliation for taking protected leave, you have the right to sue
              your employer. Winning FMLA retaliation cases can result in back pay, reinstatement,
              and damages.
            </p>
          </section>

          {/* Bottom Ad */}
          <AdSlot slot="article-bottom" format="horizontal" className="h-24 my-8" />

          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {articleFaqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Thinking of Moving On?</h2>
            <p className="text-blue-100 mb-6">
              If a toxic workplace is the issue, our free resignation letter generator can help you
              leave professionally — on your own terms.
            </p>
            <Link
              href="/resignation-letter-generator/"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              📝 Generate Free Resignation Letter →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

const stateLaws = [
  ['California', 'Yes — Healthy Workplaces Act', '1 hr per 30 hrs worked (up to 48 hrs/yr)'],
  ['New York', 'Yes — NY Paid Sick Leave', '1 hr per 30 hrs worked (up to 56 hrs/yr)'],
  ['Washington', 'Yes — WA Paid Sick Leave', '1 hr per 40 hrs worked'],
  ['Illinois', 'Yes — PSLA (2024)', '1 hr per 40 hrs worked (up to 40 hrs/yr)'],
  ['Texas', 'No state-wide law', 'Depends on city ordinance (Austin, Dallas)'],
  ['Florida', 'No state-wide law', 'Employer policy only'],
  ['Georgia', 'No state-wide law', 'Employer policy only'],
];

const canDenyReasons = [
  {
    title: '❌ You don\'t qualify for FMLA',
    desc: 'If you haven\'t worked for your employer long enough, or your employer is too small, FMLA protection doesn\'t apply.',
  },
  {
    title: '❌ Your state has no mandatory paid sick leave law',
    desc: 'About half of US states don\'t require paid sick leave. In these states, if your company policy doesn\'t guarantee it, the employer has wide discretion.',
  },
  {
    title: '❌ You violated the notice procedure',
    desc: 'If your employer requires advance notice (except for emergencies) and you didn\'t follow the procedure, they may be able to deny the leave — though they often can\'t count it against your FMLA entitlement.',
  },
  {
    title: '❌ Operational necessity (non-FMLA situations)',
    desc: 'For non-protected leave (casual sick days beyond your FMLA entitlement), employers can sometimes deny leave if business operations would be severely impacted.',
  },
];

const cannotDenyReasons = [
  {
    title: 'FMLA-qualifying illness or family care',
    desc: 'If you\'ve been diagnosed with a serious health condition or need to care for a qualifying family member, your employer cannot legally deny FMLA leave.',
  },
  {
    title: 'State mandatory sick leave',
    desc: 'In states with mandatory paid sick leave laws (California, New York, Washington, etc.), your employer cannot deny the leave you\'ve legally accrued.',
  },
  {
    title: 'ADA-covered disability',
    desc: 'Under the Americans with Disabilities Act, your employer may be required to provide sick leave as a reasonable accommodation for a covered disability.',
  },
  {
    title: 'Discriminatory denial',
    desc: 'Denying sick leave only to certain employees based on race, gender, religion, age, disability, or other protected characteristics is illegal discrimination.',
  },
];

const articleFaqs = [
  {
    q: 'Can my boss fire me for calling in sick?',
    a: "In at-will employment states, employers CAN fire you for calling in sick — unless you're protected by FMLA, a state law, or your employment contract. Document absences and request FMLA paperwork if you have a serious condition.",
  },
  {
    q: 'Can my employer ask why I\'m sick?',
    a: "Generally, yes for a basic description, but they cannot demand a specific diagnosis. For FMLA leave, they can require a healthcare provider's certification. They cannot ask for more medical detail than FMLA forms require.",
  },
  {
    q: 'Do I need a doctor\'s note for sick leave?',
    a: 'Your employer can require a doctor\'s note per their policy, even for a single day. For FMLA leave, they can require formal medical certification. Some state laws limit when employers can require notes for shorter absences.',
  },
  {
    q: 'What if my employer marks unexcused absence while I have FMLA?',
    a: "This is an FMLA interference violation. Document it immediately in writing, escalate to HR, and if unresolved, file a complaint with the US Department of Labor's Wage and Hour Division.",
  },
];
