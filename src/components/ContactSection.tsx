import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Plan Your Next Adventure
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
              Ready to start your journey? Reach out to our travel experts and we'll help you plan the perfect trip.
            </p>
            {[
              { icon: Phone, label: "0911 22 95 11", href: "tel:0911229511" },
              { icon: Phone, label: "0912 02 61 23", href: "tel:0912026123" },
              { icon: Send, label: "Telegram", href: "https://t.me/ONTOP121" },
              { icon: Send, label: "Telegram", href: "https://t.me/IDU32" },
              { icon: Mail, label: "ontoptravel@gmail.com", href: "mailto:info@ontoptravel.com" },
              { icon: MapPin, label: "123 Travel Street, City, Country", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </a>
            ))}
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
                <p className="font-heading text-xl font-bold text-foreground">Message Sent!</p>
                <p className="text-muted-foreground text-sm text-center">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First Name" required className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                  <input placeholder="Last Name" required className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                </div>
                <input placeholder="Email" type="email" required className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                <input placeholder="Destination of Interest" className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60" />
                <textarea placeholder="Tell us about your dream trip..." rows={4} className="w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 resize-none" />
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
