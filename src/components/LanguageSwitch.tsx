import { JSX, useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";

import i18next from "../../i18n";

export default function LanguageSwitch(): JSX.Element {
  const [isSelected, setIsSelected] = useState(true);

  const handleSwitchChange = () => {
    setIsSelected(!isSelected);

    if (isSelected) {
      i18next.changeLanguage("es");
      localStorage.setItem("lang", "es");
    } else {
      i18next.changeLanguage("en");
      localStorage.setItem("lang", "en");
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    setIsSelected(savedLang === "en");
  }, []);

  return (
    <Switch
      isSelected={isSelected}
      onChange={handleSwitchChange}
      color="default"
      size="md"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <img src="/uk.png" className={className} />
        ) : (
          <img src="/spain.png" className="rounded-full" />
        )
      }
    />
  );
}
