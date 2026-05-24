import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { VideoModal } from "@/components/site/VideoModal";

const HERO_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-12.jpg";
const OVERVIEW_IMAGE =
  "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-7-400x516.jpg";
const CTA_BG_IMAGE = "https://grantonhomes.com.au/wp-content/uploads/2021/04/bg1-9.jpg";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
});

const primaryBtnClass =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-normal text-white bg-[#c9a227] border border-[#c9a227] hover:brightness-95 transition";

const secondaryBtnClass =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-normal text-[#c9a227] bg-transparent border border-[#c9a227] hover:bg-[#c9a227]/10 transition";

function AboutPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <SiteShell>
      <section className="relative min-h-[min(85vh,720px)] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="container-luxe relative z-10 px-6 py-28 sm:py-32 text-center text-white max-w-4xl">
          <h1 className="font-[Montserrat,sans-serif] text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            About Us
          </h1>
          <p className="mt-8 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            Whether you are planning to build your dream home on a vacant block or you are considering
            a complete knock down rebuild, our philosophy is based on servicing your belief and welcoming
            your involvement throughout the design and planning process so that your home is tailored to
            fit your lifestyle.
          </p>
        </div>
      </section>

      <div className="gallery-theme">
        <section className="container-luxe py-16 sm:py-20 lg:py-24 max-w-3xl mx-auto space-y-14 sm:space-y-16">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#001030] font-[Montserrat,sans-serif]">
              Granton Homes
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed gallery-muted font-normal">
              <p>
                At Granton Homes, we offer a diverse range of award-winning standard designs, all of which
                can be tailored to suit your unique lifestyle and preferences. If our existing plans don't
                fully meet your needs, our custom design service provides the opportunity to create a home
                that is truly your own. Our experienced design team will work closely with you to bring your
                vision to life—from initial concept through to completion.
              </p>
              <p>
                We are committed to ensuring that your individuality is reflected in every aspect of your
                home, both inside and out. What sets Granton Homes apart is our ability to transform your
                ideas and aspirations into a stylish, luxurious residence that is as distinctive as it is
                functional. With a focus on quality, creativity, and attention to detail, we deliver homes
                that stand out in any neighbourhood.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-[#001030] font-[Montserrat,sans-serif]">
              Our Philosophy
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed gallery-muted font-normal">
              <p>
                At Granton Homes, we are dedicated to delivering exceptional craftsmanship in every home we
                design and build.
              </p>
              <p>
                Our commitment to quality extends across every aspect of the process—from innovative design
                and premium construction materials to high-end finishes and industry-leading technical
                standards. Most importantly, we pride ourselves on providing outstanding customer service,
                ensuring a seamless and rewarding experience from concept to completion.
              </p>
            </div>
          </Reveal>

        </section>
      </div>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <img
          src={CTA_BG_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001030]/85" aria-hidden />

        <div className="container-luxe relative z-10 px-6">
          <div className="mx-auto max-w-4xl text-center font-[Montserrat,sans-serif] text-white">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                The highly experienced team at Granton Homes is committed to guiding you through every
                stage of your home-building journey. From customising the design to suit your unique needs,
                to selecting the ideal materials, finishes, and fittings—our experts are here to ensure
                every detail reflects your vision. Your home will be built by skilled craftsmen dedicated
                to delivering the highest standards of quality.
              </p>
              <p>
                We also manage all aspects of the approval process, including documentation and
                certification, so you can enjoy a seamless and stress-free experience.
              </p>
              <p>
                When you choose to build with Granton Homes, you're partnering with a trusted and reputable
                company that specialises in crafting high-quality, luxury residences. The result is a home
                of true distinction—designed for comfort, built to last, and a joy to live in.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <button type="button" onClick={() => setVideoOpen(true)} className={primaryBtnClass}>
                <Play className="h-4 w-4 shrink-0 fill-current" aria-hidden />
                Watch Walkthrough Video
              </button>
              <Link to="/contact-us" className={secondaryBtnClass}>
                Find out where we build
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-theme">
        <section className="container-luxe py-16 sm:py-20 lg:py-24">
          <Reveal>
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div className="overflow-hidden rounded-xl shadow-[0_12px_40px_-12px_rgba(0,16,48,0.25)] max-w-md mx-auto lg:max-w-none lg:mx-0">
                <img
                  src={OVERVIEW_IMAGE}
                  alt="Granton Homes luxury interior"
                  loading="lazy"
                  width={400}
                  height={516}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-[#001030] font-[Montserrat,sans-serif]">
                  Overview
                </h2>
                <div className="space-y-5 text-base sm:text-lg leading-relaxed gallery-muted font-normal">
                  <p>
                    At Granton Homes, we take pride in creating homes of distinction—crafted to exceed the
                    expectations of even the most discerning homeowners.
                  </p>
                  <p>
                    Unlike volume builders, our focus is not on building the most homes, but on delivering
                    exceptional quality in every aspect—from premium inclusions and meticulous construction
                    to a personalised and seamless customer experience.
                  </p>
                  <p>
                    Everything we do is tailored with you in mind. Our qualified in-house team will expertly
                    guide you through each stage of the journey, from initial design and development
                    application to final construction, ensuring confidence and peace of mind every step of
                    the way.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        <section className="bg-[#001030] py-14 sm:py-16 lg:py-20">
          <div className="container-luxe px-6">
            <p className="mx-auto max-w-4xl text-center font-[Montserrat,sans-serif] text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white">
              We invite you to view our photo gallery for a taste of the style, luxury and quality that
              has become synonymous with Granton Homes.
            </p>
          </div>
        </section>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} youtubeId="OOQM0BmcpC8" />
    </SiteShell>
  );
}
