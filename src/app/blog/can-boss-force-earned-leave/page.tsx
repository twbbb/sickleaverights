import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, articleSchema, breadcrumbSchema } from '@/lib/seo';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  ...genMeta({
    title: 'Can Your Boss Force You to Use Earned Leave Instead of Sick Leave? (2026)',
    description:
      'Your manager is insisting you use earned leave (PTO/vacation) instead of sick leave. Is this legal? Know your rights under FMLA, state laws, and what to do if your boss forces earned leave.',
    path: '/blog/can-boss-force-earned-leave/',
  }),
};

export default function CanBossForceEarnedLeavePage() {
  const ldArticle = articleSchema({
    title: 'Can Your Boss Force You to Use Earned Leave Instead of Sick Leave?',
    description:
      'Your manager is insisting you use earned leave instead of sick leave. Is this legal? Know your rights under FMLA, state laws, and what to do.',
    url: '/blog/can-boss-force-earned-leave/',
    datePublished: '2026-04-14',
    dateModified: '2026-04-14',
  });

  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Can Boss Force Earned Leave', url: '/blog/can-boss-force-earned-leave/' },
  ]);

  const ldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-slate flex items-center gap-2">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link href="/blog/can-boss-deny-sick-leave/" className="hover:text-gold">Sick Leave Rights</Link>
          <span>/</span>
          <span className="text-ink/80">Can Boss Force Earned Leave</span>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="inline-block bg-gold/10 text-gold-muted text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Trending This Week
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-4">
            Can Your Boss Force You to Use Earned Leave Instead of Sick Leave?
          </h1>
          <p className="text-xl text-slate leading-relaxed mb-4">
            You called in sick. Your manager replies: <em>&ldquo;Use your earned leave / PTO for this.&rdquo;</em>{' '}
            Or worse: <em>&ldquo;Are you informing me or requesting approval?&rdquo;</em>{' '}
            This is happening to thousands of workers right now — and it may be <strong>illegal</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate">
            <span>Updated April 14, 2026</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Legal guide</span>
          </div>
        </header>

        {/* Top Ad */}
        <AdSlot slot="article-top" format="horizontal" className="h-24 mb-8" />

        {/* Viral Context Box */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-10">
          <h2 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
            Why This Is Trending Right Now
          </h2>
          <div className="space-y-3 text-sm text-orange-800">
            {viralEvents.map((event) => (
              <div key={event.title} className="flex gap-3">
                <span className="flex-shrink-0 font-bold">{event.date}</span>
                <p><strong>{event.title}</strong> — {event.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-600 mt-3">
            These incidents have sparked a global conversation about employee rights. Here&apos;s what the law actually says.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-ink/5 border border-ink/10 rounded-2xl p-5 mb-10">
          <h2 className="font-bold text-ink mb-3 text-sm uppercase tracking-wider">
            Table of Contents
          </h2>
          <ol className="space-y-1.5 text-sm">
            {[
              ['#short-answer', 'The Short Answer'],
              ['#what-is-earned-leave', 'Earned Leave vs Sick Leave: The Key Difference'],
              ['#when-legal', 'When Can Your Boss Legally Force Earned Leave?'],
              ['#when-illegal', 'When It Is Illegal to Force Earned Leave'],
              ['#fmla-concurrent', 'The FMLA Concurrent Use Rule'],
              ['#india-rules', 'India-Specific Rules (LWP, CL, EL)'],
              ['#what-to-do', '6 Steps to Take Right Now'],
              ['#scripts', 'What to Say to Your Manager'],
              ['#faq', 'Frequently Asked Questions'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-gold-muted hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Short Answer */}
          <section id="short-answer" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">The Short Answer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-coral/5 border border-coral/15 rounded-2xl p-4">
                <h3 className="font-bold text-ink mb-2">Generally NOT Legal</h3>
                <p className="text-coral text-sm leading-relaxed">
                  If you have accrued sick leave available, your employer <strong>cannot force you to use vacation/earned leave</strong> instead — especially for FMLA-qualifying conditions or in states with mandatory sick leave laws.
                </p>
              </div>
              <div className="bg-gold/5 border border-yellow-200 rounded-2xl p-4">
                <h3 className="font-bold text-gold-muted mb-2">Sometimes Allowed</h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  In states without mandatory sick leave laws, and for non-FMLA absences, employers may have more discretion — <strong>but only if their written policy explicitly states this</strong>.
                </p>
              </div>
            </div>
            <div className="bg-gold/5 border border-gold/20 rounded-2xl p-4 text-gold-muted text-sm">
              <strong>Disclaimer:</strong> This guide provides general legal information, not legal advice. For your specific situation, consult a licensed employment attorney.
            </div>
          </section>

          {/* Key Difference */}
          <section id="what-is-earned-leave" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Earned Leave vs Sick Leave: The Key Difference</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              These are <strong>two separate entitlements</strong> that exist for different purposes. Conflating them is exactly what some employers try to do — and it costs workers real money.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-cream-dark">
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Aspect</th>
                    <th className="text-left p-3 font-semibold text-gold-muted border border-ink/10 bg-ink/5">Earned Leave / PTO</th>
                    <th className="text-left p-3 font-semibold text-green-700 border border-ink/10 bg-sage/5">Sick Leave</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveComparisonRows.map(([aspect, earned, sick], i) => (
                    <tr key={aspect} className={i % 2 === 0 ? 'bg-paper' : 'bg-cream-dark/50'}>
                      <td className="p-3 font-medium text-gray-800 border border-ink/10">{aspect}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{earned}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{sick}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink/80 leading-relaxed">
              <strong>Why does this matter?</strong> Earned leave often has a cash value — in many US states (like California), unused vacation must be paid out when you leave. Sick leave typically is not. If your employer forces you to use vacation for illness, you&apos;re losing money that you&apos;re legally entitled to.
            </p>
          </section>

          {/* When Legal */}
          <section id="when-legal" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">When Can Your Boss Legally Force Earned Leave?</h2>
            <div className="space-y-4">
              {whenLegalReasons.map((item) => (
                <div key={item.title} className="bg-cream-dark/50 border border-ink/10 rounded-2xl p-4">
                  <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When Illegal */}
          <section id="when-illegal" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">When It Is Illegal to Force Earned Leave</h2>
            <div className="space-y-4">
              {whenIllegalReasons.map((item) => (
                <div key={item.title} className="bg-coral/5 border border-coral/15 rounded-2xl p-4">
                  <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                  <p className="text-coral text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mid Ad */}
          <AdSlot slot="article-mid" format="rectangle" className="h-60 my-8" />

          {/* FMLA Concurrent Use */}
          <section id="fmla-concurrent" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">The FMLA Concurrent Use Rule (Important!)</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Here&apos;s where it gets nuanced. Under FMLA, your employer <strong>CAN require you to use accrued paid leave (including vacation/PTO) concurrently with FMLA leave</strong> — but only if their written policy says so.
            </p>
            <div className="bg-ink/5 border border-ink/10 rounded-2xl p-5 mb-4">
              <h3 className="font-semibold text-ink mb-2">What &ldquo;Concurrent Use&rdquo; Means</h3>
              <p className="text-ink/80 text-sm leading-relaxed mb-3">
                If you take 12 weeks of FMLA leave, your employer can require that your accrued PTO/vacation runs simultaneously — so you&apos;re paid during FMLA instead of taking unpaid leave. This is <em>not</em> the same as denying your sick leave.
              </p>
              <div className="bg-paper rounded-lg p-3 border border-ink/5">
                <p className="text-sm text-ink/80">
                  <strong>Key distinction:</strong> They can make your paid leave <em>run alongside</em> FMLA. They <strong>cannot</strong> make you use vacation <em>instead of</em> sick leave when sick leave is available and the absence qualifies for sick leave.
                </p>
              </div>
            </div>
            <p className="text-ink/80 text-sm">
              <strong>Bottom line:</strong> If your employer is saying &ldquo;use your vacation days because you&apos;re sick,&rdquo; that&apos;s different from the FMLA concurrent use rule. The former may be illegal; the latter is permitted under specific conditions.
            </p>
          </section>

          {/* India Section */}
          <section id="india-rules" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">
              India-Specific Rules: EL, CL, SL, and LWP
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              The recent <strong>Noida founder incident</strong> (April 2026) — where a startup founder refused to approve a same-day sick leave and threatened to mark it as Leave Without Pay (LWP) — highlights a common misunderstanding of Indian labor law.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-cream-dark">
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Leave Type</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Full Name</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Purpose</th>
                    <th className="text-left p-3 font-semibold text-ink/80 border border-ink/10">Can Employer Force Substitution?</th>
                  </tr>
                </thead>
                <tbody>
                  {indiaLeaveTypes.map(([type, full, purpose, canForce], i) => (
                    <tr key={type} className={i % 2 === 0 ? 'bg-paper' : 'bg-cream-dark/50'}>
                      <td className="p-3 font-bold text-ink border border-ink/10">{type}</td>
                      <td className="p-3 text-ink/80 border border-ink/10">{full}</td>
                      <td className="p-3 text-slate border border-ink/10">{purpose}</td>
                      <td className="p-3 border border-ink/10">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${canForce === 'No' ? 'bg-coral/10 text-coral' : canForce === 'Sometimes' ? 'bg-yellow-100 text-yellow-700' : 'bg-cream-dark text-slate'}`}>
                          {canForce}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <h3 className="font-semibold text-orange-900 mb-2">What Indian Law Actually Says</h3>
              <ul className="space-y-2 text-orange-800 text-sm">
                {[
                  'Under the Factories Act and most state Shops & Establishments Acts, Sick Leave (SL) and Earned Leave (EL) are separate entitlements.',
                  'An employer cannot unilaterally convert your SL application into EL deduction without your consent.',
                  'Marking a legitimate sick leave as LWP (Leave Without Pay) when SL balance exists may constitute wrongful deduction of wages.',
                  'The "are you informing or requesting approval?" response for sick leave is legally problematic — sick leave is a right, not a privilege requiring approval in most states.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What To Do */}
          <section id="what-to-do" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">6 Steps to Take Right Now</h2>
            <div className="space-y-4">
              {actionSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-ink text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{step.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Search CTA */}
            <div className="mt-8 bg-ink/5 border border-ink/10 rounded-2xl p-5">
              <h3 className="font-bold text-ink mb-2">
                Is this a pattern? It might be time to move on.
              </h3>
              <p className="text-ink/80 text-sm mb-3">
                If your employer consistently violates your leave rights, that&apos;s a red flag about the entire culture. Thousands of employees use these platforms to find workplaces that actually respect their rights.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.indeed.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-ink text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-ink-soft transition-colors"
                >
                  Search Jobs on Indeed →
                </a>
                <a
                  href="https://www.ziprecruiter.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="border border-gold/30 text-gold-muted px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold/10 transition-colors"
                >
                  Try ZipRecruiter →
                </a>
              </div>
            </div>
          </section>

          {/* Scripts */}
          <section id="scripts" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">What to Say to Your Manager</h2>
            <p className="text-ink/80 mb-5">
              Use these professionally worded responses to push back without escalating unnecessarily.
            </p>
            <div className="space-y-5">
              {responseScripts.map((script) => (
                <div key={script.scenario} className="border border-ink/10 rounded-2xl overflow-hidden">
                  <div className="bg-cream-dark/50 px-4 py-2 border-b border-ink/10">
                    <span className="text-sm font-semibold text-ink/80">Scenario: {script.scenario}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate mb-2 uppercase tracking-wide font-medium">What to say:</p>
                    <blockquote className="bg-ink/5 border-l-4 border-blue-500 p-3 rounded-r-lg text-sm text-gray-800 italic leading-relaxed">
                      &ldquo;{script.response}&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate mt-2">{script.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Ad */}
          <AdSlot slot="article-bottom" format="horizontal" className="h-24 my-8" />

          {/* FAQ */}
          <section id="faq" className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-6">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl font-bold mb-3">Ready to Leave on Your Own Terms?</h2>
            <p className="text-sage-light mb-6">
              If a toxic workplace is the issue, our free resignation letter generator helps you leave professionally — protecting your reputation and references.
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

// ─── Data ───────────────────────────────────────────────────────────────────

const viralEvents = [
  {
    date: 'Apr 9, 2026',
    title: 'Reddit r/antiwork goes viral',
    desc: 'A manager demanded an employee use earned leave for sick days AND submit their prescription for review. The post got 80K+ upvotes.',
  },
  {
    date: 'Apr 8, 2026',
    title: '"Come to office, we\'ll see" — Reddit India',
    desc: 'A manager\'s response to a sick leave request went viral on r/India, sparking debate about employee rights in Indian startups.',
  },
  {
    date: 'Apr 13-14, 2026',
    title: 'Noida startup founder denies same-day sick leave',
    desc: 'A founder threatened to mark a legitimate sick day as LWP (Leave Without Pay) instead of deducting from the employee\'s sick leave balance. Reported by Moneycontrol.',
  },
];

const leaveComparisonRows = [
  ['Purpose', 'Vacation, rest, personal time', 'Illness, injury, medical care'],
  ['Notice Required', 'Usually advance notice needed', 'No advance notice for emergencies'],
  ['Cash Value on Exit', 'Often paid out (varies by state/country)', 'Rarely paid out'],
  ['Legal Protection', 'No federal US mandate', 'FMLA + state laws protect sick leave'],
  ['Manager Approval', 'Required in most cases', 'Cannot be unreasonably denied'],
  ['India Equivalent', 'Earned Leave (EL) / Privilege Leave (PL)', 'Sick Leave (SL) / Medical Leave'],
];

const whenLegalReasons = [
  {
    title: 'No mandatory sick leave law in your state/country',
    desc: 'In US states without mandatory paid sick leave (e.g., Texas, Florida, Georgia), employers have more discretion over leave policies. If your company policy says PTO covers all absences, they may be within their rights.',
  },
  {
    title: 'Your company uses a unified PTO bank',
    desc: 'Some companies combine sick and vacation into a single PTO pool. If this is clearly stated in your employment contract or handbook, your employer can require you to draw from that pool for illness.',
  },
  {
    title: 'You have no sick leave balance remaining',
    desc: 'If you\'ve exhausted your sick leave entitlement, your employer may require you to use vacation/earned leave or take unpaid leave for additional absences.',
  },
  {
    title: 'FMLA concurrent use (with written policy)',
    desc: 'Under FMLA, employers can require paid leave to run concurrently with FMLA leave — but this is about running them simultaneously, not substituting one for the other.',
  },
];

const whenIllegalReasons = [
  {
    title: 'You have sick leave available and your state mandates it',
    desc: 'In California, New York, Washington, Illinois, and 15+ other states with mandatory paid sick leave laws, your employer cannot force you to use vacation when you have accrued sick leave. Doing so violates state labor law.',
  },
  {
    title: 'The absence qualifies for FMLA and you have sick leave',
    desc: 'For FMLA-qualifying conditions, your employer cannot deny your sick leave and force vacation instead. They can require concurrent use of both, but cannot eliminate your sick leave entitlement.',
  },
  {
    title: 'Your employment contract explicitly separates the two',
    desc: 'If your contract or employee handbook lists sick leave and vacation as separate entitlements, forcing substitution may breach your employment contract — giving you grounds for a legal claim.',
  },
  {
    title: 'It\'s being applied discriminatorily',
    desc: 'If your manager only forces earned leave substitution for certain employees (based on gender, race, disability, etc.) while allowing others to use sick leave normally, this is illegal discrimination.',
  },
  {
    title: 'India: Marking SL as LWP when SL balance exists',
    desc: 'Under Indian labor law, if an employee has a sick leave balance and submits a valid sick leave application, marking it as LWP constitutes wrongful wage deduction and may violate the Payment of Wages Act.',
  },
];

const indiaLeaveTypes = [
  ['EL', 'Earned Leave / Privilege Leave', 'Vacation, planned time off', 'No'],
  ['SL', 'Sick Leave / Medical Leave', 'Illness, injury, medical appointments', 'No'],
  ['CL', 'Casual Leave', 'Short unplanned personal absences', 'Sometimes'],
  ['LWP', 'Leave Without Pay', 'When all paid leave is exhausted', 'Only if SL balance is zero'],
];

const actionSteps = [
  {
    step: '1',
    title: 'Check Your Leave Balance Immediately',
    desc: 'Log into your HR system and screenshot your current sick leave and earned leave balances. This is your evidence that sick leave was available when the request was made.',
  },
  {
    step: '2',
    title: 'Review Your Employment Contract and Handbook',
    desc: 'Find the exact language about sick leave and vacation. Are they listed as separate entitlements? Does the policy say anything about substitution? The written policy is what matters legally.',
  },
  {
    step: '3',
    title: 'Respond in Writing (Email, Not Verbal)',
    desc: 'Reply to your manager\'s request via email. State clearly that you have sick leave available and are requesting it be applied. Keep the tone professional — you\'re creating a paper trail, not starting a fight.',
  },
  {
    step: '4',
    title: 'Check Your State/Country\'s Sick Leave Law',
    desc: 'Look up whether your state or country has mandatory sick leave protections. If it does, cite the specific law in your written response to HR. This often resolves the issue immediately.',
  },
  {
    step: '5',
    title: 'Escalate to HR in Writing',
    desc: 'If your manager persists, escalate to HR with a written complaint. Frame it as: "I want to ensure our leave policy is being applied correctly per [state law / company handbook]." Avoid accusatory language.',
  },
  {
    step: '6',
    title: 'File a Complaint if Rights Are Violated',
    desc: 'US: File with your state\'s Department of Labor or the US DOL Wage and Hour Division (for FMLA violations). India: File with the Labour Commissioner. These are free processes with real enforcement power.',
  },
];

const responseScripts = [
  {
    scenario: 'Manager says "use your PTO/vacation for this sick day"',
    response: 'Hi [Manager], I wanted to clarify — I have [X] sick leave days available in my balance. Per our company policy and [state] sick leave law, I\'d like to apply this absence against my sick leave entitlement rather than my vacation balance. Could you confirm this has been updated in the system? Thanks.',
    note: 'Send via email. Attach a screenshot of your leave balance if possible.',
  },
  {
    scenario: 'Manager asks "are you informing me or requesting approval?"',
    response: 'I\'m notifying you of my sick leave as required by our notification policy. Under [company policy / state law], sick leave for illness does not require manager approval — it requires notification, which I\'m providing now. I\'ll keep you updated on my expected return date.',
    note: 'This is a common tactic to make you feel like sick leave is discretionary. It usually isn\'t.',
  },
  {
    scenario: 'India: Manager threatens to mark as LWP',
    response: 'I\'d like to formally request that this absence be recorded as Sick Leave (SL), as I have [X] SL days available in my balance. Marking it as LWP when SL balance exists would constitute a deduction from my wages without my consent, which may not be permissible under the Payment of Wages Act. I\'m happy to provide a medical certificate if required per company policy.',
    note: 'Cite the Payment of Wages Act, 1936. This usually stops the LWP threat immediately.',
  },
];

const pageFaqs = [
  {
    q: 'Can my employer force me to use vacation days when I\'m sick?',
    a: 'In most cases, no — especially if you have sick leave available and your state has mandatory sick leave laws (CA, NY, WA, IL, and 15+ others). In states without mandatory sick leave laws, it depends on your company\'s written policy. Always check your employee handbook first.',
  },
  {
    q: 'What is LWP and can my employer mark sick leave as LWP?',
    a: 'LWP (Leave Without Pay) is used when an employee has no paid leave balance remaining. If you have sick leave (SL) balance available and submit a valid sick leave application, your employer generally cannot mark it as LWP — doing so may constitute wrongful wage deduction under Indian labor law.',
  },
  {
    q: 'My manager said "are you informing or requesting approval?" for sick leave. Is this legal?',
    a: 'This is a common intimidation tactic. In most jurisdictions, sick leave for genuine illness is a right that requires notification, not approval. Your manager cannot deny sick leave simply by framing it as a request. Document this response in writing and escalate to HR if it continues.',
  },
  {
    q: 'Can my employer require a doctor\'s note to approve sick leave?',
    a: 'Yes, most employers can require a doctor\'s note — especially for absences longer than 1-3 days. However, they cannot retroactively deny sick leave and convert it to vacation just because you didn\'t provide a note immediately. They must follow their own written policy on documentation requirements.',
  },
  {
    q: 'What if my company uses a combined PTO bank (no separate sick leave)?',
    a: 'If your company has a unified PTO policy (no separate sick/vacation buckets), your employer can require you to use PTO for illness. However, in states with mandatory sick leave laws, even PTO policies must comply — meaning a portion of your PTO must be usable for sick leave purposes.',
  },
  {
    q: 'Can I be fired for refusing to use vacation for sick leave?',
    a: 'If your sick leave rights are legally protected (FMLA, state law, or contract), you cannot be legally terminated for asserting those rights. Retaliation for exercising protected leave rights is illegal. Document everything and consult an employment attorney if you face termination threats.',
  },
];
