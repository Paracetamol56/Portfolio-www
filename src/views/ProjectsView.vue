<i18n>
{
	"en": {
		"title": "Projects",
		"subtitle": "Here are some of my projects",
	},
	"fr": {
		"title": "Projets",
		"subtitle": "Voici quelques-uns de mes projets",
	}
}
</i18n>

<template>
  <PageHeader :title="$t('title')" :subtitle="$t('subtitle')" />
  <ProjectListSection />
</template>

<script>
import PageHeader from "@/components/miscellaneous/PageHeader.vue";
import ProjectListSection from "@/components/projects/ProjectListSection.vue";

export default {
  name: "ProjectView",
  components: {
    PageHeader,
    ProjectListSection,
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
