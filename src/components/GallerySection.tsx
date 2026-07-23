import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Import local assets
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import istanbul from "@/assets/dest-istanbul.jpg";
import kenya from "@/assets/dest-kenya.jpg";
import cert1_1 from "@/assets/cert1 (1).png";
import cert1_2 from "@/assets/cert1 (2).png";
import cert1_3 from "@/assets/cert1 (3).png";
import cert1_4 from "@/assets/cert1 (4).png";

interface GalleryItem {
  src: string;
  category: "destinations" | "pilgrimage" | "adventures";
  titleEN: string;
  titleAM: string;
}

const GallerySection = () => {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterCategories = [
    { id: "destinations", labelEN: "Destinations", labelAM: "መዳረሻዎች" },
    { id: "pilgrimage", labelEN: "Umrah / Pilgrimage", labelAM: "ኡምራ / ሐጅ" },
    { id: "adventures", labelEN: "Adventures", labelAM: "ጀብዱዎች" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      src: img1,
      category: "pilgrimage",
      titleEN: "Spiritual Umrah Journeys",
      titleAM: "መንፈሳዊ የኡምራ ጉዞዎች",
    },
    {
      src: img2,
      category: "destinations",
      titleEN: "Beautiful European Vacations",
      titleAM: "ውብ የአውሮፓ እረፍት ቀናት",
    },
    {
      src: img3,
      category: "destinations",
      titleEN: "Historic Fasil Ghebbi Castle",
      titleAM: "ታሪካዊው የፋሲል ግቢ ግንብ",
    },
    {
      src: img4,
      category: "adventures",
      titleEN: "Bespoke Tour Excursions",
      titleAM: "ልዩ የጉብኝት ጉዞዎች",
    },
    {
      src: img5,
      category: "destinations",
      titleEN: "Rock-Hewn Churches of Lalibela",
      titleAM: "የላሊበላ ውቅር አብያተ ክርስቲያናት",
    },
    {
      src: img6,
      category: "adventures",
      titleEN: "Simien Mountains National Park",
      titleAM: "የሰሜን ተራሮች ብሔራዊ ፓርክ",
    },
    {
      src: img7,
      category: "adventures",
      titleEN: "Dallol Hydrothermal Formations",
      titleAM: "የዳሎል ማዕድን እና ጨው ክምችቶች",
    },
    {
      src: dubai,
      category: "destinations",
      titleEN: "Modern Dubai Skyscrapers",
      titleAM: "ዘመናዊ የዱባይ ሰማይ ጠቀስ ህንፃዎች",
    },
    {
      src: istanbul,
      category: "destinations",
      titleEN: "Historic Istanbul Sightseeing",
      titleAM: "ታሪካዊ የኢስታንቡል እይታዎች",
    },
    {
      src: kenya,
      category: "adventures",
      titleEN: "Wild Kenya Safari Drives",
      titleAM: "የዱር ኬንያ ሳፋሪ ጉዞዎች",
    },
    {
      src: cert1_1,
      category: "destinations",
      titleEN: "Official License Certificate - Page 1",
      titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 1",
    },
    {
      src: cert1_2,
      category: "destinations",
      titleEN: "Official License Certificate - Page 2",
      titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 2",
    },
    {
      src: cert1_3,
      category: "destinations",
      titleEN: "Official License Certificate - Page 3",
      titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 3",
    },
    {
      src: cert1_4,
      category: "destinations",
      titleEN: "Official License Certificate - Page 4",
      titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 4",
    },
  ];



  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {t.gallery_tag}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t.gallery_title}
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            {t.gallery_subtitle}
          </p>
        </motion.div>



        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.src}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-[var(--shadow-card)] hover:shadow-2xl hover:shadow-primary/10 bg-card border border-border/40"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={lang === "en" ? item.titleEN : item.titleAM}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {/* Decorative Expand Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-350">
                    <ZoomIn className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1.5 bg-primary-foreground/10 px-2 py-0.5 rounded w-max">
                    {lang === "en"
                      ? filterCategories.find((c) => c.id === item.category)?.labelEN
                      : filterCategories.find((c) => c.id === item.category)?.labelAM}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-black"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close Gallery Image"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage}
                alt="Enlarged Travel Memory"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />

              {/* Title helper below */}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
