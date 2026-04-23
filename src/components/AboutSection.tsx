import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    t.about_h1,
    t.about_h2,
    t.about_h3,
    t.about_h4,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t.about_tag}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.about_title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.about_desc}
            </p>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { num: "10K+", label: t.about_stat1_label },
              { num: "200+", label: t.about_stat2_label },
              { num: "15+", label: t.about_stat3_label },
              { num: "24/7", label: t.about_stat4_label },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-muted rounded-2xl p-6 text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stat.num}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
