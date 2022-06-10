<template>
  <PageHeader
    title="Mathéo's portfolio"
    subtitle="Bienvenue dans mon univers"
  />
  <LocationSection />
  <ContactForm />
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";
import LocationSection from "@/components/contact/LocationSection.vue";
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    PageHeader,
    LocationSection,
    ContactForm,
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