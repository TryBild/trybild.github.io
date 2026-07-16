import { PRODUCTS, ProductCard } from '@/components/common/ProductCard'

export function Products({ id }: { id?: string }) {
  return (
    <section id={id} className="max-w-[1200px] mx-auto px-6 py-20 md:py-20">
      <h2 className="fade-up text-[32px] font-semibold text-charcoal">// Our products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
