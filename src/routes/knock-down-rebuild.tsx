import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

const KDR_IMAGE =
  "https://grantonhomes.com.au/wp-content/uploads/2021/08/qq_7-Photo-scaled.jpg";

export const Route = createFileRoute("/knock-down-rebuild")({
  component: KdrPage,
});

function KdrPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-10 sm:pb-14 text-center">
          <h1 className="gallery-heading font-light">Knock Down Rebuild</h1>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <Reveal>
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="overflow-hidden rounded-xl shadow-[0_12px_40px_-12px_rgba(0,16,48,0.25)]">
                <img
                  src={KDR_IMAGE}
                  alt="Granton Homes knock down rebuild"
                  loading="lazy"
                  className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-[380px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.12em] text-[#001030]">
                  Granton Homes <span className="font-black">FAMILY</span>
                </h2>
                <p className="gallery-muted text-base sm:text-lg leading-relaxed font-normal">
                  At Granton Homes, we design and build prestige homes with a focus on luxurious
                  lifestyle.
                </p>
                <p className="gallery-muted text-base sm:text-lg leading-relaxed font-normal">
                  Our homes have a classic, timeless quality and feature the very best in luxury
                  finishes and appointments.
                </p>
              </div>
            </article>
          </Reveal>
        </section>
      </div>
    </SiteShell>
  );
}
