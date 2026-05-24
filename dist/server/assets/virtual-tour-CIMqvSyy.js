import { Q as reactExports, I as jsxRuntimeExports } from "./server-DASLeRH5.js";
import { L as Link } from "./router-CprBJL6q.js";
import { c as createLucideIcon, S as SiteShell, R as Reveal } from "./Reveal-C_lWTekO.js";
import { P as Play, V as VideoModal } from "./VideoModal-CpI_0NRZ.js";
import { A as ArrowRight } from "./arrow-right-BTNAsy3W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ]
];
const Compass = createLucideIcon("compass", __iconNode);
const VIRTUAL_HERO = "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-23.jpg";
const gallery = ["https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-16.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-5.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-18.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-3.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-19.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-10.jpg"];
function VirtualTourPage() {
  const [video, setVideo] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[92vh] min-h-[640px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: VIRTUAL_HERO, alt: "", className: "absolute inset-0 h-full w-full object-cover ken-burns" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative z-10 h-full flex flex-col justify-end pb-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold", children: "Virtual Tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]", children: "The French Provincial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-white/85 leading-relaxed", children: "Wander the halls, sweep through the suites, and feel the proportions of our most beloved design — from anywhere in the world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideo(true), className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Start 360° Tour"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact-us", className: "inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] border border-white/50 text-white hover:bg-white hover:text-foreground transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }),
            " Book a private virtual tour"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl", children: "Inside The French Provincial." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[400/516] overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `The French Provincial interior ${i + 1}`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }) }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "btn-ghost inline-flex", children: [
        "View full gallery ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { open: video, onClose: () => setVideo(false), youtubeId: "OOQM0BmcpC8" })
  ] });
}
export {
  VirtualTourPage as component
};
