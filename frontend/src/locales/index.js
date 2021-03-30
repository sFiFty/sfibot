import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import {
  commands, common, visitors, requests, date, inputs, nameSpaces,
} from './constanst';
import commandsEN from './en/commands';
import commandsRU from './ru/commands';
import commonEN from './en/common';
import commonRU from './ru/common';
import visitorsEN from './en/visitors';
import visitorsRU from './ru/visitors';
import dateEN from './en/date';
import dateRU from './ru/date';
import inputsEN from './en/inputs';
import inputsRU from './ru/inputs';
import requestsEN from './en/requests';
import requestsRU from './ru/requests';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        [nameSpaces.commands]: commandsEN,
        [nameSpaces.common]: commonEN,
        [nameSpaces.visitors]: visitorsEN,
        [nameSpaces.date]: dateEN,
        [nameSpaces.inputs]: inputsEN,
        [nameSpaces.requests]: requestsEN,
      },
      ru: {
        [nameSpaces.commands]: commandsRU,
        [nameSpaces.common]: commonRU,
        [nameSpaces.visitors]: visitorsRU,
        [nameSpaces.date]: dateRU,
        [nameSpaces.inputs]: inputsRU,
        [nameSpaces.requests]: requestsRU,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage('en');

const { changeLanguage } = i18n;
export {
  commands, common, visitors, date, inputs, requests, nameSpaces, useTranslation, changeLanguage,
};
