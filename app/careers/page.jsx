'use client';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-3xl font-semibold tracking-tight">Careers at TIMECO</h1>
        <p className="text-muted-foreground text-lg">
          Join our mission to redefine time. At TIMECO, we blend heritage craftsmanship with cutting-edge design. If
          you're passionate about excellence and elegance, we want to hear from you.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Current Openings</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>Senior Product Designer – Remote / Geneva</li>
            <li>Marketing Lead – Paris, France</li>
            <li>Customer Experience Manager – Remote / EU</li>
            <li>Operations Analyst – New York, USA</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">How to Apply</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Send your resume and a brief introduction to{' '}
            <a href="mailto:careers@timeco.com" className="underline hover:text-accent">
              careers@timeco.com
            </a>
            . We review all applications carefully and will contact you if your background aligns with our needs.
          </p>
        </section>
      </div>
    </main>
  );
}
