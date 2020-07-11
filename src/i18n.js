import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from 'i18next-browser-languagedetector';
import common_en from './translations/homepage/common/en.json';
import common_de from './translations/homepage/common/de.json';
import parallax_en from './translations/homepage/parallax/en.json';
import parallax_de from './translations/homepage/parallax/de.json';
import about_en from './translations/homepage/about/en.json';
import about_de from './translations/homepage/about/de.json';
// import product_pricing_en from './translations/homepage/product_pricing/en.json';
// import product_pricing_de from './translations/homepage/product_pricing/de.json';
// import projects_en from './translations/homepage/projects/en.json';
// import projects_de from './translations/homepage/projects/de.json';
// import whyus_en from './translations/homepage/whyus/en.json';
// import whyus_de from './translations/homepage/whyus/de.json';
// import pricing_en from './translations/homepage/pricing/en.json';
// import pricing_de from './translations/homepage/pricing/de.json';
// import blog_en from './translations/homepage/blog/en.json';
// import blog_de from './translations/homepage/blog/de.json';
// import contactus_en from './translations/homepage/contactus/en.json';
// import contactus_de from './translations/homepage/contactus/de.json';

// import projectpage_en from './translations/projectpage/en.json';
// import projectpage_de from './translations/projectpage/de.json';

// import pp_en from './translations/documents/pp/en.json';
// import pp_de from './translations/documents/pp/de.json';
// import imprint_en from './translations/documents/imprint/en.json';
// import imprint_de from './translations/documents/imprint/de.json';
// import tnc_en from './translations/documents/tnc/en.json';
// import tnc_de from './translations/documents/tnc/de.json';


const resources = {
  en: {
    common: common_en,
    parallax: parallax_en,
    about: about_en,
    // product_pricing: product_pricing_en,
    // projects: projects_en,
    // whyus: whyus_en,
    // pricing: pricing_en,
    // blog: blog_en,
    // contactus: contactus_en,
    // projectpage: projectpage_en,
    // pp: pp_en,
    // tnc: tnc_en,
    // imprint: imprint_en
  },
  de: {
    common: common_de,
    parallax: parallax_de,
    about: about_de,
    // product_pricing: product_pricing_de,
    // projects: projects_de,
    // whyus: whyus_de,
    // pricing: pricing_de,
    // blog: blog_de,
    // contactus: contactus_de,
    // projectpage: projectpage_de,
    // pp: pp_de,
    // tnc: tnc_de,
    // imprint: imprint_de
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "de",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;