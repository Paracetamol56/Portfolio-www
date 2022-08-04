<i18n>

</i18n>

<template>
  <PageHeader :title="title" :subtitle="subtitle" />
  <main>
    <h1>test</h1>
  </main>
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";

export default {
  name: "NavBar",
  components: {
    PageHeader,
  },
  data: function () {
    return {
      id: 0,
      title: "test",
      subtitle: "test",
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
    const id = parseInt(this.$router.currentRoute.value.path.split("/")[2]);

    this.$store.watch(
      (state) => state.projects,
      () => {
        try {
          this.projects = this.$store.getters.getProjectById(id);
          console.log(this.projects);
        } catch (e) {
          console.error(e);
          // Call 404 page
          this.$router.push("/404");
          return;
        }
      },
      { immediate: true }
    );
  },
  mounted: function () {
    this.updateFadeInElements();
  },
};
</script>

<style lang="scss" scoped>
</style>