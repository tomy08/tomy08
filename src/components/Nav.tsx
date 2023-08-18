import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";
import { textsLanguage } from "../utils/utils";
import AboutMe from "./AboutMe";
import Proyects from "./ProjectsContainer";

export default function NavBar() {
  const { nav } = textsLanguage["en"];
  return (
    <div className="flex w-full flex-col my-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Tabs aria-label="Options" color="primary" variant="bordered">
          <Tab key={nav.proyects.title} title={nav.proyects.title}>
            <Proyects />
          </Tab>
          <Tab key={nav.about.title} title={nav.about.title}>
            <AboutMe />
          </Tab>
        </Tabs>
      </motion.div>
    </div>
  );
}
