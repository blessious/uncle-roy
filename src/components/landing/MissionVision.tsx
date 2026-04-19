import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const MissionVision = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Marquee word slides left as you scroll through the section
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden bg-background"
    >
      {/* Giant scrolling word */}
      <motion.div
        style={{ x: marqueeX }}
        aria-hidden
        className="pointer-events-none select-none absolute top-10 left-0 whitespace-nowrap font-display font-black text-[18vw] md:text-[14vw] leading-none text-foreground/[0.04] tracking-tighter"
      >
        MISSION · VISION · MISSION · VISION
      </motion.div>

      <div className="container relative">
        {/* Editorial header */}
        <div className="grid md:grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="md:col-span-2">
            <motion.p
              style={{ y: numberY }}
              className="font-display font-black text-6xl md:text-7xl text-primary leading-none"
            >
              01
            </motion.p>
            <p className="mt-3 text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              The Core
            </p>
          </div>
          <Reveal direction="blur" className="md:col-span-7 md:col-start-4">
            <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              We don't just make food.{" "}
              <span className="italic font-light text-foreground/40">
                We make a province proud.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Mission – left aligned, big */}
        <Reveal direction="up" distance={48} amount={0.25}>
          <article className="grid md:grid-cols-12 gap-6 md:gap-10 pb-16 md:pb-24 border-b border-foreground/10">
            <div className="md:col-span-4 flex md:flex-col items-start justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                  Mission
                </span>
              </div>
              <span className="font-display font-black text-7xl md:text-8xl text-primary/15 leading-none">
                M
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground">
                Empowering men and women through cooking and selling{" "}
                <span className="text-primary">frozen foods.</span> Offering
                quality products by using and promoting local produce in the
                province with{" "}
                <span className="underline decoration-primary decoration-[3px] underline-offset-[6px]">
                  affordable prices.
                </span>
              </p>
            </div>
          </article>
        </Reveal>

        {/* Vision – right aligned, asymmetric */}
        <Reveal direction="up" distance={48} amount={0.25} delay={0.05}>
          <article className="grid md:grid-cols-12 gap-6 md:gap-10 pt-16 md:pt-24">
            <div className="md:col-span-8 md:order-2 md:text-right">
              <p className="font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground">
                To be the{" "}
                <span className="text-secondary">
                  leading frozen food manufacturer
                </span>{" "}
                in the Philippines. Defining a sustainable future and creating
                the path to achieve it. Generate{" "}
                <span className="italic font-light text-foreground/50">
                  economic value
                </span>{" "}
                to our partners and consumers.
              </p>
            </div>
            <div className="md:col-span-4 md:order-1 flex md:flex-col items-start md:items-end justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">
                  Vision
                </span>
              </div>
              <span className="font-display font-black text-7xl md:text-8xl text-secondary/15 leading-none">
                V
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};
