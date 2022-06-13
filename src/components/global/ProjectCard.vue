<template>
  <div class="project-card">
    <img
      class="project-card-image"
      src="https://via.placeholder.com/1280x720"
      alt="header"
    />
    <div class="project-card-text">
      <p class="project-card-text-date">
        {{
          `${project.dates.start.replaceAll(
            "-",
            "/"
          )} - ${project.dates.end.replaceAll("-", "/")}`
        }}
      </p>
      <h3 class="project-card-text-title">
        <span class="project-card-text-title-number">
          {{ `${("0" + project.id).slice(-2)}. ` }}
        </span>
        {{ project.title }}
      </h3>
      <p class="project-card-text-description">
        /*<br />{{ project.subtitle }}<br />Tags :
        <span v-for="tag in project.tags" :key="tag">
          <span class="colored"> #</span>{{ tag }}</span
        ><br />*/
      </p>
      <a class="project-card-text-link" :href="`/project?id=${project.id}`">
        Voir le projet ->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateFadeInElements: function () {
      const fadeInElements = document.getElementsByClassName("fade-in");
      // Enter in viewport observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appear");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      // For each element
      for (let i = 0; i < fadeInElements.length; i++) {
        // If element is already in viewport
        if (
          fadeInElements[i].getBoundingClientRect().top < window.innerHeight
        ) {
          // Add class "appear"
          fadeInElements[i].classList.add("appear");
        } else {
          // Add observer
          observer.observe(fadeInElements[i]);
        }
      }
    },
  },
  mounted: function () {
    this.updateFadeInElements();
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  aspect-ratio: 16/9;
  margin: 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    aspect-ratio: unset;
    height: auto;
  }
  img.project-card-image {
    width: calc(max(100%, 600px));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .project-card-text {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background-image: linear-gradient(135deg, #2c1b4fa0 70%, #111416a0 100%);
    background-size: 400%;
    background-position: 100%;
    transition: background-position 1s var(--easing);
    &:hover {
      background-position: 0%;
    }
    .colored {
      color: var(--secondary-color);
    }
    .project-card-text-date {
      font-size: 1rem;
      color: var(--secondary-color);
      margin: 0.5rem 0;
    }
    .project-card-text-title {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
      .project-card-text-title-number {
        color: var(--secondary-color);
        font-weight: 700;
      }
    }
    .project-card-text-description {
      font-size: 1rem;
      font-weight: 300;
      margin: 0 0 1rem 0;
    }
    .project-card-text-link {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      transform: translate(0, 0) scale(1) !important;
      transition: color 0.2s var(--easing), transform 0.2s var(--easing) !important;
      &:hover {
        color: var(--secondary-color);
        transform: translate(0, 1rem) scale(1.1) !important;
      }
    }
  }
}
</style>