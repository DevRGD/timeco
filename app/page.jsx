'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Product from '@/components/sections/Product';
import { ProductData } from '@/data';

export default function Page() {
  const [products, setProducts] = useState({
    featured: [],
    mostSell: [],
    newArrival: [],
    offerZone: [],
  });

  useEffect(() => {
    const assignRandomBadge = (product) => {
      const BADGE_POOL = ['New', 'Popular', 'Trending', 'Sale', 'Exclusive', null];
      return {
        ...product,
        badge: product.badge || BADGE_POOL[Math.floor(Math.random() * BADGE_POOL.length)],
      };
    };

    // Example logic to split the products (this is arbitrary – you can change the logic)
    const featured = ProductData.slice(0, 2).map(assignRandomBadge);
    const mostSell = ProductData.slice(2, 4).map(assignRandomBadge);
    const newArrival = ProductData.filter((p) => p.badge === 'New');
    const offerZone = ProductData.filter((p) => p.discount > 0);

    setProducts({
      featured,
      mostSell,
      newArrival,
      offerZone,
    });
  }, []);

  return (
    <main className="bg-background text-foreground pt-16">
      <Hero />
      <Product
        title="Featured Collection"
        products={products.featured}
        sectionClass="bg-highlight text-accent-foreground"
      />
      <Product title="Most Sell" products={products.mostSell} sectionClass="bg-muted text-muted-foreground" />
      <Product
        title="New Arrival"
        products={products.newArrival}
        sectionClass="bg-highlight text-highlight-foreground"
      />
      <Product title="Offer Zone" products={products.offerZone} />
    </main>
  );
}
