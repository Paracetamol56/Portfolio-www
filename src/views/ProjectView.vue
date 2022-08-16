<i18n>

</i18n>

<template>
  <PageHeader :title="project.title" :subtitle="project.subtitle" />
  <main>
    <section id="info">
      <div class="container">
        <div class="section-title">
          <h2>
            <span class="section-title-number">01.</span>
            Info
          </h2>
          <hr />
        </div>
        <p>
          date :
          {{ project.dates.start.replaceAll("-", "/") }}&nbsp;-&nbsp;{{
            project.dates.end.replaceAll("-", "/")
          }}
        </p>
        <p>Status : {{ project.status }}</p>
        <p>
          <span v-for="tag in project.tags" :key="tag">{{ tag }},&nbsp;</span>
        </p>
        <p>Technologies :</p>
        <ul>
          <li v-for="technology in project.technologies" :key="technology">
            {{ technology.name }}
          </li>
        </ul>
      </div>
    </section>
    <section id="image">
      <img v-bind:src="project.header" alt="" />
    </section>
    <section id="links">
      <ul>
        <li v-for="link in project.links" :key="link">
          <a :href="link.url">{{ link.url }}</a>
        </li>
      </ul>
    </section>
    <section id="presentation"></section>
    <section id="galery"></section>
  </main>
</template>

<script>
import PageHeader from "@/components/global/PageHeader.vue";

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
</style>