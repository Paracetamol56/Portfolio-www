import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import App from './App.vue';
import router from './router';

document.title = "Portfolio - Mathéo"

const i18n = createI18n({
    availableLocales: ['en', 'fr'],
    locale: 'en',
    fallbackLocale: 'en'
});

router.beforeEach((to, from, next) => {
    if (to.query.lang) {
        next();
        i18n.global.locale = to.query.lang;
        return;
    }

    var lang;
    if (from.query.lang) {
        lang = from.query.lang;
    } else {
        lang = i18n.global.fallbackLocale;
    }

    next({
        path: to.path,
        query: { lang: lang }
    });
    i18n.global.locale = lang;
    return;
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDenq7F8LxOH6FC7y7FrKRxujaKLsZX6WM',
        language: 'en',
        libraries: 'places',
    },
});
app.mount('#app');