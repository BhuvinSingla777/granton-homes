import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  height = "tall",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: "tall" | "short";
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        height === "tall" ? "h-[92vh] min-h-[640px]" : "h-[62vh] min-h-[440px]"
      }`}
    >
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      </div>
      <div className="container-luxe relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 text-white">
        {eyebrow && <div className="eyebrow !text-gold mb-4">{eyebrow}</div>}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
