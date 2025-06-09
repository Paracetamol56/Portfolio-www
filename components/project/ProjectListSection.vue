<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue";

const route = useRoute();
const { locale } = useI18n();
const { data } = await useAsyncData(route.path, () =>
  queryCollection(locale.value)
    .select('number', 'title', 'subtitle', 'thumbnail', 'dates', 'tags', 'status')
    .order('number', 'DESC')
    .all()
);
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="projet-list">
        <ProjectCard v-for="project in data" :key="project.number" :project="project" />
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

    >* {
      margin-bottom: 1rem;
    }

    >*:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
