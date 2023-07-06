<i18n>
{
  "en": {
    "title": "Mathéo's portfolio",
    "subtitle": "Welcome to my universe",
  },
  "fr": {
    "title": "Portfolio de Mathéo",
    "subtitle": "Bienvenue dans mon univers",
  }
}
</i18n>

<template>
	<PageHeader :title="$t('title')" :subtitle="$t('subtitle')" />
	<main>
		<AboutSection number="01" />
		<LastProjectsSection number="02" />
		<TravelSection number="03"/>
	</main>
</template>

<script>
import PageHeader from "@/components/miscellaneous/PageHeader.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import LastProjectsSection from "@/components/home/LastProjectsSection.vue";
import TravelSection from "@/components/home/TravelSection.vue";

export default {
	name: "HomeView",
	components: {
		PageHeader,
		AboutSection,
		LastProjectsSection,
		TravelSection,
	},
	methods: {
		updateFadeInElements: function () {
			const fadeInElements = document.getElementsByClassName("fade-in");
			// Enter in viewport observer
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("appear");
						}
					});
				},
				{
					threshold: 0.5,
				}
			);

			// For each element
			for (let i = 0; i < fadeInElements.length; i++) {
				// If element is already in viewport
				if (
					fadeInElements[i].getBoundingClientRect().top < window.innerHeight
				) {
					// Add class "appear"
					fadeInElements[i].classList.add("appear");
				} else {
					// Add observer
					observer.observe(fadeInElements[i]);
				}
			}
		},
	},
	mounted: function () {
		this.updateFadeInElements();
	},
};
</script>