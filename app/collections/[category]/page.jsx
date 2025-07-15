import { notFound } from 'next/navigation';
import Product from '@/components/sections/Product';
import { ProductData } from '@/data';

export default function CategoryPage({ params }) {
  const { category } = params;
  const categorySlug = category.toLowerCase();

  const products = ProductData.filter((p) => {
    if (categorySlug === 'new') return p.badge === 'New';
    if (categorySlug === 'best-sellers') return p.badge === 'Popular';
    return p.category.toLowerCase() === categorySlug;
  });

  if (!products || products.length === 0) notFound();

  const titleMap = {
    men: "Men's Watches",
    women: "Women's Watches",
    new: 'New Arrivals',
    'best-sellers': 'Best Sellers',
    accessories: 'Accessories',
  };

  const title = titleMap[categorySlug] || 'Collection';

  return (
    <main className="px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-10 text-2xl font-semibold text-left">{title}</h1>
        <Product title="" products={products} sectionClass="pt-0" />
      </div>
    </main>
  );
}
