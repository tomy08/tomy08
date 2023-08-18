import { Card, CardBody } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import { textsLanguage } from "../utils/utils";

export default function Proyects() {
  const { cards } = textsLanguage.en.nav.proyects;

  return (
    <Card>
      <CardBody className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <ProjectCard
          cardData={cards.et35}
          containerClassName="w-full h-[300px] col-span-12 sm:col-span-7"
        />
        <ProjectCard
          cardData={cards.pokedex}
          containerClassName="w-full h-[300px] col-span-12 sm:col-span-5"
        />
        <ProjectCard
          cardData={cards.weatherapp}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
        <ProjectCard
          cardData={cards.todoapp}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
        <ProjectCard
          cardData={cards.tmovie}
          containerClassName="col-span-12 sm:col-span-4 h-[300px]"
        />
      </CardBody>
    </Card>
  );
}
