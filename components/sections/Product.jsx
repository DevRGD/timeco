import ProductCard from '../cards/ProductCard';

export default function ProductSection({ title, products = [], sectionClass = '', gridClass = '' }) {
  return (
    <section
      className={`min-h-screen flex items-center bg-background text-foreground px-6 py-16 md:px-12 ${sectionClass}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-left text-2xl font-semibold">{title}</h2>

        <div className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${gridClass}`}>
          {products.map((p) => (
            <ProductCard key={p.id} product={{ ...p, href: `/collections/${p.category?.toLowerCase()}/${p.slug}` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
