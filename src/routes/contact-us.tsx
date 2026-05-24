import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
});

const REGIONS = ["Sydney NSW", "Hunter Valley NSW", "Mudgee NSW", "Singleton NSW", "South Grafton NSW", "Gold Coast QLD", "Sunshine Coast QLD", "Brisbane QLD"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="container-luxe pt-[calc(5rem+2rem)] pb-20 lg:pb-28 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5 space-y-8">
          <div>
            <div className="eyebrow">Reach our studio</div>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl">Speak to a designer.</h2>
          </div>
          <div className="space-y-5">
            <a href="tel:1300318699" className="flex items-start gap-4 group">
              <div className="grid h-11 w-11 place-items-center bg-gold/10 text-gold"><Phone className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Phone</div>
                <div className="font-serif text-lg group-hover:text-gold transition">1300 318 699</div>
              </div>
            </a>
            <a href="mailto:info@grantonhomes.com.au" className="flex items-start gap-4 group">
              <div className="grid h-11 w-11 place-items-center bg-gold/10 text-gold"><Mail className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                <div className="font-serif text-lg group-hover:text-gold transition">info@grantonhomes.com.au</div>
              </div>
            </a>
          </div>

          <div>
            <div className="eyebrow">Where we build</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {REGIONS.map((r) => (
                <div key={r} className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> {r}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border p-8 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First name" name="first" />
              <Field label="Last name" name="last" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Select label="Interested in" name="interest" options={["Custom design", "Knock down rebuild", "Display home visit", "Development enquiry", "Other"]} />
              <Select label="Region" name="region" options={REGIONS} />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Tell us about your project</label>
              <textarea rows={5} className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition" />
            </div>
            <button type="submit" className="btn-gold w-full sm:w-auto">
              {sent ? "Thank you — we'll be in touch" : <>Send enquiry <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        </Reveal>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <select id={name} name={name} className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
