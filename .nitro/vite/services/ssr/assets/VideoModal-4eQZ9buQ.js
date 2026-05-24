import { c as createLucideIcon, X } from './SiteShell-BcMVmoz8.js';
import { Q as reactExports, I as jsxRuntimeExports } from './server-LkwB2fso.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode);

function VideoModal({ open, onClose, youtubeId, src, title = "Walkthrough" }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  if (!youtubeId && !src) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Close video",
            onClick: onClose,
            className: "absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative w-full max-w-5xl aspect-video shadow-2xl ring-1 ring-white/10",
            onClick: (e) => e.stopPropagation(),
            children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                src,
                title,
                className: "h-full w-full bg-black",
                controls: true,
                autoPlay: true,
                playsInline: true
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`,
                title,
                className: "h-full w-full",
                allow: "autoplay; encrypted-media; picture-in-picture",
                allowFullScreen: true
              }
            )
          }
        )
      ]
    }
  );
}

export { Play as P, VideoModal as V };
