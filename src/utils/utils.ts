import { ILanguagesTexts } from '../types/types'

const images = {
  et35: '/et-35.png',
  tmovie: '/tmovie.png',
  todoapp: '/todo-app.png',
  weatherapp: '/weather-app.png',
  pokedex: '/pokedex.png',
  eclectiStore: '/eclecti-store.png',
  twitterClone: '/twitter-clone.png',
  blog: '/blog.png',
  codiniClone: '/codini-clone.png',
  tableTennisAPI: '/table-tennis-api.png',
  tableTennisDB: '/table-tennis-db.png',
}

const links = {
  et35: {
    liveHref: 'https://escuelatecnica35.com.ar',
  },
  tmovie: {
    liveHref: 'https://tomy08.github.io/TMovie',
    repoHref: 'https://github.com/tomy08/TMovie',
  },
  todoapp: {
    repoHref: 'https://github.com/tomy08/ToDo-App',
    liveHref: 'https://tomy08.github.io/ToDo-App/',
  },
  weatherapp: {
    repoHref: 'https://github.com/tomy08/WeatherApp-react',
    liveHref: 'https://tomy08.github.io/WeatherApp-react/',
  },
  pokedex: {
    repoHref: 'https://github.com/tomy08/pokedex-rn',
  },
  eclectiStore: {
    repoHref: 'https://github.com/tomy08/EclectiStore',
    liveHref: 'https://eclecti-store.vercel.app/',
  },
  twitterClone: {
    repoHref: 'https://github.com/tomy08/x-clone',
  },
  blog: {
    repoHref: 'https://github.com/tomy08/tomydev.blog',
    liveHref: 'https://tomydev-blog.vercel.app/',
  },
  codiniClone: {
    repoHref: 'https://github.com/tomy08/codini-clone',
    liveHref: 'https://codini.vercel.app/',
  },
  tableTennisAPI: {
    repoHref: 'https://github.com/tomy08/table-tennis-api',
  },
  tableTennisDB: {
    repoHref: 'https://github.com/tomy08/table-tennis-db',
  },
}

const textsLanguage: ILanguagesTexts = {
  en: {
    translation: {
      header: {
        slogan: 'Frontend Developer',
        cv: 'Download CV',
      },
      nav: {
        about: {
          title: 'About me',
          paragraphs: [
            "Passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and technologies like React, React Native, and Next.js. Currently, at the age of 15, I'm also pursuing studies in computer science at the technical level school (Technical School No. 35).",
            'If you need anything, feel free to ask! 🚀',
          ],
        },
        projects: {
          title: 'Projects',
          cards: {
            et35: {
              title: 'Webpage of Technical School No. 35',
              description: 'Landing page',
              link: links.et35,
              image: images.et35,
            },
            tmovie: {
              title: 'TMovie',
              description: 'App to watch movies and series',
              link: links.tmovie,
              image: images.tmovie,
            },
            todoapp: {
              title: 'ToDo App',
              description: 'Task app to organize your day',
              link: links.todoapp,
              image: images.todoapp,
            },
            weatherapp: {
              title: 'Weather App',
              description: 'Application to know the weather',
              link: links.weatherapp,
              image: images.weatherapp,
            },
            pokedex: {
              title: 'Pokedex App',
              description: 'App to see pokemons and their stats',
              link: links.pokedex,
              image: images.pokedex,
            },
            eclectiStore: {
              title: 'Eclecti Store',
              description: 'E-commerce',
              link: links.eclectiStore,
              image: images.eclectiStore,
            },
            twitterClone: {
              title: 'Twitter Clone',
              description: 'Twitter clone',
              link: links.twitterClone,
              image: images.twitterClone,
            },
            blog: {
              title: 'tomydev.blog',
              description: 'Blog about tech and web development',
              link: links.blog,
              image: images.blog,
            },
            codiniClone: {
              title: 'Codini Clone',
              description: 'An enhanced version of codini.com.ar',
              link: links.codiniClone,
              image: images.codiniClone,
            },
            tableTennisAPI: {
              title: 'Table Tennis API',
              description: 'API for table tennis league',
              link: links.tableTennisAPI,
              image: images.tableTennisAPI,
            },
            tableTennisDB: {
              title: 'Table Tennis DB',
              description: 'Database for table tennis app',
              link: links.tableTennisDB,
              image: images.tableTennisDB,
            },
          },
        },
      },
    },
  },
  es: {
    translation: {
      header: {
        slogan: 'Desarrollador Frontend',
        cv: 'Descargar CV',
      },
      nav: {
        about: {
          title: 'Sobre mí',
          paragraphs: [
            'Desarrollador Front-End apasionado con experiencia en HTML, CSS, JavaScript y tecnologías como React, React Native y Next.js. Actualmente, con 15 años de edad, también estoy estudiando en el nivel técnico en computación (Escuela Técnica N° 35).',
            'Si necesitas algo más, ¡estoy aquí para ayudarte! 🚀',
          ],
        },
        projects: {
          title: 'Proyectos',
          cards: {
            et35: {
              title: 'Página web de la Escuela Técnica N° 35',
              description: 'Landing page',
              link: links.et35,
              image: images.et35,
            },
            tmovie: {
              title: 'TMovie',
              description: 'Aplicación para ver películas y series',
              link: links.tmovie,
              image: images.tmovie,
            },
            todoapp: {
              title: 'ToDo App',
              description: 'Aplicación de tareas',
              link: links.todoapp,
              image: images.todoapp,
            },
            weatherapp: {
              title: 'Weather App',
              description: 'Aplicación para saber el clima',
              link: links.weatherapp,
              image: images.weatherapp,
            },
            pokedex: {
              title: 'Pokedex App',
              description: 'Aplicación para ver pokemones y sus estadisticas',
              link: links.pokedex,
              image: images.pokedex,
            },
            eclectiStore: {
              title: 'Eclecti Store',
              description: 'E-commerce',
              link: links.eclectiStore,
              image: images.eclectiStore,
            },
            twitterClone: {
              title: 'Twitter Clone',
              description: 'Clone de Twitter',
              link: links.twitterClone,
              image: images.twitterClone,
            },
            blog: {
              title: 'tomydev.blog',
              description: 'Blog sobre tecnología y desarrollo web',
              link: links.blog,
              image: images.blog,
            },
            codiniClone: {
              title: 'Codini Clone',
              description: 'Una versión mejorada de codini.com.ar',
              link: links.codiniClone,
              image: images.codiniClone,
            },
            tableTennisAPI: {
              title: 'API de Tenis de Mesa',
              description: 'API para liga de tenis de mesa',
              link: links.tableTennisAPI,
              image: images.tableTennisAPI,
            },
            tableTennisDB: {
              title: 'Base de datos de Tenis de Mesa',
              description: 'Base de datos para app de tenis de mesa',
              link: links.tableTennisDB,
              image: images.tableTennisDB,
            },
          },
        },
      },
    },
  },
}

export default textsLanguage
