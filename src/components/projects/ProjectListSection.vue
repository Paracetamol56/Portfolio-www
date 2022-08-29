<template>
  <section id="projects">
    <div class="container">
      <div class="projet-list">
        <ProjectCard
          v-for="project in projects"
          :key="project"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/miscellaneous/ProjectCard.vue";

import axios from "axios";

export default {
  name: "ProjectListSection",
  components: {
    ProjectCard,
  },
  data: function () {
    return {
      projects: [],
    };
  },
  methods: {
    loadProjects: function () {
      axios
        .get(`/data/${this.$i18n.locale}_projects.json`)
        .then((response) => {
          this.projects = response.data.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    // Load projects
    this.loadProjects();

    // Watch this.$i18n.locale to update the project
    this.$watch("$i18n.locale", () => {
      this.loadProjects();
    });
  },
};
</script>

<style scoped lang="scss">
section#projects {
  .projet-list {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
}
</style>