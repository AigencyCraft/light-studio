import { COLLECTIONS } from "@/lib/light-studio-data";

export function Collections() {
  return (
    <section id="collections" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Collections</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Lighting for Every Space
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            From grand chandeliers to subtle accent lighting, explore categories crafted to suit
            every interior and every mood.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <a
              key={c.name}
              href="#enquire"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-medium text-ivory">{c.name}</h3>
                <p className="mt-1 text-sm text-ivory/70">{c.description}</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Enquire →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
