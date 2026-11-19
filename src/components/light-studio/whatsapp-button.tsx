import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/light-studio-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Light Studio, I'd like to enquire about your lighting collections.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Light Studio on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all hover:scale-105"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[140px] sm:inline">
        Chat with us
      </span>
    </a>
  );
}
