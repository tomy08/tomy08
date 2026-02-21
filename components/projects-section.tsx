"use client"

import { useI18n } from "@/lib/i18n"
import { AnimatedSection } from "@/components/animated-section"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const { t } = useI18n()

  const projects = [
    {
      title: t("project.1.title"),
      desc: t("project.1.desc"),
      tech: t("project.1.tech"),
      align: "left" as const,
    },
    {
      title: t("project.2.title"),
      desc: t("project.2.desc"),
      tech: t("project.2.tech"),
      align: "right" as const,
    },
  ]

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">
            {t("projects.label")}
          </span>
          <div className="mt-3 w-12 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="mt-6 font-sans text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            {t("projects.headline")}
          </h2>
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 150}>
              <div
                className={`group grid md:grid-cols-12 gap-8 items-center ${
                  project.align === "right" ? "md:direction-rtl" : ""
                }`}
              >
                {/* Mockup area */}
                <div
                  className={`md:col-span-7 ${
                    project.align === "right" ? "md:col-start-6 md:order-2" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="relative aspect-video rounded-xl border border-border bg-secondary/50 overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Browser chrome mockup */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-xs text-muted-foreground font-mono">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.com
                      </span>
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <ExternalLink size={24} className="text-primary/50" />
                      </div>
                      <span className="text-muted-foreground/50 text-sm font-medium">{project.title}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`md:col-span-5 ${
                    project.align === "right" ? "md:col-start-1 md:order-1 md:row-start-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <span className="text-xs text-muted-foreground font-mono">
                    {"0"}
                    {idx + 1}
                  </span>
                  <h3 className="mt-2 font-sans text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                    {project.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.split(" / ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary/80 border border-primary/20 rounded-full bg-primary/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
