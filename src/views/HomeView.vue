<template>
  <PageHeader
    title="Mathéo's portfolio"
    subtitle="Bienvenue dans mon univers"
    sectionLink="#about"
  />
  <AboutSection />
  <LastProjectsSection />
  <SchoolSection />
  <SkillsSection />
  <InterestSection />
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import LastProjectsSection from "@/components/home/LastProjectsSection.vue";
import SchoolSection from "@/components/home/SchoolSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import InterestSection from "@/components/home/InterestSection.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
    AboutSection,
    LastProjectsSection,
    SchoolSection,
    SkillsSection,
    InterestSection,
  },
};
</script>
