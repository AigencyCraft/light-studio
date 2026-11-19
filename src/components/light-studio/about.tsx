import { SHOWROOM_IMAGE } from "@/lib/light-studio-data";

const STATS = [
  { value: "500+", label: "Lighting Designs" },
  { value: "12+", label: "Years of Craft" },
  { value: "2000+", label: "Happy Homes" },
  { value: "1", label: "Trusted Showroom" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={SHOWROOM_IMAGE}
              alt="Light Studio Raipur showroom interior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-primary/30 bg-ink/90 px-6 py-5 backdrop-blur-sm sm:block">
            <p className="font-display text-3xl gold-text">Raipur</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Flagship Showroom
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About Light Studio</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            A Curated Lighting Experience
          </h2>
          <div className="gold-rule mt-6 w-20" />
          <p className="mt-6 text-muted-foreground">
            Light Studio Raipur was founded on a simple belief — that the right light can completely
            transform how a space feels. We bring together contemporary design, premium materials
            and a deep understanding of ambiance to help you find lighting that is as expressive as
            it is functional.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our showroom is a living catalogue — a place to see chandeliers, pendants and accent
            lighting in real-room settings, with personalised guidance from a team that cares about
            the details.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold gold-text">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
