import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <SiteShell>
      <section className="container-luxe pt-[calc(5rem+2rem)] pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-2 gap-8">
          {developments.map((d, i) => (
            <Reveal key={d.name} delay={(i % 2) * 80}>
              <article className="group bg-card border border-border h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.22em] px-3 py-1.5">
                    {d.status}
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl leading-snug text-foreground">
                      {d.title}
                    </h3>
                    {d.subtitle && (
                      <p className="mt-1 text-sm text-muted-foreground">{d.subtitle}</p>
                    )}
                  </div>
                  {d.description && (
                    <p className="text-sm text-foreground/75 leading-relaxed whitespace-pre-line flex-1">
                      {d.description}
                    </p>
                  )}
                  {d.showInvestReasons && (
                    <button
                      type="button"
                      onClick={() => setInvestModalOpen(true)}
                      className="btn-ghost w-full justify-center text-center leading-snug py-3"
                    >
                      5 Reasons
                      <br />
                      To Invest
                    </button>
                  )}
                  {d.showCatalinaLifestyle && (
                    <button
                      type="button"
                      onClick={() => setCatalinaModalOpen(true)}
                      className="btn-ghost w-full justify-center text-center leading-snug py-3"
                    >
                      Location &
                      <br />
                      Lifestyle
                    </button>
                  )}
                  <div className="mt-auto pt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Price from <span className="text-foreground">{d.price}</span>
                    </p>
                    <a
                      href={d.viewHref}
                      {...(d.viewHref.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block w-full py-3 px-4 text-center text-sm font-normal text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition"
                    >
                      {d.viewLabel}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <InvestReasonsModal open={investModalOpen} onClose={() => setInvestModalOpen(false)} />
      <CatalinaLifestyleModal open={catalinaModalOpen} onClose={() => setCatalinaModalOpen(false)} />
    </SiteShell>
  );
}
