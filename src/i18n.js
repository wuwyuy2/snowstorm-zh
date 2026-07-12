import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en'

Vue.use(VueI18n)

function detectLocale() {
    return localStorage.getItem('language') || navigator.language || navigator.userLanguage
}

export function setLocale(lang) {
    i18n.locale = lang
    localStorage.setItem('language', lang)
}

export const i18n = new VueI18n({
    locale: detectLocale(),
    fallbackLocale: 'en',
    messages: {
        en
    }
})
