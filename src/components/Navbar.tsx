import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav_home, href: "#home" },
    { label: t.nav_destinations, href: "#destinations" },
    { label: t.nav_services, href: "#services" },
    { label: t.nav_about, href: "#about" },
    { label: t.nav_faq, href: "#faq" },
    { label: t.nav_contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="ONTOP Travel Service" className="h-12 w-auto rounded-md" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-secondary-foreground/85 hover:text-secondary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "am" : "en")}
            title={lang === "en" ? "Switch to Amharic" : "Switch to English"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary-foreground/15 text-secondary-foreground hover:bg-secondary-foreground/25 transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>{lang === "en" ? "አማ" : "EN"}</span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-foreground/15 text-secondary-foreground hover:bg-secondary-foreground/25 transition-colors"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Book Now button */}
          <a
            href="#contact"
            className="bg-secondary-foreground text-secondary px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t.nav_book}
          </a>
        </div>

        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-secondary border-b border-secondary-foreground/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-secondary-foreground/85 hover:text-secondary-foreground py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile controls */}
              <div className="flex items-center gap-3 pt-2 border-t border-secondary-foreground/10">
                <button
                  onClick={() => setLang(lang === "en" ? "am" : "en")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary-foreground/15 text-secondary-foreground hover:bg-secondary-foreground/25 transition-colors ml-4"
                >
                  <Languages className="w-4 h-4" />
                  <span>{lang === "en" ? "አማርኛ" : "English"}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-foreground/15 text-secondary-foreground hover:bg-secondary-foreground/25 transition-colors"
                >
                  {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-secondary-foreground text-secondary px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-1"
              >
                {t.nav_book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
