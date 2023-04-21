<i18n>
{
  "en": {
    "title": "About",
    "subtitle": "Let me introduce myself",
  },
  "fr": {
    "title": "À propos",
    "subtitle": "Permettez-moi de me présenter",
  }
}
</i18n>

<template>
  <PageHeader :title="$t('title')" :subtitle="$t('subtitle')" />
  <main>
    <SkillSection number="01" />
    <InterestSection number="02" />
    <FormationSection number="03" />
  </main>
</template>

<script>
import PageHeader from "@/components/miscellaneous/PageHeader.vue";
import SkillSection from "@/components/about/SkillSection.vue";
import InterestSection from "@/components/about/InterestSection.vue";
import FormationSection from "@/components/about/FormationSection.vue";

export default {
  name: "AboutView",
  components: {
    PageHeader,
    SkillSection,
    InterestSection,
    FormationSection,
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