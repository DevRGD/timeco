import FeatureCard from '@/components/cards/FeatureCard';

export default function WhyUs() {
  const features = [
    {
      title: 'Timeless Aesthetics',
      icon: '⌚',
      features: ['Classic minimalist design', 'Inspired by vintage luxury', 'Suits formal & casual wear'],
    },
    {
      title: 'Exceptional Craftsmanship',
      icon: '🛠️',
      features: [
        'Premium stainless steel casing',
        'Genuine leather & sapphire glass',
        'Tested for long-term durability',
      ],
    },
    {
      title: 'Global Shipping & Returns',
      icon: '🚚',
      features: ['Free worldwide delivery', 'Trackable & insured shipments', '30-day hassle-free returns'],
    },
    {
      title: 'Eco‑Conscious Manufacturing',
      icon: '🌱',
      features: ['Sustainable packaging', 'Ethically sourced materials', 'Minimal waste production'],
    },
    {
      title: '2‑Year Warranty Coverage',
      icon: '🛡️',
      features: ['Covers movement & defects', 'Easy online claim process', 'Extendable up to 5 years'],
    },
    {
      title: 'Dedicated Support Team',
      icon: '💬',
      features: ['24/7 customer chat support', 'Live consultation with stylists', 'Multilingual assistance available'],
    },
  ];

  return (
    <section className="min-h-screen bg-muted text-foreground flex items-center px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl w-full text-center space-y-12">
        <h2 className="text-3xl font-semibold tracking-tight">Why Timeco?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} features={item.features} />
          ))}
        </div>
      </div>
    </section>
  );
}
