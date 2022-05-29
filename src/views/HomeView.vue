<template>
  <PageHeader
    title="Mathéo's portfolio"
    subtitle="Bienvenue dans mon univers"
    sectionLink="#about"
  />
  <main>
    <LastProjectsSection />
    <TravelSection />
  </main>
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";
import LastProjectsSection from "@/components/home/LastProjectsSection.vue";
import TravelSection from "@/components/home/TravelSection.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
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
