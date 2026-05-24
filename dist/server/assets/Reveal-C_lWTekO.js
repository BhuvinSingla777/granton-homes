import { a3 as useRouter, Q as reactExports, I as jsxRuntimeExports } from "./server-DASLeRH5.js";
import { L as Link } from "./router-CprBJL6q.js";
function useRouterState(opts) {
  const contextRouter = useRouter();
  const router = contextRouter;
  {
    const state = router.stores.__store.get();
    return state;
  }
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function Logo({ className = "h-11" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "isolate block shrink-0", "aria-label": "Granton Homes — Home", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col leading-none ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl sm:text-2xl tracking-[0.08em]", children: "GRANTON" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-foreground/60 mt-1", children: "Homes" })
  ] }) });
}
const NAV = [
  { label: "About Us", to: "/about-us" },
  { label: "Home Designs", to: "/home-designs" },
  { label: "Display Homes", to: "/display-homes" },
  { label: "Developments", to: "/developments" },
  { label: "Virtual Tour", to: "/virtual-tour" },
  { label: "Knock Down Rebuild", to: "/knock-down-rebuild" },
  { label: "Gallery", to: "/gallery" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { location } = useRouterState();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_8px_30px_-20px_rgba(0,0,0,0.2)]" : "bg-background/40 backdrop-blur-sm"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex h-20 items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-10 sm:h-11" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-6", children: NAV.map((item) => {
            const active = location.pathname === item.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.to,
                className: `relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] gold-underline ${active ? "text-foreground" : "text-foreground/75 hover:text-foreground"}`,
                children: [
                  item.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-2 left-0 h-px w-full bg-gold" })
                ]
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:flex items-center gap-4 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:1300318699",
                className: "hidden 2xl:flex items-center gap-2 text-sm font-medium hover:text-gold transition whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  "1300 318 699"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact-us", className: "btn-gold", children: "Enquire" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "xl:hidden grid h-11 w-11 place-items-center border border-border",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"} bg-background border-t border-border`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe py-6 flex flex-col gap-1", children: [
              NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.to,
                  className: "py-3 text-sm uppercase tracking-[0.18em] border-b border-border/60",
                  children: item.label
                },
                item.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:1300318699", className: "btn-ghost", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " 1300 318 699"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact-us", className: "btn-gold", children: "Enquire" })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 bg-[oklch(0.18_0.012_60)] text-[oklch(0.92_0.01_85)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe py-20 grid gap-12 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl", children: "Granton Homes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.32em] text-white/50", children: "Distinct. Crafted. Yours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-white/70", children: "Award-winning luxury home builders crafting distinctive residences across Australia. From concept to completion, every detail is considered." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: [
          ["About Us", "/about-us"],
          ["Home Designs", "/home-designs"],
          ["Display Homes", "/display-homes"],
          ["Developments", "/developments"],
          ["Virtual Tour", "/virtual-tour"],
          ["Knock Down Rebuild", "/knock-down-rebuild"],
          ["Gallery", "/gallery"]
        ].map(([label, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-white/70 hover:text-gold transition gold-underline", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:1300318699", className: "text-white/80 hover:text-gold", children: "1300 318 699" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@grantonhomes.com.au", className: "text-white/80 hover:text-gold", children: "info@grantonhomes.com.au" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white/70 hover:text-gold gold-underline", children: "Blogs" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Granton Homes. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Sitemap" })
      ] })
    ] }) })
  ] });
}
function SiteShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  height = "tall"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative w-full overflow-hidden ${height === "tall" ? "h-[92vh] min-h-[640px]" : "h-[62vh] min-h-[440px]"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "h-full w-full object-cover ken-burns" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 text-white", children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow !text-gold mb-4", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.05]", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base lg:text-lg text-white/85 leading-relaxed", children: subtitle })
        ] })
      ]
    }
  );
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Component = Tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref,
      className: `reveal ${shown ? "in" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
export {
  Mail as M,
  PageHero as P,
  Reveal as R,
  SiteShell as S,
  X,
  Phone as a,
  createLucideIcon as c
};
