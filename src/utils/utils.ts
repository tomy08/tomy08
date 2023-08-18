import { ILanguagesTexts } from "../types";
import * as TECHNOLOGIES from "./technologyLogoComponents";

const technologies = {
  et35: [
    TECHNOLOGIES.Reactts,
    TECHNOLOGIES.Next,
    TECHNOLOGIES.Tailwind,
    TECHNOLOGIES.Prisma,
  ],
  tmovie: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.Js],
  todoapp: [TECHNOLOGIES.Reactts, TECHNOLOGIES.CSS],
  weatherapp: [TECHNOLOGIES.Reactts, TECHNOLOGIES.Tailwind],
  pokedex: [TECHNOLOGIES.ReactNative, TECHNOLOGIES.Firebase],
};

export const textsLanguage: ILanguagesTexts = {
  en: {
    header: {
      slogan: "Frontend Developer",
      cv: "Download CV",
    },
    nav: {
      about: {
        title: "About me",
        paragraphs: [
          "Passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and technologies like React, React Native, and Next.js. Currently, at the age of 15, I'm also pursuing studies in computer science at the technical level (Technical School No. 35).",
          "If you need anything else, feel free to ask! 🚀",
        ],
      },
      proyects: {
        title: "Proyects",
        cards: {
          et35: {
            title: "Webpage of Technical School No. 35",
            description: "Landing page",
            link: {
              liveHref: "https://tecnica35.vercel.app",
            },

            technologies: technologies.et35,

            image: "/et-35.png",
          },
          tmovie: {
            title: "TMovie",
            description: "App to watch movies and series",
            link: {
              liveHref: "https://tomy08.github.io/TMovie",
              repoHref: "https://github.com/tomy08/TMovie",
            },

            technologies: technologies.tmovie,

            image: "/tmovie.png",
          },
          todoapp: {
            title: "ToDo App",
            description: "Task app to organize your day",
            link: {
              repoHref: "https://github.com/tomy08/ToDo-App",
              liveHref: "https://tomy08.github.io/ToDo-App/",
            },

            technologies: technologies.todoapp,

            image: "/todo-app.png",
          },
          weatherapp: {
            title: "Weather App",
            description: "Application to know the weather",
            link: {
              repoHref: "https://github.com/tomy08/WeatherApp-react",
              liveHref: "https://tomy08.github.io/WeatherApp-react/",
            },

            technologies: technologies.weatherapp,

            image: "/weather-app.png",
          },
          pokedex: {
            title: "Pokedex App",
            description: "App to see pokemons and their stats",
            link: {
              repoHref: "https://github.com/tomy08/pokedex-rn",
            },

            technologies: technologies.pokedex,

            image: "/weather-app.png",
          },
        },
      },
    },
  },
  es: {
    header: {
      slogan: "Desarrollador Frontend",
      cv: "Descargar CV",
    },
    nav: {
      about: {
        title: "Sobre mi",
        paragraphs: [
          "Desarrollador Front-End apasionado con experiencia en HTML, CSS, JavaScript y tecnologías como React, React Native y Next.js. Actualmente, con 15 años de edad, también estoy estudiando en el nivel técnico en computación (Escuela Técnica N° 35).",
          "Si necesitas algo más, ¡estoy aquí para ayudarte! 🚀",
        ],
      },
      proyects: {
        title: "Proyectos",
        cards: {
          et35: {
            title: "Página web de la Escuela Técnica N° 35",
            description: "Landing page",
            link: {
              liveHref: "https://tecnica35.vercel.app",
            },

            technologies: technologies.et35,

            image: "/et-35.png",
          },
          tmovie: {
            title: "TMovie",
            description: "Aplicación para ver películas y series",
            link: {
              liveHref: "https://tomy08.github.io/TMovie",
              repoHref: "https://github.com/tomy08/TMovie",
            },

            technologies: technologies.tmovie,

            image: "/tmovie.png",
          },
          todoapp: {
            title: "ToDo App",
            description: "Aplicación de tareas",
            link: {
              repoHref: "https://github.com/tomy08/ToDo-App",
              liveHref: "https://tomy08.github.io/ToDo-App/",
            },

            technologies: technologies.todoapp,

            image: "/todo-app.png",
          },
          weatherapp: {
            title: "Weather App",
            description: "Aplicación para saber el clima",
            link: {
              repoHref: "https://github.com/tomy08/WeatherApp-react",
              liveHref: "https://tomy08.github.io/WeatherApp-react/",
            },

            technologies: technologies.weatherapp,

            image: "/weather-app.png",
          },
          pokedex: {
            title: "Pokedex App",
            description: "Aplicación para ver pokemones y sus estadisticas",
            link: {
              repoHref: "https://github.com/tomy08/pokedex-rn",
            },

            technologies: technologies.pokedex,

            image: "/weather-app.png",
          },
        },
      },
    },
  },
};
