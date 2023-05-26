import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

document.title = "Portfolio - Mathéo";

const i18n = createI18n({
	availableLocales: ['en', 'fr'],
	// get locale from the browser
	locale: navigator.language.split('-')[0],
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

router.afterEach(() => {
	document.documentElement.lang = i18n.global.locale;
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
