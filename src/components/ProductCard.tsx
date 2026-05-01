import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Check } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  hasSize?: boolean;
  hasCustomNumber?: boolean;
  hasVersion?: boolean;
  hasMember?: boolean;
  hasStickerType?: boolean;
  description?: string;
  index: number;
  bgColor?: string;
}

const sizePrices: { [key: string]: number } = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
  XXL: 15000,
  XXXL: 30000,
};

const members = [
  "NYNA", "AZZA", "EBY", "ELMA", "JOANNA",
  "NADA", "NINDA", "OCI", "PATTY", "RISA"
];

const stickerImages: { [key: string]: string } = {
  NYNA: "/merch/stickers/NYNA.png",
  AZZA: "/merch/stickers/AZZA.png",
  EBY: "/merch/stickers/EBY.png",
  ELMA: "/merch/stickers/ELMA.png",
  JOANNA: "/merch/stickers/JOANNA.png",
  NADA: "/merch/stickers/NADA.png",
  NINDA: "/merch/stickers/NINDA.png",
  OCI: "/merch/stickers/OCI.png",
  PATTY: "/merch/stickers/PATTY.png",
  RISA: "/merch/stickers/RISA.png",
};

const keychainImages: { [key: string]: string } = {
  NYNA: "/merch/keychains/NYNA.png",
  AZZA: "/merch/keychains/AZZA.png",
  EBY: "/merch/keychains/EBY.png",
  ELMA: "/merch/keychains/ELMA.png",
  JOANNA: "/merch/keychains/JOANNA.png",
  NADA: "/merch/keychains/NADA.png",
  NINDA: "/merch/keychains/NINDA.png",
  OCI: "/merch/keychains/OCI.png",
  PATTY: "/merch/keychains/PATTY.png",
  RISA: "/merch/keychains/RISA.png",
};

const standeeSmallImages: { [key: string]: string } = {
  NYNA: "/merch/standees/NYNA-small.png",
  AZZA: "/merch/standees/AZZA-small.png",
  EBY: "/merch/standees/EBY-small.png",
  ELMA: "/merch/standees/ELMA-small.png",
  JOANNA: "/merch/standees/JOANNA-small.png",
  NADA: "/merch/standees/NADA-small.png",
  NINDA: "/merch/standees/NINDA-small.png",
  OCI: "/merch/standees/OCI-small.png",
  PATTY: "/merch/standees/PATTY-small.png",
  RISA: "/merch/standees/RISA-small.png",
};

const standeeBigImages: { [key: string]: string } = {
  NYNA: "/merch/standees/NYNA-big.png",
  AZZA: "/merch/standees/AZZA-big.png",
  EBY: "/merch/standees/EBY-big.jpg",
  ELMA: "/merch/standees/ELMA-big.png",
  JOANNA: "/merch/standees/JOANNA-big.png",
  NADA: "/merch/standees/NADA-big.png",
  NINDA: "/merch/standees/NINDA-big.png",
  OCI: "/merch/standees/OCI-big.png",
  PATTY: "/merch/standees/PATTY-big.png",
  RISA: "/merch/standees/RISA-big.png",
};

const ProductCard = ({
  id,
  name,
  basePrice,
  image,
  hasSize,
  hasCustomNumber,
  hasVersion,
  hasMember,
  hasStickerType,
  description,
  index,
  bgColor,
}: ProductCardProps) => {
  const { t } = useLanguage();
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [customNumber, setCustomNumber] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("jersey");
  const [selectedMember, setSelectedMember] = useState("NYNA");
  const [selectedStickerType, setSelectedStickerType] = useState("member");
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const [keychainMemberChanged, setKeychainMemberChanged] = useState(false);

  const totalPrice = useMemo(() => {
    let price = basePrice;
    if (hasSize && sizePrices[selectedSize]) {
      price += sizePrices[selectedSize];
    }
    return price;
  }, [basePrice, selectedSize, hasSize]);

  const getItemDetails = () => {
    const details: string[] = [];
    if (hasSize) details.push(selectedSize);
    if (hasMember) details.push(selectedMember);
    if (hasVersion) details.push(selectedVersion);
    if (hasStickerType) details.push(selectedStickerType === "member" ? selectedMember : "Logo");
    if (customNumber) details.push(`#${customNumber}`);
    return details.join("-");
  };

  // 🔥 PERBAIKAN UTAMA: handleAddToCart yang benar
  const handleAddToCart = () => {
    const itemDetails = getItemDetails();
    
    // 🔥 Tentukan member untuk SEMUA produk yang punya pilihan member
    let finalMember = undefined;
    
    // Produk dengan hasMember=true (Jersey, Keychain, Standee, Photocard, Calendar)
    if (hasMember) {
      finalMember = selectedMember;
    }
    
    // Sticker Member (hasStickerType=true dan memilih "member")
    if (hasStickerType && selectedStickerType === "member") {
      finalMember = selectedMember;
    }
    
    // Tentukan standeeType
    let standeeType = undefined;
    if (id === "standee-small") standeeType = "Small";
    if (id === "standee-big") standeeType = "Big";
    if (id === "standee-twin") standeeType = "Twin";
    
    // 🔥 DEBUG: Lihat di console browser (F12) untuk memastikan member terkirim
    console.log(`🛒 Adding: ${name}`, {
      id,
      hasMember,
      selectedMember,
      finalMember,
      standeeType,
      hasVersion,
      selectedVersion
    });
    
    addItem({
      id: `${id}-${itemDetails}-${Date.now()}`,
      name,
      price: totalPrice,
      quantity,
      size: hasSize ? selectedSize : undefined,
      customNumber: hasCustomNumber ? customNumber : undefined,
      version: hasVersion ? selectedVersion : undefined,
      member: finalMember,  // 🔥 INI YANG PALING PENTING
      stickerType: hasStickerType ? selectedStickerType : undefined,
      standeeType: standeeType,
      image,
    });

    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setCustomNumber(value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const rotation = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : 'rotate-0';

  return (
    <div className={`card-brutal-lg flex flex-col h-full hover:-translate-y-2 hover:rotate-0 transition-all ${rotation} relative`}>
      {showAdded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/90 animate-fade-in">
          <div className="bg-primary border-[6px] border-foreground p-6 rotate-3 shadow-brutal-lg animate-scale-in">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background border-4 border-foreground flex items-center justify-center">
                <Check size={28} strokeWidth={4} className="text-foreground" />
              </div>
              <span className="font-black text-2xl uppercase">{t("added")}</span>
            </div>
          </div>
        </div>
      )}

      <div 
        className="aspect-square relative overflow-hidden border-b-[6px] border-foreground"
        style={{ backgroundColor: bgColor || 'hsl(var(--muted))' }}
      >
        {hasStickerType ? (
          <img 
            key={`${selectedStickerType}-${selectedMember}`}
            src={
              selectedStickerType === "logo"
                ? "/merch/himawari-logo-sticker.jpg"
                : stickerImages[selectedMember] || "/merch/sticker-member.jpg"
            }
            alt={`${name} - ${selectedStickerType === "logo" ? "Logo" : selectedMember}`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/sticker-member.jpg";
            }}
          />
        ) : id === "keychain" ? (
          <img 
            key={`keychain-${selectedMember}`}
            src={keychainImages[selectedMember] || "/merch/keychain.gif"}
            alt={`${name} - ${selectedMember}`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/keychain.gif";
            }}
          />
        ) : id === "standee-small" ? (
          <img 
            key={`standee-small-${selectedMember}`}
            src={standeeSmallImages[selectedMember] || "/merch/mini-standee.gif"}
            alt={`${name} - ${selectedMember}`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/mini-standee.gif";
            }}
          />
        ) : id === "standee-big" ? (
          <img 
            key={`standee-big-${selectedMember}`}
            src={standeeBigImages[selectedMember] || "/merch/idol-standee.gif"}
            alt={`${name} - ${selectedMember}`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/idol-standee.gif";
            }}
          />
        ) : id === "photocard" ? (
          <img 
            key={`photocard-${selectedVersion}-${selectedMember}`}
            src={`/merch/photocards/${selectedVersion}/${selectedMember}.jpg`}
            alt={`${name} - ${selectedMember} (${selectedVersion})`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/photocard-jersey.jpg";
            }}
          />
        ) : id === "poster" ? (
          <img 
            key={`poster-${selectedVersion}`}
            src={`/merch/poster-${selectedVersion}.webp`}
            alt={`${name} (${selectedVersion})`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/merch/poster-jersey.webp";
            }}
          />
        ) : (
          <img 
            src={image || "/placeholder.svg"}
            alt={name}
            className="absolute inset-0 w-full h-full object-contain p-4"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        )}

        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-foreground text-background px-2 py-1 md:px-4 md:py-2 font-black text-sm md:text-lg rotate-[-3deg] border-3 md:border-4 border-foreground shadow-brutal">
          {formatPrice(basePrice)}
        </div>

        {hasVersion && (
          <div className="absolute top-4 right-4 badge-brutal">
            {selectedVersion === "jersey" ? "JERSEY" : selectedVersion === "uniform" ? "SEIFUKU" : "DRESS"}
          </div>
        )}

        <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary border-t-[4px] border-l-[4px] border-foreground" />
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-grow bg-background">
        <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight mb-2">
          {name}
        </h3>
        
        {description && (
          <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wide">{description}</p>
        )}

        {hasSize && (
          <div className="mb-4">
            <label className="block font-black text-sm uppercase mb-2 tracking-wider">
              {t("size")}:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="select-brutal"
            >
              {Object.entries(sizePrices).map(([size, extraPrice]) => (
                <option key={size} value={size}>
                  {size} {extraPrice > 0 && `(+${formatPrice(extraPrice)})`}
                </option>
              ))}
            </select>
          </div>
        )}

        {hasCustomNumber && (
          <div className="mb-4">
            <label className="block font-black text-sm uppercase mb-2 tracking-wider">
              {t("customNumber")} (00-99):
            </label>
            <input
              type="text"
              value={customNumber}
              onChange={handleNumberChange}
              placeholder="00"
              maxLength={2}
              className="input-brutal text-center text-3xl font-black tracking-[0.3em]"
            />
          </div>
        )}

        {hasVersion && (
          <div className="mb-4">
            <label className="block font-black text-sm uppercase mb-2 tracking-wider">
              {t("version")}:
            </label>
            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="select-brutal"
            >
              <option value="jersey">{t("jerseyVersion")}</option>
              <option value="uniform">{t("uniformVersion")}</option>
              {id === "photocard" && (
                <option value="dress">{t("dressVersion")}</option>
              )}
            </select>
          </div>
        )}

        {hasMember && (
          <div className="mb-4">
            <label className="block font-black text-sm uppercase mb-2 tracking-wider">
              {t("member")}:
            </label>
            <select
              value={selectedMember}
              onChange={(e) => { setSelectedMember(e.target.value); if (id === "keychain") setKeychainMemberChanged(true); }}
              className="select-brutal"
            >
              {members.map((member, idx) => (
                <option key={member} value={member}>
                  {idx + 1}. {member}
                </option>
              ))}
            </select>
          </div>
        )}

        {hasStickerType && (
          <div className="mb-4">
            <label className="block font-black text-sm uppercase mb-2 tracking-wider">
              {t("member")}:
            </label>
            <select
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              className="select-brutal"
            >
              {members.map((member, idx) => (
                <option key={member} value={member}>
                  {idx + 1}. {member}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block font-black text-sm uppercase mb-2 tracking-wider">
            {t("quantity")}:
          </label>
          <div className="flex items-center gap-0 w-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-background text-foreground font-black text-xl md:text-2xl border-[4px] border-foreground hover:bg-muted transition-colors min-h-[44px]"
            >
              -
            </button>
            <span className="flex-1 h-12 md:h-14 flex items-center justify-center font-black text-xl md:text-2xl border-y-[4px] border-foreground bg-background">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-background text-foreground font-black text-xl md:text-2xl border-[4px] border-foreground hover:bg-muted transition-colors min-h-[44px]"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t-[4px] border-foreground">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="font-black uppercase text-sm tracking-wider">{t("total")}:</span>
            <span className="font-black text-xl md:text-3xl bg-primary px-3 py-1 border-4 border-foreground -rotate-1 break-all">
              {formatPrice(totalPrice * quantity)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-brutal-primary w-full rotate-0 hover:rotate-1"
          >
            {t("addToCart")} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;