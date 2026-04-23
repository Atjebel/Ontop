import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Shield, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Plane, title: t.svc_flight_title, desc: t.svc_flight_desc },
    { icon: Hotel, title: t.svc_hotel_title, desc: t.svc_hotel_desc },
    { icon: Car, title: t.svc_car_title, desc: t.svc_car_desc },
    { icon: Map, title: t.svc_tour_title, desc: t.svc_tour_desc },
    { icon: Shield, title: t.svc_insurance_title, desc: t.svc_insurance_desc },
    { icon: Headphones, title: t.svc_support_title, desc: t.svc_support_desc },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">{t.svc_tag}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.svc_title}
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
