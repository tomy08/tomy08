import { CardFooter, Link, Button } from "@nextui-org/react";
import { Github } from "@react-symbols/icons";

type Props = {
  liveHref?: string;
  repoHref?: string;
};

export default function ProjectFooter({ liveHref, repoHref }: Props) {
  return (
    <CardFooter className="absolute z-10 bottom-1 flex-col items-end">
      <section className="flex items-center justify-center gap-2">
        {liveHref && (
          <Button
            href={liveHref}
            as={Link}
            color="warning"
            showAnchorIcon
            variant="solid"
            target="_blank"
          >
            Live
          </Button>
        )}
        {repoHref && (
          <Button
            isIconOnly
            variant="solid"
            href={repoHref}
            target="_blank"
            as={Link}
          >
            <Github className="aspect-square" />
          </Button>
        )}
      </section>
    </CardFooter>
  );
}
