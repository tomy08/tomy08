"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#services", label: t("nav.services") },
    { href: "#work", label: t("nav.work") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f14]/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-sans text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          {"TSC"}
          <span className="text-primary">{"."}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center bg-secondary rounded-full p-0.5">
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLocale("es")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                locale === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Cambiar a Espanol"
            >
              ES
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f14]/95 backdrop-blur-xl border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center bg-secondary rounded-full p-0.5">
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    locale === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLocale("es")}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    locale === "es"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
