import type { EmblaOptionsType } from "embla-carousel";

/** Marks vertically scrollable regions inside modal carousels (see watchDrag). */
export const MODAL_CAROUSEL_SCROLL_ATTR = "data-modal-carousel-scroll";

export const MODAL_CAROUSEL_SCROLL_SELECTOR = `[${MODAL_CAROUSEL_SCROLL_ATTR}]`;

export const MODAL_CAROUSEL_OPTS: EmblaOptionsType = {
  loop: true,
  align: "start",
  duration: 28,
  dragFree: false,
  skipSnaps: false,
  watchDrag: (_emblaApi, event) => {
    const target = event.target;
    if (!(target instanceof Element)) return true;
    return !target.closest(MODAL_CAROUSEL_SCROLL_SELECTOR);
  },
};

export const modalCarouselScrollClass =
  "min-h-0 flex-1 overflow-y-auto overscroll-y-contain touch-pan-y [scrollbar-gutter:stable]";
