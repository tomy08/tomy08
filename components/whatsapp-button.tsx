"use client"

import { useI18n } from "@/lib/i18n"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const { t } = useI18n()

  const whatsappUrl = `https://wa.me/541159792983?text=${encodeURIComponent(t("contact.whatsapp.message"))}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:border-primary/50 hover:shadow-[0_0_25px_-3px_rgba(59,130,246,0.4)] transition-all duration-300 group"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  )
}
