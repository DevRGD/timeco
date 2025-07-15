export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-3xl font-semibold tracking-tight">Shipping & Returns</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Shipping Policy</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We offer complimentary worldwide shipping. All orders are processed within 1–2 business days and shipped via
            secure, trackable carriers.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            You will receive a tracking number as soon as your order is dispatched. Estimated delivery is 5–10 business
            days, depending on destination.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Return Policy</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We accept returns within 30 days of delivery. Products must be unworn, in their original packaging, and
            include all components.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Contact{' '}
            <a href="mailto:returns@timeco.com" className="underline hover:text-accent">
              returns@timeco.com
            </a>{' '}
            to initiate a return. A prepaid shipping label will be provided.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Refunds</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Refunds are processed within 5–7 business days after the returned item is received and inspected.
          </p>
        </section>
      </div>
    </main>
  );
}
