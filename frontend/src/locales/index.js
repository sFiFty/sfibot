import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { commands, common, visitors, nameSpaces } from './constanst';
import commandsEN from './en/commands';
import commandsRU from './ru/commands';
import commonEN from './en/common';
import commonRU from './ru/common';
import visitorsEN from './en/visitors';
import visitorsRU from './ru/visitors';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      [nameSpaces.commands]: commandsEN,
      [nameSpaces.common]: commonEN,
      [nameSpaces.visitors]: visitorsEN,
    },
    ru: {
      [nameSpaces.commands]: commandsRU,
      [nameSpaces.common]: commonRU,
      [nameSpaces.visitors]: visitorsRU,
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
export { commands, common, visitors, nameSpaces, useTranslation, changeLanguage };