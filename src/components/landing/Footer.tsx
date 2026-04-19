import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="relative overflow-hidden bg-foreground text-background">
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl" />

    <div className="container relative py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="grid place-items-center w-12 h-12 rounded-2xl gradient-red text-primary-foreground font-display font-black text-xl shadow-red">
              UR
            </span>
            <span className="font-display font-extrabold text-xl">UNCLE ROY</span>
          </div>
          <h3 className="font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Got a craving<br />
            or a <span className="text-primary">big order?</span>
          </h3>
          <p className="mt-6 text-background/70 text-lg max-w-md">
            For wholesale, distribution, or general inquiries — message us. We reply faster than your rice cooks.
          </p>
          <a
            href="mailto:uncleroy@gmail.com"
            className="mt-8 inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full gradient-red text-primary-foreground font-semibold shadow-red hover:scale-[1.03] transition"
          >
            Send an inquiry
            <span className="grid place-items-center w-10 h-10 rounded-full bg-background/20">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: MapPin, label: "Address", value: "Poras, Boac, Marinduque", href: "#" },
            { icon: Mail, label: "Email", value: "uncleroy@gmail.com", href: "mailto:uncleroy@gmail.com" },
            { icon: Phone, label: "Contact", value: "+639 662 100 937", href: "tel:+639662100937" },
            { icon: ArrowUpRight, label: "Wholesale", value: "Distribution & Retail", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group block p-7 rounded-[2rem] bg-background/5 hover:bg-background/10 border border-background/10 transition"
            >
              <item.icon className="w-6 h-6 mb-6 text-primary" />
              <p className="text-xs uppercase tracking-widest text-background/50 mb-1">{item.label}</p>
              <p className="font-display font-bold text-lg group-hover:text-primary transition">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-background/50">
          © {new Date().getFullYear()} Uncle Roy Processed Food Manufacturing. All rights reserved.
        </p>
        <p className="text-sm text-background/50">
          Made with ♥ in Marinduque
        </p>
      </div>
    </div>
  </footer>
);
