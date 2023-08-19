import { Tabs, Tab } from "@nextui-org/react";
import { motion } from "framer-motion";

import AboutMe from "./AboutMe";
import Proyects from "./ProjectsContainer";

import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col my-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Tabs aria-label="Options" color="primary" variant="bordered">
          <Tab key={t("nav.projects.title")} title={t("nav.projects.title")}>
            <Proyects />
          </Tab>
          <Tab key={t("nav.about.title")} title={t("nav.about.title")}>
            <AboutMe />
          </Tab>
        </Tabs>
      </motion.div>
    </div>
  );
}
