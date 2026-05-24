import { createFileRoute, Link } from "@tanstack/react-router";
import { Bath, BedDouble, Car, Maximize } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/home-designs")({
  component: DesignsPage,
});

type Design = {
  id: string;
  name: string;
  img: string;
  beds: number;
  baths: number;
  cars: number;
  sqm?: string;
  fixedPrice?: string;
  priceFrom?: string;
  viewDesign?: boolean;
};

const designs: Design[] = [
  {
    id: "soulmate",
    name: "SOULMATE",
    img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-16.jpg",
    beds: 4,
    baths: 4,
    cars: 2,
    sqm: "580sqm",
    viewDesign: true,
  },
  {
    id: "monaco",
    name: "The Monaco",
    img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-5.jpg",
    beds: 4,
    baths: 2,
    cars: 1,
    fixedPrice: "Fixed Price $850k",
  },
  {
    id: "french",
    name: "THE FRENCH PROVINCIAL",
    img: "https://grantonhomes.com.au/wp-content/uploads/2022/03/Great-French-Provincial-1.jpg",
    beds: 4,
    baths: 4,
    cars: 2,
    sqm: "620sqm",
    priceFrom: "Price from $1.1mil",
    viewDesign: true,
  },
  {
    id: "chateau",
    name: "The Chateau",
    img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg",
    beds: 6,
    baths: 6,
    cars: 4,
    priceFrom: "Price from $2.5mil",
  },
];

function DesignsPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-10 sm:pb-14 text-center">
          <h1 className="gallery-heading font-light">Our Signature Designs</h1>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
            {designs.map((d, i) => (
              <Reveal key={d.id} delay={(i % 2) * 80}>
                <article
                  id={d.id}
                  className="flex flex-col h-full bg-white border border-[#d8e0e8] overflow-hidden shadow-sm"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h2 className="text-xl sm:text-2xl font-normal text-[#001030] tracking-wide">
                      {d.name}
                    </h2>

                    <p className="mt-5 text-sm text-[#4a5f7a]">Sizes available (sq):</p>

                    <div className="mt-3 flex flex-wrap items-center gap-6 text-[#001030]">
                      <SizeStat Icon={BedDouble} value={d.beds} />
                      <SizeStat Icon={Bath} value={d.baths} />
                      <SizeStat Icon={Car} value={d.cars} />
                      {d.sqm && <SizeStat Icon={Maximize} value={d.sqm} />}
                    </div>

                    <div className="mt-auto pt-6 space-y-3">
                      {d.fixedPrice && (
                        <p className="text-sm font-medium text-[#001030]">{d.fixedPrice}</p>
                      )}
                      {d.priceFrom && (
                        <p className="text-sm font-medium text-[#001030]">{d.priceFrom}</p>
                      )}
                      {d.viewDesign && (
                        <Link
                          to="/contact-us"
                          className="block w-full py-3 px-4 text-center text-sm text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition"
                        >
                          View this design
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

function SizeStat({
  Icon,
  value,
}: {
  Icon: typeof BedDouble;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-[#4a5f7a]" aria-hidden />
      <span className="text-lg font-normal tabular-nums">{value}</span>
    </div>
  );
}
