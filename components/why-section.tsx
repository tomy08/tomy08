"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"
import { Code2, TrendingUp, Zap, MessageSquare } from "lucide-react"

const icons = [Code2, TrendingUp, Zap, MessageSquare]

export function WhySection() {
  const { t } = useI18n()

  const reasons = [1, 2, 3, 4].map((i) => ({
    title: t(`why.${i}.title`),
    desc: t(`why.${i}.desc`),
    Icon: icons[i - 1],
    num: `0${i}`,
  }))

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">
              {t("why.label")}
            </span>
            <div className="mt-3 mx-auto w-12 h-px bg-gradient-to-r from-primary to-accent" />
          </div>
        </AnimatedSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <AnimatedSection key={reason.num} delay={idx * 100}>
              <div className="relative text-center md:text-left">
                <span className="text-5xl font-bold text-primary/10 font-mono absolute -top-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 select-none">
                  {reason.num}
                </span>
                <div className="pt-10">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <reason.Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.desc}
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
