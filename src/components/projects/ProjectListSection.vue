<template>
  <section id="projects" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">01.</span> Derniers projets</h2>
        <hr />
      </div>
      <ul class="projet-list">
        <li
          class="project-list-item"
          v-for="project in projects"
          :key="project"
        >
          <img
            class="project-list-item-image"
            src="https://via.placeholder.com/720x1280"
            alt="header"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectListSection",
  data: function () {
    return {
      projects: [],
    };
  },
  mounted: function () {
    this.$store.watch(
      (state) => state.projects,
      () => {
        this.projects = this.$store.getters.getProjects;
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
    list-style: none;
    width: 100%;
    .project-list-item {
      width: 100%;
      margin: 1rem 0;
      position: relative;
      overflow: hidden;
      img.project-list-item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>