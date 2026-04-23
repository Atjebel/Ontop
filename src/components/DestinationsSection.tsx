import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import santorini from "@/assets/dest-santorini.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import paris from "@/assets/dest-paris.jpg";
import { useLanguage } from "@/context/LanguageContext";

const destinations = [
  { name: "Santorini", country: "Greece", price: "$1,299", rating: 4.9, img: santorini },
  { name: "Dubai", country: "UAE", price: "$1,599", rating: 4.8, img: dubai },
  { name: "Bali", country: "Indonesia", price: "$999", rating: 4.9, img: bali },
  { name: "Paris", country: "France", price: "$1,449", rating: 4.7, img: paris },
  { name: "Maldives", country: "South Asia", price: "$1,899", rating: 4.9, img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=640&q=80" },
  { name: "Tokyo", country: "Japan", price: "$1,699", rating: 4.8, img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=640&q=80" },
  { name: "Rome", country: "Italy", price: "$1,349", rating: 4.7, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=640&q=80" },
  { name: "New York", country: "USA", price: "$1,249", rating: 4.6, img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=640&q=80" },
  { name: "Mecca", country: "Saudi Arabia", price: "$1,199", rating: 5.0, img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=640&q=80" },
  { name: "Jeddah", country: "Saudi Arabia", price: "$999", rating: 4.8, img: "https://images.unsplash.com/photo-1580414057403-c514510628c0?auto=format&fit=crop&w=640&q=80" },
  { name: "Istanbul", country: "Turkey", price: "$899", rating: 4.9, img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=640&q=80" },
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
              className="group rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow cursor-pointer"
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
