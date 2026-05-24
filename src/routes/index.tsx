import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Bath, BedDouble, Car, Maximize, Phone, Play, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { VideoModal } from "@/components/site/VideoModal";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import soulmate from "@/assets/design-soulmate.jpg";
import monaco from "@/assets/design-monaco.jpg";
import french from "@/assets/design-french.jpg";
import chateau from "@/assets/design-chateau.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const DESIGNS = [
  { name: "Soulmate", img: soulmate, beds: 4, baths: 4, cars: 2, sqm: "580sqm", to: "/home-designs#soulmate" },
  { name: "The Monaco", img: monaco, beds: 4, baths: 2, cars: 3, sqm: "—", to: "/home-designs#monaco" },
  { name: "The French Provincial", img: french, beds: 4, baths: 4, cars: 2, sqm: "620sqm", to: "/home-designs#french", featured: true, priceFrom: "$1.45M" },
  { name: "The Chateau", img: chateau, beds: 5, baths: 5, cars: 4, sqm: "—", to: "/home-designs#chateau" },
];

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Crafting Distinctive Residences"
        title="Homes tailored to the way you live."
        subtitle="Award-winning standard designs, custom architecture, and a personalised journey from concept to keys."
        image={heroKitchen}
      />

      {/* Intro */}
      <section className="container-luxe py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="eyebrow">About Us</div>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight">
            Your dream home, <em className="text-gold not-italic">built around you.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:pt-4">
          <p className="text-lg leading-relaxed text-foreground/80">
            Whether you are planning to build your dream home on a vacant block or you are considering a
            complete knock down rebuild, our philosophy is based on servicing your belief and welcoming
            your involvement throughout the design and planning process so that your home is tailored to
            fit your lifestyle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about-us" className="btn-gold">Discover Granton <ArrowRight className="h-4 w-4" /></Link>
            <button onClick={() => setVideoOpen(true)} className="btn-ghost"><Play className="h-4 w-4" /> Watch the film</button>
          </div>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="bg-secondary py-24">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Quality is not an act — it is a habit.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { Icon: Award, title: "Award-winning design", body: "A diverse range of award-winning standard plans, every one of them tailorable to your lifestyle." },
              { Icon: Sparkles, title: "Bespoke craftsmanship", body: "Premium inclusions, considered detailing, and finishes that hold up to a lifetime of living." },
              { Icon: ShieldCheck, title: "End-to-end care", body: "We manage approvals, documentation and certification so your journey is seamless." },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="group h-full border border-border bg-card p-8 lg:p-10 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature designs */}
      <section className="container-luxe py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <div className="eyebrow">Our Signature Designs</div>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl max-w-xl">Four homes. Endless possibilities.</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/home-designs" className="text-sm uppercase tracking-[0.2em] gold-underline hover:text-gold">
              View all designs →
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNS.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <article className="group relative overflow-hidden bg-card border border-border h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
                {d.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">From {d.priceFrom}</div>
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="font-serif text-xl">{d.name}</h3>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Available</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-foreground/80">
                    <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold" />{d.beds}</span>
                    <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" />{d.baths}</span>
                    <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-gold" />{d.cars}</span>
                    <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" />{d.sqm}</span>
                  </div>
                  <Link to={d.to} className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground hover:text-gold transition">
                    View design <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroKitchen} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.18_0.012_60)]/82" />
        </div>
        <div className="container-luxe relative py-24 lg:py-32 text-white text-center">
          <Reveal>
            <div className="eyebrow !text-gold justify-center">Ready to begin?</div>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl max-w-3xl mx-auto">A home of true distinction begins with a conversation.</h2>
            <p className="mt-6 max-w-xl mx-auto text-white/75">
              Speak with our design team about your vision, your block, or a knock down rebuild.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:1300318699" className="btn-gold"><Phone className="h-4 w-4" /> 1300 318 699</a>
              <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] border border-white/40 text-white hover:bg-white hover:text-foreground transition-all">
                Find where we build
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} youtubeId="OOQM0BmcpC8" />
    </SiteShell>
  );
}
