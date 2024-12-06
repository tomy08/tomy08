import { useTranslation } from 'react-i18next'
import * as TECHNOLOGIES from './technologyLogoComponents'
import { SVGProps, FC } from 'react'

const technologies = {
  et35: [
    TECHNOLOGIES.Reactts,
    TECHNOLOGIES.Next,
    TECHNOLOGIES.Tailwind,
    TECHNOLOGIES.Prisma,
  ],
  codiniClone: [
    TECHNOLOGIES.Astro,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.Js,
    TECHNOLOGIES.Tailwind,
  ],
  tmovie: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.Js],
  todoapp: [TECHNOLOGIES.Reactts, TECHNOLOGIES.CSS],
  weatherapp: [TECHNOLOGIES.Reactts, TECHNOLOGIES.Tailwind],
  pokedex: [TECHNOLOGIES.ReactNative, TECHNOLOGIES.Firebase],
  eclectiStore: [
    TECHNOLOGIES.Reactts,
    TECHNOLOGIES.Next,
    TECHNOLOGIES.Tailwind,
  ],
  twitterClone: [
    TECHNOLOGIES.Reactts,
    TECHNOLOGIES.Next,
    TECHNOLOGIES.Tailwind,
    TECHNOLOGIES.Supabase,
  ],
  blog: [
    TECHNOLOGIES.Astro,
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.Js,
    TECHNOLOGIES.Tailwind,
  ],
  tableTennisAPI: [TECHNOLOGIES.Node, TECHNOLOGIES.Express],
  tableTennisDB: [TECHNOLOGIES.Database],
  projectOrganizer: [TECHNOLOGIES.Reactts, TECHNOLOGIES.Tailwind],
}

type ProjectCard = {
  title: string
  description: string
  link: {
    repoHref?: string
    liveHref?: string
  }
  image: string
}

type ProjectsTranslated = {
  [key: string]: {
    cards: ProjectCard
    technologies: FC<SVGProps<SVGSVGElement>>[]
    containerClassName: string
  }
}

export function useProjectsTranslated(): ProjectsTranslated {
  const { t } = useTranslation()

  return {
    et35: {
      cards: {
        title: t('nav.projects.cards.et35.title'),
        description: t('nav.projects.cards.et35.description'),
        link: {
          liveHref: t('nav.projects.cards.et35.link.liveHref'),
        },
        image: t('nav.projects.cards.et35.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-12',
      technologies: technologies.et35,
    },
    blog: {
      cards: {
        title: t('nav.projects.cards.blog.title'),
        description: t('nav.projects.cards.blog.description'),
        link: {
          repoHref: t('nav.projects.cards.blog.link.repoHref'),
          liveHref: t('nav.projects.cards.blog.link.liveHref'),
        },
        image: t('nav.projects.cards.blog.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-5',
      technologies: technologies.blog,
    },
    codiniClone: {
      cards: {
        title: t('nav.projects.cards.codiniClone.title'),
        description: t('nav.projects.cards.codiniClone.description'),
        link: {
          repoHref: t('nav.projects.cards.codiniClone.link.repoHref'),
          liveHref: t('nav.projects.cards.codiniClone.link.liveHref'),
        },
        image: t('nav.projects.cards.codiniClone.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-4',
      technologies: technologies.codiniClone,
    },
    todoapp: {
      cards: {
        title: t('nav.projects.cards.todoapp.title'),
        description: t('nav.projects.cards.todoapp.description'),
        link: {
          repoHref: t('nav.projects.cards.todoapp.link.repoHref'),
          liveHref: t('nav.projects.cards.todoapp.link.liveHref'),
        },
        image: t('nav.projects.cards.todoapp.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-3',
      technologies: technologies.todoapp,
    },
    eclectiStore: {
      cards: {
        title: t('nav.projects.cards.eclectiStore.title'),
        description: t('nav.projects.cards.eclectiStore.description'),
        link: {
          repoHref: t('nav.projects.cards.eclectiStore.link.repoHref'),
          liveHref: t('nav.projects.cards.eclectiStore.link.liveHref'),
        },
        image: t('nav.projects.cards.eclectiStore.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-4',
      technologies: technologies.eclectiStore,
    },
    twitterClone: {
      cards: {
        title: t('nav.projects.cards.twitterClone.title'),
        description: t('nav.projects.cards.twitterClone.description'),
        link: {
          repoHref: t('nav.projects.cards.twitterClone.link.repoHref'),
        },
        image: t('nav.projects.cards.twitterClone.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-4',
      technologies: technologies.twitterClone,
    },
    pokedex: {
      cards: {
        title: t('nav.projects.cards.pokedex.title'),
        description: t('nav.projects.cards.pokedex.description'),
        link: {
          repoHref: t('nav.projects.cards.pokedex.link.repoHref'),
        },
        image: t('nav.projects.cards.pokedex.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-4',
      technologies: technologies.pokedex,
    },
    weatherapp: {
      cards: {
        title: t('nav.projects.cards.weatherapp.title'),
        description: t('nav.projects.cards.weatherapp.description'),
        link: {
          repoHref: t('nav.projects.cards.weatherapp.link.repoHref'),
          liveHref: t('nav.projects.cards.weatherapp.link.liveHref'),
        },
        image: t('nav.projects.cards.weatherapp.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-6',
      technologies: technologies.weatherapp,
    },

    tableTennisAPI: {
      cards: {
        title: t('nav.projects.cards.tableTennisAPI.title'),
        description: t('nav.projects.cards.tableTennisAPI.description'),
        link: {
          repoHref: t('nav.projects.cards.tableTennisAPI.link.repoHref'),
        },
        image: t('nav.projects.cards.tableTennisAPI.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-3',
      technologies: technologies.tableTennisAPI,
    },
    tableTennisDB: {
      cards: {
        title: t('nav.projects.cards.tableTennisDB.title'),
        description: t('nav.projects.cards.tableTennisDB.description'),
        link: {
          repoHref: t('nav.projects.cards.tableTennisDB.link.repoHref'),
        },
        image: t('nav.projects.cards.tableTennisDB.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-3',
      technologies: technologies.tableTennisDB,
    },
    tmovie: {
      cards: {
        title: t('nav.projects.cards.tmovie.title'),
        description: t('nav.projects.cards.tmovie.description'),
        link: {
          repoHref: t('nav.projects.cards.tmovie.link.repoHref'),
          liveHref: t('nav.projects.cards.tmovie.link.liveHref'),
        },
        image: t('nav.projects.cards.tmovie.image'),
      },
      containerClassName: 'w-full h-[300px] col-span-12 sm:col-span-5',
      technologies: technologies.tmovie,
    },
    projectOrganizer: {
      cards: {
        title: t('nav.projects.cards.projectOrganizer.title'),
        description: t('nav.projects.cards.projectOrganizer.description'),
        link: {
          repoHref: t('nav.projects.cards.projectOrganizer.link.repoHref'),
        },
        image: t('nav.projects.cards.projectOrganizer.image'),
      },
      containerClassName: 'w-full h-[200px] col-span-12 sm:col-span-7',
      technologies: technologies.projectOrganizer,
    },
  }
}
