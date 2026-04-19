import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/hero.png";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section id="top" ref={containerRef} className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-32 overflow-hidden bg-background">
      {/* Soft atmospheric glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Image — shown first on mobile (natural flow), last on desktop */}
          <div className="md:col-span-6 md:order-2">
            <motion.div
              style={{ rotate }}
              className="relative z-10 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-float w-full max-w-xs sm:max-w-sm md:max-w-[540px] mx-auto aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={heroImg}
                alt="Happy customer with Uncle Roy breakfast plate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary/10 blur-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 md:w-48 md:h-48 border border-foreground/5 rounded-full -z-0" />
          </div>

          {/* Copy — shown second on mobile (after image), first on desktop */}
          <Reveal direction="up" distance={40} className="md:col-span-6 md:order-1">
            <h1 className="font-display font-black text-foreground text-[2.5rem] sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl leading-[1] sm:leading-[0.95] tracking-tight">
              Proudly manufacturing <span className="text-primary">quality</span> frozen products in <span className="text-secondary">Marinduque.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-sm lg:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              Freshly made • Carefully frozen • Locally trusted
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col gap-6">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-10 py-4 sm:py-5 rounded-full gradient-red text-primary-foreground text-lg sm:text-2xl font-black shadow-red hover:scale-[1.03] transition w-full sm:w-max uppercase tracking-wider"
              >
                Order Now
              </a>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition text-xs sm:text-sm shadow-soft"
                >
                  Explore Products
                  <span className="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/20 group-hover:translate-x-1 transition shrink-0 border border-background/10">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </a>
                <a
                  href="#recipes"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-foreground/10 hover:border-foreground/30 font-semibold transition text-xs sm:text-sm"
                >
                  Watch recipes
                </a>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-md">
              {[
                { k: "20+", v: "Products" },
                { k: "5★", v: "Reviews" },
                { k: "100%", v: "Local" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-foreground">{s.k}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
