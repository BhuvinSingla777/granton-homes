import { H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { S as SiteShell, P as PageHero, R as Reveal } from './Reveal-z5FpXO28.js';
import { d as displayLiving } from './display-living-Cv9ySGC-.js';
import { f as french } from './design-french-lDDaM1WL.js';
import { s as soulmate, m as monaco, c as chateau } from './design-chateau-DTT-zrrz.js';
import { k as kdr } from './kdr-home-Cn8zVrk4.js';
import { v as virtualHero } from './virtual-hero-BV2PfJh9.js';
import { h as heroKitchen } from './hero-kitchen-CVQpHSSa.js';
import { c as central, g as grafton } from './dev-grafton-CZp4xS-r.js';
import { a as railway, m as mudgee, s as singleton, r as raceview } from './dev-raceview-DdnlJ0Cq.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';
import './router-WPBgWtP-.js';

const IMAGES = [displayLiving, french, soulmate, monaco, chateau, heroKitchen, virtualHero, kdr, central, railway, mudgee, grafton, singleton, raceview, displayLiving, french, soulmate, monaco, chateau, heroKitchen, virtualHero, kdr, central];
function GalleryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Gallery", title: "A portfolio of distinction.", subtitle: "A taste of the style, luxury and quality that has become synonymous with Granton Homes.", image: virtualHero, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4", children: IMAGES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "break-inside-avoid overflow-hidden group relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy", className: "w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-[10px] uppercase tracking-[0.28em]", children: [
        "Granton Homes · 0",
        i % 9 + 1
      ] }) })
    ] }) }, i)) }) })
  ] });
}

export { GalleryPage as component };
