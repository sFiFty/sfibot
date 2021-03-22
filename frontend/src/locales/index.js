import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { commands, common, nameSpaces } from './constanst';
import commandsEN from './en/commands';
import commandsRU from './ru/commands';
import commonEN from './en/common';
import commonRU from './ru/common';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      [nameSpaces.commands]: commandsEN,
      [nameSpaces.common]: commonEN,
    },
    ru: {
      [nameSpaces.commands]: commandsRU,
      [nameSpaces.common]: commonRU,
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
export { commands, common, nameSpaces, useTranslation, changeLanguage };