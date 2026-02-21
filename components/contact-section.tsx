"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const { t } = useI18n()

  const whatsappUrl = `https://wa.me/541159792983?text=${encodeURIComponent(t("contact.whatsapp.message"))}`

  const links = [
    {
      label: "Email",
      href: "mailto:tomasesantacruz@gmail.com",
      icon: Mail,
      display: "tomasesantacruz@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/tomy08",
      icon: Github,
      display: "github.com/tomy08",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tom%C3%A1s-santa-cruz-a69a91275/",
      icon: Linkedin,
      display: "linkedin.com/in/tomas-santa-cruz",
    },
    {
      label: "WhatsApp",
      href: whatsappUrl,
      icon: MessageCircle,
      display: "+54 11 5979 2983",
    },
  ]

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left */}
          <div className="md:col-span-6">
            <AnimatedSection>
              <span className="text-xs text-primary font-semibold tracking-widest uppercase">
                {t("contact.label")}
              </span>
              <div className="mt-3 w-12 h-px bg-gradient-to-r from-primary to-accent" />
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="mt-8 font-sans text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                {t("contact.headline")}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-md">
                {t("contact.subtext")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm mt-8 hover:bg-primary/90 transition-all glow-blue-hover"
              >
                <MessageCircle size={16} />
                {t("hero.cta.project")}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right - Contact Links */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="flex flex-col gap-4 md:pt-14">
              {links.map((link, idx) => (
                <AnimatedSection key={link.label} delay={150 + idx * 80}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-border rounded-xl px-6 py-5 hover:border-primary/30 hover:bg-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <link.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          {link.label}
                        </span>
                        <p className="text-foreground text-sm font-medium mt-0.5">
                          {link.display}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
