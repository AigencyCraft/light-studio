import { EnquiryForm } from "./enquiry-form";

export function EnquirySection() {
  return (
    <section id="enquire" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Enquire Now</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Begin Your Lighting Journey
          </h2>
          <div className="gold-rule mt-6 w-20" />
          <p className="mt-6 max-w-md text-muted-foreground">
            Share a few details and our team will help you find the perfect lighting for your home —
            from first idea to final installation.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            {[
              "Personalised product recommendations",
              "Pricing & availability on request",
              "Guidance on size, finish & placement",
              "Friendly, no-pressure assistance",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
