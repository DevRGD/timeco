import Link from 'next/link';
import { ProductData } from '@/data';
import Product from '@/components/sections/Product';

const collectionLinks = {
  "Men's Watches": '/collections/men',
  "Women's Watches": '/collections/women',
  'New Arrivals': '/collections/new',
  'Best Sellers': '/collections/best-sellers',
  Accessories: '/collections/accessories',
};

export default function Page() {
  const products = ProductData;

  const grouped = {
    "Men's Watches": products.filter((p) => p.category.toLowerCase() === 'men'),
    "Women's Watches": products.filter((p) => p.category.toLowerCase() === 'women'),
    'New Arrivals': products.filter((p) => p.badge === 'New'),
    'Best Sellers': products.filter((p) => p.badge === 'Popular'),
    Accessories: products.filter((p) => p.category.toLowerCase() === 'accessories'),
  };

  return (
    <main>
      {Object.entries(grouped).map(([title, items]) =>
        items.length > 0 ? (
          <section key={title} className="px-6 py-16 md:px-12">
            <div className="mx-auto w-full max-w-6xl">
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-left">{title}</h2>
                <Link href={collectionLinks[title]} className="text-sm font-medium text-accent hover:underline">
                  View All →
                </Link>
              </div>
              <Product title="" products={items} sectionClass="pt-0" />
            </div>
          </section>
        ) : null,
      )}
    </main>
  );
}
