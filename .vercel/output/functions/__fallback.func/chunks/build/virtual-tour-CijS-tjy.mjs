import { I as jsxRuntimeExports } from './server-LkwB2fso.mjs';
import { S as SiteShell } from './SiteShell-BcMVmoz8.mjs';
import { R as Reveal } from './Reveal-DMOU4W07.mjs';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';
import './router-CTg9bPtL.mjs';

const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2022/03/slierb.jpg";
const GALLERY = ["https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-1.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-16.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-19.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-12.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-7.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-6.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-22.jpg", "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-9.jpg"];
function VirtualTourPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gallery-theme flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe pt-[calc(5rem+2rem)] pb-10 sm:pb-12 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "gallery-heading font-light uppercase tracking-[0.14em] text-2xl sm:text-3xl lg:text-4xl", children: "The French Provincial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "gallery-muted mt-6 text-base sm:text-lg leading-relaxed font-normal", children: "The French Provincial is opulence at every turn, the perfect home for an active family who loves to entertain. With two stories and four or five bedrooms, the French Provincial gives you a luxury dream home at an affordable price." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe pb-12 sm:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl shadow-[0_12px_40px_-12px_rgba(0,16,48,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: HERO_IMAGE, alt: "The French Provincial — Granton Homes", loading: "eager", className: "w-full aspect-[16/10] sm:aspect-[21/9] object-cover" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe pb-16 sm:pb-20 lg:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mb-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "gallery-heading font-light uppercase tracking-[0.14em] text-xl sm:text-2xl", children: "Gallery" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: GALLERY.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[400/516] overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `The French Provincial interior ${i + 1}`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }) }) }, src)) })
    ] })
  ] }) });
}

export { VirtualTourPage as component };
