import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

import {pt_BR} from "./locales/pt_BR.js";
import { en_US } from './locales/en.js'

const languages = {
    pt_BR,
    en_US
} 

const i18n = createI18n({
    locale          : "pt_BR",
    fallbackLocale  : "pt_BR",
    messages        : languages
})

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
