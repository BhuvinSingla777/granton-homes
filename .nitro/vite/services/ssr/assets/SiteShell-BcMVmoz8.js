import { a3 as useRouter, Q as reactExports, I as jsxRuntimeExports } from './server-LkwB2fso.js';
import { L as Link } from './router-CTg9bPtL.js';

//#region src/useRouterState.tsx
/**
* Subscribe to the router's state store with optional selection and
* structural sharing for render optimization.
*
* Options:
* - `select`: Project the full router state to a derived slice
* - `structuralSharing`: Replace-equal semantics for stable references
* - `router`: Read state from a specific router instance instead of context
*
* @returns The selected router state (or the full state by default).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterStateHook
*/
function useRouterState(opts) {
	const contextRouter = useRouter();
	const router = contextRouter;
	{
		const state = router.stores.__store.get();
		return state;
	}
}

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

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

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


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

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


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

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

const LOGO_SRC = "https://grantonhomes.com.au/wp-content/uploads/2020/11/logo-3-300x204-1.png";
function Logo({ className = "h-11" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "isolate block shrink-0", "aria-label": "Granton Homes — Home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: LOGO_SRC,
      alt: "Granton Homes",
      width: 300,
      height: 204,
      decoding: "async",
      className: `h-auto w-auto max-h-full object-contain ${className}`
    }
  ) });
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
const NAV_LEFT = NAV.slice(0, 4);
const NAV_RIGHT = NAV.slice(4);
function NavLink({ to, label, active }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to,
      className: `whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${active ? "text-[#c9a227]" : "text-foreground/75 hover:text-[#c9a227] gold-underline"}`,
      children: label
    }
  );
}
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative flex h-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex flex-1 items-center justify-end gap-5 pr-6", children: NAV_LEFT.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              to: item.to,
              label: item.label,
              active: location.pathname === item.to
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:static xl:translate-0 xl:flex xl:justify-center xl:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-10 sm:h-12" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden xl:flex flex-1 items-center justify-start gap-5 pl-6", children: NAV_RIGHT.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              to: item.to,
              label: item.label,
              active: location.pathname === item.to
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 shrink-0 xl:hidden", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "xl:hidden ml-auto grid h-11 w-11 place-items-center border border-border",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"} bg-background border-t border-border`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe py-6 flex flex-col gap-1", children: NAV.map((item) => {
              const active = location.pathname === item.to;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.to,
                  className: `py-3 text-sm uppercase tracking-[0.18em] border-b border-border/60 transition-colors ${active ? "text-[#c9a227]" : "text-foreground/80 hover:text-[#c9a227]"}`,
                  children: item.label
                },
                item.to
              );
            }) })
          }
        )
      ]
    }
  );
}

function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#1a1a1a] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe py-12 sm:py-14 text-center text-sm sm:text-base font-[Montserrat,sans-serif]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-wrap items-center justify-center gap-x-3 gap-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Phone:" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:1300318699", className: "font-normal hover:underline", children: "1300 318 699" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", "aria-hidden": true, children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Email:" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@grantonhomes.com.au", className: "font-normal hover:underline", children: "info@grantonhomes.com.au" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", "aria-hidden": true, children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "font-normal hover:underline", children: "Blogs" })
  ] }) }) });
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

export { PageHero as P, SiteShell as S, X, createLucideIcon as c };
