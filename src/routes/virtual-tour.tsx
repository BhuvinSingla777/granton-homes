import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2022/03/slierb.jpg";

const GALLERY = [
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-1.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-16.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-19.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-12.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-7.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-6.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-22.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-9.jpg",
] as const;

export const Route = createFileRoute("/virtual-tour")({
  component: VirtualTourPage,
});

function VirtualTourPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-10 sm:pb-12 text-center max-w-3xl mx-auto">
          <h1 className="gallery-heading font-light uppercase tracking-[0.14em] text-2xl sm:text-3xl lg:text-4xl">
            The French Provincial
          </h1>
          <p className="gallery-muted mt-6 text-base sm:text-lg leading-relaxed font-normal">
            The French Provincial is opulence at every turn, the perfect home for an active family who
            loves to entertain. With two stories and four or five bedrooms, the French Provincial gives
            you a luxury dream home at an affordable price.
          </p>
        </section>

        <section className="container-luxe pb-12 sm:pb-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[0_12px_40px_-12px_rgba(0,16,48,0.2)]">
              <img
                src={HERO_IMAGE}
                alt="The French Provincial — Granton Homes"
                loading="eager"
                className="w-full aspect-[16/10] sm:aspect-[21/9] object-cover"
              />
            </div>
          </Reveal>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <Reveal className="mb-10 text-center">
            <h2 className="gallery-heading font-light uppercase tracking-[0.14em] text-xl sm:text-2xl">
              Gallery
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 70}>
                <div className="aspect-[400/516] overflow-hidden group">
                  <img
                    src={src}
                    alt={`The French Provincial interior ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
