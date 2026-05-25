import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2022/03/slierb.jpg";

const GALLERY = [
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-1.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-16.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-19.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-12.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-7.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-6.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-22.jpg",
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-9.jpg",
] as const;

export const Route = createFileRoute("/virtual-tour")({
  component: VirtualTourPage,
});

function AnimatedParagraph({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block will-change-transform"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(14px)",
            filter: shown ? "blur(0px)" : "blur(6px)",
            transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 55}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 55}ms, filter 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 55}ms`,
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
}

function VirtualTourPage() {
  return (
    <SiteShell>
      <div className="gallery-theme flex-1">
        <section className="container-luxe pt-[calc(5rem+2rem)] pb-12 sm:pb-16">
          <Reveal className="mb-8 sm:mb-10 text-center">
            <h1 className="gallery-heading font-light uppercase tracking-[0.14em] text-2xl sm:text-4xl lg:text-5xl">
              The French Provincial
            </h1>
            <div className="mx-auto mt-5 h-px w-16 bg-[#a8893d]" />
          </Reveal>

          <Reveal delay={80}>
            <div className="group relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,16,48,0.45)]">
              <img
                src={HERO_IMAGE}
                alt="The French Provincial — Granton Homes"
                loading="eager"
                className="w-full aspect-[16/10] sm:aspect-[21/9] object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#001030]/15 via-transparent to-[#001030]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto text-center mt-12 sm:mt-16 px-2">
            <div className="mx-auto mb-6 sm:mb-8 h-px w-12 bg-[#a8893d]" />
            <AnimatedParagraph
              className="font-serif italic font-light text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.5] tracking-wide text-[#001030]/85"
              text="The French Provincial is opulence at every turn, the perfect home for an active family who loves to entertain. With two stories and four or five bedrooms, the French Provincial gives you a luxury dream home at an affordable price."
            />
            <div className="mx-auto mt-6 sm:mt-8 h-px w-12 bg-[#a8893d]" />
          </div>
        </section>

        <section className="container-luxe pb-16 sm:pb-20 lg:pb-24">
          <Reveal className="mb-10 sm:mb-12 text-center">
            <h2 className="gallery-heading font-light uppercase tracking-[0.14em] text-xl sm:text-2xl">
              Gallery
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-[#a8893d]" />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:auto-rows-[200px] xl:auto-rows-[230px] lg:grid-flow-dense">
            {GALLERY.map((src, i) => {
              const bentoSpans = [
                "lg:col-span-2 lg:row-span-2",
                "",
                "lg:row-span-2",
                "",
                "lg:col-span-2 lg:row-span-2",
                "",
                "",
                "lg:col-span-2",
              ];
              return (
                <Reveal key={src} delay={(i % 4) * 70} className={bentoSpans[i]}>
                  <div className="group relative h-full w-full overflow-hidden border border-[#d8e0e8] hover:border-[#a8893d]/60 shadow-[0_1px_2px_rgba(0,16,48,0.04)] hover:shadow-[0_20px_50px_-25px_rgba(0,16,48,0.4)] hover:-translate-y-1 transition-all duration-500 aspect-[4/5] lg:aspect-auto">
                    <img
                      src={src}
                      alt={`The French Provincial interior ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001030]/65 via-[#001030]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 right-3 text-white text-[10px] uppercase tracking-[0.22em] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 drop-shadow-lg">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
