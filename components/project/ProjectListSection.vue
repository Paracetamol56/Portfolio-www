<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue";

const { locale } = useI18n();
const { data } = await useAsyncData("projects", () =>
  queryContent(locale.value)
    .without("body")
    .sort({ id: -1, $numeric: true }).find()
);
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="projet-list">
        <ProjectCard
          v-for="project in data"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section#projects {
  .projet-list {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    > * {
      margin-bottom: 1rem;
    }
    > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
