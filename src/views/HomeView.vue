<template>
  <PageHeader
    title="Mathéo's portfolio"
    subtitle="Bienvenue dans mon univers"
    sectionLink="#home"
  />
  <h2>Home</h2>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
  },
};
</script>
