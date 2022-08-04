<i18n>

</i18n>

<template>
  <PageHeader :title="project.title" :subtitle="project.subtitle" />
  <main>
    <h1>test</h1>
  </main>
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";

import axios from "axios";

export default {
  name: "NavBar",
  components: {
    PageHeader,
  },
  data: function () {
    return {
      id: 0,
      project: null,
    };
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
  created: function () {
    // Get the project id from the path
    this.id = parseInt(this.$router.currentRoute.value.path.split("/")[2]);

    // Check if the id is a integer greater than 0
    if (!Number.isInteger(this.id) || this.id < 1) {
      // Redirect to the 404 page
      this.$router.push("404");
      return;
    }

    axios.get("/data/fr_projects.json").then((response) => {
      if (response.status !== 200) {
        console.error("Error while getting the project");
        this.$router.push("404");
        return;
      }

      response.data.find((project) => {
        if (project.id == this.id) {
          this.project = project;
        }
      });
      if (!this.project) {
        this.$router.push("404");
        return;
      }
    });
  },
  mounted: function () {
    this.updateFadeInElements();
  },
};
</script>

<style lang="scss" scoped>
</style>