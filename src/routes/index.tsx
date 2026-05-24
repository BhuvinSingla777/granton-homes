import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { GalleryShowcase } from "@/components/site/GalleryShowcase";
import { SiteShell } from "@/components/site/SiteShell";
import { VideoModal } from "@/components/site/VideoModal";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2022/03/slierb.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const primaryBtnClass =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-normal text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition";

const secondaryBtnClass =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-normal text-[#c9a227] bg-transparent border border-[#c9a227] hover:bg-[#c9a227]/10 transition";

const ADVANTAGES = [
  {
    title: "Premium Inclusions as Standard",
    body: "We offer a level of luxury far beyond typical industry standards, with inclusions that elevate your living experience.",
  },
  {
    title: "Thoughtfully Designed Spaces",
    body: "Enjoy popular and practical features such as a gourmet kitchen, adjacent formal dining area, and a stunning curved staircase leading to a luxurious master suite with his and hers walk-in wardrobes.",
  },
  {
    title: "Truly Custom Builds",
    body: "Every Granton Homes project is a bespoke creation—tailored to suit your lifestyle, taste, and site. Say goodbye to restrictive floorplans and standard layouts.",
  },
  {
    title: "Exceptional Finishes",
    body: "From high-end materials and finishes to custom-forged ironwork, your home will reflect craftsmanship and sophistication in every detail.",
  },
  {
    title: "Flexible Build Options",
    body: "Whether you're starting from a vacant block or undertaking a knockdown rebuild, we provide tailored solutions to suit your needs.",
  },
  {
    title: "Expertise in Challenging Sites",
    body: "Our team specialises in building on difficult terrain and restricted-access locations—bringing your vision to life, no matter the complexity.",
  },
  {
    title: "Master Craftsmanship",
    body: "With Granton Homes, you can expect outstanding workmanship and a flawless finish in every home we build.",
  },
  {
    title: "Modern Features & Smart Technology",
    body: "Enjoy advanced inclusions such as next-generation alarm systems, smart home integration, custom joinery throughout, energy-efficient LED lighting, and more.",
  },
  {
    title: "Timeless French Provincial Style",
    body: "We are renowned for our elegant, French Provincial-inspired homes—offering a blend of timeless beauty and modern luxury.",
  },
] as const;

const enquiryInputClass =
  "mt-2 w-full border border-[#d8e0e8] bg-white px-4 py-3 text-sm text-[#001030] placeholder:text-[#4a5f7a]/60 focus:border-[#c9a227] focus:outline-none transition";

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

  return (
    <SiteShell>
      <section className="relative min-h-[min(92vh,900px)] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className="container-luxe relative z-10 px-6 py-28 sm:py-32 text-center text-white max-w-5xl font-[Montserrat,sans-serif]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold uppercase leading-tight tracking-wide">
            Your dream home, built to match your exact tastes, needs &amp; lifestyle
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/95 max-w-3xl mx-auto">
            Granton Homes provides a premier &ldquo;Custom Build&rdquo; experience to those seeking to
            create a classic, timeless luxury home.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button type="button" onClick={() => setVideoOpen(true)} className={primaryBtnClass}>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              Watch Walkthrough Video
            </button>
            <a href="tel:1300318699" className={secondaryBtnClass}>
              Call Now: 1300 318 699
            </a>
          </div>
        </div>
      </section>

      <section className="gallery-theme py-16 sm:py-20 lg:py-24">
        <div className="container-luxe px-6">
          <article className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-white shadow-[0_12px_40px_-12px_rgba(0,16,48,0.18)] grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={HERO_IMAGE}
                alt="Granton Homes luxury residence"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 font-[Montserrat,sans-serif]">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001030] tracking-wide">
                About Granton Homes
              </h2>
              <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed gallery-muted font-normal">
                <p>
                  At Granton Homes, our work embodies the highest standards of design excellence,
                  combining refined elegance with meticulous attention to detail. Each home we create
                  strikes the perfect balance between functionality, character, and timeless charm.
                </p>
                <p>
                  Every design is thoughtfully tailored to reflect the individual needs, aspirations,
                  and lifestyle of our clients—while remaining sensitive to the unique environment in
                  which it is built.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="granton-textured-bg py-16 sm:py-20 lg:py-24 font-[Montserrat,sans-serif]">
        <div className="container-luxe px-6">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001030] tracking-wide">
            The Granton Homes Advantage
          </h2>

          <ul className="mt-12 sm:mt-14 grid gap-10 md:grid-cols-2 lg:gap-x-14 lg:gap-y-12 max-w-6xl mx-auto">
            {ADVANTAGES.map((item) => (
              <li key={item.title} className="flex gap-4 sm:gap-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c9a227]/50 bg-white/80 text-lg font-bold text-[#c9a227] shadow-sm"
                  aria-hidden
                >
                  N
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001030] leading-snug">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#4a5f7a] font-normal">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gallery-theme py-16 sm:py-20 lg:pb-24">
        <div className="container-luxe px-6">
          <div className="text-center font-[Montserrat,sans-serif]">
            <h2 className="gallery-heading">Gallery</h2>
            <p className="gallery-muted mt-4 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Photos are of our display home in Kellyville NSW.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <GalleryShowcase images={[...GALLERY_IMAGES]} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001030]/55" aria-hidden />

        <div className="container-luxe relative z-10 px-6">
          <div className="mx-auto max-w-3xl text-center font-[Montserrat,sans-serif] text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide leading-tight">
              Book a Viewing Of Our Exclusive Display Today
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed font-normal text-white/95">
              Complete the contact form below and we will call you back to answer and questions you may
              have, and organise a private showing of our display home in Kellyville.
            </p>
            <div className="mt-10">
              <Link to="/contact-us" className={primaryBtnClass}>
                Make An Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-theme py-16 sm:py-20 lg:py-24">
        <div className="container-luxe px-6">
          <div className="mx-auto max-w-xl text-center font-[Montserrat,sans-serif]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#001030] tracking-wide">Find Out More Today</h2>
            <p className="gallery-muted mt-4 text-base sm:text-lg leading-relaxed font-normal">
              Leave your contact details below and we&apos;ll call you back shortly to answer any questions,
              and if you wish, book in a time for a private viewing of our display home in Kellyville.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEnquirySent(true);
            }}
            className="mx-auto mt-10 max-w-xl font-[Montserrat,sans-serif]"
          >
            <p className="text-sm gallery-muted mb-6">Fields marked with an * are required</p>

            <div className="space-y-5">
              <div>
                <label htmlFor="enquiry-full-name" className="text-sm text-[#001030]">
                  Full Name <span className="text-[#c9a227]">*</span>
                </label>
                <input
                  id="enquiry-full-name"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Full Name"
                  className={enquiryInputClass}
                />
              </div>
              <div>
                <label htmlFor="enquiry-email" className="text-sm text-[#001030]">
                  Email <span className="text-[#c9a227]">*</span>
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={enquiryInputClass}
                />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="text-sm text-[#001030]">
                  Phone <span className="text-[#c9a227]">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone"
                  className={enquiryInputClass}
                />
              </div>
            </div>

            <button type="submit" className={`${primaryBtnClass} mt-8 w-full sm:w-auto`}>
              {enquirySent ? "Thank you — we'll be in touch" : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} youtubeId="OOQM0BmcpC8" />
    </SiteShell>
  );
}
