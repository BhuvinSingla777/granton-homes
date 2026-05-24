import { H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { c as createLucideIcon, S as SiteShell, P as PageHero, R as Reveal, a as Phone } from './Reveal-z5FpXO28.js';
import { f as french } from './design-french-lDDaM1WL.js';
import { d as displayLiving } from './display-living-Cv9ySGC-.js';
import { M as MapPin } from './map-pin-BqfBmQIE.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';
import './router-WPBgWtP-.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);

function DisplayHomesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Display Homes", title: "Step inside, and feel it for yourself.", subtitle: "Our work represents the highest level in design creativity. Our homes reflect a refined elegance and attention to detail that creates the perfect balance of function, charm and character.", image: french }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mb-14 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Visit our display homes" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-12 gap-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/11] lg:aspect-auto lg:h-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: displayLiving, alt: "The French Provincial display home", loading: "lazy", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 left-5 bg-background/95 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.22em]", children: "Now Open" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-8 lg:p-12 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Featured Display" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-3xl lg:text-4xl", children: "The French Provincial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-start gap-3 text-sm text-foreground/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold mt-0.5" }),
            "16 Stamford Bridge Avenue,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Kellyville NSW 2155"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 text-sm text-foreground/75", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-gold" }),
            "Sat–Sun · 10:00am – 4:00pm"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 border-y border-border py-5 text-center text-sm", children: [["4", "Beds"], ["4", "Baths"], ["2", "Cars"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl", children: n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1", children: l })
          ] }, l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:1300318699", className: "btn-gold mt-8 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " Call Now: 1300 318 699"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Or book a private appointment for a guided walkthrough." })
        ] })
      ] }) })
    ] })
  ] });
}

export { DisplayHomesPage as component };
