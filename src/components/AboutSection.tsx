import { motion } from "framer-motion";
import { CheckCircle, Target, Crown, Zap, ShieldCheck, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const renderLineWithIcon = (line: string) => {
  let Icon = null;
  let text = line;

  if (line.startsWith('🎯 ')) { Icon = Target; text = line.replace('🎯 ', ''); }
  else if (line.startsWith('👑 ')) { Icon = Crown; text = line.replace('👑 ', ''); }
  else if (line.startsWith('⚡️ ')) { Icon = Zap; text = line.replace('⚡️ ', ''); }
  else if (line.startsWith('🛡️ ')) { Icon = ShieldCheck; text = line.replace('🛡️ ', ''); }
  else if (line.startsWith('🌍 ')) { Icon = Globe; text = line.replace('🌍 ', ''); }

  return { Icon, text };
};

const AboutSection = () => {
  const { t } = useLanguage();

  // Removed highlights since they are now incorporated into about_desc

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
            <div className="space-y-4">
              {t.about_desc.split('\n').filter(Boolean).map((line, index) => {
                const isQuote = line.startsWith('"') || line.startsWith('\"') || line.startsWith('”');
                const { Icon, text } = renderLineWithIcon(line);
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`${isQuote ? 'italic font-medium text-primary mt-8 border-l-4 border-primary pl-4 py-1' : 'flex items-start gap-3 mt-4'}`}
                  >
                    {Icon && <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
                    <p className={`text-muted-foreground leading-relaxed text-[15px] ${isQuote ? '' : 'flex-1'} whitespace-pre-line`}>
                      {text}
                    </p>
                  </motion.div>
                );
              })}
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
