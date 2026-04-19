import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import tapa from "@/products/porktapa.jpg";
import lumpia from "@/products/porklumpia.jpg";
import longganisa from "@/products/skinlesslonganisa.jpg";
import pares from "@/products/beefpares.jpg";

const products = [
  { name: "Pork Tapa", weight: "170g", price: 95, img: tapa, tag: "Bestseller", tone: "red" },
  { name: "Pork Lumpia", weight: "160g / 10pcs", price: 69, img: lumpia, tag: "Crispy", tone: "green" },
  { name: "Skinless Longganisa", weight: "180g", price: 65, img: longganisa, tag: "Classic", tone: "red" },
  { name: "Beef Pares", weight: "200g", price: 115, img: pares, tag: "Premium", tone: "green" },
];

export const ProductShowroom = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-muted overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal direction="up" className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Showroom</p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
              Crafted, packed, ready.
            </h2>
          </Reveal>
          <Reveal direction="left" delay={0.15} className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="grid place-items-center w-12 h-12 rounded-full bg-background shadow-soft hover:bg-foreground hover:text-background transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="grid place-items-center w-12 h-12 rounded-full bg-foreground text-background shadow-soft hover:bg-primary transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </div>

      <StaggerGroup
        stagger={0.12}
        amount={0.1}
      >
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pb-4"
        >
          {products.map((p) => (
            <StaggerItem
              key={p.name}
              as="article"
              direction="up"
              className="group snap-start shrink-0 w-[280px] sm:w-[340px] bg-background rounded-[2.5rem] p-6 shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`relative h-64 rounded-[2rem] overflow-hidden ${p.tone === "red" ? "gradient-red-soft" : "gradient-green-soft"}`}>
                <motion.img
                  src={p.img}
                  alt={p.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-4 product-drop-shadow"
                  whileHover={{ scale: 1.12, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                />
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${p.tone === "red" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {p.tag}
                </span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-extrabold text-xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.weight}</p>
                </div>
                <p className="font-display font-black text-2xl text-foreground">₱{p.price.toFixed(0)}</p>
              </div>
              <a 
                href="https://www.facebook.com/UncleRoy2019" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition group/btn text-sm"
              >
                Order Now
                <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
              </a>
            </StaggerItem>
          ))}
          <div className="shrink-0 w-4" />
        </div>
      </StaggerGroup>
    </section>
  );
};
