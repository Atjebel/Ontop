import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.test_user1_name,
      role: t.test_user1_role,
      quote: t.test_user1_quote,
      rating: 5,
      initials: "AM",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: t.test_user2_name,
      role: t.test_user2_role,
      quote: t.test_user2_quote,
      rating: 5,
      initials: "HT",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      name: t.test_user3_name,
      role: t.test_user3_role,
      quote: t.test_user3_quote,
      rating: 5,
      initials: "SK",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: t.test_user4_name,
      role: t.test_user4_role,
      quote: t.test_user4_quote,
      rating: 5,
      initials: "KA",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            {t.test_tag}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.test_title}
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            {t.test_subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card border border-border/60 hover:border-primary/30 rounded-3xl p-8 relative flex flex-col justify-between shadow-[var(--shadow-card)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-300 rotate-180" />

              <div className="relative z-10 flex-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 font-body text-[15px] md:text-base leading-relaxed italic mb-6 whitespace-pre-line relative">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-5 mt-auto">
                <Avatar className="w-12 h-12 border border-background shadow-inner">
                  <AvatarFallback className={`bg-gradient-to-br ${test.gradient} text-white font-heading font-semibold text-base`}>
                    {test.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-[16px] leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
