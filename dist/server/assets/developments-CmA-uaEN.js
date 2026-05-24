import { Q as reactExports, I as jsxRuntimeExports } from "./server-DASLeRH5.js";
import { L as Link } from "./router-CprBJL6q.js";
import { X, S as SiteShell, P as PageHero, R as Reveal } from "./Reveal-C_lWTekO.js";
import { c as ChevronLeft, e as cn, C as Carousel, a as CarouselContent, b as CarouselItem, d as ChevronRight } from "./carousel-BJVwFal3.js";
import { M as MapPin } from "./map-pin-DYMtopsc.js";
import { A as ArrowRight } from "./arrow-right-BTNAsy3W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const MODAL_CAROUSEL_SCROLL_ATTR = "data-modal-carousel-scroll";
const MODAL_CAROUSEL_SCROLL_SELECTOR = `[${MODAL_CAROUSEL_SCROLL_ATTR}]`;
const MODAL_CAROUSEL_OPTS = {
  loop: true,
  align: "start",
  duration: 28,
  dragFree: false,
  skipSnaps: false,
  watchDrag: (_emblaApi, event) => {
    const target = event.target;
    if (!(target instanceof Element)) return true;
    return !target.closest(MODAL_CAROUSEL_SCROLL_SELECTOR);
  }
};
const modalCarouselScrollClass = "min-h-0 flex-1 overflow-y-auto overscroll-y-contain touch-pan-y [scrollbar-gutter:stable]";
const INVEST_IMAGES = [
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-22-3.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-23.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-19.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-14.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg"
];
const INVEST_REASONS = [
  {
    title: "Investment from the Commonwealth Games",
    image: INVEST_IMAGES[0],
    body: [
      "More than $5 billion worth of public or private investment is underway, or was recently completed, in part thanks to the 2018 Commonwealth Games. The specially constructed Athletes' Village will become part of the Gold Coast Health and Knowledge Precinct, which is linked by light rail to the CBD at Southport and the beaches.",
      "This precinct has been created to attract investors – especially in the tech and healthcare sectors – create jobs, and engage industry in the research, development and commercialization of new products and services. Once completed, the precinct is expected to employ up to 26,000 people and inject more than $2.9 billion into the local economy."
    ]
  },
  {
    title: "More than $12.5b being spent on infrastructure and transport",
    image: INVEST_IMAGES[1],
    body: [
      "Extensive urban planning of the Gold Coast has ensured that its growth is well serviced by efficient transport links. From the expanding light rail network to the Gold Coast Airport Expansion project, more than $12.5 billion in infrastructure is being spent on the Gold Coast right now.",
      "The G:Link light rail was completed in December last year, in preparation for the six million additional trips that were predicted to run during the Commonwealth Games. In addition, the city's accessibility to the state's capital is only improving, with the Federal Government announcing a $1 billion upgrade of the M1 motorway to ease congestion between Brisbane and the Gold Coast."
    ]
  },
  {
    title: "Tourism continues to rise",
    image: INVEST_IMAGES[2],
    body: [
      "Tourism has been the backbone of the Gold Coast economy since the Surfers Paradise hotel was built in 1925. Long a summer escape for Brisbane families, it now attracts more than 13 million visitors a year.",
      `Gold Coast Tourism CEO, Martin Winter praised the destination's continued growth. "What is interesting is the record number of holiday makers within that figure," he said. "It shows that the Gold Coast still takes pride of place on people's holiday itineraries and that the appeal and marketing of the destination is strong. In fact, the Gold Coast represents almost half of all holiday visitors to Queensland."`,
      "The Gold Coast economy has been diversifying and is now valued at $25.2 billion, according to Gold Coast City Council."
    ]
  },
  {
    title: "Some of the country's best attractions",
    image: INVEST_IMAGES[3],
    body: [
      "Most Australians are familiar with the Gold Coast's reputation as the go-to destination for theme parks, with Dreamworld, Wet'n'Wild and Movie World all making their mark as must-visit destinations. Recently, one of Movie World's rides was named the Southern Hemisphere's biggest rollercoaster – the $30m DC Rivals HyperCoaster.",
      "But, as the city becomes increasingly sophisticated, so do its attractions. From the World Heritage-listed Gondwana Rainforests and the Ramsar Convention-listed coastal wetlands, to the casino, designer shopping at Pacific Fair, the Magic Millions sales, and a growing array of dining options, there is something to appeal to everyone here."
    ]
  },
  {
    title: "Gold Coast University Hospital",
    image: INVEST_IMAGES[4],
    body: [
      "Gold Coast University Hospital was completed in late 2013 at a cost of $1.76 billion. It provides a floor space of 170,000 square meters for clinical teaching and research facilities combined with specialized health services. Made up of seven main buildings, the facility provides a final capacity of 750 beds."
    ]
  }
];
const navBtnClass$1 = "shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-border bg-background shadow-sm transition-all hover:bg-gold hover:text-gold-foreground hover:border-gold disabled:pointer-events-none disabled:opacity-25";
function InvestReasonsModal({ open, onClose }) {
  const [carouselApi, setCarouselApi] = reactExports.useState();
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const syncCarouselState = reactExports.useCallback((api) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") carouselApi?.scrollPrev();
      if (e.key === "ArrowRight") carouselApi?.scrollNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, carouselApi]);
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
    if (!carouselApi || !open) return;
    carouselApi.scrollTo(0, true);
    syncCarouselState(carouselApi);
  }, [open, carouselApi, syncCarouselState]);
  reactExports.useEffect(() => {
    if (!carouselApi || !open) return;
    const onResize = () => carouselApi.reInit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [carouselApi, open]);
  const scrollToSlide = reactExports.useCallback(
    (index) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi]
  );
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm sm:p-4 md:p-6 animate-in fade-in duration-200",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "invest-reasons-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "relative flex w-full flex-col overflow-hidden bg-background shadow-2xl ring-1 ring-border",
            "h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[min(92dvh,900px)]",
            "sm:max-w-[min(calc(100vw-2rem),48rem)] md:max-w-[min(calc(100vw-3rem),56rem)] lg:max-w-[min(calc(100vw-4rem),72rem)]"
          ),
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-5 sm:px-8 sm:py-6 md:px-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 text-center sm:text-left sm:pr-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow justify-center sm:justify-start", children: "5 Reasons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "invest-reasons-title",
                    className: "mt-2 font-serif text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl",
                    children: "To Invest in Isola Apartments"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "shrink-0 grid h-10 w-10 place-items-center border border-border bg-muted/50 hover:bg-muted transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col px-3 py-4 sm:px-6 sm:py-6 md:px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 items-stretch gap-2 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Previous reason",
                    disabled: !canScrollPrev,
                    onClick: () => carouselApi?.scrollPrev(),
                    className: cn(navBtnClass$1, "self-center max-sm:hidden"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Carousel,
                  {
                    opts: MODAL_CAROUSEL_OPTS,
                    setApi: setCarouselApi,
                    className: "min-h-0 min-w-0 flex-1 h-full [&_.overflow-hidden]:h-full",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 h-full min-h-[min(50dvh,420px)] touch-pan-y", children: INVEST_REASONS.map((reason, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full pl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full min-h-0 flex-col border border-border bg-card", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-b border-border bg-muted/30 px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-base leading-snug text-gold sm:text-lg md:text-xl lg:text-2xl", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2 text-foreground/40", children: [
                          index + 1,
                          "."
                        ] }),
                        reason.title
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0 w-full overflow-hidden aspect-[16/10] max-h-[min(28dvh,220px)] sm:max-h-[min(32dvh,280px)] md:max-h-[min(36dvh,340px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: reason.image,
                          alt: "",
                          className: "absolute inset-0 h-full w-full object-cover",
                          loading: "lazy",
                          draggable: false
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          ...{ [MODAL_CAROUSEL_SCROLL_ATTR]: "" },
                          className: cn(
                            modalCarouselScrollClass,
                            "px-4 py-4 sm:px-6 sm:py-5 space-y-3 text-sm leading-relaxed text-foreground/80 sm:text-base"
                          ),
                          style: { WebkitOverflowScrolling: "touch" },
                          children: reason.body.map((paragraph, pIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: paragraph }, pIndex))
                        }
                      )
                    ] }) }, reason.title)) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Next reason",
                    disabled: !canScrollNext,
                    onClick: () => carouselApi?.scrollNext(),
                    className: cn(navBtnClass$1, "self-center max-sm:hidden"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 shrink-0 flex items-center justify-center gap-3 sm:hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Previous reason",
                    disabled: !canScrollPrev,
                    onClick: () => carouselApi?.scrollPrev(),
                    className: navBtnClass$1,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Next reason",
                    disabled: !canScrollNext,
                    onClick: () => carouselApi?.scrollNext(),
                    className: navBtnClass$1,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:mt-6 shrink-0 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4 pb-[env(safe-area-inset-bottom,0px)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: [
                  currentSlide + 1,
                  " / ",
                  INVEST_REASONS.length
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-w-full flex-wrap items-center justify-center gap-2", role: "tablist", "aria-label": "Investment reasons", children: INVEST_REASONS.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "aria-selected": currentSlide === index,
                    "aria-label": `Go to reason ${index + 1}`,
                    onClick: () => scrollToSlide(index),
                    className: cn(
                      "h-2 rounded-full transition-all duration-300 ease-out",
                      currentSlide === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold/50"
                    )
                  },
                  index
                )) })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const CATALINA_IMAGES = {
  lifestyle1: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-3.jpg",
  lifestyle2: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-8.jpg",
  area1: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-10.jpg",
  area2: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg",
  area3: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-14.jpg",
  area4: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-19.jpg"
};
const SLIDES = [
  {
    id: "lifestyle-location",
    title: "Location with Lifestyle Plus",
    image: CATALINA_IMAGES.lifestyle1,
    body: "Batemans Bay is positioned right on the coastline. Unbelievably close to premium unspoilt beaches on the South Coast of New South Wales, with shops and a golf club within walking distance. A selection of boat ramps and swimming areas in nearly any direction. Batemans Bay is an area surrounded by unspoilt beaches and National Parks. This spot is a true gem."
  },
  {
    id: "lifestyle-climate",
    title: "Great Climate for many Activities",
    image: CATALINA_IMAGES.lifestyle2,
    body: "The south coast has long been a location for the people of Canberra to take a holiday. With an average climate temperature of 21°C it is a fantastic place to live or simply retire and enjoy all the south coast has to offer. There are activities at your doorstep to wet every appetite, golf course, bowling & sports clubs, tennis courts all a short drive away."
  },
  {
    id: "area-information",
    title: "Area Information",
    images: [CATALINA_IMAGES.area1, CATALINA_IMAGES.area2, CATALINA_IMAGES.area3, CATALINA_IMAGES.area4],
    body: "Explore the lifestyle, recreation and amenities that make Catalina Estate and Batemans Bay such a desirable place to call home."
  }
];
const SLIDE_COUNT = SLIDES.length;
const navBtnClass = "shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-border bg-background shadow-sm transition-all hover:bg-gold hover:text-gold-foreground hover:border-gold disabled:pointer-events-none disabled:opacity-25";
function CatalinaLifestyleModal({ open, onClose }) {
  const [carouselApi, setCarouselApi] = reactExports.useState();
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const syncCarouselState = reactExports.useCallback((api) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") carouselApi?.scrollPrev();
      if (e.key === "ArrowRight") carouselApi?.scrollNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, carouselApi]);
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
    if (!carouselApi || !open) return;
    carouselApi.scrollTo(0, true);
    syncCarouselState(carouselApi);
  }, [open, carouselApi, syncCarouselState]);
  reactExports.useEffect(() => {
    if (!carouselApi || !open) return;
    const onResize = () => carouselApi.reInit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [carouselApi, open]);
  const scrollToSlide = reactExports.useCallback(
    (index) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi]
  );
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm sm:p-4 md:p-6 animate-in fade-in duration-200",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "catalina-modal-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "relative flex w-full flex-col overflow-hidden bg-background shadow-2xl ring-1 ring-border",
            "h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[min(92dvh,900px)]",
            "sm:max-w-[min(calc(100vw-2rem),48rem)] md:max-w-[min(calc(100vw-3rem),56rem)] lg:max-w-[min(calc(100vw-4rem),72rem)]"
          ),
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-5 sm:px-8 sm:py-6 md:px-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 text-center sm:text-left sm:pr-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow justify-center sm:justify-start", children: "Catalina Estate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "catalina-modal-title",
                    className: "mt-2 font-serif text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl",
                    children: "Batemans Bay Lifestyle"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "shrink-0 grid h-10 w-10 place-items-center border border-border bg-muted/50 hover:bg-muted transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col px-3 py-4 sm:px-6 sm:py-6 md:px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 items-stretch gap-2 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Previous slide",
                    disabled: !canScrollPrev,
                    onClick: () => carouselApi?.scrollPrev(),
                    className: cn(navBtnClass, "self-center max-sm:hidden"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Carousel,
                  {
                    opts: MODAL_CAROUSEL_OPTS,
                    setApi: setCarouselApi,
                    className: "min-h-0 min-w-0 flex-1 h-full [&_.overflow-hidden]:h-full",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 h-full min-h-[min(50dvh,420px)] touch-pan-y", children: SLIDES.map((slide, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full pl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full min-h-0 flex-col border border-border bg-card", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-b border-border bg-muted/30 px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-base leading-snug text-gold sm:text-lg md:text-xl lg:text-2xl", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2 text-foreground/40", children: [
                          index + 1,
                          "."
                        ] }),
                        slide.title
                      ] }) }),
                      "image" in slide ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0 w-full overflow-hidden aspect-[16/10] max-h-[min(28dvh,220px)] sm:max-h-[min(32dvh,280px)] md:max-h-[min(36dvh,340px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: slide.image,
                            alt: "",
                            className: "absolute inset-0 h-full w-full object-cover",
                            loading: "lazy",
                            draggable: false
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            ...{ [MODAL_CAROUSEL_SCROLL_ATTR]: "" },
                            className: cn(
                              modalCarouselScrollClass,
                              "px-4 py-4 sm:px-6 sm:py-5 text-sm leading-relaxed text-foreground/80 sm:text-base"
                            ),
                            style: { WebkitOverflowScrolling: "touch" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: slide.body })
                          }
                        )
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          ...{ [MODAL_CAROUSEL_SCROLL_ATTR]: "" },
                          className: cn(modalCarouselScrollClass, "px-4 py-4 sm:px-6 sm:py-5"),
                          style: { WebkitOverflowScrolling: "touch" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm leading-relaxed text-foreground/80 sm:text-base", children: slide.body }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4", children: slide.images.map((img, imgIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "relative aspect-[4/3] overflow-hidden border border-border bg-muted/20",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    src: img,
                                    alt: "",
                                    className: "absolute inset-0 h-full w-full object-cover",
                                    loading: "lazy",
                                    draggable: false
                                  }
                                )
                              },
                              imgIndex
                            )) })
                          ]
                        }
                      )
                    ] }) }, slide.id)) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Next slide",
                    disabled: !canScrollNext,
                    onClick: () => carouselApi?.scrollNext(),
                    className: cn(navBtnClass, "self-center max-sm:hidden"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 shrink-0 flex items-center justify-center gap-3 sm:hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Previous slide",
                    disabled: !canScrollPrev,
                    onClick: () => carouselApi?.scrollPrev(),
                    className: navBtnClass,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Next slide",
                    disabled: !canScrollNext,
                    onClick: () => carouselApi?.scrollNext(),
                    className: navBtnClass,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:mt-6 shrink-0 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4 pb-[env(safe-area-inset-bottom,0px)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: [
                  currentSlide + 1,
                  " / ",
                  SLIDE_COUNT
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex max-w-full flex-wrap items-center justify-center gap-2",
                    role: "tablist",
                    "aria-label": "Catalina Estate slides",
                    children: SLIDES.map((slide, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        role: "tab",
                        "aria-selected": currentSlide === index,
                        "aria-label": `Go to ${slide.title}`,
                        onClick: () => scrollToSlide(index),
                        className: cn(
                          "h-2 rounded-full transition-all duration-300 ease-out",
                          currentSlide === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold/50"
                        )
                      },
                      slide.id
                    ))
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const DEV_IMAGES = {
  central: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-22-3.jpg",
  railway: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-23.jpg",
  broadhead: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-19.jpg",
  henryBayly: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-10.jpg",
  catalina: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-14.jpg",
  raceview: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-11.jpg",
  grafton: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-4.jpg",
  singleton: "https://grantonhomes.com.au/wp-content/uploads/2024/10/16-Stanford-Bridge-Ave-North-Kellyville-3.jpg"
};
const developments = [{
  name: "Central Street",
  subtitle: "Isola Apartments",
  location: "Labrador QLD",
  price: "$585,000",
  img: DEV_IMAGES.central,
  status: "Selling",
  showInvestReasons: true,
  description: "55 prestige apartments cater to all lifestyles. Offering 1, 2, and 3 bedroom apartments this exclusive development is the position just 10 minutes from South port, 20 minutes from Broadbeach, and 40 minutes from Brisbane. Offering convenience, flexibility, and the ultimate luxury in beachside living. Your apartment has been thoughtfully designed to give you room to live life your way. Open plan living areas, functional kitchens with European designed appliances, spacious bedrooms, walk-in robes, and ensuites. All apartments have been positioned to take advantage of the cooling coastal breezes and Water Views over the Main Beach – Everything has been considered"
}, {
  name: "Railway Street",
  subtitle: "Vela Southport",
  location: "Southport QLD",
  price: "$450,000",
  img: DEV_IMAGES.railway,
  status: "Selling",
  description: "Vela is a mixed-use development that fronts the Coral Sea in Southport, Queensland. With uninterrupted views across the Pacific, opposite SeaWorld, the office, and residential dwellings enjoy 360 views of the ocean and Surfer's Paradise to its south. The apartments are designed to maximise views and amenity, with all dwellings enjoying corner positions, maximising the sea views.\n\nClad with a composite glass and aluminium façade the architecture dominates its surroundings and is the gateway to the new city centre of Southport CBD. An organic articulated podium bookends the block and serves to house coordination of service and access to parking, residential dwellings and commercial all within a footprint of only 700 sqm."
}, {
  name: "Broadhead Road",
  location: "Mudgee NSW",
  price: "On request",
  img: DEV_IMAGES.broadhead,
  status: "Selling",
  description: "Located in the exclusive South Mudgee, opposite a new approved High School, Broadhead Place is Mudgee newest concept in contemporary modern living. It has been carefully designed to complement its natural surroundings. This boutique townhouse project with onsite Childcare Centre will provide spacious living and quality finishes.\n\nBroadhead Place presents a lifestyle that lets you enjoy the beauty of nature and the creature comforts of modern living."
}, {
  name: "Henry Bayly Drive",
  location: "Mudgee NSW",
  price: "$700,000",
  img: DEV_IMAGES.henryBayly,
  status: "Coming Soon",
  description: "Rare 11 Super Lots Land Subdivision in South Mudgee\n\n11 residential blocks sized from 2000–4000sqm\nExclusive 8.2 Hectare, fully fenced.\nPlenty of house sites capturing the views of Mudgee's township\nTwo dams & established orchard making it the ideal rural lifestyle property only a stone's throw from Mudgee's CBD\nThe perfect rural lifestyle block right on the edge of town, build your dream home here"
}, {
  name: "Catalina Estate",
  location: "Batemans Bay NSW",
  price: "On request",
  img: DEV_IMAGES.catalina,
  status: "Selling",
  showCatalinaLifestyle: true,
  description: "The Perfect Serene Location\n\nWhen it comes to natural settings, Catalina Estate has it all! Nestled alongside natural bushland and wildlife corridors. You will forget you are conveniently just minutes away from Batemans Bay CBD. Within walking distance from stunning unpopulated golden sandy beaches, with the cool sea breeze at your doorstep. Minutes away from local schools and parks, prime location to suit everyone's needs!"
}, {
  name: "Cemetary Road",
  location: "Raceview QLD",
  price: "$430,000",
  img: DEV_IMAGES.raceview,
  status: "Selling"
}, {
  name: "Bimble Ave",
  location: "South Grafton NSW",
  price: "On request",
  img: DEV_IMAGES.grafton,
  status: "Registering"
}, {
  name: "15A Boonal Street",
  location: "Singleton NSW",
  price: "$450,000",
  img: DEV_IMAGES.singleton,
  status: "Selling"
}];
function DevelopmentsPage() {
  const [investModalOpen, setInvestModalOpen] = reactExports.useState(false);
  const [catalinaModalOpen, setCatalinaModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Developments", title: "Master-planned communities, considered down to the lot.", subtitle: "Explore our growing portfolio of premium residential developments across NSW and Queensland.", image: DEV_IMAGES.henryBayly, height: "short" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-8", children: developments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card border border-border h-full flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.22em] px-3 py-1.5", children: d.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 flex flex-col gap-3 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl leading-snug", children: d.name }),
          d.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gold tracking-wide", children: d.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-gold" }),
          " ",
          d.location
        ] }),
        d.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/75 leading-relaxed whitespace-pre-line flex-1", children: d.description }),
        d.showInvestReasons && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setInvestModalOpen(true), className: "btn-ghost w-full justify-center text-center leading-snug py-3", children: [
          "5 Reasons",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "To Invest"
        ] }),
        d.showCatalinaLifestyle && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setCatalinaModalOpen(true), className: "btn-ghost w-full justify-center text-center leading-snug py-3", children: [
          "Location &",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Lifestyle"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-4 border-t border-border flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Price from" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-gold", children: d.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact-us", className: "text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-1.5 hover:text-gold transition shrink-0", children: [
            "View ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] }) }, d.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InvestReasonsModal, { open: investModalOpen, onClose: () => setInvestModalOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CatalinaLifestyleModal, { open: catalinaModalOpen, onClose: () => setCatalinaModalOpen(false) })
  ] });
}
export {
  DevelopmentsPage as component
};
