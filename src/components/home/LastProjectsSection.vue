<template>
  <section id="projects" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">01.</span> Derniers projets</h2>
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
      <SwiperSlide class="project-item">
        <img
          class="project-item-image"
          src="https://via.placeholder.com/720x1280"
        />
        <div class="project-item-text">
          <p class="project-item-text-date">2020 - 2022</p>
          <h3 class="project-item-text-title">
            <span class="project-item-text-title-number">01.</span> Projet 1
          </h3>
          <p class="project-item-text-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            commodi placeat, recusandae aspernatur harum tempora architecto?
          </p>
          <a class="project-item-text-link" href="#">Voir le projet -></a>
        </div>
      </SwiperSlide>
      <SwiperSlide class="project-item">
        <img
          class="project-item-image"
          src="https://via.placeholder.com/500x600"
        />
        <div class="project-item-text">
          <p>2020 - 2022</p>
          <h3>Projet 1</h3>
          <p></p>
          <a href="#">Voir le projet</a>
        </div>
      </SwiperSlide>
      <SwiperSlide class="project-item">
        <img
          class="project-item-image"
          src="https://via.placeholder.com/500x600"
        />
        <div class="project-item-text">
          <p>2020 - 2022</p>
          <h3>Projet 1</h3>
          <p></p>
          <a href="#">Voir le projet</a>
        </div>
      </SwiperSlide>
      <SwiperSlide class="project-item">
        <img
          class="project-item-image"
          src="https://via.placeholder.com/500x600"
        />
        <div class="project-item-text">
          <p>2020 - 2022</p>
          <h3>Projet 1</h3>
          <p></p>
          <a href="#">Voir le projet</a>
        </div>
      </SwiperSlide>
      <SwiperSlide class="project-item">
        <img
          class="project-item-image"
          src="https://via.placeholder.com/500x600"
        />
        <div class="project-item-text">
          <p>2020 - 2022</p>
          <h3>Projet 1</h3>
          <p></p>
          <a href="#">Voir le projet</a>
        </div>
      </SwiperSlide>
    </Swiper>

    <a class="cta-button" href="/project">
      <i class="fa fa-list"></i>
      <span class="cta-button-text"> Voir tous les projets</span>
    </a>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default {
  name: "LastProjectsSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data: function () {
    return {
      modules: [Navigation, Pagination],
    };
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