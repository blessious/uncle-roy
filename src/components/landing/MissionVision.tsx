import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const MissionVision = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const gridParallax1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const gridParallax2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-16 sm:py-24 md:py-40 overflow-hidden bg-background"
    >
      {/* Atmospheric elements — clipped so they never cause overflow */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-secondary/5 blur-3xl" />

      {/* Giant scrolling watermark — overflow-hidden on the parent keeps this from causing horizontal scroll */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          style={{ x: marqueeX }}
          aria-hidden
          className="whitespace-nowrap font-display font-black text-[20vw] md:text-[14vw] leading-none text-foreground/[0.04] tracking-tighter will-change-transform"
        >
          MISSION · VISION ·
        </motion.div>
      </div>

      <div className="container relative">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-4 sm:gap-6 mb-12 sm:mb-20 md:mb-28">
          <div className="md:col-span-2 flex md:block items-center gap-4 mb-2 md:mb-0">
            <motion.p
              style={{ y: numberY }}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-primary leading-none"
            >
              01
            </motion.p>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mt-0 md:mt-3">
              The Core
            </p>
          </div>
          <Reveal direction="blur" className="md:col-span-8 md:col-start-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-foreground mb-3 sm:mb-4">
              Uncle Roy Processed Food Manufacturing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              UNCLE ROY manufacturer of frozen foods and condiments located in Boac, Marinduque. Its products and services span across Marinduque, CALABARZON and NCR.
            </p>
          </Reveal>
        </div>

        {/* Mission & Vision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="group"
          >
            <div className="relative bg-primary p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-0 md:aspect-square hover:scale-[1.02] transition-transform duration-500 shadow-red/20">
              {/* Background number */}
              <motion.span
                style={{ y: gridParallax1 }}
                className="absolute -bottom-10 -right-5 font-display font-black text-[8rem] sm:text-[10rem] md:text-[13rem] text-black/10 select-none pointer-events-none"
              >
                01
              </motion.span>

              <div className="relative z-10">
                <div className="w-10 h-1 bg-white/40 mb-5 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-white tracking-tighter uppercase mb-3">
                  Mission
                </h3>
              </div>

              <div className="relative z-10">
                <p className="font-display font-medium text-base sm:text-lg md:text-sm lg:text-2xl text-white leading-snug">
                  Empowering men and women through{" "}
                  <span className="text-black font-black">cooking and selling</span>{" "}
                  frozen foods. Offering quality products by using and promoting{" "}
                  <span className="bg-white text-primary px-1.5 sm:px-2 font-black italic">local produce</span>{" "}
                  in the province with affordable prices.
                </p>
                <div className="mt-6 flex items-center gap-3 text-white/70 group-hover:gap-5 transition-all duration-400">
                  <span className="text-xs font-black tracking-widest uppercase">Since 2019</span>
                  <div className="h-px w-6 bg-white/40 group-hover:w-10 transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
            className="group"
          >
            <div className="relative bg-white border-2 border-primary/20 p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-0 md:aspect-square hover:scale-[1.02] transition-transform duration-500">
              {/* Background number */}
              <motion.span
                style={{ y: gridParallax2 }}
                className="absolute -bottom-10 -right-5 font-display font-black text-[8rem] sm:text-[10rem] md:text-[13rem] text-primary/5 select-none pointer-events-none"
              >
                02
              </motion.span>

              <div className="relative z-10">
                <div className="w-10 h-1 bg-primary/30 mb-5 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-primary tracking-tighter uppercase mb-3">
                  Vision
                </h3>
              </div>

              <div className="relative z-10">
                <p className="font-display font-medium text-base sm:text-lg md:text-sm lg:text-2xl text-black leading-snug">
                  To be the{" "}
                  <span className="text-primary font-black">leading frozen food manufacturer</span>{" "}
                  in the Philippines. Defining a sustainable future and creating the path to achieve it. Generate economic value to our partners and consumers.
                </p>
                <div className="mt-6 flex items-center gap-3 text-primary/60 group-hover:gap-5 transition-all duration-400">
                  <span className="text-xs font-black tracking-widest uppercase">Our Future</span>
                  <div className="h-px w-6 bg-primary/30 group-hover:w-10 transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
