import { JSX } from "react";

import {
  Card,
  CardBody,
  Divider,
  Button,
  Snippet,
  Link,
} from "@nextui-org/react";

import { Github } from "@react-symbols/icons";
import { motion } from "framer-motion";

import LanguageSwitch from "./LanguageSwitch";

import { useTranslation } from "react-i18next";

export default function Header(): JSX.Element {
  const { t } = useTranslation();
  const pdf =
    localStorage.getItem("lang") === "en" ? "/cv-en.pdf" : "/cv-es.pdf";

  return (
    <Card fullWidth radius="lg">
      <CardBody className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-0 right-0 p-2"
        >
          <LanguageSwitch />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl mt-4 sm:mt-0  font-bold text-primary text-center"
        >
          Tomás Santa Cruz
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-bold text-center text-white/95"
        >
          {t("header.slogan")}
        </motion.h2>
        <Divider className="my-2 " />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex item-center justify-center flex-wrap gap-2"
        >
          <a href="https://github.com/tomy08" target="_blank">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Github className="w-10 h-10 rounded-full" />
            </motion.div>
          </a>
          <Button
            as={Link}
            target="_blank"
            href={pdf}
            color="primary"
            variant="bordered"
            className="h-10"
          >
            {t("header.cv")}
          </Button>

          <Snippet symbol="" variant="bordered" className="h-10">
            tomasesantacruz@gmail.com
          </Snippet>
        </motion.div>
      </CardBody>
    </Card>
  );
}
