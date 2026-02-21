"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  const { t } = useI18n()

  const experiences = [
    {
      roleKey: "experience.equilybrio.role",
      companyKey: "experience.equilybrio.company",
      typeKey: "experience.equilybrio.type",
      periodKey: "experience.equilybrio.period",
      locationKey: "experience.equilybrio.location",
      descKey: "experience.equilybrio.desc",
      stackKey: "experience.equilybrio.stack",
      current: true,
    },
    {
      roleKey: "experience.freelance.role",
      companyKey: null,
      typeKey: null,
      periodKey: "experience.freelance.period",
      locationKey: "experience.freelance.location",
      descKey: "experience.freelance.desc",
      stackKey: "experience.freelance.stack",
      current: true,
    },
  ]

  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left label */}
          <AnimatedSection className="md:col-span-4">
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">
              {t("experience.label")}
            </span>
            <div className="mt-3 w-12 h-px bg-gradient-to-r from-primary to-accent" />
            <h2 className="mt-6 font-sans text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t("experience.headline")}
            </h2>
          </AnimatedSection>

          {/* Right - Timeline */}
          <div className="md:col-span-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

              <div className="flex flex-col gap-10">
                {experiences.map((exp, idx) => (
                  <AnimatedSection key={idx} delay={100 + idx * 150}>
                    <div className="relative flex gap-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 mt-1.5 flex-shrink-0">
                        <div className={`w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                          exp.current 
                            ? "border-primary bg-primary/20" 
                            : "border-border bg-card"
                        }`}>
                          {exp.current && (
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          )}
                        </div>
                      </div>

                      {/* Content card */}
                      <div className="flex-1 border border-border rounded-xl p-6 bg-card/50 hover:border-primary/20 transition-all duration-300">
                        <div className="flex flex-col gap-3">
                          {/* Header */}
                          <div>
                            <h3 className="text-foreground font-semibold text-lg">
                              {t(exp.roleKey)}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              {exp.companyKey && (
                                <span className="text-primary text-sm font-medium flex items-center gap-1.5">
                                  <Briefcase size={13} />
                                  {t(exp.companyKey)}
                                </span>
                              )}
                              {exp.typeKey && (
                                <>
                                  <span className="text-border">{"/"}</span>
                                  <span className="text-muted-foreground text-sm">
                                    {t(exp.typeKey)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              {t(exp.periodKey)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={12} />
                              {t(exp.locationKey)}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                            {t(exp.descKey)}
                          </p>

                          {/* Stack */}
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {t(exp.stackKey).split(" / ").map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-0.5 text-[11px] font-medium text-primary/80 border border-primary/20 rounded-full bg-primary/5"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
