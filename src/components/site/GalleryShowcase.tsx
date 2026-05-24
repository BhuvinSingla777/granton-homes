import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const navBtnClass =
  "grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#001030] disabled:pointer-events-none disabled:opacity-30";

interface GalleryShowcaseProps {
  images: string[];
}

export function GalleryShowcase({ images }: GalleryShowcaseProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const syncCarouselState = useCallback((api: CarouselApi | undefined) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      carouselApi?.scrollTo(index);
    },
    [carouselApi],
  );

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
    if (!carouselApi) return;
    const onResize = () => carouselApi.reInit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [carouselApi]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
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

  return (
    <>
      <div className="relative overflow-hidden border border-[#d8e0e8] bg-black shadow-md">
        <Carousel
          opts={{ loop: true, align: "center", duration: 32 }}
          setApi={setCarouselApi}
          className="relative"
        >
          <CarouselContent className="ml-0">
            {images.map((src, index) => (
              <CarouselItem key={src} className="basis-full pl-0">
                <button
                  type="button"
                  className="group relative block w-full cursor-zoom-in"
                  onClick={() => setLightbox(true)}
                  aria-label={`View photo ${index + 1} full screen`}
                >
                  <div className="relative min-h-[52vh] sm:min-h-[62vh] lg:min-h-[72vh] w-full">
                    <img
                      src={src}
                      alt={`Gallery photo ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      draggable={false}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                        currentSlide === index && "ken-burns",
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                        <Maximize2 className="h-3.5 w-3.5" /> View full screen
                      </span>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-end gap-4 p-5 sm:p-8">
            <p className="pointer-events-auto shrink-0 text-3xl sm:text-4xl font-normal text-white/90 tabular-nums">
              <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="text-white/40 text-xl sm:text-2xl"> / {String(images.length).padStart(2, "0")}</span>
            </p>
          </div>

          <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-6">
            <button
              type="button"
              aria-label="Previous photo"
              disabled={!canScrollPrev}
              onClick={() => carouselApi?.scrollPrev()}
              className={navBtnClass}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 sm:right-6">
            <button
              type="button"
              aria-label="Next photo"
              disabled={!canScrollNext}
              onClick={() => carouselApi?.scrollNext()}
              className={navBtnClass}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Carousel>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:thin]">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to photo ${index + 1}`}
            aria-current={currentSlide === index}
            className={cn(
              "relative shrink-0 snap-start overflow-hidden transition-all duration-300",
              "h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-36",
              currentSlide === index
                ? "ring-2 ring-[#001030] opacity-100 scale-[1.02]"
                : "opacity-45 hover:opacity-80 ring-1 ring-[#d8e0e8]",
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" draggable={false} />
            {currentSlide === index && (
              <span className="absolute inset-x-0 bottom-0 bg-[#001030]/90 py-0.5 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Gallery photos">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Photo ${index + 1}`}
            onClick={() => scrollToSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              currentSlide === index ? "w-10 bg-[#001030]" : "w-1.5 bg-[#c5d0dc] hover:bg-[#001030]/50",
            )}
          />
        ))}
      </div>

      {lightbox && currentSrc && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen gallery"
          onClick={() => setLightbox(false)}
        >
          <div className="flex shrink-0 items-center justify-between px-4 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Gallery · {String(currentSlide + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => setLightbox(false)}
              className="text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSrc}
              alt={`Gallery photo ${currentSlide + 1}`}
              className="max-h-[calc(100dvh-8rem)] max-w-full object-contain"
              draggable={false}
            />
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => carouselApi?.scrollPrev()}
              className={cn(navBtnClass, "absolute left-3 sm:left-8")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => carouselApi?.scrollNext()}
              className={cn(navBtnClass, "absolute right-3 sm:right-8")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
