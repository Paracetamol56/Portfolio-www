<script setup>
import { onMounted } from "vue";
import { updateFadeInElements } from "~/app.vue";

onMounted(() => {
  updateFadeInElements();
});
</script>

<template>
  <div>
    <Header :title="$t('contact.title')" :subtitle="$t('contact.subtitle')" />
    <main>
      <ContactLocationSection />
      <ContactFormSection />
    </main>
  </div>
</template>
