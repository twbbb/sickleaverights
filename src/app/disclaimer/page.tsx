import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — SickLeaveRights',
  description:
    'Legal disclaimer for SickLeaveRights.com. The information on this site is for general informational purposes only and does not constitute legal advice.',
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: April 14, 2025</p>

      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-8">
        <p className="text-yellow-900 font-semibold text-lg mb-1">⚠️ Not Legal Advice</p>
        <p className="text-yellow-800 text-sm leading-relaxed">
          The content on SickLeaveRights.com is provided for general informational purposes only.
          Nothing on this website constitutes legal advice, and no attorney-client relationship is
          formed by using this site.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. General Information Only</h2>
          <p className="text-gray-700 leading-relaxed">
            The information provided on SickLeaveRights.com (&quot;the Site&quot;), including articles,
            tools, templates, and calculators, is for general informational and educational
            purposes only. It is not intended to be, and should not be construed as, legal advice
            regarding any legal matter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. No Attorney-Client Relationship</h2>
          <p className="text-gray-700 leading-relaxed">
            Use of this Site does not create an attorney-client relationship between you and
            SickLeaveRights.com or any of its contributors. For advice about your specific legal
            situation, you should consult a licensed attorney in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We make every effort to ensure the information on this site is accurate and up to
            date. However, laws and regulations change frequently, and the information may not
            reflect the most recent legal developments, court decisions, or changes in the law.
            We make no warranties, express or implied, about the completeness, accuracy,
            reliability, or suitability of any information on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Resignation Letter Templates</h2>
          <p className="text-gray-700 leading-relaxed">
            The resignation letter templates provided on this site are general templates for
            educational purposes. They are not tailored to your specific employment situation,
            jurisdiction, or contract. We strongly recommend reviewing any generated letter
            before use and consulting with an employment attorney if your situation involves
            legal complexity (such as non-compete agreements, pending disputes, or severance
            negotiations).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Affiliate Disclosure</h2>
          <p className="text-gray-700 leading-relaxed">
            Some links on this site are affiliate links. If you click on these links and make a
            purchase or sign up, we may receive a commission at no extra cost to you. We only
            link to services we believe may be genuinely helpful to our users. Our editorial
            content is not influenced by affiliate relationships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. External Links</h2>
          <p className="text-gray-700 leading-relaxed">
            This Site may contain links to external websites. We have no control over the
            content, accuracy, or practices of those sites. We are not responsible for any
            loss or damage arising from your use of external links.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted by law, SickLeaveRights.com and its owners,
            contributors, and affiliates shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising from your use of this site
            or reliance on any information provided herein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Consult a Professional</h2>
          <p className="text-gray-700 leading-relaxed">
            Employment law is complex and varies significantly by state, country, and individual
            circumstance. If you are facing a serious workplace legal issue — such as wrongful
            termination, discrimination, wage theft, or FMLA violations — please consult a
            qualified employment attorney. Many offer free initial consultations.
          </p>
        </section>
      </div>
    </div>
  );
}
