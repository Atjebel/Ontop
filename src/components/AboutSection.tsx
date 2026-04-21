import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "10+ years of travel expertise",
  "Partnerships with 500+ hotels and airlines",
  "Customized itineraries for every budget",
  "Thousands of satisfied travelers worldwide",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose ONTOP Travel Service?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At ONTOP Travel Service, we believe every journey should be extraordinary. Our dedicated team of travel experts works tirelessly to craft personalized experiences that exceed expectations — from exotic getaways to business travel solutions.
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
              { num: "10K+", label: "Happy Travelers" },
              { num: "50+", label: "Destinations" },
              { num: "500+", label: "Hotel Partners" },
              { num: "24/7", label: "Customer Support" },
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
