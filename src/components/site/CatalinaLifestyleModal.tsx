import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  MODAL_CAROUSEL_OPTS,
  MODAL_CAROUSEL_SCROLL_ATTR,
  modalCarouselScrollClass,
} from "@/components/site/modalCarousel";
import lifestyle1 from "@/assets/catalina-lifestyle-1.png";
import lifestyle2 from "@/assets/catalina-lifestyle-2.jpg";
import area1 from "@/assets/catalina-area-1.png";
import area2 from "@/assets/catalina-area-2.jpg";
import area3 from "@/assets/catalina-area-3.jpg";
import area4 from "@/assets/catalina-area-4.jpg";

const SLIDES = [
  {
    id: "lifestyle-location",
    title: "Location with Lifestyle Plus",
    image: lifestyle1,
    body: "Batemans Bay is positioned right on the coastline. Unbelievably close to premium unspoilt beaches on the South Coast of New South Wales, with shops and a golf club within walking distance. A selection of boat ramps and swimming areas in nearly any direction. Batemans Bay is an area surrounded by unspoilt beaches and National Parks. This spot is a true gem.",
  },
  {
    id: "lifestyle-climate",
    title: "Great Climate for many Activities",
    image: lifestyle2,
    body: "The south coast has long been a location for the people of Canberra to take a holiday. With an average climate temperature of 21°C it is a fantastic place to live or simply retire and enjoy all the south coast has to offer. There are activities at your doorstep to wet every appetite, golf course, bowling & sports clubs, tennis courts all a short drive away.",
  },
  {
    id: "area-information",
    title: "Area Information",
    images: [area1, area2, area3, area4],
    body: "Explore the lifestyle, recreation and amenities that make Catalina Estate and Batemans Bay such a desirable place to call home.",
  },
] as const;

const SLIDE_COUNT = SLIDES.length;

const navBtnClass =
  "shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-border bg-background shadow-sm transition-all hover:bg-gold hover:text-gold-foreground hover:border-gold disabled:pointer-events-none disabled:opacity-25";

interface CatalinaLifestyleModalProps {
  open: boolean;
  onClose: () => void;
}

export function CatalinaLifestyleModal({ open, onClose }: CatalinaLifestyleModalProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const syncCarouselState = useCallback((api: CarouselApi | undefined) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
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

  useEffect(() => {
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

  useEffect(() => {
    if (!carouselApi || !open) return;
    carouselApi.scrollTo(0, true);
    syncCarouselState(carouselApi);
  }, [open, carouselApi, syncCarouselState]);

  useEffect(() => {
    if (!carouselApi || !open) return;
    const onResize = () => carouselApi.reInit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [carouselApi, open]);

  const scrollToSlide = useCallback(
    (index: number) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalina-modal-title"
    >
      <div
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background shadow-2xl ring-1 ring-border",
          "h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[min(92dvh,900px)]",
          "sm:max-w-[min(calc(100vw-2rem),48rem)] md:max-w-[min(calc(100vw-3rem),56rem)] lg:max-w-[min(calc(100vw-4rem),72rem)]",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-5 sm:px-8 sm:py-6 md:px-10">
          <div className="min-w-0 flex-1 text-center sm:text-left sm:pr-4">
            <p className="eyebrow justify-center sm:justify-start">Catalina Estate</p>
            <h2
              id="catalina-modal-title"
              className="mt-2 font-serif text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Batemans Bay Lifestyle
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="shrink-0 grid h-10 w-10 place-items-center border border-border bg-muted/50 hover:bg-muted transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-3 py-4 sm:px-6 sm:py-6 md:px-8">
          <div className="flex min-h-0 flex-1 items-stretch gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={!canScrollPrev}
              onClick={() => carouselApi?.scrollPrev()}
              className={cn(navBtnClass, "self-center max-sm:hidden")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <Carousel
              opts={MODAL_CAROUSEL_OPTS}
              setApi={setCarouselApi}
              className="min-h-0 min-w-0 flex-1 h-full [&_.overflow-hidden]:h-full"
            >
              <CarouselContent className="ml-0 h-full min-h-[min(50dvh,420px)] touch-pan-y">
                {SLIDES.map((slide, index) => (
                  <CarouselItem key={slide.id} className="basis-full pl-0">
                    <article className="flex h-full min-h-0 flex-col border border-border bg-card">
                      <div className="shrink-0 border-b border-border bg-muted/30 px-4 py-3 sm:px-6 sm:py-4">
                        <h3 className="font-serif text-base leading-snug text-gold sm:text-lg md:text-xl lg:text-2xl">
                          <span className="mr-2 text-foreground/40">{index + 1}.</span>
                          {slide.title}
                        </h3>
                      </div>

                      {"image" in slide ? (
                        <>
                          <div className="relative shrink-0 w-full overflow-hidden aspect-[16/10] max-h-[min(28dvh,220px)] sm:max-h-[min(32dvh,280px)] md:max-h-[min(36dvh,340px)]">
                            <img
                              src={slide.image}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover"
                              loading="lazy"
                              draggable={false}
                            />
                          </div>
                          <div
                            {...{ [MODAL_CAROUSEL_SCROLL_ATTR]: "" }}
                            className={cn(
                              modalCarouselScrollClass,
                              "px-4 py-4 sm:px-6 sm:py-5 text-sm leading-relaxed text-foreground/80 sm:text-base",
                            )}
                            style={{ WebkitOverflowScrolling: "touch" }}
                          >
                            <p>{slide.body}</p>
                          </div>
                        </>
                      ) : (
                        <div
                          {...{ [MODAL_CAROUSEL_SCROLL_ATTR]: "" }}
                          className={cn(modalCarouselScrollClass, "px-4 py-4 sm:px-6 sm:py-5")}
                          style={{ WebkitOverflowScrolling: "touch" }}
                        >
                          <p className="mb-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                            {slide.body}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {slide.images.map((img, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-[4/3] overflow-hidden border border-border bg-muted/20"
                              >
                                <img
                                  src={img}
                                  alt=""
                                  className="absolute inset-0 h-full w-full object-cover"
                                  loading="lazy"
                                  draggable={false}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <button
              type="button"
              aria-label="Next slide"
              disabled={!canScrollNext}
              onClick={() => carouselApi?.scrollNext()}
              className={cn(navBtnClass, "self-center max-sm:hidden")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 shrink-0 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={!canScrollPrev}
              onClick={() => carouselApi?.scrollPrev()}
              className={navBtnClass}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={!canScrollNext}
              onClick={() => carouselApi?.scrollNext()}
              className={navBtnClass}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 sm:mt-6 shrink-0 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4 pb-[env(safe-area-inset-bottom,0px)]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {currentSlide + 1} / {SLIDE_COUNT}
            </p>
            <div
              className="flex max-w-full flex-wrap items-center justify-center gap-2"
              role="tablist"
              aria-label="Catalina Estate slides"
            >
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={currentSlide === index}
                  aria-label={`Go to ${slide.title}`}
                  onClick={() => scrollToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 ease-out",
                    currentSlide === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold/50",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
