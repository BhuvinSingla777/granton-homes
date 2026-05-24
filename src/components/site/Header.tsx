import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/Logo";

const NAV = [
  { label: "About Us", to: "/about-us" },
  { label: "Home Designs", to: "/home-designs" },
  { label: "Display Homes", to: "/display-homes" },
  { label: "Developments", to: "/developments" },
  { label: "Virtual Tour", to: "/virtual-tour" },
  { label: "Knock Down Rebuild", to: "/knock-down-rebuild" },
  { label: "Gallery", to: "/gallery" },
];

const NAV_LEFT = NAV.slice(0, 4);
const NAV_RIGHT = NAV.slice(4);

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
        active ? "text-[#c9a227]" : "text-foreground/75 hover:text-[#c9a227] gold-underline"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_8px_30px_-20px_rgba(0,0,0,0.2)]"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-luxe relative flex h-20 items-center">
        {/* Desktop: nav left | logo center | nav right */}
        <nav className="hidden xl:flex flex-1 items-center justify-end gap-5 pr-6">
          {NAV_LEFT.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              active={location.pathname === item.to}
            />
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:static xl:translate-0 xl:flex xl:justify-center xl:px-4">
          <Logo className="h-10 sm:h-12" />
        </div>

        <div className="hidden xl:flex flex-1 items-center justify-start gap-5 pl-6">
          {NAV_RIGHT.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              active={location.pathname === item.to}
            />
          ))}
        </div>

        {/* Mobile: balanced spacer + menu */}
        <div className="w-11 shrink-0 xl:hidden" aria-hidden />
        <button
          aria-label="Toggle menu"
          className="xl:hidden ml-auto grid h-11 w-11 place-items-center border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        } bg-background border-t border-border`}
      >
        <div className="container-luxe py-6 flex flex-col gap-1">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`py-3 text-sm uppercase tracking-[0.18em] border-b border-border/60 transition-colors ${
                  active ? "text-[#c9a227]" : "text-foreground/80 hover:text-[#c9a227]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
