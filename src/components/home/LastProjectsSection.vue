<i18n>
{
  "en": {
    "title": "Last projects",
    "button": "See all projects",
  },
  "fr": {
    "title": "Derniers projets",
    "button": "Voir tous les projets",
  },
}
</i18n>

<template>
  <section id="projects" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("title") }}
        </h2>
        <hr />
      </div>
    </div>

    <Swiper
      class="project-slider"
      :slides-per-view="1.4"
      :space-between="100"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="true"
      :centeredSlides="true"
      :modules="modules"
    >
      <SwiperSlide
        class="project-slider-item"
        v-for="project in projects"
        :key="project"
      >
        <ProjectCard :project="project" />
      </SwiperSlide>
    </Swiper>

    <div class="button-wrapper">
      <BoxButton
        :text="$t('button')"
        icon='<i class="fa-solid fa-grid-2"></i>'
        :href="`/projects?lang=${$i18n.locale}`"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/miscellaneous/ProjectCard.vue";
import BoxButton from "@/components/miscellaneous/buttons/BoxButton.vue";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default {
  name: "LastProjectsSection",
  components: {
    ProjectCard,
    Swiper,
    SwiperSlide,
    BoxButton,
  },
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      modules: [Navigation, Pagination],
      projects: [],
    };
  },
  methods: {
    loadProjects: function () {
      axios
        .get(`/data/${this.$i18n.locale}_projects.json`)
        .then((response) => {
          this.projects = response.data.reverse();
          this.projects = this.projects.slice(0, 4);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    // Load projects
    this.loadProjects();

    // Watch this.$i18n.locale to update the project
    this.$watch("$i18n.locale", () => {
      this.loadProjects();
    });
  },
};
</script>

<style scoped lang="scss">
section#projects {
  background-image: url("@/assets/img/BluryBackground.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  .project-slider {
    margin: 1rem 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
}
</style>