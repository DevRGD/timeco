import buildMetadata from '@/libs/seo';
import WhyUs from '@/components/sections/WhyUs';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'About TIMECO | Crafted Watches for Modern Times',
  description:
    'Discover TIMECO’s story — from precision engineering to timeless design. Learn how we blend heritage craftsmanship with modern innovation in every watch.',
});

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground pt-16">
      {/* ── Hero Section ───────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:px-12 bg-muted">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight">
            Timeless Craftsmanship,
            <br /> Modern Purpose
          </h1>
          <p className="text-lg text-muted-foreground">
            TIMECO is more than a watch brand — it's a commitment to precision, heritage, and timeless design. Since day
            one, we've set out to redefine timekeeping through elegance, durability, and passion.
          </p>
          <Image
            src="/illustrations/hero-watch.svg"
            alt="Timeco watch illustration"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
      </section>

      {/* ── Mission and Vision ─────────────── */}
      <section className="min-h-screen flex items-center px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Our Story</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Founded by watch enthusiasts and design purists, TIMECO began with one goal — to create watches that
              capture attention without screaming for it. Each design is inspired by heritage timepieces, refined with
              modern sensibility.
            </p>
          </div>
          <Image
            src="/illustrations/story.svg"
            alt="Our Story Illustration"
            width={480}
            height={320}
            className="mx-auto"
          />
        </div>
      </section>

      {/* ── Promise Section ───────────── */}
      <section className="min-h-screen flex items-center bg-muted px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
          <Image
            src="/illustrations/promise.svg"
            alt="Promise Illustration"
            width={480}
            height={320}
            className="mx-auto"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">The TIMECO Promise</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We believe great design is intentional. Every TIMECO watch is built using premium components — from
              stainless steel casings to sapphire crystals — ensuring long-lasting durability and precise timekeeping.
            </p>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship Section ───────────── */}
      <section className="min-h-screen flex items-center px-6 py-20 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Image
            src="/illustrations/craftsmanship.svg"
            alt="Craftsmanship Illustration"
            width={380}
            height={260}
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold text-primary">Crafted for the Connoisseur</h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            Every TIMECO watch is hand-assembled and tested for quality. We work with seasoned artisans and precision
            engineers who understand that even the smallest detail can make the biggest impact.
          </p>
        </div>
      </section>

      {/* ── Sustainability Section ─────────── */}
      <section className="min-h-screen flex items-center bg-muted px-6 py-20 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Image
            src="/illustrations/sustainability.svg"
            alt="Sustainability Illustration"
            width={300}
            height={220}
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-accent">A Future We’re Proud Of</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Sustainability isn’t just a buzzword for us. From eco-conscious packaging to ethical sourcing, we strive to
            build a brand that respects people and the planet. With TIMECO, you wear more than a watch — you wear a
            purpose.
          </p>
        </div>
      </section>

      {/* ── Features Grid (WhyUs Section) ───── */}
      <WhyUs />

      {/* ── Outro ───────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 py-20 text-center md:px-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Join the TIMECO Movement</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Whether it’s your first TIMECO or your fifth, we’re honored to be part of your journey. Time is fleeting —
            wear it well.
          </p>
        </div>
      </section>
    </main>
  );
}
