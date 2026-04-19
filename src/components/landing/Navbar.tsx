import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/logo.png";

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
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = links.map(link => link.href.substring(1));
      let currentSection = "";
      let maxTop = -Infinity;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Find the section that has scrolled past the top (or is just at the top)
          // and is the closest to the top of the viewport
          if (rect.top <= 150 && rect.top > maxTop) {
            maxTop = rect.top;
            currentSection = `#${id}`;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 pt-4 px-4`}
    >
      <div
        className={`pointer-events-auto flex flex-col transition-all duration-500 overflow-hidden glass-nav border border-white/10 rounded-full w-auto max-w-[95vw] md:max-w-[1200px] ${
          scrolled
            ? "shadow-float px-6 md:px-8 py-2 mt-0"
            : "shadow-soft px-8 md:px-10 py-3 mt-2"
        }`}
      >
        <div className="flex items-center justify-between gap-6 md:gap-12 transition-all duration-500">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Uncle Roy Logo" className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-7 md:h-9" : "h-9 md:h-11"}`} />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeSection === l.href 
                    ? "text-primary bg-primary/5" 
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#products"
              className={`hidden md:inline-flex items-center rounded-full gradient-red text-primary-foreground text-sm font-bold shadow-red hover:scale-105 transition-all shrink-0 ${scrolled ? "px-5 py-2" : "px-6 py-2.5"}`}
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
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <nav className="flex flex-col gap-1 pb-4 pt-4 min-w-[260px]">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      activeSection === l.href 
                        ? "text-primary bg-primary/5" 
                        : "text-foreground/80 hover:bg-foreground/5"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#products"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center px-5 py-3 rounded-full gradient-red text-primary-foreground text-sm font-bold shadow-red"
                >
                  Order Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
