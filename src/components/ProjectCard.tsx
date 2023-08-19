import { Card, CardHeader, Image } from "@nextui-org/react";
import { FC, SVGProps } from "react";
import ProyectFooter from "./ProjectFooter";
import { Cards } from "../types/types";

interface Props {
  cards: Cards;
  technologies: FC<SVGProps<SVGSVGElement>>[];
  containerClassName: string;
}

export default function ProjectCard({
  cards,
  containerClassName,
  technologies,
}: Props) {
  const { title, description, link, image } = cards;

  return (
    <Card className={containerClassName}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-semibold">
          {description}
        </p>
        <h4 className="text-white font-semibold text-2xl">{title}</h4>
        <section className="flex justify-center">
          {technologies.map((Logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-10 h-10"
            >
              <Logo />
            </div>
          ))}
        </section>
      </CardHeader>
      <Image
        removeWrapper
        isZoomed
        alt={title}
        className="z-0 w-full h-full object-cover !opacity-30"
        src={image}
      />
      <ProyectFooter repoHref={link.repoHref} liveHref={link.liveHref} />
    </Card>
  );
}
