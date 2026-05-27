import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '@/locales/en/common.json';
import enAuth from '@/locales/en/auth.json';
import enErrors from '@/locales/en/errors.json';
import enMenu from '@/locales/en/menu.json';
import enAcl from '@/locales/en/acl.json';
import enDashboard from '@/locales/en/dashboard.json';

import zhCommon from '@/locales/zh/common.json';
import zhAuth from '@/locales/zh/auth.json';
import zhErrors from '@/locales/zh/errors.json';
import zhMenu from '@/locales/zh/menu.json';
import zhAcl from '@/locales/zh/acl.json';
import zhDashboard from '@/locales/zh/dashboard.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        auth: enAuth,
        errors: enErrors,
        menu: enMenu,
        acl: enAcl,
        dashboard: enDashboard,
      },
      zh: {
        common: zhCommon,
        auth: zhAuth,
        errors: zhErrors,
        menu: zhMenu,
        acl: zhAcl,
        dashboard: zhDashboard,
      },
    },
    defaultNS: 'common',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'robustmq-lang',
    },
  });

export default i18n;
