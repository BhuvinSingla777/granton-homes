import { Q as reactExports, I as jsxRuntimeExports } from './server-LkwB2fso.mjs';

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

export { Reveal as R };
