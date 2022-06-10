import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './router'

// const lang = require('@/assets/lang/lang.js')

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDenq7F8LxOH6FC7y7FrKRxujaKLsZX6WM',
        language: 'en',
        libraries: 'places',
    },
})
app.mount('#app')
