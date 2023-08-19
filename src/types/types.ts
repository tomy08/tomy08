export type Cards = {
  title: string;
  description: string;
  link: {
    repoHref?: string;
    liveHref?: string;
  };
  image: string;
};

export interface ILanguagesTexts {
  en: {
    translation: {
      header: {
        slogan: string;
        cv: string;
      };
      nav: {
        about: {
          title: string;
          paragraphs: string[];
        };
        projects: {
          title: string;
          cards: {
            [key: string]: Cards;
          };
        };
      };
    };
  };
  es: {
    translation: {
      header: {
        slogan: string;
        cv: string;
      };
      nav: {
        about: {
          title: string;
          paragraphs: string[];
        };
        projects: {
          title: string;
          cards: {
            [key: string]: Cards;
          };
        };
      };
    };
  };
}
