export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:px-12 text-foreground bg-background">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>

        <p>
          Your privacy is important to us. This policy explains how TIMECO collects, uses, and protects your information
          when you use our services.
        </p>

        <h2 className="text-xl font-medium mt-6">1. Information We Collect</h2>
        <p>
          We collect personal information you provide, such as your name and email address, as well as usage data and
          cookies.
        </p>

        <h2 className="text-xl font-medium mt-6">2. How We Use Information</h2>
        <p>
          We use your data to provide and improve our services, personalize your experience, and communicate with you
          about updates or promotions.
        </p>

        <h2 className="text-xl font-medium mt-6">3. Sharing of Information</h2>
        <p>
          We do not sell your information. We may share data with trusted third parties for service provision, legal
          compliance, or business transfers.
        </p>

        <h2 className="text-xl font-medium mt-6">4. Data Security</h2>
        <p>We use industry-standard security practices to protect your data but cannot guarantee absolute security.</p>

        <h2 className="text-xl font-medium mt-6">5. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data. Contact us at privacy@timeco.com for
          any inquiries.
        </p>

        <h2 className="text-xl font-medium mt-6">6. Changes to this Policy</h2>
        <p>
          We may update this policy from time to time. Continued use of our services means you accept the updated terms.
        </p>

        <p className="text-sm text-muted-foreground mt-10">
          Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </main>
  );
}
