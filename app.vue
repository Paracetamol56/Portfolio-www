<script lang="ts" setup>
import LoaderAnimation from "~/components/LoaderAnimation.vue";
import NavBar from "~/components/NavBar.vue";

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<script lang="ts">
export function updateFadeInElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
}
</script>

<template>
  <!--LoaderAnimation v-if="loading" />-->
  <NavBar />
  <NuxtPage />
  <Footer />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

// Usage :
// font-family: 'Fira Code', monospace;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Mono', monospace;

:root {
  --text-color: #f5f3fa;
  --comment-color: #949397;
  --background-color: #0c0816;
  --background-gradient: radial-gradient(circle, #2c1b4fff 0%, #111416ff 50%);
  --shadow-color: #5f77ef9a;
  --link-color: #c2b0e9;
  --primary-color: #8251e9;
  --secondary-color: #b4e2f9;
  --tertiary-color: #5f78ef;
  --accent-gradient: linear-gradient(
    90deg,
    #b4e2f9 0%,
    #5f78ef 25%,
    #8251e9 50%,
    #ad56e3 75%,
    #df7bf5 100%
  );
  --easing: cubic-bezier(0.5, 0, 0.5, 1);
  --border-radius: 5px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
  font-family: "Fira Code", monospace;

  &.loading {
    overflow: hidden;
  }
}

h1 {
  color: var(--text-color);
}

h2 {
  color: var(--text-color);
}

h3 {
  color: var(--text-color);
}

h4 {
  color: var(--text-color);
}

h5 {
  color: var(--text-color);
}

h6 {
  color: var(--text-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s var(--easing);

  &:hover {
    color: var(--primary-color);
  }
}

section {
  color: var(--text-color);
  width: 100%;
  position: relative;
  z-index: 3;
  background-color: var(--background-color);
  margin: 120px 0;
  overflow-x: hidden;

  .section-title {
    margin: 20px 0;
    h2 {
      font-family: "Fira Code", monospace;
      font-size: 3rem;
      font-weight: 500;
      white-space: wrap;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      span.section-title-number {
        font-weight: 700;
        color: var(--secondary-color);
      }
    }
    hr {
      width: 100%;
      height: 2px;
      border: transparent;
      background-image: var(--accent-gradient);
      margin: 0;
      padding: 0;
    }
    p.section-title-subtitle {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    &.centered {
      text-align: center;
      h2 {
        position: relative;
        span.section-title-number {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      @media (max-width: 768px) {
        text-align: left;
        h2 {
          span.section-title-number {
            position: relative;
          }
        }
      }
    }
  }
}

.container {
  width: 60%;
  margin: auto;

  @media only screen and (max-width: 1400px) {
    width: 75%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 10px;
  }
}

.fillTextWithgradient {
  background: var(--accent-gradient) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background-attachment: fixed;
}

.swiper-button-next,
.swiper-button-prev {
  color: var(--primary-color) !important;
}

.swiper-pagination-bullet-active {
  background: var(--primary-color) !important;
}

// Router view transition
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s var(--easing);
}

// Element fade in
.fade-in {
  opacity: 0;
  filter: blur(0.5rem);
  transform: scale(0.95);
  transition: all 0.5s var(--easing);
}

.fade-in.appear {
  opacity: 1;
  filter: blur(0);
  transform: scale(1);
}

// Scrollbar
-webkit-scrollbar {
  width: 10px;
}
-webkit-scrollbar-track {
  background-color: var(--background-color);
  box-shadow: inset 0 0 2px var(--tertiary-color);
  border-radius: 5px;
}
-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}
</style>
