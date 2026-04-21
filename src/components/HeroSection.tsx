import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Headphones, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-beach.jpg";

const features = [
  { icon: Globe2, title: "150+ Destinations", desc: "Worldwide coverage" },
  { icon: ShieldCheck, title: "Trusted & Secure", desc: "Safe bookings" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here for you" },
  { icon: Sparkles, title: "Tailored Trips", desc: "Crafted for you" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tropical beach paradise"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Explore the World <br />
          <span className="text-primary">With ONTOP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          Your trusted travel partner for unforgettable journeys. We craft bespoke experiences tailored to your dreams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="#destinations"
            className="bg-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="bg-card/20 backdrop-blur-md text-primary-foreground border border-primary-foreground/30 px-7 py-3 rounded-lg font-semibold hover:bg-card/30 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card/15 backdrop-blur-md border border-primary-foreground/20 rounded-xl p-4 text-center"
            >
              <f.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <p className="font-heading text-primary-foreground font-semibold text-sm md:text-base">{f.title}</p>
              <p className="text-primary-foreground/70 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
