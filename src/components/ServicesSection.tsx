import { motion } from "framer-motion";
import { Plane, Hotel, FileCheck, Map, Shield, Headphones, Clock, Award, Moon, Sparkles, Building2, HeartHandshake, Bus, Users, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getServiceLineIcon = (line: string) => {
  if (line.startsWith('✨ ')) return { Icon: Sparkles, text: line.replace('✨ ', '') };
  if (line.startsWith('🕋 ')) return { Icon: Moon, text: line.replace('🕋 ', '') };
  if (line.startsWith('🏨 ')) return { Icon: Building2, text: line.replace('🏨 ', '') };
  if (line.startsWith('🤲 ')) return { Icon: HeartHandshake, text: line.replace('🤲 ', '') };
  if (line.startsWith('🚌 ')) return { Icon: Bus, text: line.replace('🚌 ', '') };
  if (line.startsWith('👨‍👩‍👧‍👦 ')) return { Icon: Users, text: line.replace('👨‍👩‍👧‍👦 ', '') };
  if (line.startsWith('🛡️ ')) return { Icon: ShieldCheck, text: line.replace('🛡️ ', '') };
  return { Icon: null, text: line };
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Plane, title: t.svc_flight_title, desc: t.svc_flight_desc },
    { icon: Hotel, title: t.svc_hotel_title, desc: t.svc_hotel_desc },
    { icon: FileCheck, title: t.svc_visa_title, desc: t.svc_visa_desc },
    { icon: Map, title: t.svc_tour_title, desc: t.svc_tour_desc },
    { icon: Shield, title: t.svc_insurance_title, desc: t.svc_insurance_desc },
    { icon: Headphones, title: t.svc_support_title, desc: t.svc_support_desc },
    { icon: Clock, title: t.svc_fast_title, desc: t.svc_fast_desc },
    { icon: Award, title: t.svc_cert_title, desc: t.svc_cert_desc },
    { icon: Moon, title: t.svc_umrah_title, desc: t.svc_umrah_desc },
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
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{svc.title}</h3>
              <div className="mt-2 space-y-3">
                {svc.desc.split('\n').filter(Boolean).map((line, idx) => {
                  const { Icon, text } = getServiceLineIcon(line);
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.1, duration: 0.4 }}
                      className={`flex items-start gap-2 ${Icon ? 'mt-3' : 'mt-1'}`}
                    >
                      {Icon && <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />}
                      <p className={`text-muted-foreground leading-relaxed ${Icon ? 'text-sm font-medium' : 'text-sm'} whitespace-pre-line`}>
                        {text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
