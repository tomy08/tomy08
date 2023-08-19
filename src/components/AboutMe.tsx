import { Card, CardBody } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <Card>
      <CardBody>
        <p className="pb-1">{t("nav.about.paragraphs.0")}</p>
        <p>{t("nav.about.paragraphs.1")}</p>
      </CardBody>
    </Card>
  );
}
