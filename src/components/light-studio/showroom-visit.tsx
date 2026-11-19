import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { BRAND } from "@/lib/light-studio-data";

export function ShowroomVisit() {
  return (
    <section id="visit" className="section-pad relative bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit Our Showroom</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">
            Experience Light Studio in Person
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Light Studio Raipur location map"
              src="https://www.google.com/maps?q=Civil+Lines+Raipur+Chhattisgarh&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-border bg-background/60 p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">Location</h3>
                <p className="mt-1 text-sm text-muted-foreground">{BRAND.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">Contact</h3>
                <a
                  href={BRAND.phoneHref}
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {BRAND.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-medium text-foreground">Opening Hours</h3>
                <ul className="mt-2 space-y-1.5">
                  {BRAND.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm text-muted-foreground">
                      <span>{h.day}</span>
                      <span className="text-foreground/80">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={BRAND.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              Call the Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
