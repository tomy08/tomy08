'use client'

import { I18nProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { WhySection } from '@/components/why-section'
import { ContactSection } from '@/components/contact-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <I18nProvider>
      <div className="grain-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          {/* <ProjectsSection /> */}
          <WhySection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  )
}
