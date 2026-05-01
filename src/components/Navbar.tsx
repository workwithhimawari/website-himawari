import React from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";
import { Sun, Moon, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import himawariLogo from "@/assets/himawari-logo.png";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: Language[] = ["ID", "EN", "JP"];

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#members", label: t("members") },
    { href: "#news", label: t("news") },
    { href: "#merch", label: t("merch") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[6px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="hover:rotate-2 transition-transform">
            <img src={himawariLogo} alt="HIMAWARI" className="h-12 md:h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-black uppercase text-sm tracking-wider px-4 py-2 border-4 border-transparent hover:border-foreground hover:bg-primary hover:-rotate-2 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center border-[4px] border-foreground shadow-brutal bg-background">
              {languages.map((lang, i) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-2 text-xs font-black transition-colors ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "bg-background hover:bg-muted"
                  } ${i !== languages.length - 1 ? "border-r-4 border-foreground" : ""}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="social-brutal"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} strokeWidth={3} /> : <Sun size={20} strokeWidth={3} />}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              className="social-brutal relative"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} strokeWidth={3} />
              {totalItems > 0 && (
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-secondary-foreground text-sm font-black flex items-center justify-center border-4 border-foreground rotate-12">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="social-brutal lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-[4px] border-foreground py-6 animate-fade-in bg-background">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-black uppercase text-xl tracking-wider p-4 border-4 border-foreground bg-background hover:bg-primary transition-colors ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                  style={{ boxShadow: 'var(--shadow-brutal)' }}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 pt-4 mt-4 border-t-4 border-foreground">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-6 py-3 text-sm font-black border-4 border-foreground transition-all shadow-brutal ${
                      language === lang
                        ? "bg-primary text-primary-foreground"
                        : "bg-background hover:bg-muted"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
