import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

type LanguageType = {
  [x: string]: {
    flag: string;
    label: string;
  };
};

export const languages: LanguageType = {
  en: {
    flag: 'gb',
    label: 'English',
  },
  uk: {
    flag: 'ua',
    label: 'Українська',
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath:
        import.meta.env.MODE !== 'production'
          ? `./locales/{{lng}}/{{ns}}.json`
          : `/alter-ego/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      lookupLocalStorage: 'language',
    },
    supportedLngs: Object.keys(languages),
    fallbackLng: 'en',
  });

export default i18n;
