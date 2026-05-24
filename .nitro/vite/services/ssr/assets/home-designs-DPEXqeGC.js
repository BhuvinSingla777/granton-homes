import { I as jsxRuntimeExports } from './server-LkwB2fso.js';
import { L as Link } from './router-CTg9bPtL.js';
import { S as SiteShell } from './SiteShell-BcMVmoz8.js';
import { R as Reveal } from './Reveal-DMOU4W07.js';
import { a as BedDouble, B as Bath, C as Car, M as Maximize } from './maximize-C8RpE9zV.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';

const designs = [{
  id: "soulmate",
  name: "SOULMATE",
  img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-16.jpg",
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "580sqm",
  viewDesign: true
}, {
  id: "monaco",
  name: "The Monaco",
  img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-5.jpg",
  beds: 4,
  baths: 2,
  cars: 1,
  fixedPrice: "Fixed Price $850k"
}, {
  id: "french",
  name: "THE FRENCH PROVINCIAL",
  img: "https://grantonhomes.com.au/wp-content/uploads/2022/03/Great-French-Provincial-1.jpg",
  beds: 4,
  baths: 4,
  cars: 2,
  sqm: "620sqm",
  priceFrom: "Price from $1.1mil",
  viewDesign: true
}, {
  id: "chateau",
  name: "The Chateau",
  img: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg",
  beds: 6,
  baths: 6,
  cars: 4,
  priceFrom: "Price from $2.5mil"
}];
function DesignsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gallery-theme flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe pt-[calc(5rem+2rem)] pb-10 sm:pb-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "gallery-heading font-light", children: "Our Signature Designs" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe pb-16 sm:pb-20 lg:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-8 lg:gap-10", children: designs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: d.id, className: "flex flex-col h-full bg-white border border-[#d8e0e8] overflow-hidden shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-normal text-[#001030] tracking-wide", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-[#4a5f7a]", children: "Sizes available (sq):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-6 text-[#001030]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SizeStat, { Icon: BedDouble, value: d.beds }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SizeStat, { Icon: Bath, value: d.baths }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SizeStat, { Icon: Car, value: d.cars }),
          d.sqm && /* @__PURE__ */ jsxRuntimeExports.jsx(SizeStat, { Icon: Maximize, value: d.sqm })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6 space-y-3", children: [
          d.fixedPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-[#001030]", children: d.fixedPrice }),
          d.priceFrom && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-[#001030]", children: d.priceFrom }),
          d.viewDesign && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact-us", className: "block w-full py-3 px-4 text-center text-sm text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition", children: "View this design" })
        ] })
      ] })
    ] }) }, d.id)) }) })
  ] }) });
}
function SizeStat({
  Icon,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-[#4a5f7a]", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-normal tabular-nums", children: value })
  ] });
}

export { DesignsPage as component };
