import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.79.74 1.46 1.38 2.13.66.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
  {
    label: "Telegram",
    href: "https://t.me/ONTOP121",
    path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/qr/J42XDGEMZI3MI1",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.38-2.9 5.82-1.2 1.01-2.76 1.46-4.32 1.46-1.07.01-2.14-.14-3.15-.55-1.96-.8-3.41-2.5-3.87-4.52-.16-.68-.22-1.39-.23-2.09.01-1.08.19-2.16.63-3.15.53-1.19 1.34-2.26 2.45-3.03 1.1-.75 2.42-1.19 3.75-1.22v4.02c-.75.05-1.46.33-2.01.81-.59.51-.97 1.25-1 2.02-.02.48.06.97.26 1.41.25.56.66 1.03 1.19 1.34.69.41 1.51.54 2.29.39.81-.15 1.51-.66 1.94-1.36.27-.44.42-.96.44-1.48.05-3.43.02-6.86.03-10.29V.02z",
  },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={logo} alt="ONTOP Travel Service" className="h-14 w-auto mb-4 rounded-lg" />
            <p className="text-background/60 text-sm leading-relaxed">
              {t.footer_tagline}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-background font-bold mb-4">{t.footer_links}</h4>
            <a href="#home" className="block text-background/60 text-sm mb-2 hover:text-background transition-colors">{t.nav_home}</a>
            <a href="#destinations" className="block text-background/60 text-sm mb-2 hover:text-background transition-colors">{t.nav_destinations}</a>
            <a href="#services" className="block text-background/60 text-sm mb-2 hover:text-background transition-colors">{t.nav_services}</a>
            <a href="#about" className="block text-background/60 text-sm mb-2 hover:text-background transition-colors">{t.nav_about}</a>
            <a href="#contact" className="block text-background/60 text-sm mb-2 hover:text-background transition-colors">{t.nav_contact}</a>
          </div>
          <div>
            <h4 className="font-heading text-background font-bold mb-4">{t.footer_top_dest}</h4>
            {["Dubia", "Saudia", "Istanbul", "China", "Paris"].map((d) => (
              <p key={d} className="text-background/60 text-sm mb-2">{d}</p>
            ))}
          </div>
          <div>
            <h4 className="font-heading text-background font-bold mb-4">{t.footer_contact}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0911229511" className="flex items-start gap-2 text-background/60 text-sm hover:text-background transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Agent 1: 0911 22 95 11</span>
                </a>
              </li>
              <li>
                <a href="tel:0912026123" className="flex items-start gap-2 text-background/60 text-sm hover:text-background transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Agent 2: 0912 02 61 23</span>
                </a>
              </li>
              <li>
                <a href="mailto:ontoptravelservice2@gmail.com" className="flex items-start gap-2 text-background/60 text-sm hover:text-background transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>ontoptravelservice2@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Travel Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">{t.footer_rights}</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
