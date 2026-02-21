'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

type Locale = 'en' | 'es'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Locale, string>> = {
  // Navbar
  'nav.about': { en: 'About', es: 'Sobre mí' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.work': { en: 'Work', es: 'Proyectos' },
  'nav.experience': { en: 'Experience', es: 'Experiencia' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.headline': {
    en: 'Building digital systems that help businesses grow.',
    es: 'Desarrollo sistemas digitales que ayudan a negocios a crecer.',
  },
  'hero.subtext': {
    en: 'Full Stack Developer specialized in React, Next.js and Python.\nI create scalable web apps, e-commerce platforms and internal systems.',
    es: 'Desarrollador Full Stack especializado en React, Next.js y Python.\nCreo aplicaciones web escalables, e-commerce y sistemas internos.',
  },
  'hero.cta.project': { en: 'Start a Project', es: 'Iniciar Proyecto' },
  'hero.cta.work': { en: 'View Work', es: 'Ver Proyectos' },
  'hero.cta.contact': { en: 'Contact Me', es: 'Contactarme' },

  // About
  'about.label': { en: 'About', es: 'Sobre mí' },
  'about.headline': {
    en: 'I solve real business problems with clean, scalable code.',
    es: 'Resuelvo problemas reales de negocio con código limpio y escalable.',
  },
  'about.text1': {
    en: "I'm a freelance Full Stack Developer focused on building digital products that generate measurable business results. I don't just write code\u2014I understand your goals and translate them into systems that work.",
    es: 'Soy un Desarrollador Full Stack freelance enfocado en construir productos digitales que generan resultados medibles. No solo escribo código\u2014entiendo tus objetivos y los traduzco en sistemas que funcionan.',
  },
  'about.text2': {
    en: 'From e-commerce platforms to internal dashboards and AI integrations, I bring ideas to production with speed and precision.',
    es: 'Desde plataformas e-commerce hasta dashboards internos e integraciones con IA, llevo ideas a producción con velocidad y precisión.',
  },

  // Experience
  'experience.label': { en: 'Experience', es: 'Experiencia' },
  'experience.headline': {
    en: "Where I've built real things",
    es: 'Donde construí cosas reales',
  },
  'experience.equilybrio.role': {
    en: 'Full Stack Developer',
    es: 'Full Stack Developer',
  },
  'experience.equilybrio.company': {
    en: 'Equilybrio Group',
    es: 'Equilybrio Group',
  },
  'experience.equilybrio.type': { en: 'Part-time', es: 'Jornada parcial' },
  'experience.equilybrio.period': {
    en: 'Sept 2025 - Present',
    es: 'Sept 2025 - Actualidad',
  },
  'experience.equilybrio.location': {
    en: 'Buenos Aires, Argentina',
    es: 'Buenos Aires, Argentina',
  },
  'experience.equilybrio.desc': {
    en: 'Full-stack development of enterprise web applications. Designing REST APIs with Python/Flask, building modern interfaces with React and TypeScript, managing PostgreSQL databases, implementing auth systems, admin dashboards, and third-party integrations.',
    es: 'Desarrollo full-stack de aplicaciones web empresariales. Diseño e implementación de APIs RESTful con Python/Flask, desarrollo de interfaces modernas con React y TypeScript, gestión de bases de datos PostgreSQL, implementación de sistemas de autenticación, dashboards administrativos e integración de servicios de terceros.',
  },
  'experience.equilybrio.stack': {
    en: 'Python / React / TypeScript / PostgreSQL / Flask / TailwindCSS',
    es: 'Python / React / TypeScript / PostgreSQL / Flask / TailwindCSS',
  },
  'experience.freelance.role': {
    en: 'Freelance Full Stack Developer',
    es: 'Freelance Full Stack Developer',
  },
  'experience.freelance.period': {
    en: 'Jan 2025 - Present',
    es: 'Ene 2025 - Actualidad',
  },
  'experience.freelance.location': { en: 'Remote', es: 'Remoto' },
  'experience.freelance.desc': {
    en: 'Building custom web solutions for businesses. From e-commerce platforms to internal management systems, delivering end-to-end projects with React, Next.js, Python, and modern tooling.',
    es: 'Construyendo soluciones web a medida para negocios. Desde plataformas e-commerce hasta sistemas de gestión internos, entregando proyectos de punta a punta con React, Next.js, Python y herramientas modernas.',
  },
  'experience.freelance.stack': {
    en: 'Next.js / React / Python / Node.js / PostgreSQL / TailwindCSS',
    es: 'Next.js / React / Python / Node.js / PostgreSQL / TailwindCSS',
  },

  // Services
  'services.label': { en: 'Services', es: 'Servicios' },
  'services.headline': {
    en: 'What I can build for you',
    es: 'Lo que puedo construir para ti',
  },
  'service.1.title': {
    en: 'Business Websites',
    es: 'Sitios Web para Negocios',
  },
  'service.1.desc': {
    en: 'High-performance websites that convert visitors into customers. Built for speed, SEO, and a premium user experience.',
    es: 'Sitios web de alto rendimiento que convierten visitantes en clientes. Construidos para velocidad, SEO y una experiencia premium.',
  },
  'service.2.title': {
    en: 'E-commerce Solutions',
    es: 'Soluciones E-commerce',
  },
  'service.2.desc': {
    en: 'Custom online stores with seamless checkout, inventory management, and integrations that drive sales growth.',
    es: 'Tiendas online personalizadas con checkout fluido, gestión de inventario e integraciones que impulsan el crecimiento de ventas.',
  },
  'service.3.title': {
    en: 'Custom Web Systems',
    es: 'Sistemas Web Personalizados',
  },
  'service.3.desc': {
    en: 'Tailored dashboards, internal tools, and management platforms built to streamline your specific workflows.',
    es: 'Dashboards personalizados, herramientas internas y plataformas de gestión construidas para optimizar tus flujos de trabajo.',
  },
  'service.4.title': { en: 'Automation & AI', es: 'Automatización e IA' },
  'service.4.desc': {
    en: 'Smart integrations that automate repetitive tasks and leverage AI to give your business a competitive edge.',
    es: 'Integraciones inteligentes que automatizan tareas repetitivas y aprovechan la IA para dar a tu negocio una ventaja competitiva.',
  },

  // Projects
  'projects.label': { en: 'Selected Work', es: 'Proyectos Seleccionados' },
  'projects.headline': {
    en: 'Projects that deliver results',
    es: 'Proyectos que entregan resultados',
  },
  'project.1.title': { en: 'Dietética La Vasija', es: 'Dietética La Vasija' },
  'project.1.desc': {
    en: 'Modern product catalog website with WhatsApp integration for a health food store. Clean UI, fast loading, and mobile-first design.',
    es: 'Sitio web moderno con catálogo de productos e integración con WhatsApp para una dietética. UI limpia, carga rápida y diseño mobile-first.',
  },
  'project.1.tech': {
    en: 'Next.js / React / Tailwind CSS / WhatsApp API',
    es: 'Next.js / React / Tailwind CSS / WhatsApp API',
  },
  'project.2.title': {
    en: 'Enterprise Web System',
    es: 'Sistema Web Empresarial',
  },
  'project.2.desc': {
    en: 'Full-stack business dashboard for managing operations, analytics, and team workflows. Built for scale with real-time data.',
    es: 'Dashboard empresarial full-stack para gestionar operaciones, analíticas y flujos de equipo. Construido para escalar con datos en tiempo real.',
  },
  'project.2.tech': {
    en: 'Flask / React / PostgreSQL / REST API',
    es: 'Flask / React / PostgreSQL / REST API',
  },

  // Why Work With Me
  'why.label': { en: 'Why Work With Me', es: 'Por qué trabajar conmigo' },
  'why.1.title': {
    en: 'Clean, Scalable Code',
    es: 'Código Limpio y Escalable',
  },
  'why.1.desc': {
    en: 'Built to grow with your business. No shortcuts, no technical debt.',
    es: 'Construido para crecer con tu negocio. Sin atajos, sin deuda técnica.',
  },
  'why.2.title': {
    en: 'Business-Oriented Mindset',
    es: 'Mentalidad de Negocio',
  },
  'why.2.desc': {
    en: 'I think about ROI, user experience, and conversions\u2014not just features.',
    es: 'Pienso en ROI, experiencia de usuario y conversiones\u2014no solo en funcionalidades.',
  },
  'why.3.title': { en: 'Fast Execution', es: 'Ejecución Rápida' },
  'why.3.desc': {
    en: 'From concept to production in weeks, not months. Agile and focused.',
    es: 'Del concepto a producción en semanas, no meses. Ágil y enfocado.',
  },
  'why.4.title': { en: 'Direct Communication', es: 'Comunicación Directa' },
  'why.4.desc': {
    en: 'No middlemen. You talk directly to the person building your product.',
    es: 'Sin intermediarios. Hablas directamente con quien construye tu producto.',
  },

  // Contact
  'contact.label': { en: 'Contact', es: 'Contacto' },
  'contact.headline': {
    en: "Let's build something impactful.",
    es: 'Construyamos algo con impacto.',
  },
  'contact.subtext': {
    en: "Have a project in mind? Let's talk about how I can help your business grow.",
    es: '¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudar a tu negocio a crecer.',
  },
  'contact.email': { en: 'Email', es: 'Email' },
  'contact.whatsapp.message': {
    en: "Hi Tomas, I'm interested in starting a project.",
    es: 'Hola Tomas, me interesa iniciar un proyecto.',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('portfolio-locale') as Locale | null
    if (saved && (saved === 'en' || saved === 'es')) {
      setLocaleState(saved)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('es')) {
        setLocaleState('es')
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('portfolio-locale', newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string): string => {
    return translations[key]?.[locale] ?? key
  }

  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{
          locale: 'en',
          setLocale,
          t: (key) => translations[key]?.en ?? key,
        }}
      >
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
