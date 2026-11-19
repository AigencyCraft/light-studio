import { BRAND } from "@/lib/light-studio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-foreground">
              Light<span className="gold-text"> Studio</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">Raipur</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
            <p>{BRAND.address}</p>
            <a href={BRAND.phoneHref} className="transition-colors hover:text-primary">
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-primary">
              {BRAND.email}
            </a>
          </div>
        </div>

        <div className="gold-rule mt-10" />

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND.name} {BRAND.city}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
