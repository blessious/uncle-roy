import { MapPin, Mail, Phone, Facebook, MessageSquare } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import logo from "@/logo.png";

export const Footer = () => (
  <footer id="contact" className="relative overflow-hidden bg-foreground text-background">
    {/* Glows — positioned with overflow-hidden on parent */}
    <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-primary/30 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-secondary/25 blur-3xl" />

    <div className="container relative py-16 sm:py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-start">

        {/* Left: CTA */}
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <img src={logo} alt="Uncle Roy Logo" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert" />
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Got a craving<br />
            or a <span className="text-primary">big order?</span>
          </h3>
          <p className="mt-4 sm:mt-6 text-background/70 text-base sm:text-lg max-w-md">
            For wholesale, distribution, or general inquiries — message us. We reply faster than your rice cooks.
          </p>
          <a
            href="https://www.facebook.com/UncleRoy2019"
            target="_blank"
            rel="noreferrer"
            className="mt-6 sm:mt-8 inline-flex items-center gap-3 pl-6 sm:pl-7 pr-2 sm:pr-3 py-3 rounded-full gradient-red text-primary-foreground font-semibold shadow-red hover:scale-[1.03] transition text-sm sm:text-base"
          >
            Send an inquiry
            <span className="grid place-items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/20 shrink-0">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </a>
        </Reveal>

        {/* Right: Contact Cards */}
        <StaggerGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {[
            { icon: MapPin, label: "Address", value: "Poras, Boac, Marinduque", href: "#" },
            { icon: Mail, label: "Email", value: "uncleroypfm@gmail.com", href: "mailto:uncleroypfm@gmail.com" },
            { icon: Phone, label: "Mobile", value: "0947 502 8284", href: "tel:09475028284" },
            { icon: Facebook, label: "Facebook", value: "Uncle Roy PFM", href: "https://www.facebook.com/UncleRoy2019" },
          ].map((item) => (
            <StaggerItem key={item.label} direction="up">
              <a
                href={item.href}
                className="group block p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] bg-background/5 hover:bg-background/10 border border-background/10 transition"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-4 sm:mb-6 text-primary" />
                <p className="text-xs uppercase tracking-widest text-background/50 mb-1">{item.label}</p>
                <p className="font-display font-bold text-base sm:text-lg group-hover:text-primary transition break-words">
                  {item.value}
                </p>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-background/50">
          © {new Date().getFullYear()} Uncle Roy Processed Food Manufacturing. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-background/50">
          Made with ♥ in Marinduque
        </p>
      </div>
    </div>
  </footer>
);
