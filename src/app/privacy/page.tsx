import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — SickLeaveRights',
  description: 'Privacy Policy for SickLeaveRights.com — how we collect, use, and protect your information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl text-ink mb-2">Privacy Policy</h1>
      <p className="text-slate text-sm mb-8">Last updated: April 14, 2026</p>

      <div className="prose prose-ink max-w-none space-y-8">
        <section>
          <h2 className="font-display text-xl text-ink mb-3">1. Introduction</h2>
          <p className="text-ink/80 leading-relaxed">
            Welcome to SickLeaveRights.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">2. Information We Collect</h2>
          <p className="text-ink/80 leading-relaxed mb-3">
            <strong>Information You Provide:</strong> When you use our Resignation Letter
            Generator, you may enter your name, manager&apos;s name, company name, and last
            working day. <strong>This information is processed entirely in your browser and is
            never sent to our servers.</strong> We do not store, collect, or transmit the
            personal information you enter into our tools.
          </p>
          <p className="text-ink/80 leading-relaxed">
            <strong>Automatically Collected Information:</strong> Like most websites, we
            automatically collect certain information when you visit, including IP address,
            browser type, referring URLs, and pages viewed. This is collected through analytics
            services (Google Analytics 4) and advertising services (Google AdSense).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">3. Cookies</h2>
          <p className="text-ink/80 leading-relaxed mb-3">
            We use cookies and similar tracking technologies to improve your experience:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-ink/80">
            <li>
              <strong>Google Analytics (GA4):</strong> Collects anonymous usage statistics to
              help us understand how visitors use our site. Google&apos;s privacy policy is available
              at https://policies.google.com/privacy.
            </li>
            <li>
              <strong>Google AdSense:</strong> Serves personalized or non-personalized ads.
              Google uses cookies to serve ads based on prior visits. You can opt out at
              https://www.google.com/settings/ads.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">4. GDPR (European Users)</h2>
          <p className="text-ink/80 leading-relaxed">
            If you are located in the European Economic Area, you have certain rights regarding
            your personal data, including the right to access, correct, or delete personal data
            we hold about you. As we do not collect personal data from our tools directly, your
            main interaction is with our analytics and advertising providers. You may withdraw
            consent for analytics cookies at any time by using your browser settings or a
            cookie opt-out tool.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">5. CCPA (California Residents)</h2>
          <p className="text-ink/80 leading-relaxed">
            California residents have rights under the California Consumer Privacy Act (CCPA),
            including the right to know what personal information is collected and the right to
            opt out of the sale of personal information. We do not sell personal information.
            We share anonymized usage data with Google Analytics for analytics purposes only.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">6. Third-Party Links</h2>
          <p className="text-ink/80 leading-relaxed">
            Our site may contain links to third-party websites (such as Indeed, ZipRecruiter,
            or legal services). We have no control over the content, privacy policies, or
            practices of any third-party site. We encourage you to review the privacy policy
            of every site you visit.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">7. Children&apos;s Privacy</h2>
          <p className="text-ink/80 leading-relaxed">
            Our service is not directed to children under 13. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">8. Changes to This Policy</h2>
          <p className="text-ink/80 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink mb-3">9. Contact Us</h2>
          <p className="text-ink/80 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us via the
            contact information on our website.
          </p>
        </section>
      </div>
    </div>
  );
}
