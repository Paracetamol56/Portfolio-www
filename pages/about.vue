<script setup>
import { onMounted } from "vue";
import { updateFadeInElements } from "~/app.vue";

onMounted(() => {
  updateFadeInElements();
});
</script>

<template>
  <div>
  <Header :title="$t('about.title')" :subtitle="$t('about.subtitle')" />
  <main>
    <AboutSkillSection number="1" />
    <AboutInterestSection number="2" />
    <AboutFormationSection number="3" />
  </main>
  </div>
</template>

