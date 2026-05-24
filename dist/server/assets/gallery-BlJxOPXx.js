import { Q as reactExports, I as jsxRuntimeExports } from "./server-DASLeRH5.js";
import { c as createLucideIcon, R as Reveal, S as SiteShell, P as PageHero } from "./Reveal-C_lWTekO.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem, e as cn, c as ChevronLeft, d as ChevronRight } from "./carousel-BJVwFal3.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CprBJL6q.js";
import "./arrow-right-BTNAsy3W.js";
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode);
const navBtnClass = "grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-gold hover:text-gold-foreground disabled:pointer-events-none disabled:opacity-30";
function GalleryShowcase({
  images,
  location = "16 Stanford Bridge Ave, North Kellyville"
}) {
  const [carouselApi, setCarouselApi] = reactExports.useState();
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const [lightbox, setLightbox] = reactExports.useState(false);
  const syncCarouselState = reactExports.useCallback((api) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);
  const scrollToSlide = reactExports.useCallback(
    (index) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi]
  );
  reactExports.useEffect(() => {
    if (!carouselApi) return;
    syncCarouselState(carouselApi);
    const onSelect = () => syncCarouselState(carouselApi);
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi, syncCarouselState]);
  reactExports.useEffect(() => {
    if (!carouselApi) return;
    const onResize = () => carouselApi.reInit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [carouselApi]);
  reactExports.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") carouselApi?.scrollPrev();
      if (e.key === "ArrowRight") carouselApi?.scrollNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, carouselApi]);
  const currentSrc = images[currentSlide];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Featured residence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight", children: location }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Swipe or use the arrows to explore every room, façade and alfresco — thirteen curated frames from a completed Granton home." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden border border-border bg-black shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        opts: { loop: true, align: "center", duration: 32 },
        setApi: setCarouselApi,
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0", children: images.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full pl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "group relative block w-full cursor-zoom-in",
              onClick: () => setLightbox(true),
              "aria-label": `View photo ${index + 1} full screen`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[52vh] sm:min-h-[62vh] lg:min-h-[72vh] w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src,
                    alt: `${location} — photo ${index + 1}`,
                    loading: index === 0 ? "eager" : "lazy",
                    draggable: false,
                    className: cn(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                      currentSlide === index && "ken-burns"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" }),
                  " View full screen"
                ] }) })
              ] })
            }
          ) }, src)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-gold", children: "Granton Homes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-serif text-lg sm:text-2xl text-white truncate", children: location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pointer-events-auto shrink-0 font-serif text-4xl sm:text-5xl text-white/90 tabular-nums", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: String(currentSlide + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/35 text-2xl sm:text-3xl", children: [
                " / ",
                String(images.length).padStart(2, "0")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Previous photo",
              disabled: !canScrollPrev,
              onClick: () => carouselApi?.scrollPrev(),
              className: navBtnClass,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-1/2 z-10 -translate-y-1/2 sm:right-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Next photo",
              disabled: !canScrollNext,
              onClick: () => carouselApi?.scrollNext(),
              className: navBtnClass,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:thin]", children: images.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => scrollToSlide(index),
        "aria-label": `Go to photo ${index + 1}`,
        "aria-current": currentSlide === index,
        className: cn(
          "relative shrink-0 snap-start overflow-hidden transition-all duration-300",
          "h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-36",
          currentSlide === index ? "ring-2 ring-gold opacity-100 scale-[1.02]" : "opacity-45 hover:opacity-80 ring-1 ring-border"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover", loading: "lazy", draggable: false }),
          currentSlide === index && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 bg-gold/90 py-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-foreground", children: String(index + 1).padStart(2, "0") })
        ]
      },
      src
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-2", role: "tablist", "aria-label": "Gallery photos", children: images.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": currentSlide === index,
        "aria-label": `Photo ${index + 1}`,
        onClick: () => scrollToSlide(index),
        className: cn(
          "h-1.5 rounded-full transition-all duration-300",
          currentSlide === index ? "w-10 bg-gold" : "w-1.5 bg-border hover:bg-gold/50"
        )
      },
      index
    )) }),
    lightbox && currentSrc && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md animate-in fade-in duration-200",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Full screen gallery",
        onClick: () => setLightbox(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center justify-between px-4 py-4 sm:px-8", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] uppercase tracking-[0.28em] text-white/70", children: [
              location,
              " · ",
              String(currentSlide + 1).padStart(2, "0"),
              " / ",
              String(images.length).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setLightbox(false),
                className: "text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-gold transition-colors",
                children: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 sm:px-12",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: currentSrc,
                    alt: `${location} — photo ${currentSlide + 1}`,
                    className: "max-h-[calc(100dvh-8rem)] max-w-full object-contain",
                    draggable: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Previous photo",
                    onClick: () => carouselApi?.scrollPrev(),
                    className: cn(navBtnClass, "absolute left-3 sm:left-8"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Next photo",
                    onClick: () => carouselApi?.scrollNext(),
                    className: cn(navBtnClass, "absolute right-3 sm:right-8"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
const virtualHero = "/assets/virtual-hero-rgEbfKa0.jpg";
const IMAGES = ["https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-16.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-5.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-18.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-23.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-3.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-19.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-10.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-14.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-4.jpg", "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-22-3.jpg"];
function GalleryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Gallery", title: "A portfolio of distinction.", subtitle: "A taste of the style, luxury and quality that has become synonymous with Granton Homes.", image: virtualHero, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryShowcase, { images: IMAGES }) })
  ] });
}
export {
  GalleryPage as component
};
