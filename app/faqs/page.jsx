import { faqs } from '@/data';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight mb-10">Frequently Asked Questions</h1>

        <dl className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <dt className="text-lg font-medium">{faq.question}</dt>
              <dd className="mt-2 text-muted-foreground text-sm leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
