import Vue from 'vue'
import App from './components/App'
import './vscode_extension'
import './browser'
import { i18n } from './i18n'

new Vue({
    components: { App },
    template: '<App/>',
    i18n
 }).$mount('#app')
