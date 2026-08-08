import en from './help/en.js'
import zh_CN from './help/zh_CN.js'

const messages = {
    en, zh_CN,
}

export function getHelpData(lang) {
    return messages.hasOwnProperty(lang) ? messages[lang] : en;
}
