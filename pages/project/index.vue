<script lang="ts" setup>
import { updateFadeInElements } from '~/app.vue';

onMounted(() => {
  updateFadeInElements();
});
</script>

<template>
  <div>
    <Header :title="$t('projects.title')" :subtitle="$t('projects.subtitle')" />
    <ProjectListSection />
  </div>
</template>
