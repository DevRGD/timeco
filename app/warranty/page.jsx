'use client';

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">Warranty & Repairs</h1>

        <p className="text-muted-foreground mb-6 text-sm">
          We stand by the craftsmanship of every TIMECO timepiece. If something goes wrong, we’ll make it right.
        </p>

        {/* Coverage */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">What's Covered</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Manufacturing defects in movement or craftsmanship</li>
            <li>Battery malfunctions (within warranty period)</li>
            <li>Loose or broken crown, case, or hands due to defect</li>
          </ul>
        </section>

        {/* Not Covered */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">What’s Not Covered</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Normal wear & tear (scratches, fading, strap aging)</li>
            <li>Water damage from misuse</li>
            <li>Damage from unauthorized repairs</li>
            <li>Loss, theft, or accidental breakage</li>
          </ul>
        </section>

        {/* Duration */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Warranty Duration</h2>
          <p className="text-sm text-muted-foreground">
            All TIMECO watches come with a <strong className="text-foreground">2-year international warranty</strong>{' '}
            from the date of delivery. You may also opt to extend your warranty to 5 years at checkout or by registering
            your product.
          </p>
        </section>

        {/* Repairs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Repairs & Claims</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If you experience an issue, submit a claim using the form below. Our support team will respond within 1–2
            business days.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-sm bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold shadow hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            File a Warranty Claim
          </a>
        </section>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground mt-10">Last updated: July 15, {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
