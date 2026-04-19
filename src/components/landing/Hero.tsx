import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Coffee } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/hero.png";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const imgY = useTransform(scrollY, [0, 500], [0, 60]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section id="top" ref={containerRef} className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-background">
      {/* Soft atmospheric glows */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Copy */}
          <Reveal direction="up" distance={40} className="lg:col-span-6 order-2 lg:order-1">
            <h1 className="font-display font-black text-foreground text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Proudly manufacturing <span className="text-primary">quality</span> frozen products in <span className="text-secondary">Marinduque.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              Freshly made • Carefully frozen • Locally trusted
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

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 max-w-md w-full justify-between sm:justify-start sm:grid sm:grid-cols-3 sm:gap-6">
              {[
                { k: "12+", v: "Products" },
                { k: "5★", v: "Panalo Reviews" },
                { k: "100%", v: "Local Sourced" },
              ].map((s) => (
                <div key={s.v} className="min-w-[80px]">
                  <p className="font-display font-extrabold text-3xl md:text-3xl text-foreground">{s.k}</p>
                  <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT: Featured Lifestyle Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              style={{ y: imgY, rotate }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-float w-full max-w-[540px] mx-auto lg:ml-auto aspect-[4/5] md:aspect-[3/4]"
            >
              <img 
                src={heroImg} 
                alt="Happy customer with Uncle Roy breakfast plate" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-foreground/5 rounded-full -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
