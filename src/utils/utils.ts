import { ILanguagesTexts } from "../types/types";

const textsLanguage: ILanguagesTexts = {
  en: {
    translation: {
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
        projects: {
          title: "Projects",
          cards: {
            et35: {
              title: "Webpage of Technical School No. 35",
              description: "Landing page",
              link: {
                liveHref: "https://tecnica35.vercel.app",
              },

              image: "/et-35.png",
            },
            tmovie: {
              title: "TMovie",
              description: "App to watch movies and series",
              link: {
                liveHref: "https://tomy08.github.io/TMovie",
                repoHref: "https://github.com/tomy08/TMovie",
              },

              image: "/tmovie.png",
            },
            todoapp: {
              title: "ToDo App",
              description: "Task app to organize your day",
              link: {
                repoHref: "https://github.com/tomy08/ToDo-App",
                liveHref: "https://tomy08.github.io/ToDo-App/",
              },

              image: "/todo-app.png",
            },
            weatherapp: {
              title: "Weather App",
              description: "Application to know the weather",
              link: {
                repoHref: "https://github.com/tomy08/WeatherApp-react",
                liveHref: "https://tomy08.github.io/WeatherApp-react/",
              },

              image: "/weather-app.png",
            },
            pokedex: {
              title: "Pokedex App",
              description: "App to see pokemons and their stats",
              link: {
                repoHref: "https://github.com/tomy08/pokedex-rn",
              },

              image: "/weather-app.png",
            },
          },
        },
      },
    },
  },
  es: {
    translation: {
      header: {
        slogan: "Desarrollador Frontend",
        cv: "Descargar CV",
      },
      nav: {
        about: {
          title: "Sobre mí",
          paragraphs: [
            "Desarrollador Front-End apasionado con experiencia en HTML, CSS, JavaScript y tecnologías como React, React Native y Next.js. Actualmente, con 15 años de edad, también estoy estudiando en el nivel técnico en computación (Escuela Técnica N° 35).",
            "Si necesitas algo más, ¡estoy aquí para ayudarte! 🚀",
          ],
        },
        projects: {
          title: "Proyectos",
          cards: {
            et35: {
              title: "Página web de la Escuela Técnica N° 35",
              description: "Landing page",
              link: {
                liveHref: "https://tecnica35.vercel.app",
              },

              image: "/et-35.png",
            },
            tmovie: {
              title: "TMovie",
              description: "Aplicación para ver películas y series",
              link: {
                liveHref: "https://tomy08.github.io/TMovie",
                repoHref: "https://github.com/tomy08/TMovie",
              },

              image: "/tmovie.png",
            },
            todoapp: {
              title: "ToDo App",
              description: "Aplicación de tareas",
              link: {
                repoHref: "https://github.com/tomy08/ToDo-App",
                liveHref: "https://tomy08.github.io/ToDo-App/",
              },

              image: "/todo-app.png",
            },
            weatherapp: {
              title: "Weather App",
              description: "Aplicación para saber el clima",
              link: {
                repoHref: "https://github.com/tomy08/WeatherApp-react",
                liveHref: "https://tomy08.github.io/WeatherApp-react/",
              },

              image: "/weather-app.png",
            },
            pokedex: {
              title: "Pokedex App",
              description: "Aplicación para ver pokemones y sus estadisticas",
              link: {
                repoHref: "https://github.com/tomy08/pokedex-rn",
              },

              image: "/weather-app.png",
            },
          },
        },
      },
    },
  },
};

export default textsLanguage;
