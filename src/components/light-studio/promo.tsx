import { Tag, ArrowRight } from "lucide-react";

const OFFERS = [
  {
    tag: "New Collection",
    title: "The Champagne Gold Edit",
    description:
      "Explore our newest range of gold-finish chandeliers and pendants — now on display at the Raipur showroom.",
    cta: "View Collection",
    href: "#collections",
  },
  {
    tag: "Showroom Offer",
    title: "Complimentary Design Consultation",
    description:
      "Book a visit this month and receive personalised lighting guidance for your entire home — at no cost.",
    cta: "Book a Visit",
    href: "#enquire",
  },
];

export function Promo() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-charcoal to-ink" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold-soft) 0%, transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Current Offers</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ivory sm:text-5xl">
            Featured This Season
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {OFFERS.map((o) => (
            <div
              key={o.title}
              className="group relative overflow-hidden rounded-3xl border border-primary/25 bg-ink/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                <Tag className="h-3 w-3" />
                {o.tag}
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium text-ivory sm:text-3xl">
                {o.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/70">{o.description}</p>
              <a
                href={o.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-soft"
              >
                {o.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
