import { Card, CardBody } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import * as TECHNOLOGIES from "../utils/technologyLogoComponents";

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

export default function Proyects() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardBody className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <ProjectCard
          cards={{
            title: t("nav.projects.cards.et35.title"),
            description: t("nav.projects.cards.et35.description"),
            link: {
              liveHref: t("nav.projects.cards.et35.link.liveHref"),
            },
            image: t("nav.projects.cards.et35.image"),
          }}
          technologies={technologies.et35}
          containerClassName="w-full h-[300px] col-span-12 sm:col-span-7"
        />
        <ProjectCard
          cards={{
            title: t("nav.projects.cards.pokedex.title"),
            description: t("nav.projects.cards.pokedex.description"),
            link: {
              repoHref: t("nav.projects.cards.pokedex.link.repoHref"),
            },
            image: t("nav.projects.cards.pokedex.image"),
          }}
          technologies={technologies.pokedex}
          containerClassName="w-full h-[300px] col-span-12 sm:col-span-5"
        />
        <ProjectCard
          cards={{
            title: t("nav.projects.cards.weatherapp.title"),
            description: t("nav.projects.cards.weatherapp.description"),
            link: {
              liveHref: t("nav.projects.cards.weatherapp.link.liveHref"),
              repoHref: t("nav.projects.cards.weatherapp.link.repoHref"),
            },
            image: t("nav.projects.cards.weatherapp.image"),
          }}
          technologies={technologies.weatherapp}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
        <ProjectCard
          cards={{
            title: t("nav.projects.cards.todoapp.title"),
            description: t("nav.projects.cards.todoapp.description"),
            link: {
              liveHref: t("nav.projects.cards.todoapp.link.liveHref"),
              repoHref: t("nav.projects.cards.todoapp.link.repoHref"),
            },
            image: t("nav.projects.cards.todoapp.image"),
          }}
          technologies={technologies.todoapp}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
        <ProjectCard
          cards={{
            title: t("nav.projects.cards.tmovie.title"),
            description: t("nav.projects.cards.tmovie.description"),
            link: {
              liveHref: t("nav.projects.cards.tmovie.link.liveHref"),
              repoHref: t("nav.projects.cards.tmovie.link.repoHref"),
            },
            image: t("nav.projects.cards.tmovie.image"),
          }}
          technologies={technologies.tmovie}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
      </CardBody>
    </Card>
  );
}
