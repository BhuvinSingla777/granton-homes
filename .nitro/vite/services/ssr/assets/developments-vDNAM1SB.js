import { H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { L as Link } from './router-WPBgWtP-.js';
import { S as SiteShell, P as PageHero, R as Reveal } from './Reveal-z5FpXO28.js';
import { c as central, g as grafton } from './dev-grafton-CZp4xS-r.js';
import { m as mudgee, a as railway, r as raceview, s as singleton } from './dev-raceview-DdnlJ0Cq.js';
import { M as MapPin } from './map-pin-BqfBmQIE.js';
import { A as ArrowRight } from './arrow-right-DPGcLRjP.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';

const developments = [{
  name: "Central Street",
  location: "Labrador QLD",
  price: "$585,000",
  img: central,
  status: "Selling"
}, {
  name: "Railway Street",
  location: "Southport QLD",
  price: "$450,000",
  img: railway,
  status: "Selling"
}, {
  name: "Henry Bayly Drive",
  location: "Mudgee NSW",
  price: "$700,000",
  img: mudgee,
  status: "Coming Soon"
}, {
  name: "Cemetary Road",
  location: "Raceview QLD",
  price: "$430,000",
  img: raceview,
  status: "Selling"
}, {
  name: "Bimble Ave",
  location: "South Grafton NSW",
  price: "On request",
  img: grafton,
  status: "Registering"
}, {
  name: "15A Boonal Street",
  location: "Singleton NSW",
  price: "$450,000",
  img: singleton,
  status: "Selling"
}, {
  name: "The Heights",
  location: "Northern Beaches NSW",
  price: "$890,000",
  img: central,
  status: "Selling"
}, {
  name: "Parkview Estate",
  location: "Sunshine Coast QLD",
  price: "$520,000",
  img: railway,
  status: "Coming Soon"
}];
function DevelopmentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Developments", title: "Master-planned communities, considered down to the lot.", subtitle: "Explore our growing portfolio of premium residential developments across NSW and Queensland.", image: mudgee, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: developments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card border border-border h-full flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.22em] px-3 py-1.5", children: d.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-3 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl leading-snug", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold" }),
          " ",
          d.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-4 border-t border-border flex items-end justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Price from" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-gold", children: d.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact-us", className: "text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-1.5 hover:text-gold transition", children: [
            "View ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] }) }, d.name + i)) }) })
  ] });
}

export { DevelopmentsPage as component };
