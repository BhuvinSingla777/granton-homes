export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container-luxe py-12 sm:py-14 text-center text-sm sm:text-base font-[Montserrat,sans-serif]">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:1300318699" className="font-normal hover:underline">
              1300 318 699
            </a>
          </span>
          <span className="text-white/60" aria-hidden>
            |
          </span>
          <span>
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:info@grantonhomes.com.au" className="font-normal hover:underline">
              info@grantonhomes.com.au
            </a>
          </span>
          <span className="text-white/60" aria-hidden>
            |
          </span>
          <a href="#" className="font-normal hover:underline">
            Blogs
          </a>
        </p>
      </div>
    </footer>
  );
}
