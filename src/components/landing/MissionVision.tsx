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
  
  // Parallax for the immersive grid elements
  const gridParallax1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const gridParallax2 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-28 md:py-48 overflow-hidden bg-background"
    >
      {/* Decorative atmospheric elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-blob" />
      {/* Giant scrolling word */}
      <motion.div
        style={{ x: marqueeX }}
        aria-hidden
        className="pointer-events-none select-none absolute top-10 left-0 whitespace-nowrap font-display font-black text-[18vw] md:text-[14vw] leading-none text-foreground/[0.04] tracking-tighter will-change-transform"
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
          <Reveal direction="blur" className="md:col-span-8 md:col-start-4">
            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight uppercase text-foreground mb-4">
              UNCLE ROY PROCESSED FOOD MANUFACTURING
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              UNCLE ROY manufacturer of frozen foods and condiments located in Boac, Marinduque. Its products and services span across Marinduque, CALABARZON and NCR. From processed meat, ready to heat, ready to grill and cold cuts. Making it the most diversified food player in the province of Marinduque.
            </p>
          </Reveal>
        </div>

        {/* Immersive Scroll Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-24" style={{ perspective: "1000px" }}>
          
          {/* Mission Side */}
          <motion.div 
            initial={{ opacity: 0, y: 120, rotateY: -10, rotateX: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
            className="group"
          >
            <div className="relative h-full aspect-[4/5] md:aspect-square bg-primary p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02] shadow-[0_0_40px_rgba(234,88,12,0)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.2)]">
              {/* Parallax Background Number */}
              <motion.span 
                style={{ y: gridParallax1 }}
                className="absolute origin-bottom-right -bottom-10 -right-5 font-display font-black text-[10rem] md:text-[15rem] text-black/10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000 ease-out"
              >
                01
              </motion.span>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-12 h-1 bg-black mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                <h3 className="font-display font-black text-5xl md:text-7xl text-white tracking-tighter uppercase mb-4">
                  Mission
                </h3>
              </motion.div>

              <div className="relative z-10">
                <p className="font-display font-medium text-xl md:text-2xl lg:text-3xl text-white leading-tight">
                  Empowering men and women through <span className="text-black font-black inline-block hover:-translate-y-1 transition-transform duration-300">cooking and selling</span> frozen foods. Offering quality products by using and promoting <span className="bg-white text-primary px-2 font-black italic inline-block hover:scale-105 hover:rotate-2 transition-transform duration-300 cursor-default">local produce</span> in the province with affordable prices.
                </p>
                <div className="mt-8 flex items-center gap-4 text-white/80 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  <span className="text-sm font-black tracking-widest uppercase relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">Since 2026</span>
                  <div className="h-px w-8 bg-white/50 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Side */}
          <motion.div 
            initial={{ opacity: 0, y: 160, rotateY: 10, rotateX: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1, delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full aspect-[4/5] md:aspect-square bg-white border-2 border-primary/20 p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02] shadow-[0_0_40px_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
              {/* Parallax Background Number */}
              <motion.span 
                style={{ y: gridParallax2 }}
                className="absolute origin-bottom-right -bottom-10 -right-5 font-display font-black text-[10rem] md:text-[15rem] text-primary/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000 ease-out"
              >
                02
              </motion.span>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-12 h-1 bg-primary mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                <h3 className="font-display font-black text-5xl md:text-7xl text-primary tracking-tighter uppercase mb-4">
                  Vision
                </h3>
              </motion.div>

              <div className="relative z-10">
                <p className="font-display font-medium text-xl md:text-2xl lg:text-3xl text-black leading-tight">
                  To be the <span className="text-primary font-black inline-block hover:-translate-y-1 transition-transform duration-300">leading frozen food manufacturer</span> in the Philippines. Defining a sustainable future and creating the path to achieve it. Generate economic value to our partners and consumers.
                </p>
                <div className="mt-8 flex items-center gap-4 text-primary group-hover:translate-x-4 transition-transform duration-500 ease-out cursor-pointer">
                  <span className="text-sm font-black tracking-widest uppercase relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Our Future</span>
                  <div className="h-px w-8 bg-primary/50 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
