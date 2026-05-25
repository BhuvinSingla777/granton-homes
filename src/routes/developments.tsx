import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Activity, ArrowUpRight, MapPin, Sparkles, Tag } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { InvestReasonsModal } from "@/components/site/InvestReasonsModal";
import { CatalinaLifestyleModal } from "@/components/site/CatalinaLifestyleModal";
import central from "@/assets/dev-central.jpg";
import railway from "@/assets/dev-railway.jpg";
import broadhead from "@/assets/dev-broadhead.png";
import henryBayly from "@/assets/dev-henry-bayly.png";
import catalina from "@/assets/dev-catalina.png";
import raceview from "@/assets/dev-raceview.png";
import grafton from "@/assets/dev-grafton.jpg";
import singleton from "@/assets/dev-singleton.jpg";

export const Route = createFileRoute("/developments")({
  component: DevelopmentsPage,
});

type Development = {
  title: string;
  name: string;
  location: string;
  price: string;
  img: string;
  status: string;
  viewLabel: string;
  viewHref: string;
  subtitle?: string;
  description?: string;
  showInvestReasons?: boolean;
  showCatalinaLifestyle?: boolean;
};

const developments: Development[] = [
  {
    title: "Central Street Labrador QLD",
    name: "Central Street",
    subtitle: "Isola Apartments",
    location: "Labrador QLD",
    price: "$585,000",
    img: central,
    status: "Selling",
    viewLabel: "View 3 central street",
    viewHref: "https://grantonhomes.com.au/3-central-street-labrador-qld/",
    showInvestReasons: true,
    description:
      "55 prestige apartments cater to all lifestyles. Offering 1, 2, and 3 bedroom apartments this exclusive development is the position just 10 minutes from South port, 20 minutes from Broadbeach, and 40 minutes from Brisbane. Offering convenience, flexibility, and the ultimate luxury in beachside living. Your apartment has been thoughtfully designed to give you room to live life your way. Open plan living areas, functional kitchens with European designed appliances, spacious bedrooms, walk-in robes, and ensuites. All apartments have been positioned to take advantage of the cooling coastal breezes and Water Views over the Main Beach – Everything has been considered",
  },
  {
    title: "Railway Street Southport QLD",
    name: "Railway Street",
    subtitle: "Vela Southport",
    location: "Southport QLD",
    price: "$450,000",
    img: railway,
    status: "Selling",
    viewLabel: "View 4 railway street",
    viewHref: "https://grantonhomes.com.au/4-railway-street-southport-qld/",
    description:
      "Vela is a mixed-use development that fronts the Coral Sea in Southport, Queensland. With uninterrupted views across the Pacific, opposite SeaWorld, the office, and residential dwellings enjoy 360 views of the ocean and Surfer's Paradise to its south. The apartments are designed to maximise views and amenity, with all dwellings enjoying corner positions, maximising the sea views.\n\nClad with a composite glass and aluminium façade the architecture dominates its surroundings and is the gateway to the new city centre of Southport CBD. An organic articulated podium bookends the block and serves to house coordination of service and access to parking, residential dwellings and commercial all within a footprint of only 700 sqm.",
  },
  {
    title: "Broadhead Road, Mudgee NSW",
    name: "Broadhead Road",
    location: "Mudgee NSW",
    price: "$550,000",
    img: broadhead,
    status: "Selling",
    viewLabel: "View 50 broadhead road",
    viewHref: "https://grantonhomes.com.au/50-broadhead-road-mudgee-nsw/",
    description:
      "Located in the exclusive South Mudgee, opposite a new approved High School, Broadhead Place is Mudgee newest concept in contemporary modern living. It has been carefully designed to complement its natural surroundings. This boutique townhouse project with onsite Childcare Centre will provide spacious living and quality finishes.\n\nBroadhead Place presents a lifestyle that lets you enjoy the beauty of nature and the creature comforts of modern living.",
  },
  {
    title: "Henry Bayly Drive Mudgee NSW",
    name: "Henry Bayly Drive",
    location: "Mudgee NSW",
    price: "$700,000",
    img: henryBayly,
    status: "Coming Soon",
    viewLabel: "View 64 henry bayly drive",
    viewHref: "https://grantonhomes.com.au/64-henry-bayly-drive-mudgee-nsw/",
    description:
      "Rare 11 Super Lots Land Subdivision in South Mudgee\n\n11 residential blocks sized from 2000–4000sqm\nExclusive 8.2 Hectare, fully fenced.\nPlenty of house sites capturing the views of Mudgee's township\nTwo dams & established orchard making it the ideal rural lifestyle property only a stone's throw from Mudgee's CBD\nThe perfect rural lifestyle block right on the edge of town, build your dream home here",
  },
  {
    title: "Catalina Estate Batemans Bay",
    name: "Catalina Estate",
    location: "Batemans Bay NSW",
    price: "$550,000",
    img: catalina,
    status: "Selling",
    viewLabel: "View catalina estate",
    viewHref: "/contact-us",
    showCatalinaLifestyle: true,
    description:
      "The Perfect Serene Location\n\nWhen it comes to natural settings, Catalina Estate has it all! Nestled alongside natural bushland and wildlife corridors. You will forget you are conveniently just minutes away from Batemans Bay CBD. Within walking distance from stunning unpopulated golden sandy beaches, with the cool sea breeze at your doorstep. Minutes away from local schools and parks, prime location to suit everyone's needs!",
  },
  {
    title: "Cemetary Road Raceview",
    name: "Cemetary Road",
    location: "Raceview QLD",
    price: "$430,000",
    img: raceview,
    status: "Selling",
    viewLabel: "View Raceview",
    viewHref: "/contact-us",
  },
  {
    title: "Bimble Ave South Grafton NSW",
    name: "Bimble Ave",
    location: "South Grafton NSW",
    price: "$480,000",
    img: grafton,
    status: "Registering",
    viewLabel: "View South Grafton",
    viewHref: "/contact-us",
  },
  {
    title: "15A Boonal Street Singleton NSW",
    name: "15A Boonal Street",
    location: "Singleton NSW",
    price: "$450,000",
    img: singleton,
    status: "Selling",
    viewLabel: "View Singleton",
    viewHref: "/contact-us",
  },
];

function DevelopmentsPage() {
  const [investModalOpen, setInvestModalOpen] = useState(false);
  const [catalinaModalOpen, setCatalinaModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = useMemo(() => {
    const statuses = Array.from(new Set(developments.map((d) => d.status)));
    return ["All", ...statuses];
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? developments : developments.filter((d) => d.status === filter)),
    [filter],
  );

  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-8 sm:pb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filterOptions.map((opt) => {
              const active = filter === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFilter(opt)}
                  className={
                    active
                      ? "px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] bg-[#001030] text-white border border-[#001030] transition-all duration-300 shadow-sm"
                      : "px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] bg-white text-[#001030] border border-[#d8e0e8] hover:border-[#a8893d] hover:text-[#a8893d] transition-all duration-300"
                  }
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </section>

        <section className="container-luxe pb-20 lg:pb-28">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((d, i) => {
              const featured = filter === "All" && i === 0;
              return (
                <Reveal
                  key={d.name}
                  delay={(i % 2) * 80}
                  className={featured ? "sm:col-span-2" : ""}
                >
                  <article
                    className={`group relative flex flex-col h-full bg-white border border-[#d8e0e8] overflow-hidden shadow-[0_1px_2px_rgba(0,16,48,0.04)] hover:shadow-[0_30px_60px_-25px_rgba(0,16,48,0.35)] hover:-translate-y-1 hover:border-[#a8893d]/50 transition-all duration-500 ${
                      featured ? "lg:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        featured
                          ? "aspect-[16/10] lg:aspect-auto lg:w-[60%] lg:min-h-[460px]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#001030]/85 via-[#001030]/25 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#001030]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#2b2b2b]/70 backdrop-blur-md border border-white/25 text-white text-[10px] uppercase tracking-[0.22em] shadow-lg">
                        <span className="relative inline-flex h-1.5 w-1.5">
                          <span className="absolute inset-0 rounded-full bg-[#a8893d] animate-ping opacity-60" />
                          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#a8893d]" />
                        </span>
                        {d.status}
                      </div>

                      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#a8893d]/95 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.22em] shadow-lg opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <Tag className="h-3 w-3" />
                        {d.price}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 text-white">
                        {d.subtitle && (
                          <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#c9b079]">
                            {d.subtitle}
                          </p>
                        )}
                        <h3
                          className={`font-normal leading-tight tracking-wide drop-shadow-lg ${
                            featured
                              ? "text-2xl sm:text-3xl lg:text-4xl"
                              : "text-xl sm:text-2xl"
                          }`}
                        >
                          {d.title}
                        </h3>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/90">
                          <MapPin className="h-3.5 w-3.5 text-[#c9b079]" />
                          {d.location}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-6 sm:p-7 flex flex-col gap-4 flex-1 ${
                        featured ? "lg:w-[40%] lg:p-8 lg:gap-5" : ""
                      }`}
                    >
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#4a5f7a]">
                        <span className="inline-flex items-center gap-1.5">
                          <Activity className="h-3.5 w-3.5 text-[#a8893d]" />
                          {d.status}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#a8893d]" />
                          {d.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Tag className="h-3.5 w-3.5 text-[#a8893d]" />
                          from {d.price}
                        </span>
                      </div>

                      {d.description && (
                        <p
                          className={`text-sm text-[#001030]/75 leading-relaxed whitespace-pre-line flex-1 ${
                            featured ? "line-clamp-6" : "line-clamp-4"
                          }`}
                        >
                          {d.description}
                        </p>
                      )}

                      {(d.showInvestReasons || d.showCatalinaLifestyle) && (
                        <div className="flex flex-wrap gap-2">
                          {d.showInvestReasons && (
                            <button
                              type="button"
                              onClick={() => setInvestModalOpen(true)}
                              className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#001030] bg-transparent border border-[#001030] hover:bg-[#001030] hover:text-white transition-all duration-300"
                            >
                              <Sparkles className="h-3.5 w-3.5 text-[#a8893d]" />
                              5 Reasons To Invest
                            </button>
                          )}
                          {d.showCatalinaLifestyle && (
                            <button
                              type="button"
                              onClick={() => setCatalinaModalOpen(true)}
                              className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#001030] bg-transparent border border-[#001030] hover:bg-[#001030] hover:text-white transition-all duration-300"
                            >
                              <Sparkles className="h-3.5 w-3.5 text-[#a8893d]" />
                              Location & Lifestyle
                            </button>
                          )}
                        </div>
                      )}

                      <div className="mt-auto pt-5 border-t border-[#d8e0e8] flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-[#4a5f7a]">
                            Price from
                          </p>
                          <p className="text-2xl sm:text-[1.6rem] font-semibold text-[#a8893d] tabular-nums leading-tight">
                            {d.price}
                          </p>
                        </div>
                        <a
                          href={d.viewHref}
                          {...(d.viewHref.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group/cta relative inline-flex items-center gap-2 py-3 px-5 text-sm font-normal text-white bg-[#a8893d] border border-[#a8893d] hover:text-[#a8893d] hover:border-[#a8893d] hover:shadow-lg hover:shadow-[#a8893d]/30 transition-colors duration-300 overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-out" />
                          <span className="relative z-10">{d.viewLabel}</span>
                          <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-sm text-[#4a5f7a]">
              No developments match this filter.
            </div>
          )}
        </section>
      </div>

      <InvestReasonsModal open={investModalOpen} onClose={() => setInvestModalOpen(false)} />
      <CatalinaLifestyleModal open={catalinaModalOpen} onClose={() => setCatalinaModalOpen(false)} />
    </SiteShell>
  );
}
