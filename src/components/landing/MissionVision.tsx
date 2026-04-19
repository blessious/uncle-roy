import { Heart, Eye } from "lucide-react";

export const MissionVision = () => (
  <section id="mission" className="py-20 md:py-32">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">The Core</p>
        <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
          Our reason for cooking.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Mission */}
        <article className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 gradient-red-soft shadow-soft hover:shadow-red transition-all duration-500 hover:-translate-y-1">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="w-16 h-16 rounded-3xl gradient-red grid place-items-center shadow-red mb-8">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Mission</p>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-5">
              Empowering men and women through cooking.
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We turn local ingredients into livelihoods — training, employing and uplifting the
              families of Marinduque, one batch at a time.
            </p>
          </div>
        </article>

        {/* Vision */}
        <article className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 gradient-green-soft shadow-soft hover:shadow-green transition-all duration-500 hover:-translate-y-1">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary/15 blur-3xl" />
          <div className="relative">
            <div className="w-16 h-16 rounded-3xl gradient-green grid place-items-center shadow-green mb-8">
              <Eye className="w-8 h-8 text-secondary-foreground" />
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">Vision</p>
            <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-5">
              Supporting local production at every table.
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              To be the Philippines' most trusted homegrown food brand — proving that world-class
              quality can come from a province by the sea.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);
