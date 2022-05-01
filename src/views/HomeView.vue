<template>
  <PageHeader
    title="Mathéo's portfolio"
    subtitle="Bienvenue dans mon univers"
    sectionLink="#home"
  />
  <AboutSection />
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";
import AboutSection from "@/components/home/AboutSection.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
    AboutSection,
  },
};
</script>
