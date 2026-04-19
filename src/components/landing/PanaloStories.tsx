import { Star, Quote } from "lucide-react";

const stories = [
  { name: "Maria S.", role: "Home Chef, Manila", text: "Lasa at amoy Jollibee patty! Sobrang sarap, naloka kami sa pamilya.", tone: "red", span: "md:row-span-2" },
  { name: "Joel R.", role: "Foodie, Cebu", text: "Masarap, tender and juicy. Hindi mo aakalain na frozen pala — restaurant level.", tone: "green", span: "" },
  { name: "Anna L.", role: "Mom of 3, QC", text: "The corned beef is restaurant grade. My kids ask for Uncle Roy every weekend.", tone: "gold", span: "" },
  { name: "Carlo M.", role: "Chef, Marinduque", text: "Local pride. The tapa is balanced — not too sweet, not too salty. Perfect.", tone: "red", span: "" },
  { name: "Riza T.", role: "OFW Returnee", text: "Reminds me of my lola's cooking. Panalo talaga ang Uncle Roy!", tone: "green", span: "md:row-span-2" },
];

const toneMap: Record<string, string> = {
  red: "gradient-red-soft text-primary",
  green: "gradient-green-soft text-secondary",
  gold: "bg-accent/15 text-accent-foreground",
};

export const PanaloStories = () => (
  <section id="stories" className="py-20 md:py-32 bg-muted">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Panalo Stories</p>
        <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
          The kitchen <span className="text-secondary">never lies.</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Real plates. Real reviews. From every corner of the Philippines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:auto-rows-[minmax(180px,auto)]">
        {stories.map((s, i) => (
          <article
            key={s.name}
            className={`group bg-background rounded-[2rem] p-7 md:p-8 shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-1 flex flex-col ${s.span}`}
          >
            <div className={`inline-grid place-items-center w-12 h-12 rounded-2xl ${toneMap[s.tone]} mb-5`}>
              <Quote className="w-5 h-5" />
            </div>
            <p className="font-display font-bold text-lg md:text-xl leading-snug text-foreground flex-1">
              "{s.text}"
            </p>
            <div className="mt-6 flex items-center justify-between pt-5 border-t border-foreground/5">
              <div>
                <p className="font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
