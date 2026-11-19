import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { trackEnquiry } from "@/lib/enquiry-tracking";

const PRODUCT_OPTIONS = [
  "Chandeliers",
  "Pendant Lights",
  "Ceiling Lights",
  "Wall Lights",
  "Decorative Lights",
  "Other / General Enquiry",
];

const DEFAULT_INTEREST = PRODUCT_OPTIONS[0] ?? "Chandeliers";

type FormErrors = {
  name?: string;
  phone?: string;
};

type Status = "idle" | "submitting" | "success";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    productInterest: DEFAULT_INTEREST,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) {
      e.phone = "Please enter your phone number.";
    } else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
      e.phone = "Please enter a valid phone number.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const trimmedMessage = form.message.trim();
      trackEnquiry({
        name: form.name.trim(),
        phone: form.phone.trim(),
        productInterest: form.productInterest,
        ...(trimmedMessage ? { message: trimmedMessage } : {}),
      });
      // Brief delay for UX feedback
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setForm({ name: "", phone: "", productInterest: DEFAULT_INTEREST, message: "" });
    } catch {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-primary/30 bg-background/60 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-4 font-display text-2xl font-medium text-foreground">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your enquiry has been received. Our team will reach out to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-background/60 p-7 sm:p-9"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="ls-name"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id="ls-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-xl border border-input bg-ink/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="ls-phone"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Phone Number
          </label>
          <input
            id="ls-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-input bg-ink/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <label
            htmlFor="ls-interest"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Product Interest
          </label>
          <select
            id="ls-interest"
            value={form.productInterest}
            onChange={(e) => setForm({ ...form, productInterest: e.target.value })}
            className="w-full rounded-xl border border-input bg-ink/40 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {PRODUCT_OPTIONS.map((o) => (
              <option key={o} value={o} className="bg-ink text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="ls-message"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Message <span className="text-muted-foreground/60">(optional)</span>
          </label>
          <textarea
            id="ls-message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your space or what you're looking for…"
            className="w-full resize-none rounded-xl border border-input bg-ink/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Enquiry
            </>
          )}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          We'll get back to you within one business day.
        </p>
      </div>
    </form>
  );
}
