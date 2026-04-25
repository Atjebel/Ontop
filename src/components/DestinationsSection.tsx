import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import dubai from "@/assets/dest-dubai.jpg";
import paris from "@/assets/dest-paris.jpg";
import saudia from "@/assets/dest-saudia.png";
import istanbul from "@/assets/dest-istanbul.jpg";
import china from "@/assets/dest-china.png";
import usa from "@/assets/dest-usa.jpg";
import kenya from "@/assets/dest-kenya.jpg";
import quatar from "@/assets/dest-quatar.png";
import canda from "@/assets/dest-canda.jpg";
import { useLanguage } from "@/context/LanguageContext";

const destinations = [
  { name: "Dubia", country: "UAE", price: "$1,599", rating: 4.8, img: dubai },
  { name: "Saudia", country: "Saudi Arabia", price: "$1,199", rating: 5.0, img: saudia },
  { name: "Istanbul", country: "Turkey", price: "$899", rating: 4.9, img: istanbul },
  { name: "China", country: "East Asia", price: "$1,499", rating: 4.7, img: china },
  { name: "Usa", country: "North America", price: "$1,249", rating: 4.6, img: usa },
  { name: "Kenya", country: "East Africa", price: "$1,399", rating: 4.8, img: kenya },
  { name: "Quatar", country: "Middle East", price: "$1,699", rating: 4.9, img: quatar },
  { name: "Canda", country: "North America", price: "$1,199", rating: 4.8, img: canda },
  { name: "Paris", country: "France", price: "$1,449", rating: 4.7, img: paris },
];

const DestinationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t.dest_tag}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.dest_title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold text-foreground">{dest.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{dest.country}</p>
                <div className="flex items-center justify-between">
                  <a href="#contact" className="text-primary font-bold hover:underline transition-all">
                    {t.dest_contact}
                  </a>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
