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
import ProjectCard from "@/components/global/ProjectCard.vue";

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
  mounted: function () {
    this.$store.watch(
      (state) => state.projects,
      () => {
        this.projects = this.$store.getters.getProjects.reverse();
      },
      { immediate: true }
    );
  },
};
</script>

<style scoped lang="scss">
section#projects {
  .projet-list {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    width: 100%;
  }
}
</style>