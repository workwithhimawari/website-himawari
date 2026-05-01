import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Youtube } from "lucide-react";
import himawariLogo from "@/assets/himawari-logo.png";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#members", label: t("members") },
    { href: "#news", label: t("news") },
    { href: "#merch", label: t("merch") },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/himawaritoday?igsh=YWZsbGdsNTJ5dTNk", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@shininghimawari?_r=1&_t=ZS-942Kx9UWhFw", label: "TikTok" },
    { icon: Youtube, href: "http://www.youtube.com/@HimawariToday", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rotate-12 border-4 border-background/20" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/20 -rotate-12 border-4 border-background/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Column 1: Logo & Branding */}
          <div>
            <img src={himawariLogo} alt="HIMAWARI" className="h-20 w-auto mb-4 -rotate-2" />
            <p className="text-background/70 font-bold text-lg mb-6 uppercase tracking-wider">
              Shining Together, Forever ☀️
            </p>
            <div className="inline-block border-4 border-background/40 px-4 py-2 rotate-2">
              <span className="text-sm font-black uppercase tracking-widest text-background/60">
                MELTED CUPCAKE
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-black uppercase text-xl mb-8 inline-block bg-secondary text-secondary-foreground px-4 py-2 border-4 border-background -rotate-1">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-bold text-lg uppercase tracking-wider hover:text-primary transition-colors inline-block hover:-rotate-2"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Credits */}
          <div>
            <h3 className="font-black uppercase text-xl mb-8 inline-block bg-accent text-accent-foreground px-4 py-2 border-4 border-background rotate-1">
              {t("followUs")}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 min-w-[44px] min-h-[44px] bg-background text-foreground flex items-center justify-center border-4 border-background transition-all duration-75 hover:translate-x-1 hover:translate-y-1 hover:bg-primary ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`}
                  style={{ boxShadow: "4px 4px 0px 0px hsl(var(--primary))" }}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Credits - sekarang jadi link ke IG */}
            <div className="text-sm text-background/60 space-y-2 font-bold uppercase">
              <p>
                DEVELOPED BY{" "}
                <a
                  href="https://www.instagram.com/ale.beneran?igsh=MWpia3lpd3dvcGdmOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background hover:text-primary underline hover:no-underline transition-colors"
                >
                  ale.beneran
                </a>
              </p>
              <p>
                THUMBNAIL ARTWORK BY{" "}
                <a
                  href="https://www.instagram.com/melted_cupcake?igsh=MW9nYWh4a2htcnBqag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background hover:text-primary underline hover:no-underline transition-colors"
                >
                  [MELTED CUPCAKE]
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-background/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50 font-bold uppercase tracking-wider">
              © 2023 HIMAWARI. Thumbnail design by Melted Cupcake. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-primary border-2 border-background" style={{ transform: `rotate(${i * 15}deg)` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;