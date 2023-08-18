import { JSX } from "react";
import {
  Card,
  CardBody,
  Divider,
  Image,
  Button,
  Snippet,
} from "@nextui-org/react";
import { Github } from "@react-symbols/icons";
import { motion } from "framer-motion";
import { textsLanguage } from "../utils/utils";

import LanguageSwitch from "./LanguageSwitch";

export default function Header(): JSX.Element {
  const { header } = textsLanguage["en"];
  return (
    <Card fullWidth radius="lg">
      <CardBody className="flex-row justify-center items-center gap-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-0 right-0 p-2"
        >
          <LanguageSwitch />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            isBlurred
            src="/avatar.jpg"
            alt="Tomás Santa Cruz"
            className="m-5 w-32 h-32"
          />
        </motion.div>

        <section>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-primary "
          >
            Tomás Santa Cruz 👨‍💻
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {header.slogan}
          </motion.h2>
          <Divider className="my-2" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex item-center gap-2"
          >
            <a href="https://github.com/tomy08" target="_blank">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Github className="w-10 h-10 rounded-full" />
              </motion.div>
            </a>
            <Button color="primary" variant="bordered" className="h-10">
              {header.cv}
            </Button>

            <Snippet variant="bordered" className="h-10">
              tomasesantacruz@gmail.com
            </Snippet>
          </motion.div>
        </section>
      </CardBody>
    </Card>
  );
}
