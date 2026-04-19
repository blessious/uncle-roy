import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#mission", label: "Mission" },
  { href: "#recipes", label: "Recipes" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-10 h-10 rounded-2xl gradient-red text-primary-foreground font-display font-black text-lg shadow-red">
            UR
          </span>
          <span className="font-display font-extrabold text-foreground tracking-tight hidden sm:block">
            UNCLE ROY
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full gradient-red text-primary-foreground text-sm font-semibold shadow-red hover:scale-105 transition-transform"
        >
          Order Now
        </a>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-foreground/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container mt-3 p-4 rounded-3xl glass-nav shadow-soft animate-fade-in-up">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-medium text-foreground/80 hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full gradient-red text-primary-foreground text-sm font-semibold"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
