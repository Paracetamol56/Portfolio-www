<i18n>

</i18n>

<template>
  <PageHeader :title="title" :subtitle="subtitle" />
  <main>
    <h1>test</h1>
  </main>
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";

export default {
  name: "NavBar",
  components: {
    PageHeader,
  },
  data: function () {
    return {
      title: "test",
      subtitle: "test",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>