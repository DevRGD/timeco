export default function PressPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-3xl font-semibold tracking-tight">Press & Media</h1>

        <p className="text-muted-foreground text-lg">
          TIMECO is honored to be featured in some of the world’s most respected publications. For all media inquiries,
          press releases, and brand assets, please contact our press team below.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Press Contact</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            For interviews, statements, or product images, reach us at{' '}
            <a href="mailto:press@timeco.com" className="underline hover:text-accent">
              press@timeco.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Recent Features</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>
              “TIMECO’s Take on Modern Minimalism” – <em>GQ Magazine</em>, June 2025
            </li>
            <li>
              “Swiss Precision, Global Appeal” – <em>Monocle</em>, May 2025
            </li>
            <li>
              “Watches Designed for the Next Generation” – <em>Highsnobiety</em>, March 2025
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Media Kit</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Download our logo files, product photography, and brand guidelines in our{' '}
            <a href="/media-kit.zip" className="underline hover:text-accent">
              press kit
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
