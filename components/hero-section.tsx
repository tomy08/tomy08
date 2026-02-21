"use client"

import { useI18n } from "@/lib/i18n"
import { ArrowRight, Eye, MessageCircle, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
              Full Stack Developer
            </span>
          </div>

          {/* Name */}
          <p className="animate-fade-in-up animation-delay-100 text-sm md:text-base text-muted-foreground font-mono tracking-wide mb-4">
            {"Tomas Santa Cruz"}
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-200 font-sans text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground text-balance">
            {t("hero.headline")}
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up animation-delay-300 mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line">
            {t("hero.subtext")}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all glow-blue-hover"
            >
              {t("hero.cta.project")}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-all"
            >
              <Eye size={16} />
              {t("hero.cta.work")}
            </a>
            <a
              href={`https://wa.me/541159792983?text=${encodeURIComponent(t("contact.whatsapp.message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-all"
            >
              <MessageCircle size={16} />
              {t("hero.cta.contact")}
            </a>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up animation-delay-500 mt-10 flex items-center gap-4">
            <a
              href="https://github.com/tomy08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tom%C3%A1s-santa-cruz-a69a91275/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:tomasesantacruz@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs font-mono"
            >
              tomasesantacruz@gmail.com
            </a>
          </div>
        </div>

        {/* Decorative grid line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
