<script lang="ts" setup>
import ProjectCard from '@/components/ProjectCard.vue'
import BoxButton from '@/components/BoxButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { locale } = useI18n()
const localePath = useLocalePath()
const modules = [Navigation, Pagination]

defineProps({
  number: {
    type: String,
    required: true,
  },
})

const { data } = await useAsyncData(
  `projects-${locale.value}-limit4`,
  () => queryCollection(locale.value)
    .select('number', 'title', 'subtitle', 'thumbnail', 'dates', 'tags', 'status')
    .order('number', 'DESC')
    .limit(4)
    .all(),
)
</script>

<template>
  <section
    id="projects"
    class="fade-in"
  >
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("home.projects.title") }}
        </h2>
        <hr>
      </div>
    </div>

    <ClientOnly>
      <Swiper
        class="project-slider"
        :slides-per-view="1.1"
        :space-between="20"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="false"
        :grab-cursor="true"
        :centered-slides="true"
        :breakpoints="{
          576: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: 60,
          },
          992: {
            slidesPerView: 1.6,
            spaceBetween: 80,
          },
          1200: {
            slidesPerView: 1.8,
            spaceBetween: 100,
          },
          1400: {
            slidesPerView: 2.2,
            spaceBetween: 100,
          },
        }"
        :modules="modules"
      >
        <SwiperSlide
          v-for="project in data"
          :key="project.number"
          class="project-slider-item"
        >
          <ProjectCard :project="project" />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <div class="button-wrapper">
      <BoxButton :href="localePath('/project')">
        {{ $t("home.projects.button") }}
      </BoxButton>
    </div>
  </section>
</template>

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
