import { PRODUCTS } from "@/lib/light-studio-data";

export function FeaturedProducts() {
  return (
    <section id="products" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured Products</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Signature Pieces
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A selection of our most-loved designs. Enquire for pricing, availability and custom
            finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-medium text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                {p.price && <p className="mt-3 text-sm font-semibold text-primary">{p.price}</p>}
                <a
                  href="#enquire"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-primary/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
