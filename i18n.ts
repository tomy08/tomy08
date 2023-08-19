import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import textsLanguage from "./src/utils/utils";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: textsLanguage.en.translation,
    },
    es: {
      translation: textsLanguage.es.translation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
