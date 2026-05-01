import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 border-4 border-foreground rotate-12" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 border-4 border-foreground -rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-foreground text-background px-8 py-4 border-6 border-background shadow-brutal rotate-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              {t("aboutTitle")}
            </h2>
          </div>
        </div>

        {/* About Text - PAKAI t("aboutText") supaya ikut switch bahasa */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="bg-card border-4 border-foreground p-6 md:p-10 shadow-brutal-lg rotate-[-1deg] hover:rotate-0 transition-transform">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
              {t("aboutText")}
            </p>
          </div>
        </div>

        {/* 3 Cards - pakai key dari translations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-primary border-4 border-foreground p-6 md:p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 rotate-[-2deg] hover:rotate-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-4 border-foreground rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl md:text-4xl">✨</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-center">
              {t("aboutCard1Title")}
            </h3>
            <p className="text-base md:text-lg text-center text-background/90">
              {t("aboutCard1Desc")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary border-4 border-foreground p-6 md:p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 rotate-[1deg] hover:rotate-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-4 border-foreground rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl md:text-4xl">♪</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-center">
              {t("aboutCard2Title")}
            </h3>
            <p className="text-base md:text-lg text-center text-background/90">
              {t("aboutCard2Desc")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-accent border-4 border-foreground p-6 md:p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 rotate-[-1deg] hover:rotate-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-4 border-foreground rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl md:text-4xl">❤️</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-center">
              {t("aboutCard3Title")}
            </h3>
            <p className="text-base md:text-lg text-center text-background/90">
              {t("aboutCard3Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;