import { Q as reactExports, I as jsxRuntimeExports } from "./server-DASLeRH5.js";
import { L as Link } from "./router-CprBJL6q.js";
import { S as SiteShell, P as PageHero, R as Reveal } from "./Reveal-C_lWTekO.js";
import { P as Play, V as VideoModal } from "./VideoModal-CpI_0NRZ.js";
import { a as BedDouble, B as Bath, C as Car, M as Maximize } from "./maximize-CeGy8euA.js";
import { A as ArrowRight } from "./arrow-right-BTNAsy3W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville.jpg";
const DESIGN_IMAGES = {
  soulmate: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-16.jpg",
  monaco: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-5.jpg",
  french: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-18.jpg",
  chateau: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg"
};
const designs = [{
  id: "soulmate",
  name: "Soulmate",
  img: DESIGN_IMAGES.soulmate,
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "580sqm",
  desc: "Sculpted lines, a grand entry and a layout built for generations together.",
  completed: true
}, {
  id: "monaco",
  name: "The Monaco",
  img: DESIGN_IMAGES.monaco,
  beds: 4,
  baths: 2,
  cars: 3,
  sqm: "—",
  desc: "Mediterranean elegance with arched apertures and a sun-soaked courtyard.",
  completed: true
}, {
  id: "french",
  name: "The French Provincial",
  img: DESIGN_IMAGES.french,
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "620sqm",
  desc: "Timeless symmetry, dormer windows and a presence that gracefully ages.",
  featured: true,
  priceFrom: "$1.45M"
}, {
  id: "chateau",
  name: "The Chateau",
  img: DESIGN_IMAGES.chateau,
  beds: 5,
  baths: 5,
  cars: 4,
  sqm: "—",
  desc: "A grand residence designed for ceremony, family and quiet luxury."
}];
function DesignsPage() {
  const [video, setVideo] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Signature Designs", title: "Architecturally crafted. Endlessly tailorable.", subtitle: "Each Granton home is a starting point — a refined design canvas to be shaped around your block, your lifestyle, and your aspirations.", image: HERO_IMAGE, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20 lg:py-28 space-y-24", children: designs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: d.id, className: `grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" }),
          d.completed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 top-0 z-10 h-28 w-28 overflow-hidden", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[-18%] top-[32%] w-[170%] rotate-45 bg-green-600 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-md", children: "COMPLETED" }) })
        ] }),
        d.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 bg-gold text-gold-foreground text-[11px] uppercase tracking-[0.22em] px-4 py-2", children: [
          "From ",
          d.priceFrom
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "eyebrow", children: [
          "Design ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-foreground/75 leading-relaxed", children: d.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-4 gap-3 border-y border-border py-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { Icon: BedDouble, label: "Beds", value: d.beds }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { Icon: Bath, label: "Baths", value: d.baths }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { Icon: Car, label: "Garage", value: d.cars }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { Icon: Maximize, label: "Block", value: d.sqm })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact-us", className: "btn-gold", children: [
            "View the design ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          d.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideo(true), className: "btn-ghost", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Watch tour"
          ] })
        ] })
      ] })
    ] }) }, d.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { open: video, onClose: () => setVideo(false), youtubeId: "OOQM0BmcpC8" })
  ] });
}
function Stat({
  Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: label })
  ] });
}
export {
  DesignsPage as component
};
