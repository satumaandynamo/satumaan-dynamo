import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'
// import AsyncStoragePlugin from 'i18next-react-native-async-storage'

import en from './en'
import fi from './fi'

i18next
    .use(detector)
    // .use(AsyncStoragePlugin('fi'))
    .init({
        interpolation: {
            escapeValue: false,
        },
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
