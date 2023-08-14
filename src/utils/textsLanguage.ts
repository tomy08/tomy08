export interface ILanguagesTexts {
  [key: string]: {
    header: {
      slogan: string;
      cv: string;
    };
  };
}

export const textsLanguage: ILanguagesTexts = {
  en: {
    header: {
      slogan: "Frontend Developer",
      cv: "Download CV",
    },
  },
  es: {
    header: {
      slogan: "Desarrollador Frontend",
      cv: "Descargar CV",
    },
  },
};
