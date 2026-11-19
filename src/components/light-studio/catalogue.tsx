import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  CATALOGUE,
  CATALOGUE_CATEGORIES,
  catalogueImage,
  requestEnquiry,
  type CatalogueCategoryId,
  type CatalogueProduct,
} from "@/lib/light-studio-data";

type Filter = "all" | CatalogueCategoryId;

const categoryName = (id: CatalogueCategoryId) =>
  CATALOGUE_CATEGORIES.find((c) => c.id === id)?.name ?? id;

export function Catalogue() {
  const [filter, setFilter] = useState<Filter>("all");
  const [preview, setPreview] = useState<CatalogueProduct | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState({ atStart: true, atEnd: false, progress: 0, thumb: 1 });

  const items = useMemo(
    () => (filter === "all" ? CATALOGUE : CATALOGUE.filter((p) => p.category === filter)),
    [filter],
  );

  // Track scroll position for the arrows and the progress bar
  const measure = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setRail({
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft >= max - 4,
      progress: max > 0 ? el.scrollLeft / max : 0,
      thumb: el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
    });
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, measure]);

  // Move by roughly one screen of cards, snapping to the nearest card
  const scrollByPage = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const activeCategory = CATALOGUE_CATEGORIES.find((c) => c.id === filter);

  const enquire = (p: CatalogueProduct) => {
    setPreview(null);
    requestEnquiry({ product: p.name, interest: categoryName(p.category) });
  };

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: CATALOGUE.length },
    ...CATALOGUE_CATEGORIES.map((c) => ({
      id: c.id as Filter,
      label: c.name,
      count: CATALOGUE.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <section id="collections" className="section-pad relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Collection</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Signature Pieces
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            {activeCategory?.blurb ??
              "Bespoke art-glass installations, sky lights, cement block lighting and garden lights. Every piece is made to order. Enquire for sizes, finishes and pricing."}
          </p>
        </div>

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {tabs.map((t) => {
            const active = filter === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(t.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/30 text-muted-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {t.label}
                <span className={`ml-2 ${active ? "opacity-70" : "text-primary/60"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Horizontal product rail: swipe / trackpad / arrows, snapping card by card */}
        <div className="relative">
          <div
            ref={railRef}
            onScroll={measure}
            tabIndex={0}
            aria-label="Products, scroll left or right"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 pt-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((p) => (
              <article
                key={p.slug}
                className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl sm:w-[44%] lg:w-[calc((100%-3.75rem)/4.3)] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]"
              >
                <button
                  type="button"
                  onClick={() => setPreview(p)}
                  className="relative aspect-[4/3] overflow-hidden"
                  aria-label={`View larger photo of ${p.name}`}
                >
                  <img
                    src={catalogueImage(p.slug)}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
                    {categoryName(p.category)}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-medium text-foreground">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreview(p)}
                      className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground/80 transition-all hover:border-primary/50 hover:text-primary"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => enquire(p)}
                      className="inline-flex items-center justify-center rounded-full border border-primary/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Edge fades hint that there is more to scroll */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-background to-transparent transition-opacity lg:block ${rail.atStart ? "opacity-0" : "opacity-100"}`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-background to-transparent transition-opacity lg:block ${rail.atEnd ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Progress + arrows */}
        <div className="mt-8 flex items-center gap-5">
          <div className="relative h-px flex-1 bg-border">
            <div
              className="absolute inset-y-0 bg-primary transition-[left] duration-150"
              style={{
                width: `${rail.thumb * 100}%`,
                left: `${rail.progress * (1 - rail.thumb) * 100}%`,
              }}
            />
          </div>
          <span className="text-xs tabular-nums tracking-widest text-muted-foreground">
            {items.length} pieces
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={rail.atStart}
              aria-label="Scroll products left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={rail.atEnd}
              aria-label="Scroll products right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Larger photo preview */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.name}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
          onKeyDown={(e) => e.key === "Escape" && setPreview(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-primary/30 bg-card lg:grid-cols-[1.25fr_1fr] lg:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setPreview(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-ivory hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-center bg-ink">
              <img
                src={catalogueImage(preview.slug)}
                alt={preview.name}
                className="max-h-[50vh] w-full object-contain lg:max-h-[88vh]"
              />
            </div>
            <div className="flex flex-col p-6 sm:p-8 lg:overflow-y-auto">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {categoryName(preview.category)}
              </p>
              <h3 className="mt-2 pr-10 font-display text-3xl font-medium leading-tight text-foreground">
                {preview.name}
              </h3>
              <div className="gold-rule mt-4 w-16" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/85">{preview.details}</p>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Ideal for
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {preview.idealFor.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Made to order. Size, colour, finish and layout are designed around your space; our
                team will share options and pricing on enquiry.
              </p>

              <button
                type="button"
                onClick={() => enquire(preview)}
                className="mt-6 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 lg:mt-auto"
              >
                Enquire about this piece
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
