import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n

  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // below code get data from public/index.html what set default
    // lng: document.querySelector('html').lang,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"], // set into cookie
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
