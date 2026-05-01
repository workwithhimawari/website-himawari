import { useLanguage } from "@/contexts/LanguageContext";
import himawariLogo from "@/assets/himawari-logo.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col pt-24 pb-16 relative overflow-hidden">
      {/* Background chaos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Giant shapes */}
        <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-primary border-[8px] border-foreground rotate-12 shadow-brutal-xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 md:w-[500px] md:h-[500px] bg-secondary border-[8px] border-foreground -rotate-12" />
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-accent border-[6px] border-foreground rotate-45 hidden md:block" />
        <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-primary border-[6px] border-foreground -rotate-12 hidden md:block" />
        
        {/* Scattered small squares */}
        <div className="absolute top-40 right-1/4 w-8 h-8 bg-foreground rotate-12" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-foreground -rotate-6" />
        <div className="absolute top-1/2 left-20 w-6 h-6 bg-primary border-4 border-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative">
              <img 
                src={himawariLogo} 
                alt="HIMAWARI" 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl"
              />
              {/* Decorative corners around logo */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary border-4 border-foreground" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary border-4 border-foreground" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-accent border-4 border-foreground" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-primary border-4 border-foreground" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-6">
            <h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-4"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
              }}
            >
              {t("heroWelcome")}
            </h1>
          </div>

          {/* Stamp badge */}
          <div className="flex justify-center mb-6">
            <div className="stamp-brutal px-6 py-3 text-sm md:text-base bg-background">
              ★ OFFICIAL WEBSITE ★
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-6">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter">
              <span className="inline-block bg-primary px-4 md:px-6 border-[4px] md:border-[6px] border-foreground shadow-brutal-lg -rotate-2">
                HIMA
              </span>
              <span className="inline-block relative">
                WARI
                <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-4 md:h-6 bg-secondary border-[3px] md:border-[4px] border-foreground -z-10 rotate-1" />
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-6">
            <div className="inline-block bg-foreground text-background px-5 py-2 md:px-8 md:py-3 rotate-1 border-[3px] border-foreground">
              <p className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.15em]">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-xl text-center font-bold mb-8 max-w-2xl mx-auto bg-background/80 px-5 py-3 border-[3px] border-foreground shadow-brutal -rotate-1">
            {t("heroDescription")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="#members" 
              className="btn-brutal-primary text-base md:text-lg px-8 py-4 rotate-2 hover:scale-105 transition-transform duration-200"
            >
              {t("meetMembers")} →
            </a>
            <a 
              href="#merch" 
              className="btn-brutal-accent text-base md:text-lg px-8 py-4 -rotate-2 hover:scale-105 transition-transform duration-200"
            >
              {t("shopNow")} ★
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <div className="w-8 h-12 border-[4px] border-foreground bg-background relative shadow-brutal">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-foreground" style={{
        background: `repeating-linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--foreground)) 30px, hsl(var(--primary)) 30px, hsl(var(--primary)) 60px, hsl(var(--secondary)) 60px, hsl(var(--secondary)) 90px)`
      }} />
    </section>
  );
};

export default Hero;
