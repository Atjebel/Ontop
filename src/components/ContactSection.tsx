import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showPhones, setShowPhones] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">{t.contact_tag}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.contact_title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t.contact_desc}
            </p>

            <div className="space-y-4">
              {/* Expandable Phone Item */}
              <div className="flex flex-col bg-card rounded-xl hover:shadow-[var(--shadow-card)] transition-shadow overflow-hidden">
                <button
                  onClick={() => setShowPhones(!showPhones)}
                  className="flex w-full items-center gap-4 p-4 text-left outline-none"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm flex-1">Call Us</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${showPhones ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`flex flex-col bg-muted/30 transition-all duration-300 ease-in-out ${showPhones ? "max-h-40 opacity-100 border-t border-border" : "max-h-0 opacity-0"
                    }`}
                >
                  <a href="tel:0911229511" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
                    <Phone className="w-4 h-4 text-primary ml-2" />
                    <span className="text-foreground font-medium text-sm">Agent 1: 0911 22 95 11</span>
                  </a>
                  <a href="tel:0912026123" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors border-t border-border/50">
                    <Phone className="w-4 h-4 text-primary ml-2" />
                    <span className="text-foreground font-medium text-sm">Agent 2: 0912 02 61 23</span>
                  </a>
                </div>
              </div>

              {/* Expandable Telegram Item */}
              <div className="flex flex-col bg-card rounded-xl hover:shadow-[var(--shadow-card)] transition-shadow overflow-hidden">
                <button
                  onClick={() => setShowTelegram(!showTelegram)}
                  className="flex w-full items-center gap-4 p-4 text-left outline-none"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm flex-1">Telegram</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${showTelegram ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`flex flex-col bg-muted/30 transition-all duration-300 ease-in-out ${showTelegram ? "max-h-40 opacity-100 border-t border-border" : "max-h-0 opacity-0"
                    }`}
                >
                  <a href="https://t.me/ONTOP121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
                    <Send className="w-4 h-4 text-primary ml-2" />
                    <span className="text-foreground font-medium text-sm">Agent 1: @ONTOP121</span>
                  </a>
                  <a href="https://t.me/IDU32" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors border-t border-border/50">
                    <Send className="w-4 h-4 text-primary ml-2" />
                    <span className="text-foreground font-medium text-sm">Agent 2: @IDU32</span>
                  </a>
                </div>
              </div>

              {/* Other Items */}
              {[
                { icon: Mail, label: "ontoptravelservice2@gmail.com", href: "mailto:ontoptravelservice2@gmail.com" },
                { icon: MapPin, label: "Addibs Ababa, Merkato ,Haji Legese Business Center , first floor ", href: "https://maps.app.goo.gl/iw7yU5hBXuN1bm8U8" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-[var(--shadow-card)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] space-y-4"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-3">
                <Send className="w-10 h-10 text-primary" />
                <p className="font-heading text-xl font-bold text-foreground">{t.contact_sent_title}</p>
                <p className="text-muted-foreground text-sm text-center">{t.contact_sent_desc}</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder={t.contact_fname} required className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                  <input placeholder={t.contact_lname} required className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                </div>
                <input placeholder={t.contact_email} type="email" required className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                <input placeholder={t.contact_dest} className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                <textarea placeholder={t.contact_msg} rows={4} className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 resize-none" />
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t.contact_send}
                </button>
              </>
            )}
          </motion.form>
        </div>

        {/* Join Our Telegram Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://t.me/ONTOPTR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group font-semibold text-base"
          >
            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{t.contact_telegram_join}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
