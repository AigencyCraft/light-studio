import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/light-studio-data";

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Loved by Raipur Homes
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-lg font-medium text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
