import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import store from './store'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDenq7F8LxOH6FC7y7FrKRxujaKLsZX6WM',
        language: 'en',
        libraries: 'places',
    },
})
app.mount('#app')
