import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { CheckCircle } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { t } = useLanguage();
  const { clearCart } = useCart();

  if (!isOpen) return null;

  const handleClose = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-foreground/80 z-[60] flex items-center justify-center p-3 md:p-4">
      <div 
        className="bg-background border-4 md:border-[10px] border-foreground p-6 md:p-14 max-w-lg w-full text-center animate-fade-in -rotate-1"
        style={{ boxShadow: "8px 8px 0px 0px hsl(var(--primary))" }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 bg-primary border-4 md:border-[6px] border-foreground flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-12 shadow-brutal">
          <CheckCircle size={32} strokeWidth={3} className="text-primary-foreground md:w-12 md:h-12" />
        </div>

        <div className="inline-block bg-foreground text-background px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 rotate-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-wider">
            {t("orderSuccess")}
          </h2>
        </div>

        <p className="text-sm md:text-lg font-bold mb-6 md:mb-10 bg-muted p-3 md:p-4 border-3 md:border-4 border-foreground -rotate-1">
          {t("orderMessage")}
        </p>

        <button 
          onClick={handleClose}
          className="btn-brutal-primary text-base md:text-xl px-8 py-4 md:px-12 md:py-5 min-h-[48px]"
        >
          {t("close")}
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;