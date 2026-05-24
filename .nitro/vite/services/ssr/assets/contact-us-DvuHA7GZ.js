import { Q as reactExports, I as jsxRuntimeExports } from './server-LkwB2fso.js';
import { c as createLucideIcon, S as SiteShell } from './SiteShell-BcMVmoz8.js';
import { R as Reveal } from './Reveal-DMOU4W07.js';
import { P as Phone } from './phone-CyzFp0Xd.js';
import { A as ArrowRight } from './arrow-right-B5jP0K4O.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';
import './router-CTg9bPtL.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);

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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);

const REGIONS = ["Sydney NSW", "Hunter Valley NSW", "Mudgee NSW", "Singleton NSW", "South Grafton NSW", "Gold Coast QLD", "Sunshine Coast QLD", "Brisbane QLD"];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe pt-[calc(5rem+2rem)] pb-20 lg:pb-28 grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Reach our studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-3xl lg:text-4xl", children: "Speak to a designer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:1300318699", className: "flex items-start gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg group-hover:text-gold transition", children: "1300 318 699" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@grantonhomes.com.au", className: "flex items-start gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg group-hover:text-gold transition", children: "info@grantonhomes.com.au" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Where we build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2", children: REGIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold" }),
          " ",
          r
        ] }, r)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "bg-card border border-border p-8 lg:p-10 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First name", name: "first" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last name", name: "last" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Interested in", name: "interest", options: ["Custom design", "Knock down rebuild", "Display home visit", "Development enquiry", "Other"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Region", name: "region", options: REGIONS })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Tell us about your project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-gold w-full sm:w-auto", children: sent ? "Thank you — we'll be in touch" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Send enquiry ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] }) });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, className: "mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition" })
  ] });
}
function Select({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: name, name, className: "mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: o }, o)) })
  ] });
}

export { ContactPage as component };
