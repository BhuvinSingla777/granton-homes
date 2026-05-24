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
import reason1 from "@/assets/invest-reason-1.jpg";
import reason2 from "@/assets/invest-reason-2.jpg";
import reason3 from "@/assets/invest-reason-3.jpg";
import reason4 from "@/assets/invest-reason-4.jpg";
import reason5 from "@/assets/invest-reason-5.jpg";

const INVEST_REASONS = [
  {
    title: "Investment from the Commonwealth Games",
    image: reason1,
    body: [
      "More than $5 billion worth of public or private investment is underway, or was recently completed, in part thanks to the 2018 Commonwealth Games. The specially constructed Athletes' Village will become part of the Gold Coast Health and Knowledge Precinct, which is linked by light rail to the CBD at Southport and the beaches.",
      "This precinct has been created to attract investors – especially in the tech and healthcare sectors – create jobs, and engage industry in the research, development and commercialization of new products and services. Once completed, the precinct is expected to employ up to 26,000 people and inject more than $2.9 billion into the local economy.",
    ],
  },
  {
    title: "More than $12.5b being spent on infrastructure and transport",
    image: reason2,
    body: [
      "Extensive urban planning of the Gold Coast has ensured that its growth is well serviced by efficient transport links. From the expanding light rail network to the Gold Coast Airport Expansion project, more than $12.5 billion in infrastructure is being spent on the Gold Coast right now.",
      "The G:Link light rail was completed in December last year, in preparation for the six million additional trips that were predicted to run during the Commonwealth Games. In addition, the city's accessibility to the state's capital is only improving, with the Federal Government announcing a $1 billion upgrade of the M1 motorway to ease congestion between Brisbane and the Gold Coast.",
    ],
  },
  {
    title: "Tourism continues to rise",
    image: reason3,
    body: [
      "Tourism has been the backbone of the Gold Coast economy since the Surfers Paradise hotel was built in 1925. Long a summer escape for Brisbane families, it now attracts more than 13 million visitors a year.",
      "Gold Coast Tourism CEO, Martin Winter praised the destination's continued growth. \"What is interesting is the record number of holiday makers within that figure,\" he said. \"It shows that the Gold Coast still takes pride of place on people's holiday itineraries and that the appeal and marketing of the destination is strong. In fact, the Gold Coast represents almost half of all holiday visitors to Queensland.\"",
      "The Gold Coast economy has been diversifying and is now valued at $25.2 billion, according to Gold Coast City Council.",
    ],
  },
  {
    title: "Some of the country's best attractions",
    image: reason4,
    body: [
      "Most Australians are familiar with the Gold Coast's reputation as the go-to destination for theme parks, with Dreamworld, Wet'n'Wild and Movie World all making their mark as must-visit destinations. Recently, one of Movie World's rides was named the Southern Hemisphere's biggest rollercoaster – the $30m DC Rivals HyperCoaster.",
      "But, as the city becomes increasingly sophisticated, so do its attractions. From the World Heritage-listed Gondwana Rainforests and the Ramsar Convention-listed coastal wetlands, to the casino, designer shopping at Pacific Fair, the Magic Millions sales, and a growing array of dining options, there is something to appeal to everyone here.",
    ],
  },
  {
    title: "Gold Coast University Hospital",
    image: reason5,
    body: [
      "Gold Coast University Hospital was completed in late 2013 at a cost of $1.76 billion. It provides a floor space of 170,000 square meters for clinical teaching and research facilities combined with specialized health services. Made up of seven main buildings, the facility provides a final capacity of 750 beds.",
    ],
  },
] as const;

const navBtnClass =
  "shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-border bg-background shadow-sm transition-all hover:bg-gold hover:text-gold-foreground hover:border-gold disabled:pointer-events-none disabled:opacity-25";

interface InvestReasonsModalProps {
  open: boolean;
  onClose: () => void;
}

export function InvestReasonsModal({ open, onClose }: InvestReasonsModalProps) {
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
      aria-labelledby="invest-reasons-title"
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
            <p className="eyebrow justify-center sm:justify-start">5 Reasons</p>
            <h2
              id="invest-reasons-title"
              className="mt-2 font-serif text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
            >
              To Invest in Isola Apartments
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
              aria-label="Previous reason"
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
                {INVEST_REASONS.map((reason, index) => (
                  <CarouselItem key={reason.title} className="basis-full pl-0">
                    <article className="flex h-full min-h-0 flex-col border border-border bg-card">
                      <div className="shrink-0 border-b border-border bg-muted/30 px-4 py-3 sm:px-6 sm:py-4">
                        <h3 className="font-serif text-base leading-snug text-gold sm:text-lg md:text-xl lg:text-2xl">
                          <span className="mr-2 text-foreground/40">{index + 1}.</span>
                          {reason.title}
                        </h3>
                      </div>

                      <div className="relative shrink-0 w-full overflow-hidden aspect-[16/10] max-h-[min(28dvh,220px)] sm:max-h-[min(32dvh,280px)] md:max-h-[min(36dvh,340px)]">
                        <img
                          src={reason.image}
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
                          "px-4 py-4 sm:px-6 sm:py-5 space-y-3 text-sm leading-relaxed text-foreground/80 sm:text-base",
                        )}
                        style={{ WebkitOverflowScrolling: "touch" }}
                      >
                        {reason.body.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <button
              type="button"
              aria-label="Next reason"
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
              aria-label="Previous reason"
              disabled={!canScrollPrev}
              onClick={() => carouselApi?.scrollPrev()}
              className={navBtnClass}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next reason"
              disabled={!canScrollNext}
              onClick={() => carouselApi?.scrollNext()}
              className={navBtnClass}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 sm:mt-6 shrink-0 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4 pb-[env(safe-area-inset-bottom,0px)]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {currentSlide + 1} / {INVEST_REASONS.length}
            </p>
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Investment reasons">
              {INVEST_REASONS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={currentSlide === index}
                  aria-label={`Go to reason ${index + 1}`}
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
