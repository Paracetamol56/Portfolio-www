<template>
  <div class="project-card">
    <NuxtPicture
      :src="project.thumbnail"
      format="webp, avif, jpg"
      placeholder
      quality="85"
      loading="lazy"
      densities="x1 x2"
      alt="Project {{ project.id }} thumbnail"
      class="project-card-image"
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
      <UnderlinedButton
        :href="localePath(`/project/${slug}`)"
        >{{ $t("see-more") }}
      </UnderlinedButton>
    </div>
  </div>
</template>

<script>
import UnderlinedButton from "@/components/UnderlinedButton.vue";

import slugify from "slugify";

export default {
  name: "ProjectCard",
  components: {
    UnderlinedButton,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      slug: `${this.project.id}-${slugify(this.project.title, {
        lower: true,
        strict: true,
      })}`,
    };
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
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  @media (max-width: 576px) {
    aspect-ratio: unset;
  }
  img.project-card-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    // make the image 80% transparent
    opacity: 0.5;
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
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    .project-card-text-title {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
      .project-card-text-title-number {
        color: var(--secondary-color);
        font-weight: 700;
      }
    }
    .project-card-text-description {
      font-size: 1rem;
      font-weight: 300;
      margin: 0 0 1rem;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    .project-card-text-link {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.2rem 0.5rem;
      color: var(--text-color);
      text-decoration: none;
      border: 1px solid var(--text-color);
      transform: translate(0, 0) scale(1) !important;
      transition: color 0.2s var(--easing), border 0.2s var(--easing);
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
      &:hover {
        color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
      }
    }
  }
}
</style>
