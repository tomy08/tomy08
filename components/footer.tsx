"use client"

import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-sans text-foreground font-bold text-sm">
            {"TSC"}
            <span className="text-primary">{"."}</span>
          </span>
          <span className="text-muted-foreground text-xs">
            {"2026 Tomas Santa Cruz. "}{t("footer.rights")}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tomy08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-santa-cruz-a69a91275/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://wa.me/541159792983`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
