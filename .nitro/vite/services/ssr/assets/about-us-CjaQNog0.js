import { P as reactExports, H as jsxRuntimeExports } from './server-BxxsEqCc.js';
import { L as Link } from './router-WPBgWtP-.js';
import { S as SiteShell, P as PageHero, R as Reveal } from './Reveal-z5FpXO28.js';
import { P as Play, V as VideoModal } from './VideoModal-Bv9URRMg.js';
import { h as heroKitchen } from './hero-kitchen-CVQpHSSa.js';
import { d as displayLiving } from './display-living-Cv9ySGC-.js';
import 'node:async_hooks';
import 'node:stream';
import 'node:stream/web';
import 'util';
import 'crypto';
import 'async_hooks';
import 'stream';

function AboutPage() {
  const [video, setVideo] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About Us", title: "A philosophy built on belief and involvement.", subtitle: "Whether you're building on a vacant block or considering a complete knock down rebuild, our process is tailored — so your home reflects your lifestyle, not a template.", image: heroKitchen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 lg:py-32 grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Granton Homes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-4xl lg:text-5xl leading-[1.1]", children: [
          "Award-winning designs, tailored to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "you." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, className: "lg:col-span-7 space-y-6 text-foreground/80 text-lg leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At Granton Homes, we offer a diverse range of award-winning standard designs, all of which can be tailored to suit your unique lifestyle and preferences. If our existing plans don't fully meet your needs, our custom design service provides the opportunity to create a home that is truly your own." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We are committed to ensuring that your individuality is reflected in every aspect of your home, both inside and out. What sets Granton Homes apart is our ability to transform your ideas and aspirations into a stylish, luxurious residence that is as distinctive as it is functional." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: displayLiving, alt: "Granton Homes interior", loading: "lazy", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-px -right-px bg-gold text-gold-foreground px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl", children: "30+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em]", children: "Years of craft" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Our Philosophy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl", children: "Exceptional craftsmanship, in every home we build." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/80 leading-relaxed", children: "Our commitment to quality extends across every aspect of the process — from innovative design and premium construction materials to high-end finishes and industry-leading technical standards. Most importantly, we pride ourselves on providing outstanding customer service." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: ["Innovative, considered design", "Premium materials & finishes", "Industry-leading technical standards", "Seamless customer service"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-gold" }),
          " ",
          t
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "A trusted partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-5xl", children: "Guidance through every stage of your journey." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/80 leading-relaxed text-lg", children: "Granton Homes is committed to guiding you through every stage of your home-building journey. From customising the design to suit your unique needs, to selecting the ideal materials, finishes, and fittings — our experts are here to ensure every detail reflects your vision. We also manage all aspects of the approval process, including documentation and certification, so you can enjoy a seamless and stress-free experience." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideo(true), className: "btn-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
          " Watch Walkthrough Video"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact-us", className: "btn-ghost", children: "Find out where we build" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[oklch(0.18_0.012_60)] text-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid lg:grid-cols-2 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl lg:text-6xl leading-[1.05]", children: "Homes of distinction — crafted to exceed expectations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, className: "text-white/80 leading-relaxed text-lg space-y-5 lg:pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Unlike volume builders, our focus is not on building the most homes, but on delivering exceptional quality in every aspect — from premium inclusions and meticulous construction to a personalised and seamless customer experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our qualified in-house team will expertly guide you through each stage of the journey, from initial design and development application to final construction — ensuring confidence and peace of mind every step of the way." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-6 mt-10", children: [["500+", "Homes delivered"], ["98%", "Client satisfaction"], ["A+", "Build quality rating"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-gold", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-white/60 mt-1", children: l })
        ] }, l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-2xl lg:text-3xl italic max-w-3xl mx-auto leading-snug", children: [
        '"We invite you to view our photo gallery for a taste of the style, luxury and quality that has become synonymous with ',
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Granton Homes" }),
        '."'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "btn-gold mt-10 inline-flex", children: "Visit the Gallery" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { open: video, onClose: () => setVideo(false), youtubeId: "OOQM0BmcpC8" })
  ] });
}

export { AboutPage as component };
