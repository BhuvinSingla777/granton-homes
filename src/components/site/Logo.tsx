import { Link } from "@tanstack/react-router";

const LOGO_SRC =
  "https://grantonhomes.com.au/wp-content/uploads/2020/11/logo-3-300x204-1.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-11" }: LogoProps) {
  return (
    <Link to="/" className="isolate block shrink-0" aria-label="Granton Homes — Home">
      <img
        src={LOGO_SRC}
        alt="Granton Homes"
        width={300}
        height={204}
        decoding="async"
        className={`h-auto w-auto max-h-full object-contain ${className}`}
      />
    </Link>
  );
}
