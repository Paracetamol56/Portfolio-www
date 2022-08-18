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
      :slides-per-view="1.5"
      :space-between="30"
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

    <a class="cta-button" href="/project">
      <i class="fa fa-list"></i>
      <span class="cta-button-text">&nbsp;{{ $t("button") }}</span>
    </a>
  </section>
</template>

<script>
import ProjectCard from "@/components/miscellaneous/ProjectCard.vue";

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
  created: function () {
    axios
      .get("/data/fr_projects.json")
      .then((response) => {
        this.projects = response.data.reverse();
        this.projects = this.projects.slice(0, 4);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped lang="scss">
section#projects {
  .project-slider {
    margin: 1rem 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;

    .project-item {
      height: 600px;
      margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      overflow: hidden;

      .project-item-image {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(max(100%, 600px));
      }

      .project-item-text {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        background-image: linear-gradient(
          135deg,
          #2c1b4fa0 70%,
          #111416a0 100%
        );
        background-size: 400%;
        background-position: 100%;
        transition: background-position 1s var(--easing);

        &:hover {
          background-position: 0%;
          .project-item-text-link {
            opacity: 1;
            transform: translate(2rem, 0) !important;
          }
        }

        .project-item-text-date {
          font-family: "Fira Code", monospace;
          font-size: 1.25rem;
          margin: 0;
        }

        .project-item-text-title {
          font-family: "Fira Code", monospace;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
        }

        .project-item-text-description {
          font-family: "Fira Code", monospace;
          font-size: 1.25rem;
          margin: 0;
        }

        .project-item-text-link {
          font-family: "Fira Code", monospace;
          font-size: 1.25rem;
          text-decoration: none;
          margin: 0;
          opacity: 0;
          transform: translate(0, 0) !important;
          transition: color 0.5s var(--easing), opacity 0.5s var(--easing),
            transform 0.5s var(--easing);
          &:hover {
            color: var(--secondary-color);
            transform: translate(0, 1rem) !important;
          }
        }
      }
    }
  }
}
</style>