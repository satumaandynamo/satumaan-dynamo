import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en'
import fi from './fi'

i18next.use(LanguageDetector).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'fi',
  debug: true,
  resources: {
    fi,
    en,
  },
  react: {
    wait: true,
  },
})

const i18n = i18next
export default i18n
