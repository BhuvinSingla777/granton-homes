import { I as jsxRuntimeExports } from "./server-Bg1SOzQR.js";
import { S as SiteShell } from "./SiteShell-dgkXBx1h.js";
import { R as Reveal } from "./Reveal-B7jgthVk.js";
import { P as Phone } from "./phone-DfHyrIzY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-sOo8wAmj.js";
const FRENCH_PROVINCIAL_VIDEO = "https://grantonhomes.com.au/wp-content/uploads/2021/04/Granton-Homes-The-French-Provincial_Segment_0_x264.mp4";
const VIDEO_POSTER = "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg";
function DisplayHomesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gallery-theme flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe pt-[calc(5rem+2rem)] pb-12 sm:pb-16 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "gallery-heading font-light", children: "Display Homes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "gallery-muted mt-6 text-base sm:text-lg leading-relaxed font-normal", children: "Our work represents the highest level in design creativity and our homes reflect a refined elegance and attention to detail that create the perfect balance of function, charm, and character. Visit one of our display home below and see for yourself." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-[#001030]", children: "Visit our display homes" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe pb-16 sm:pb-20 lg:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-12 gap-0 border border-[#d8e0e8] bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 relative bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video lg:aspect-auto lg:min-h-[320px] lg:h-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("video", { className: "h-full w-full object-cover", controls: true, playsInline: true, preload: "metadata", poster: VIDEO_POSTER, src: FRENCH_PROVINCIAL_VIDEO, title: "Granton Homes — The French Provincial display home walkthrough", children: [
        "Your browser does not support embedded video.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: FRENCH_PROVINCIAL_VIDEO, className: "underline", children: "Open the video" }),
        "."
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[Montserrat,sans-serif] text-2xl sm:text-3xl font-normal text-[#001030]", children: "The French Provincial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Montserrat,sans-serif] text-base sm:text-lg text-[#4a5f7a] leading-relaxed", children: "16 Stamford Bridge Avenue, Kellyville NSW 2155" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:1300318699", className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 py-3 px-6 text-sm font-normal text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          "Call Now: 1300 318 699"
        ] })
      ] })
    ] }) }) })
  ] }) });
}
export {
  DisplayHomesPage as component
};
