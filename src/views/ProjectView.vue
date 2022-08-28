<i18n>
{
	"en": {
		"sections": {"info": "Info", "links": "Links", "video": "Video", "presentation": "Presentation", "galery": "Galery"},
		"dates": "Dates",
		"status": "Status",
	},
	"fr": {
		"sections": {"info": "Info", "links": "Liens", "video": "Vidéo", "presentation": "Présentation", "galery": "Galerie"},
		"dates": "Dates",
		"status": "Statut",
	}
}
</i18n>

<template>
  <PageHeader :title="project.title" :subtitle="project.subtitle" />
  <main>
    <section id="info">
      <div class="container">
        <div class="section-title centered">
          <h2>
            <span class="section-title-number">01.</span>
            {{ $t("sections.info") }}
          </h2>
          <hr />
        </div>
        <div class="info-status-dates">
          <p class="info-status">
            <span class="colored">{{ $t("status") }}:</span>
            {{ project.status }}
          </p>
          <p class="info-dates">
            <span class="colored">{{ $t("dates") }}:</span>
            {{ project.dates.start.replaceAll("-", "/") }} -
            {{ project.dates.end.replaceAll("-", "/") }}
          </p>
        </div>
        <h3 class="fillTextWithgradient">Technologies</h3>
        <ul class="technology-list">
          <li
            class="technology-item"
            v-for="technology in project.technologies"
            :key="technology"
          >
            <img
              class="technology-item-vector"
              :src="technology.icon"
              alt="icon"
            />
            <p class="technology-item-name">{{ technology.name }}</p>
            <p class="technology-item-description">
              // {{ technology.description }}
            </p>
          </li>
        </ul>
        <h3 class="fillTextWithgradient">Team</h3>
        <ul class="team-list">
          <li class="team-item" v-for="member in project.team" :key="member">
            <p class="team-item-name">{{ member.name }}</p>
            <p class="team-item-role">// {{ member.role }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section id="image">
      <img v-bind:src="project.header" alt="" />
    </section>
    <div class="section-background-wrapper" v-if="project.links.length > 0">
      <section id="links">
        <div class="container">
          <div class="section-title centered">
            <h2>
              <span class="section-title-number">02.</span>
              {{ $t("sections.links") }}
            </h2>
            <hr />
          </div>
          <ul class="link-list">
            <li class="link-item" v-for="link in project.links" :key="link">
              <a class="link-item-anchor" :href="link.url" target="_blank">
                <img class="link-item-vector" :src="link.icon" alt="icon" />
                <p class="link-item-text" v-html="link.name"></p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <section id="presentation">
      <div class="container">
        <div class="section-title centered">
          <h2>
            <span class="section-title-number">03.</span>
            {{ $t("sections.presentation") }}
          </h2>
          <hr />
        </div>
        <div
          class="presentation-content-block"
          v-for="(contentBlock, key) in project.description"
          :key="key"
        >
          <h3 class="presentation-content-block-title fillTextWithgradient">
            {{ key }}
          </h3>
          <p
            class="presentation-content-block-paragraph"
            v-html="contentBlock"
          ></p>
        </div>
      </div>
    </section>
    <section id="galery"></section>
  </main>
</template>

<script>
import PageHeader from "@/components/miscellaneous/PageHeader.vue";

import axios from "axios";

export default {
  name: "NavBar",
  components: {
    PageHeader,
  },
  data: function () {
    return {
      id: 0,
      project: {},
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
  created: function () {
    // Get the project id from the path
    this.id = parseInt(this.$router.currentRoute.value.path.split("/")[2]);

    // Check if the id is a integer greater than 0
    if (!Number.isInteger(this.id) || this.id < 1) {
      // Redirect to the 404 page
      this.$router.push("404");
      return;
    }

    axios.get("/data/fr_projects.json").then((response) => {
      if (response.status !== 200) {
        console.error("Error while getting the project");
        this.$router.push("404");
        return;
      }

      response.data.find((project) => {
        if (project.id == this.id) {
          this.project = project;
        }
      });
      if (!this.project) {
        this.$router.push("404");
        return;
      }
    });
  },
  mounted: function () {
    this.updateFadeInElements();
  },
};
</script>

<style lang="scss" scoped>
section#info {
  .info-status-dates {
    // Made this two columns
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    p {
      width: calc(50% - 0.5rem);
      margin: 8px 0;
      font-size: 1.5rem;
      line-height: 1.5rem;
      .colored {
        color: var(--secondary-color);
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      p {
        width: 100%;
        font-size: 1.2rem;
        line-height: 1.2rem;
      }
    }
  }
  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }
  ul.technology-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    li.technology-item {
      margin: 1rem;
      max-width: 300px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .technology-item-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
      }
      .technology-item-description {
        color: var(--comment-color);
      }
      .technology-item-vector {
        flex: 1;
        max-height: 60px;
        max-width: 60px;
        margin-bottom: 1rem;
      }
    }
  }
  ul.team-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    li.team-item {
      margin: 0.5rem 0;
      text-align: center;
      .team-item-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
      }
      .team-item-role {
        color: var(--comment-color);
        margin: 0;
      }
    }
  }
}
.section-background-wrapper {
  background-image: url("@/assets/img/BluryBackground.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0;
  padding: 3rem 0;
}
section#links {
  background-color: var(--background-color);
  margin: 5rem 0;
  padding: 3rem 0;
  ul.link-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    li.link-item {
      margin: 1rem;
      max-width: 300px;
      width: 100%;
      text-align: center;
      a.link-item-anchor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        .link-item-vector {
          max-height: 60px;
          max-width: 60px;
          margin-bottom: 1rem;
        }
      }
      p.link-item-text {
        position: relative;
        width: fit-content;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          left: -2px;
          right: -2px;
          z-index: -1;
          background-color: var(--primary-color);
          transform: scaleX(0%);
          transform-origin: right;
          transition: transform 0.25s var(--easing);
        }
      }
      &:hover {
        p.link-item-text {
          &::before {
            transform: scaleX(100%);
            transform-origin: left;
          }
        }
      }
    }
  }
}
section#presentation {
  .presentation-content-block {
    h3.presentation-content-block-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p.presentation-content-block-paragraph {
      text-align: justify;
    }
  }
}
</style>