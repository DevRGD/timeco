export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:px-12 text-foreground bg-background">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>

        <p>
          Welcome to TIMECO. These Terms of Service govern your use of our website and services. By accessing or using
          our platform, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-medium mt-6">1. Use of Service</h2>
        <p>
          You must be at least 16 years old to use our platform. You agree not to use our services for any unlawful or
          prohibited purpose.
        </p>

        <h2 className="text-xl font-medium mt-6">2. Account</h2>
        <p>
          You are responsible for maintaining the security of your account. We are not liable for any loss or damage
          arising from your failure to comply with this obligation.
        </p>

        <h2 className="text-xl font-medium mt-6">3. Intellectual Property</h2>
        <p>
          All content on this site is the property of TIMECO or its licensors and is protected by intellectual property
          laws. You may not use any content without prior written permission.
        </p>

        <h2 className="text-xl font-medium mt-6">4. Limitation of Liability</h2>
        <p>
          TIMECO shall not be liable for any indirect, incidental, or consequential damages resulting from the use of
          our services.
        </p>

        <h2 className="text-xl font-medium mt-6">5. Changes</h2>
        <p>
          We may modify these Terms at any time. Continued use of the service after changes constitutes acceptance of
          the new terms.
        </p>

        <p className="text-sm text-muted-foreground mt-10">
          Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </main>
  );
}
