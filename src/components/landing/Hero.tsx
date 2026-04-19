import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import longganisa from "@/assets/longganisa-hero.png";

export const Hero = () => {
  const ref = useRef<HTMLImageElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rotate = Math.min(y * 0.05, 25);
  const scale = 1 + Math.min(y * 0.0004, 0.08);
  const translate = Math.min(y * 0.15, 60);

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT: product image */}
        <div className="order-2 lg:order-1 relative h-[380px] sm:h-[480px] lg:h-[620px]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="absolute w-[85%] h-[85%] rounded-full gradient-red-soft blur-2xl" />
            <img
              ref={ref}
              src={longganisa}
              alt="Skinless Longganisa premium Filipino sausage"
              width={1024}
              height={1024}
              className="relative w-full h-full object-contain product-drop-shadow transition-transform duration-300 ease-out"
              style={{
                transform: `translateY(${-translate}px) rotate(${rotate}deg) scale(${scale})`,
              }}
            />
            {/* Floating badge */}
            <div className="absolute top-4 right-2 sm:top-8 sm:right-8 bg-background rounded-3xl shadow-float px-5 py-3 flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-2xl gradient-green grid place-items-center">
                <Sparkles className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-none">100% Local</p>
                <p className="text-xs text-muted-foreground">Marinduque made</p>
              </div>
            </div>
            {/* Price chip */}
            <div className="absolute bottom-2 left-2 sm:bottom-10 sm:left-4 bg-background rounded-3xl shadow-float px-5 py-3 animate-float-slow" style={{ animationDelay: "1.5s" }}>
              <p className="text-xs text-muted-foreground">Skinless Longganisa</p>
              <p className="font-display font-extrabold text-lg text-primary">₱65.00</p>
            </div>
          </div>
        </div>

        {/* RIGHT: copy */}
        <div className="order-1 lg:order-2 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Boac, Marinduque
          </div>
          <h1 className="font-display font-black text-foreground text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            The Most{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Diversified</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-primary/15 -z-0 rounded" />
            </span>{" "}
            Food Player in <span className="text-secondary">Marinduque.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Crafted with care in Poras, Boac. From skinless longganisa to restaurant-grade beef pares —
            Uncle Roy brings the taste of home to every Filipino table.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full gradient-red text-primary-foreground font-semibold shadow-red hover:scale-[1.03] transition"
            >
              Explore Products
              <span className="grid place-items-center w-10 h-10 rounded-full bg-background/20 group-hover:translate-x-1 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
            <a
              href="#recipes"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-foreground/10 hover:border-foreground/30 font-semibold transition"
            >
              Watch recipes
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "12+", v: "Products" },
              { k: "5★", v: "Panalo Reviews" },
              { k: "100%", v: "Local Sourced" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display font-extrabold text-3xl text-foreground">{s.k}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
