import { FC, SVGProps } from "react";
export type Cards = {
  title: string;
  description: string;
  link: {
    repoHref?: string;
    liveHref?: string;
  };
  image: string;

  technologies: FC<SVGProps<SVGSVGElement>>[];
};

export interface ILanguagesTexts {
  [key: string]: {
    header: {
      slogan: string;
      cv: string;
    };
    nav: {
      about: {
        title: string;
        paragraphs: string[];
      };
      proyects: {
        title: string;
        cards: {
          et35: Cards;
          tmovie: Cards;
          todoapp: Cards;
          weatherapp: Cards;
          pokedex: Cards;
        };
      };
    };
  };
}
