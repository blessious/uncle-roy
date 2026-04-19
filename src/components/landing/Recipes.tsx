import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import silog from "@/assets/recipe-silog.jpg";
import teriyaki from "@/assets/recipe-teriyaki.jpg";
import bbq from "@/assets/recipe-bbq.jpg";

const recipes = [
  { title: "SILOG Easy Meals", duration: "8 min", chapter: "Ep. 01", img: silog },
  { title: "Chicken Teriyaki", duration: "15 min", chapter: "Ep. 02", img: teriyaki },
  { title: "Tender BBQ", duration: "20 min", chapter: "Ep. 03", img: bbq },
];

export const Recipes = () => (
  <section id="recipes" className="py-20 md:py-32 overflow-hidden">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <Reveal direction="up" className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Cook with Uncle Roy</p>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            Editorial recipes,<br />weeknight easy.
          </h2>
        </Reveal>
        <Reveal direction="left" delay={0.15}>
          <a href="#" className="text-sm font-semibold underline-offset-4 hover:underline">
            View all episodes →
          </a>
        </Reveal>
      </div>

      <StaggerGroup stagger={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {recipes.map((r) => (
          <StaggerItem
            key={r.title}
            as="article"
            direction="up"
            className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2"
          >
            <motion.img
              src={r.img}
              alt={r.title}
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute top-6 right-6 grid place-items-center w-14 h-14 rounded-full bg-background/90 backdrop-blur group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-7 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-[10px] font-bold tracking-wider uppercase">
                  {r.chapter}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium opacity-90">
                  <Clock className="w-3.5 h-3.5" /> {r.duration}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl leading-tight">
                {r.title}
              </h3>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);
