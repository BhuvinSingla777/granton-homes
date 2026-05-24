import { P as reactExports, H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { S as SiteShell, P as PageHero, R as Reveal, a as Phone, M as Mail } from './Reveal-z5FpXO28.js';
import { h as heroKitchen } from './hero-kitchen-CVQpHSSa.js';
import { M as MapPin } from './map-pin-BqfBmQIE.js';
import { A as ArrowRight } from './arrow-right-DPGcLRjP.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';
import './router-WPBgWtP-.js';

const REGIONS = ["Sydney NSW", "Hunter Valley NSW", "Mudgee NSW", "Singleton NSW", "South Grafton NSW", "Gold Coast QLD", "Sunshine Coast QLD", "Brisbane QLD"];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Let's design something extraordinary.", subtitle: "Speak with our design team about your block, your build, or simply your inspiration. We'd love to hear from you.", image: heroKitchen, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-20 lg:py-28 grid lg:grid-cols-12 gap-12", children: [
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
    ] })
  ] });
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
