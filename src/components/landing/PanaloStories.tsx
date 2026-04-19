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
  <section id="stories" className="py-16 sm:py-20 md:py-24 bg-muted/50 overflow-hidden relative">
    <div className="container">
      <Reveal direction="blur" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tighter mb-6 sm:mb-8 italic">
          What they're{" "}
          <span className="block sm:inline">
            <span className="text-primary not-italic">saying.</span>
          </span>
        </h2>
      </Reveal>

      <StaggerGroup
        stagger={0.1}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
      >
        {reviews.map((rev, i) => (
          <StaggerItem
            key={i}
            direction="up"
            distance={40}
          >
            <div className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-background p-1.5 sm:p-2 border border-foreground/5 shadow-soft hover:shadow-float transition-all duration-700 hover:-translate-y-1 cursor-zoom-in h-full">
              <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[2rem] aspect-[4/5]">
                <img
                  src={rev.img}
                  alt={rev.alt}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Star badge */}
              <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                <span className="text-xs font-black text-primary">★</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
    {/* Watermark — absolutely positioned and clipped inside the section */}
    <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-[0.03] select-none overflow-hidden max-w-full">
      <p className="font-display font-black text-[25vw] leading-none">PANALO</p>
    </div>
  </section>
);
