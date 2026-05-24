import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

const FRENCH_PROVINCIAL_VIDEO =
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/Granton-Homes-The-French-Provincial_Segment_0_x264.mp4";

const VIDEO_POSTER =
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg";

export const Route = createFileRoute("/display-homes")({
  component: DisplayHomesPage,
});

function DisplayHomesPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-12 sm:pb-16 text-center max-w-3xl mx-auto">
          <h1 className="gallery-heading font-light">Display Homes</h1>
          <p className="gallery-muted mt-6 text-base sm:text-lg leading-relaxed font-normal">
            Our work represents the highest level in design creativity and our homes reflect a refined
            elegance and attention to detail that create the perfect balance of function, charm, and
            character. Visit one of our display home below and see for yourself.
          </p>
          <p className="mt-10 text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-[#001030]">
            Visit our display homes
          </p>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <Reveal>
            <article className="grid lg:grid-cols-12 gap-0 border border-[#d8e0e8] bg-card overflow-hidden">
              <div className="lg:col-span-7 relative bg-black">
                <div className="aspect-video lg:aspect-auto lg:min-h-[320px] lg:h-full overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={VIDEO_POSTER}
                    src={FRENCH_PROVINCIAL_VIDEO}
                    title="Granton Homes — The French Provincial display home walkthrough"
                  >
                    Your browser does not support embedded video.{" "}
                    <a href={FRENCH_PROVINCIAL_VIDEO} className="underline">
                      Open the video
                    </a>
                    .
                  </video>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center gap-6">
                <h3 className="font-[Montserrat,sans-serif] text-2xl sm:text-3xl font-normal text-[#001030]">
                  The French Provincial
                </h3>
                <p className="font-[Montserrat,sans-serif] text-base sm:text-lg text-[#4a5f7a] leading-relaxed">
                  16 Stamford Bridge Avenue, Kellyville NSW 2155
                </p>
                <a
                  href="tel:1300318699"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 py-3 px-6 text-sm font-normal text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: 1300 318 699
                </a>
              </div>
            </article>
          </Reveal>
        </section>
      </div>
    </SiteShell>
  );
}
