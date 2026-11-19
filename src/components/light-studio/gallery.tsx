import { GALLERY_IMAGES } from "@/lib/light-studio-data";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad relative bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Inspiration Gallery</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Lit to Inspire
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Real interiors and showroom moments — see how the right lighting transforms a space.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 3 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
