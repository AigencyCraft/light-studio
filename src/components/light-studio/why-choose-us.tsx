import { Layers, Sparkle, ShieldCheck, Headset } from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "Unmatched Variety",
    description:
      "From crystal chandeliers to minimalist pendants, hundreds of designs under one roof — for every room and budget.",
  },
  {
    icon: Sparkle,
    title: "Contemporary Designs",
    description:
      "A constantly refreshed collection of modern, designer and timeless pieces that keep your space ahead of trend.",
  },
  {
    icon: ShieldCheck,
    title: "Assured Quality",
    description:
      "Premium materials, durable finishes and trusted brands — every product chosen for longevity and elegance.",
  },
  {
    icon: Headset,
    title: "Personalised Assistance",
    description:
      "Our team helps you choose the right size, finish and style for your space, with honest, expert guidance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad relative bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            The Light Studio Difference
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group rounded-2xl border border-border bg-background/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
