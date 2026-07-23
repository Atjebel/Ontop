import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ZoomIn, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import photo assets
import p1 from "@/assets/photo_2026-07-15_13-29-35.jpg";
import p2 from "@/assets/photo_2026-07-15_13-29-50.jpg";
import p3 from "@/assets/photo_2026-07-15_13-29-54.jpg";
import p4 from "@/assets/photo_2026-07-15_13-29-57.jpg";
import p5 from "@/assets/photo_2026-07-15_13-30-02.jpg";
import p6 from "@/assets/photo_2026-07-15_13-30-06.jpg";
import p7 from "@/assets/photo_2026-07-15_13-30-12.jpg";
import p8 from "@/assets/photo_2026-07-15_13-30-16.jpg";
import p9 from "@/assets/photo_2026-07-15_13-30-20.jpg";
import p10 from "@/assets/photo_2026-07-15_13-30-23.jpg";
import p11 from "@/assets/photo_2026-07-15_13-30-30.jpg";
import assetImg3 from "@/assets/3.jpg";
import assetImg5 from "@/assets/5.jpg";
import assetImg6 from "@/assets/6.jpg";
import assetImg7 from "@/assets/7.jpg";
import cert1_1 from "@/assets/cert1 (1).png";
import cert1_2 from "@/assets/cert1 (2).png";
import cert1_3 from "@/assets/cert1 (3).png";
import cert1_4 from "@/assets/cert1 (4).png";

interface GalleryPhoto {
  src: string;
  category: "tours" | "flights" | "pilgrimage" | "services";
  titleEN: string;
  titleAM: string;
}

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const filterCategories = [
    { id: "tours", labelEN: "Tour Packages", labelAM: "የጉዞ ፓኬጆች" },
    { id: "flights", labelEN: "Flight Booking", labelAM: "የበረራ ትኬቶች" },
    { id: "pilgrimage", labelEN: "Umrah / Hajj", labelAM: "ኡምራ / ሐጅ" },
    { id: "services", labelEN: "Our Services", labelAM: "አገልግሎቶቻችን" },
  ];

  const photos: GalleryPhoto[] = [
    { src: p1, category: "tours", titleEN: "Group Guided Excursions", titleAM: "የቡድን መሪ ጉዞዎች" },
    { src: p2, category: "tours", titleEN: "Unforgettable Travel Moments", titleAM: "የማይረሱ የጉዞ ጊዜያት" },
    { src: p3, category: "flights", titleEN: "Global Flight Bookings", titleAM: "ዓለም አቀፍ የበረራ ቦታዎች" },
    { src: p4, category: "pilgrimage", titleEN: "Umrah & Hajj Services", titleAM: "የኡምራ እና ሐጅ አገልግሎት" },
    { src: p5, category: "tours", titleEN: "Exploring Top Destinations", titleAM: "ታዋቂ መዳረሻዎችን መጎብኘት" },
    { src: p6, category: "services", titleEN: "Professional Client Assistance", titleAM: "ሙያዊ የደንበኞች ድጋፍ" },
    { src: p7, category: "flights", titleEN: "Aviation Partners Network", titleAM: "የአየር መንገዶች አጋርነት አውታረ መረብ" },
    { src: p8, category: "tours", titleEN: "Bespoke Holiday Packages", titleAM: "ልዩ የዕረፍት ጊዜ ፓኬጆች" },
    { src: p9, category: "pilgrimage", titleEN: "Spiritual Pilgrimage Tours", titleAM: "መንፈሳዊ የሐጅ ጉዞዎች" },
    { src: p10, category: "services", titleEN: "ONTOP Booking Center", titleAM: "ONTOP የቦታ ማስያዣ ማዕከል" },
    { src: p11, category: "tours", titleEN: "Beautiful Sceneries & Sightseeing", titleAM: "ውብ ተፈጥሮ እና እይታዎች" },
    { src: assetImg3, category: "tours", titleEN: "Historic Fasil Ghebbi Castle", titleAM: "ታሪካዊው የፋሲል ግቢ ግንብ" },
    { src: assetImg5, category: "tours", titleEN: "Rock-Hewn Churches of Lalibela", titleAM: "የላሊበላ ውቅር አብያተ ክርስቲያናት" },
    { src: assetImg6, category: "tours", titleEN: "Simien Mountains National Park", titleAM: "የሰሜን ተራሮች ብሔራዊ ፓርክ" },
    { src: assetImg7, category: "tours", titleEN: "Dallol Hydrothermal Formations", titleAM: "የዳሎል ማዕድን እና ጨው ክምችቶች" },
    { src: cert1_1, category: "services", titleEN: "Official License Certificate - Page 1", titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 1" },
    { src: cert1_2, category: "services", titleEN: "Official License Certificate - Page 2", titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 2" },
    { src: cert1_3, category: "services", titleEN: "Official License Certificate - Page 3", titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 3" },
    { src: cert1_4, category: "services", titleEN: "Official License Certificate - Page 4", titleAM: "ኦፊሴላዊ የጉዞ ፈቃድ ሰርተፍኬት - ገጽ 4" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Gallery Content wrapper */}
        <div className="pt-32 pb-24 relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="container mx-auto px-4">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 max-w-6xl mx-auto"
            >
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{lang === "en" ? "Back to Home" : "ወደ መነሻ ገጽ"}</span>
              </a>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                {t.gallery_tag}
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                {t.gallery_title}
              </h1>
              <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
                {t.gallery_subtitle}
              </p>
            </motion.div>

            {/* Photo Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {photos.map((photo) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={photo.src}
                    className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-[var(--shadow-card)] hover:shadow-2xl hover:shadow-primary/10 bg-card border border-border/40"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <img
                      src={photo.src}
                      alt={lang === "en" ? photo.titleEN : photo.titleAM}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1.5 bg-primary-foreground/10 px-2 py-0.5 rounded w-max">
                        {lang === "en"
                          ? filterCategories.find((c) => c.id === photo.category)?.labelEN
                          : filterCategories.find((c) => c.id === photo.category)?.labelAM}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage}
                alt="Travel Memory zoomed"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
