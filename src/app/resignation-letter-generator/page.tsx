import type { Metadata } from 'next';
import { generateMetadata as genMeta, howToSchema } from '@/lib/seo';
import ResignationForm from '@/components/ResignationForm';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  ...genMeta({
    title: 'Free Resignation Letter Generator — Professional Templates (2025)',
    description:
      'Generate a professional resignation letter in seconds. 6 tone styles: two-week notice, immediate resignation, friendly, formal, toxic boss, and career change. Free, instant, no sign-up.',
    path: '/resignation-letter-generator/',
  }),
};

export default function ResignationLetterGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema()) }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-600 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Free Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Free Resignation Letter Generator
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Create a professional resignation letter in under 60 seconds. 6 tone styles, fully
            customizable, copy or download instantly.
          </p>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <AdSlot slot="top-banner" format="horizontal" className="h-16 mb-2" />
      </div>

      {/* Main Tool */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <ResignationForm />
      </section>

      {/* Mid Ad */}
      <div className="max-w-6xl mx-auto px-4">
        <AdSlot slot="mid-content" format="horizontal" className="h-24 my-4" />
      </div>

      {/* FAQ / SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/can-boss-deny-sick-leave/"
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900 mb-1">Can Your Boss Deny Sick Leave?</div>
              <div className="text-sm text-gray-500">Know your legal rights under FMLA and state laws.</div>
            </Link>
            <Link
              href="/blog/earned-leave-vs-sick-leave/"
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900 mb-1">Earned Leave vs Sick Leave</div>
              <div className="text-sm text-gray-500">Understand the difference and how to use each type.</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    q: 'Do I legally have to give two weeks notice?',
    a: "In most US states, employment is 'at-will,' meaning you are not legally required to give two weeks notice. However, it is professional courtesy that protects your reputation and references. Check your employment contract as some roles have contractual notice periods.",
  },
  {
    q: 'What should I include in a resignation letter?',
    a: "A resignation letter should include: (1) your formal notice of resignation, (2) your last working day, (3) a brief thank-you for opportunities provided, and (4) an offer to help with the transition. Keep it concise and professional.",
  },
  {
    q: 'Can I resign via email?',
    a: "Yes, resigning via email is generally acceptable in most modern workplaces. However, having a conversation with your manager first (even briefly) is considered more professional. Send the formal letter as a follow-up confirmation.",
  },
  {
    q: 'What if I need to resign immediately?',
    a: 'Use the "Immediate Resignation" template. While this may affect references, sometimes it\'s necessary due to health, safety, or hostile work environments. Be professional and brief — you do not need to justify your reasons extensively.',
  },
  {
    q: 'Should I mention salary or benefits in my resignation letter?',
    a: "No. Your resignation letter is not the place to negotiate or discuss grievances. Keep it focused on your notice, gratitude, and transition commitment. Save any benefit/salary discussions for a separate HR conversation.",
  },
  {
    q: 'Will this letter work internationally?',
    a: "The templates follow professional English communication norms used globally. For UK employees, note that statutory notice periods apply. For other countries, verify local requirements. The tone and structure are universally appropriate.",
  },
];
