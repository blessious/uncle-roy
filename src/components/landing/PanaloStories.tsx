import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import rev1 from "@/reviews/1.jpg";
import rev2 from "@/reviews/2.jpg";
import rev3 from "@/reviews/3.jpg";
import rev4 from "@/reviews/4.jpg";
import rev5 from "@/reviews/5.jpg";
import rev6 from "@/reviews/6.jpg";

const reviews = [
  { img: rev1, alt: "Customer review 1" },
  { img: rev2, alt: "Customer review 2" },
  { img: rev3, alt: "Customer review 3" },
  { img: rev4, alt: "Customer review 4" },
  { img: rev5, alt: "Customer review 5" },
  { img: rev6, alt: "Customer review 6" },
];

export const PanaloStories = () => (
  <section id="stories" className="py-16 md:py-24 bg-muted/50 overflow-hidden">
    <div className="container">
      <Reveal direction="blur" className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8 italic">
          What they’re <br />
          <span className="text-primary not-italic">saying.</span>
        </h2>
      </Reveal>

      <StaggerGroup
        stagger={0.12}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {reviews.map((rev, i) => (
          <StaggerItem
            key={i}
            direction="up"
            distance={40}
          >
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-background p-2 border border-foreground/5 shadow-soft hover:shadow-float transition-all duration-700 hover:-translate-y-2 cursor-zoom-in h-full">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5]">
                <img 
                  src={rev.img} 
                  alt={rev.alt} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                <span className="text-xs font-black text-primary">★</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
      
      {/* Background brand mark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.03] select-none">
        <p className="font-display font-black text-[30vw] leading-none">PANALO</p>
      </div>
    </div>
  </section>
);
