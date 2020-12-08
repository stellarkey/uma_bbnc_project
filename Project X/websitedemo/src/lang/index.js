import Vue from 'vue'
import I18n from 'vue-i18n'

import en from '@/lang/i18n/en.json'

Vue.use(I18n)

const locale = 'en'

const messages = {
    en
}

const i18n = new I18n({
    locale,
    messages
})

export default i18n