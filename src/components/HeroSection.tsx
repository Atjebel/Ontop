import { motion, AnimatePresence } from "framer-motion";
import { Globe2, ShieldCheck, Headphones, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import img1 from "@/assets/pexels-tariqul-34868593.jpg";
import img2 from "@/assets/airplane-taking-off-sunset-scene-generative-ai.jpg";
import img3 from "@/assets/pexels-planespotter-geneva-1877406873-36897685.jpg";
import img4 from "@/assets/view-air-plane-wing-take-off-landing.jpg";

const heroImages = [img1, img2, img3, img4];

const HeroSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Globe2, title: t.hero_feat1_title, desc: t.hero_feat1_desc },
    { icon: ShieldCheck, title: t.hero_feat2_title, desc: t.hero_feat2_desc },
    { icon: Headphones, title: t.hero_feat3_title, desc: t.hero_feat3_desc },
    { icon: Sparkles, title: t.hero_feat4_title, desc: t.hero_feat4_desc },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <AnimatePresence>
          <motion.img
            key={currentImgIndex}
            src={heroImages[currentImgIndex]}
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Beautiful travel destination"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          {t.hero_title1} <br />
          <span className="text-primary">{t.hero_title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="#destinations"
            className="bg-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t.hero_explore}
          </a>
          <a
            href="#contact"
            className="bg-card/20 backdrop-blur-md text-primary-foreground border border-primary-foreground/30 px-7 py-3 rounded-lg font-semibold hover:bg-card/30 transition-colors"
          >
            {t.hero_contact}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card/15 backdrop-blur-md border border-primary-foreground/20 rounded-xl p-4 text-center"
            >
              <f.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <p className="font-heading text-primary-foreground font-semibold text-sm md:text-base">{f.title}</p>
              <p className="text-primary-foreground/70 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
