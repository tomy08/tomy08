import { Card, CardBody } from "@nextui-org/react";
import { textsLanguage } from "../utils/utils";

export default function AboutMe() {
  const { nav } = textsLanguage["en"];
  return (
    <Card>
      <CardBody>
        {nav.about.paragraphs.map((paragraph, index) => (
          <p key={index} className={index === 0 ? "pb-1" : ""}>
            {paragraph}
          </p>
        ))}
      </CardBody>
    </Card>
  );
}
