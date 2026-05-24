import { Q as reactExports, I as jsxRuntimeExports } from './server-LkwB2fso.js';
import { L as Link } from './router-CTg9bPtL.js';
import { c as createLucideIcon, S as SiteShell, P as PageHero } from './SiteShell-BcMVmoz8.js';
import { R as Reveal } from './Reveal-DMOU4W07.js';
import { P as Play, V as VideoModal } from './VideoModal-4eQZ9buQ.js';
import { A as ArrowRight } from './arrow-right-B5jP0K4O.js';
import { a as BedDouble, B as Bath, C as Car, M as Maximize } from './maximize-C8RpE9zV.js';
import { P as Phone } from './phone-CyzFp0Xd.js';
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


const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);

const heroKitchen = "/assets/hero-kitchen-BMKVpui-.jpg";

const soulmate = "/assets/design-soulmate-CUz_A_Xx.jpg";

const monaco = "/assets/design-monaco-wynvw6Xy.jpg";

const french = "/assets/design-french-PHUpyGgI.jpg";

const chateau = "/assets/design-chateau-CEuC0DJS.jpg";

const DESIGNS = [{
  name: "Soulmate",
  img: soulmate,
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "580sqm",
  to: "/home-designs#soulmate"
}, {
  name: "The Monaco",
  img: monaco,
  beds: 4,
  baths: 2,
  cars: 3,
  sqm: "—",
  to: "/home-designs#monaco"
}, {
  name: "The French Provincial",
  img: french,
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "620sqm",
  to: "/home-designs#french",
  featured: true,
  priceFrom: "$1.45M"
}, {
  name: "The Chateau",
  img: chateau,
  beds: 5,
  baths: 5,
  cars: 4,
  sqm: "—",
  to: "/home-designs#chateau"
}];
function HomePage() {
  const [videoOpen, setVideoOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Crafting Distinctive Residences", title: "Homes tailored to the way you live.", subtitle: "Award-winning standard designs, custom architecture, and a personalised journey from concept to keys.", image: heroKitchen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 lg:py-32 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-4xl lg:text-5xl leading-tight", children: [
          "Your dream home, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "built around you." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, className: "lg:col-span-7 lg:pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/80", children: "Whether you are planning to build your dream home on a vacant block or you are considering a complete knock down rebuild, our philosophy is based on servicing your belief and welcoming your involvement throughout the design and planning process so that your home is tailored to fit your lifestyle." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about-us", className: "btn-gold", children: [
            "Discover Granton ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideoOpen(true), className: "btn-ghost", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Watch the film"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Our Philosophy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl", children: "Quality is not an act — it is a habit." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-10", children: [{
        Icon: Award,
        title: "Award-winning design",
        body: "A diverse range of award-winning standard plans, every one of them tailorable to your lifestyle."
      }, {
        Icon: Sparkles,
        title: "Bespoke craftsmanship",
        body: "Premium inclusions, considered detailing, and finishes that hold up to a lifetime of living."
      }, {
        Icon: ShieldCheck,
        title: "End-to-end care",
        body: "We manage approvals, documentation and certification so your journey is seamless."
      }].map(({
        Icon,
        title,
        body
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full border border-border bg-card p-8 lg:p-10 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-serif text-2xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: body })
      ] }) }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Our Signature Designs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl max-w-xl", children: "Four homes. Endless possibilities." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/home-designs", className: "text-sm uppercase tracking-[0.2em] gold-underline hover:text-gold", children: "View all designs →" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: DESIGNS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden bg-card border border-border h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }) }),
        d.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1.5", children: [
          "From ",
          d.priceFrom
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1", children: "Available" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-4 w-4 text-gold" }),
              d.beds
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4 text-gold" }),
              d.baths
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-4 w-4 text-gold" }),
              d.cars
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "h-4 w-4 text-gold" }),
              d.sqm
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: d.to, className: "mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground hover:text-gold transition", children: [
            "View design ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }) }, d.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroKitchen, alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[oklch(0.18_0.012_60)]/82" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative py-24 lg:py-32 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold justify-center", children: "Ready to begin?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-6xl max-w-3xl mx-auto", children: "A home of true distinction begins with a conversation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl mx-auto text-white/75", children: "Speak with our design team about your vision, your block, or a knock down rebuild." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:1300318699", className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " 1300 318 699"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact-us", className: "inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] border border-white/40 text-white hover:bg-white hover:text-foreground transition-all", children: "Find where we build" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { open: videoOpen, onClose: () => setVideoOpen(false), youtubeId: "OOQM0BmcpC8" })
  ] });
}

export { HomePage as component };
