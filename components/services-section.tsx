"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"
import { Globe, ShoppingCart, LayoutDashboard, Cpu } from "lucide-react"

const icons = [Globe, ShoppingCart, LayoutDashboard, Cpu]

export function ServicesSection() {
  const { t } = useI18n()

  const services = [1, 2, 3, 4].map((i) => ({
    title: t(`service.${i}.title`),
    desc: t(`service.${i}.desc`),
    Icon: icons[i - 1],
  }))

  return (
    <section id="services" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">
            {t("services.label")}
          </span>
          <div className="mt-3 w-12 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="mt-6 font-sans text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            {t("services.headline")}
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 100}>
              <div className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:bg-card/80 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <service.Icon size={20} className="text-primary" />
                  </div>

                  <h3 className="font-sans text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
