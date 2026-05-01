import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from "lucide-react";
import CheckoutModal from "./CheckoutModal";
import DisclaimerModal from "./DisclaimerModal";

const Cart = () => {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Shipping form state
  const [customerName, setCustomerName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckoutClick = () => {
    if (!customerName || !whatsappNumber || !shippingAddress) {
      return;
    }
    setShowDisclaimer(true);
  };

  // 🔥 FUNGSI BARU: Format detail pesanan LENGKAP dengan MEMBER
  const formatOrderDetails = () => {
    return items
      .map((item) => {
        let detail = `${item.name}`;
        
        // 🔥 TAMPILKAN MEMBER (PENTING!)
        if (item.member) {
          detail += ` - Member: ${item.member}`;
        }
        
        // Tampilkan versi
        if (item.version) {
          detail += ` (Versi: ${item.version})`;
        }
        
        // Tampilkan size
        if (item.size) {
          detail += ` - Size: ${item.size}`;
        }
        
        // Tampilkan nomor punggung
        if (item.customNumber) {
          detail += ` - No: ${item.customNumber}`;
        }
        
        // Tampilkan tipe standee
        if (item.standeeType) {
          detail += ` (${item.standeeType})`;
        }
        
        // Tampilkan tipe stiker logo
        if (item.stickerType && item.stickerType === "logo") {
          detail += ` - Logo`;
        }
        
        detail += ` x${item.quantity}`;
        return detail;
      })
      .join("\n");
  };

  // 🔥 FUNGSI BARU: Format pesan WhatsApp yang LENGKAP
  const formatWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => {
        let line = `• ${item.name}`;
        
        // 🔥 TAMPILKAN MEMBER
        if (item.member) {
          line += ` - Member: ${item.member}`;
        }
        
        if (item.version) {
          line += ` (Versi: ${item.version})`;
        }
        if (item.size) {
          line += ` | Size: ${item.size}`;
        }
        if (item.customNumber) {
          line += ` | No: ${item.customNumber}`;
        }
        if (item.standeeType) {
          line += ` (${item.standeeType})`;
        }
        if (item.stickerType && item.stickerType === "logo") {
          line += ` - Logo`;
        }
        
        line += ` x${item.quantity} - ${formatPrice(item.price * item.quantity)}`;
        return line;
      })
      .join("\n");

    return encodeURIComponent(
      `*HIMAWARI ORDER BARU dari Situs!*\n\n` +
      `*Data Pelanggan:*\n` +
      `Nama: ${customerName}\n` +
      `WhatsApp: ${whatsappNumber}\n` +
      `Alamat: ${shippingAddress}\n\n` +
      `*Detail Pesanan:*\n${itemsList}\n\n` +
      `*TOTAL: ${formatPrice(totalPrice)}*\n\n` +
      `Terima kasih Admin! Segera konfirmasi ya. 🌻`
    );
  };

  const handleConfirmCheckout = async () => {
    setShowDisclaimer(false);

    // 🔥 Data untuk Google Sheet (LENGKAP dengan member)
    const orderData = {
      name: customerName,
      whatsapp: whatsappNumber,
      address: shippingAddress,
      orderDetails: formatOrderDetails(),  // 🔥 PAKAI FUNGSI BARU
      total: formatPrice(totalPrice),
      timestamp: new Date().toLocaleString("id-ID"),
    };

    try {
      // Kirim data ke Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbwk12EePAtic-nXu8w56bkpa8_0a0s7dEikiC5A1ogpEBG2TLa_cgmezvLizrZNK38lpA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );
    } catch (error) {
      console.error("Error kirim data ke spreadsheet:", error);
    }

    // 🔥 Kirim WhatsApp dengan pesan yang LENGKAP
    const whatsappMessage = formatWhatsAppMessage();
    window.open(`https://wa.me/6281232553891?text=${whatsappMessage}`, "_blank");

    // Tampilkan modal sukses
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    setIsOpen(false);
    setCustomerName("");
    setWhatsappNumber("");
    setShippingAddress("");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/80 z-40 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-2 md:inset-8 lg:inset-12 z-50 animate-slide-in-right flex flex-col md:flex-row border-4 md:border-[6px] border-foreground shadow-brutal-xl overflow-hidden">
        
        {/* Left Column - Cart Items */}
        <div className="flex-1 bg-background flex flex-col min-h-0 max-h-[50vh] md:max-h-none">
          <div className="flex items-center justify-between p-3 md:p-6 border-b-4 md:border-b-[6px] border-foreground bg-primary">
            <div className="flex items-center gap-2 md:gap-3">
              <ShoppingBag size={24} strokeWidth={3} className="md:w-7 md:h-7" />
              <h2 className="text-lg md:text-2xl font-black uppercase tracking-wider">{t("cart")} ★</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] bg-background border-3 md:border-4 border-foreground flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close cart"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 md:p-6">
            {items.length === 0 ? (
              <div className="text-center py-8 md:py-16">
                <div className="w-16 h-16 md:w-24 md:h-24 border-4 md:border-[6px] border-foreground mx-auto mb-4 md:mb-6 flex items-center justify-center bg-muted shadow-brutal rotate-3">
                  <span className="text-2xl md:text-4xl">🛒</span>
                </div>
                <p className="font-black text-base md:text-xl uppercase">{t("emptyCartFull")}</p>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-4">
                {items.map((item, index) => (
                  <div key={index} className={`bg-background border-3 md:border-4 border-foreground p-3 md:p-4 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform shadow-brutal`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-sm md:text-lg uppercase tracking-tight pr-2">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-10 h-10 min-w-[44px] min-h-[44px] bg-destructive text-destructive-foreground border-3 md:border-4 border-foreground flex items-center justify-center hover:rotate-12 transition-transform flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} strokeWidth={3} />
                      </button>
                    </div>

                    {/* 🔥 TAMPILKAN DETAIL LENGKAP DI CART (termasuk member) */}
                    <div className="text-xs font-bold space-y-0.5 mb-2 md:mb-3 bg-muted p-2 border-2 border-foreground">
                      {item.member && <p>MEMBER: {item.member}</p>}
                      {item.size && <p>SIZE: {item.size}</p>}
                      {item.customNumber && <p>NO: {item.customNumber}</p>}
                      {item.version && <p>VER: {item.version.toUpperCase()}</p>}
                      {item.standeeType && <p>TYPE: {item.standeeType}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 min-w-[44px] min-h-[44px] border-3 md:border-4 border-foreground flex items-center justify-center font-black bg-background hover:bg-muted"
                        >
                          <Minus size={16} strokeWidth={3} />
                        </button>
                        <span className="w-10 h-10 border-y-3 md:border-y-4 border-foreground flex items-center justify-center font-black text-base bg-background">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 min-w-[44px] min-h-[44px] border-3 md:border-4 border-foreground flex items-center justify-center font-black bg-background hover:bg-muted"
                        >
                          <Plus size={16} strokeWidth={3} />
                        </button>
                      </div>
                      <span className="font-black text-xs md:text-base bg-primary px-2 py-1 border-3 md:border-4 border-foreground -rotate-2">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-3 md:p-6 border-t-4 md:border-t-[6px] border-foreground bg-muted">
              <div className="flex justify-between items-center">
                <span className="font-black uppercase text-sm md:text-lg tracking-wider">{t("subtotal")}:</span>
                <span className="font-black text-xl md:text-3xl bg-secondary px-3 py-1 md:px-4 md:py-2 border-3 md:border-4 border-foreground -rotate-2">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Shipping Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] xl:w-[450px] bg-[#FF6B00]/90 md:bg-[#FF6B00] flex flex-col border-t-4 md:border-t-0 md:border-l-[6px] border-foreground max-h-[50vh] md:max-h-none">
          <div className="p-3 md:p-6 border-b-4 md:border-b-[6px] border-foreground">
            <h2 className="text-lg md:text-2xl font-black uppercase tracking-wider text-foreground">
              {t("shippingData")} ✦
            </h2>
          </div>

          <div className="flex-1 p-3 md:p-6 overflow-y-auto">
            <div className="space-y-3 md:space-y-5">
              <div>
                <label className="block font-black text-xs md:text-sm uppercase mb-1.5 md:mb-2 tracking-wider text-foreground">
                  {t("name")}:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t("namePlaceholder")}
                  className="w-full h-11 md:h-14 min-h-[44px] px-3 md:px-4 bg-background border-2 md:border-[3px] border-foreground font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:translate-x-1 focus:translate-y-1 transition-transform text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block font-black text-xs md:text-sm uppercase mb-1.5 md:mb-2 tracking-wider text-foreground">
                  {t("whatsappNumber")}:
                </label>
                <input
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="08xxxxxxxxxx"
                  className="w-full h-11 md:h-14 min-h-[44px] px-3 md:px-4 bg-background border-2 md:border-[3px] border-foreground font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:translate-x-1 focus:translate-y-1 transition-transform text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block font-black text-xs md:text-sm uppercase mb-1.5 md:mb-2 tracking-wider text-foreground">
                  {t("address")}:
                </label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder={t("address")}
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-background border-2 md:border-[3px] border-foreground font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:translate-x-1 focus:translate-y-1 transition-transform resize-none text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          <div className="p-3 md:p-6 border-t-4 md:border-t-[6px] border-foreground">
            <button
              onClick={handleCheckoutClick}
              disabled={items.length === 0 || !customerName || !whatsappNumber || !shippingAddress}
              className="w-full h-12 md:h-16 min-h-[48px] bg-foreground text-background font-black text-base md:text-xl uppercase tracking-wider border-3 md:border-4 border-foreground flex items-center justify-center gap-2 md:gap-3 hover:translate-x-1 hover:translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              <Send size={20} strokeWidth={3} className="md:w-6 md:h-6" />
              {t("checkout")}
            </button>
          </div>
        </div>
      </div>

      <DisclaimerModal
        isOpen={showDisclaimer}
        onConfirm={handleConfirmCheckout}
        onClose={() => setShowDisclaimer(false)}
      />
      <CheckoutModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default Cart;