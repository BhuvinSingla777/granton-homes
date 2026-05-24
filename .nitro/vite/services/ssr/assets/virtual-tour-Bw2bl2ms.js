import { P as reactExports, H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { L as Link } from './router-WPBgWtP-.js';
import { c as createLucideIcon, S as SiteShell, R as Reveal } from './Reveal-z5FpXO28.js';
import { P as Play, V as VideoModal } from './VideoModal-Bv9URRMg.js';
import { v as virtualHero } from './virtual-hero-BV2PfJh9.js';
import { d as displayLiving } from './display-living-Cv9ySGC-.js';
import { f as french } from './design-french-lDDaM1WL.js';
import { s as soulmate, m as monaco, c as chateau } from './design-chateau-DTT-zrrz.js';
import { k as kdr } from './kdr-home-Cn8zVrk4.js';
import { c as central, g as grafton } from './dev-grafton-CZp4xS-r.js';
import { A as ArrowRight } from './arrow-right-DPGcLRjP.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


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

const gallery = [displayLiving, kdr, french, soulmate, monaco, chateau, central, grafton];
function VirtualTourPage() {
  const [video, setVideo] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[92vh] min-h-[640px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: virtualHero, alt: "", className: "absolute inset-0 h-full w-full object-cover ken-burns" }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden group ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }) }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "btn-ghost inline-flex", children: [
        "View full gallery ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { open: video, onClose: () => setVideo(false), youtubeId: "OOQM0BmcpC8" })
  ] });
}

export { VirtualTourPage as component };
