import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { commands, nameSpaces } from './constanst';
import commandsEN from './en/commands';
import commandsRU from './ru/commands';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      commands: commandsEN
    },
    ru: {
      commands: commandsRU
    }
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

i18n.changeLanguage('en');

const { changeLanguage } = i18n;
export { commands, nameSpaces, useTranslation, changeLanguage };