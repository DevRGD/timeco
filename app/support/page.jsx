import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold mb-6">Support Center</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Need help with your TIMECO order or account? We're here to assist you.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact */}
          <div className="rounded-lg border border-border bg-muted p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Have a question about an order, product, or anything else? Reach out to our team.
            </p>
            <Link href="/contact" className="inline-block mt-2 text-accent hover:underline text-sm font-medium">
              Get in Touch →
            </Link>
          </div>

          {/* FAQs */}
          <div className="rounded-lg border border-border bg-muted p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our frequently asked questions to find quick answers to common topics.
            </p>
            <Link href="/faqs" className="inline-block mt-2 text-accent hover:underline text-sm font-medium">
              Browse FAQs →
            </Link>
          </div>

          {/* Shipping */}
          <div className="rounded-lg border border-border bg-muted p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Shipping & Returns</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Learn more about our delivery times, tracking, and hassle-free return policy.
            </p>
            <Link href="/shipping" className="inline-block mt-2 text-accent hover:underline text-sm font-medium">
              View Shipping Info →
            </Link>
          </div>

          {/* Warranty */}
          <div className="rounded-lg border border-border bg-muted p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Warranty & Repairs</h2>
            <p className="text-sm text-muted-foreground mb-4">
              TIMECO watches include a 2-year warranty. File a warranty claim or learn more.
            </p>
            <Link href="/warranty" className="inline-block mt-2 text-accent hover:underline text-sm font-medium">
              Warranty Details →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
