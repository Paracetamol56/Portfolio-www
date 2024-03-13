<script lang="ts" setup>
import AboutSection from "~/components/home/AboutSection.vue";
import LastProjectsSection from "~/components/home/LastProjectsSection.vue";
import TravelSection from "~/components/home/TravelSection.vue";
import { onMounted } from "vue";
import { updateFadeInElements } from "~/app.vue";

onMounted(() => {
  updateFadeInElements();
});
</script>

<template>
  <div>
    <Header :title="$t('home.title')" :subtitle="$t('home.subtitle')" />
    <main>
      <AboutSection number="01" />
      <LastProjectsSection number="02" />
      <TravelSection number="03"/>
    </main>
  </div>
</template>
