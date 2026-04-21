import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Shield, Headphones } from "lucide-react";

const services = [
  { icon: Plane, title: "Flight Booking", desc: "Best deals on domestic and international flights with top airlines worldwide." },
  { icon: Hotel, title: "Hotel Reservations", desc: "Handpicked hotels and resorts from budget-friendly to luxury 5-star stays." },
  { icon: Car, title: "Car Rentals", desc: "Reliable vehicle rentals at every destination, from compact cars to luxury SUVs." },
  { icon: Map, title: "Tour Packages", desc: "Curated travel packages with guided tours, activities, and local experiences." },
  { icon: Shield, title: "Travel Insurance", desc: "Comprehensive coverage to protect your trip from unexpected events." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance wherever you are in the world." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Travel Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
