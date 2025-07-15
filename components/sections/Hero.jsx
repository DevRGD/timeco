import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 text-center md:px-12 bg-background text-foreground">
      <div className="max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Timeless Elegance</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Discover beautifully crafted watches designed to elevate your everyday.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/collections"
            className="rounded-sm bg-accent text-accent-foreground px-6 py-2 font-semibold shadow hover:shadow-md transition"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="rounded-sm border border-border px-6 py-2 font-medium text-foreground hover:text-accent transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
