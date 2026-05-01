import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductCard from "./ProductCard";

// Bundle specific colors
const bundleColors: { [key: string]: string } = {
  "bundle-a": "#7DD3FC", // Pastel Blue / Cyan
  "bundle-b": "#BEF264", // Lime Green
  "bundle-c": "#C084FC", // Purple
  "bundle-d": "#F472B6", // Pink / Magenta
};

const Merch = () => {
  const { t } = useLanguage();

  // Individual items
  const individualProducts = [
    {
      id: "jersey",
      name: t("jersey"),
      basePrice: 175000,
      image: "/merch/jersey.gif",
      hasSize: true,
      hasCustomNumber: true,
    },
    {
      id: "photocard",
      name: t("photocard"),
      basePrice: 8000,
      image: "/merch/photocard-jersey.jpg",
      hasMember: true,
      hasVersion: true,
    },
    {
      id: "poster",
      name: t("poster"),
      basePrice: 18000,
      image: "/merch/poster-jersey.webp",
      hasVersion: true,
    },
    {
      id: "keychain",
      name: t("keychain"),
      basePrice: 15000,
      image: "/merch/keychain.gif",
      hasMember: true,
    },
    {
      id: "standee-small",
      name: t("standee Small"),
      basePrice: 25000,
      image: "/merch/mini-standee.gif",
      hasMember: true,
    },
    {
      id: "standee-big",
      name: t("standee Big"),
      basePrice: 50000,
      image: "/merch/idol-standee.gif",
      hasMember: true,
    },
    {
      id: "standee-twin",
      name: t("standee Twin"),
      basePrice: 70000,
      image: "/merch/twin-standee.jpg",
      hasMember: true,
    },
    {
      id: "sticker",
      name: t("sticker Member"),
      basePrice: 8000,
      image: "/merch/sticker-member.jpg",
      hasStickerType: true,
    },
    {
      id: "sticker-logo",
      name: t("sticker Logo"),
      basePrice: 6000,
      image: "/merch/himawari-logo.png",
    },
    {
      id: "sticker-pack",
      name: t("sticker Pack"),
      basePrice: 50000,
      image: "/merch/sticker-pack.jpg",
    },
    {
      id: "calendar-desk",
      name: t("calendar Desk"),
      basePrice: 60000,
      image: "/merch/kalender.jpg",
      hasVersion: true,
    },
    {
      id: "calendar-roll",
      name: t("calendar Roll"),
      basePrice: 0,
      image: "/merch/kalender.jpg",
      comingSoon: true,
    },
  ];

  // Bundle items
  const bundleProducts = [
    {
      id: "bundle-a",
      name: t("bundleA"),
      basePrice: 85000,
      image: "/bundle-a.jpg",
      description: t("bundleADesc"),
      hasVersion: true,
      hasMember: true,
    },
    {
      id: "bundle-b",
      name: t("bundleB"),
      basePrice: 175000,
      image: "/bundle-b.jpg",
      description: t("bundleBDesc"),
      hasSize: true,
      hasCustomNumber: true,
      hasVersion: true,
      hasMember: true,
    },
    {
      id: "bundle-c",
      name: t("bundleC"),
      basePrice: 250000,
      image: "/bundle-c.jpg",
      description: t("bundleCDesc"),
      hasVersion: true,
      hasMember: true,
    },
    {
      id: "bundle-d",
      name: t("bundleD"),
      basePrice: 550000,
      image: "/bundle-d.jpg",
      description: t("bundleDDesc"),
      hasSize: true,
      hasCustomNumber: true,
      hasVersion: true,
      hasMember: true,
    },
  ];

  return (
    <section id="merch" className="py-20 md:py-32 relative">
      {/* Top stripe */}
      <div className="divider-brutal" />
      
      <div className="bg-secondary/20 py-20 md:py-32 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 border-[6px] border-foreground/10 rotate-12 opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 border-[6px] border-foreground/10 -rotate-12 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block -rotate-2 mb-4 md:mb-6">
              <h2 className="text-2xl sm:text-4xl md:text-7xl font-black uppercase tracking-tight bg-secondary px-4 py-2 md:px-8 md:py-4 border-[4px] md:border-[6px] border-foreground shadow-brutal-lg">
                {t("merch")}
              </h2>
            </div>
            <p className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
              ★ LIMITED EDITION • OFFICIAL GOODS ★
            </p>
          </div>

          {/* Individual Items Section */}
          <div className="mb-16">
            <div className="inline-block rotate-1 mb-6 md:mb-8">
              <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight bg-background px-4 py-2 md:px-6 md:py-3 border-[3px] md:border-[4px] border-foreground shadow-brutal">
                {t("individual")}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {individualProducts.map((product, index) => (
                product.comingSoon ? (
                  <div key={product.id} className="card-brutal-lg flex flex-col h-full relative">
                    <div className="aspect-square relative overflow-hidden border-b-[6px] border-foreground bg-muted/50 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-contain p-4 opacity-40" loading="lazy" />
                      <span className="relative z-10 font-black text-xl md:text-2xl uppercase bg-primary px-4 py-2 border-4 border-foreground rotate-[-3deg] shadow-brutal">COMING SOON</span>
                    </div>
                    <div className="p-4 md:p-6 bg-background">
                      <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight">{product.name}</h3>
                    </div>
                  </div>
                ) : (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    basePrice={product.basePrice}
                    image={product.image}
                    hasSize={product.hasSize}
                    hasCustomNumber={product.hasCustomNumber}
                    hasVersion={product.hasVersion}
                    hasMember={product.hasMember}
                    hasStickerType={product.hasStickerType}
                    index={index}
                  />
                )
              ))}
            </div>
          </div>

          {/* Bundling Section - Coming Soon */}
          <div>
            <div className="inline-block -rotate-1 mb-6 md:mb-8">
              <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight bg-primary px-4 py-2 md:px-6 md:py-3 border-[3px] md:border-[4px] border-foreground shadow-brutal">
                {t("bundle")}
              </h3>
            </div>
            <div className="card-brutal-lg p-8 md:p-16 text-center bg-muted/50">
              <div className="inline-block rotate-2 mb-4">
                <span className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-primary px-6 py-3 border-[4px] md:border-[6px] border-foreground shadow-brutal-lg">
                  COMING SOON
                </span>
              </div>
              <p className="text-lg md:text-xl font-bold text-muted-foreground uppercase tracking-widest mt-6">
                ★ STAY TUNED ★
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stripe */}
      <div className="divider-brutal" />
    </section>
  );
};

export default Merch;