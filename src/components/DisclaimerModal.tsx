import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Send } from "lucide-react";

interface DisclaimerModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DisclaimerModal = ({ isOpen, onConfirm, onClose }: DisclaimerModalProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/80 z-[60] flex items-center justify-center p-3 md:p-4">
      <div
        className="bg-background border-4 md:border-[10px] border-foreground p-6 md:p-14 max-w-lg w-full text-center animate-fade-in rotate-1"
        style={{ boxShadow: "8px 8px 0px 0px hsl(var(--secondary))" }}
      >
        {/* Warning Icon */}
        <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary border-4 md:border-[6px] border-foreground flex items-center justify-center mx-auto mb-6 md:mb-8 -rotate-12 shadow-brutal">
          <AlertTriangle size={32} strokeWidth={3} className="text-foreground md:w-12 md:h-12" />
        </div>

        {/* Title */}
        <div className="inline-block bg-foreground text-background px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 -rotate-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-wider">
            {t("disclaimer")}
          </h2>
        </div>

        {/* Message */}
        <p className="text-sm md:text-base font-bold mb-6 md:mb-10 bg-muted p-3 md:p-4 border-3 md:border-4 border-foreground rotate-1 leading-relaxed">
          {t("check your order details before proceeding to WhatsApp")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onClose}
            className="btn-brutal-accent text-sm md:text-base px-6 py-3 md:px-8 md:py-4 min-h-[48px]"
          >
            {t("cancel")} 
          </button>
          <button
            onClick={onConfirm}
            className="btn-brutal-primary text-sm md:text-base px-6 py-3 md:px-8 md:py-4 min-h-[48px] flex items-center justify-center gap-2"
          >
            <Send size={18} strokeWidth={3} />
            {t("continue To WA")} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
