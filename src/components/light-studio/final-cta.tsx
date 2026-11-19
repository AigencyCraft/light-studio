import { ArrowRight, Phone } from "lucide-react";
import { BRAND } from "@/lib/light-studio-data";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-ink to-charcoal" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
          Let There Be <span className="gold-text">Beautiful Light</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ivory/75">
          Reach out to our team or visit the Raipur showroom — and let us help you find the lighting
          that brings your space to life.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#enquire"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-semibold text-ivory transition-all hover:border-primary hover:bg-ink/40"
          >
            <Phone className="h-4 w-4" />
            {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
