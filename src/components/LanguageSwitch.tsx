import { JSX, useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";

export default function LanguageSwitch(): JSX.Element {
  const [isSelected, setIsSelected] = useState(true); // Estado para el interruptor

  const handleSwitchChange = () => {
    setIsSelected(!isSelected);

    if (isSelected) {
      localStorage.setItem("lang", "es");
    } else {
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
