"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left label */}
          <AnimatedSection className="md:col-span-4">
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">
              {t("about.label")}
            </span>
            <div className="mt-3 w-12 h-px bg-gradient-to-r from-primary to-accent" />
          </AnimatedSection>

          {/* Right content */}
          <div className="md:col-span-8">
            <AnimatedSection delay={100}>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                {t("about.headline")}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                {t("about.text1")}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                {t("about.text2")}
              </p>
            </AnimatedSection>

            {/* Tech tags */}
            <AnimatedSection delay={400}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Next.js", "Python", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Flask"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary/80 border border-primary/20 rounded-full bg-primary/5"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
