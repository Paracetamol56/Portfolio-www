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
  methods: {},
  created: function () {
    axios
      .get("/data/fr_projects.json")
      .then((response) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.log(error);
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