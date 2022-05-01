<template>
  <NavBar />
  <router-view />
  <PageFooter />
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";
import PageFooter from "@/components/global/PageFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PageFooter,
  },
  mounted: function () {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        // Fade in animation
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
          // Add the observer
          observer.observe(fadeInElements[i]);
        }
      }
    };
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

:root {
  --easing: cubic-bezier(0.5, 0, 0.5, 1);
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
  background-color: #000000;
  margin: 0;
  padding: 0;

  &.loading {
    overflow: hidden;
  }
}

h1 {
  color: #ffffff;
}

h2 {
  color: #ffffff;
}

h3 {
  color: #ffffff;
}

h4 {
  color: #ffffff;
}

h5 {
  color: #ffffff;
}

h6 {
  color: #ffffff;
}

a {
  color: #ffffff;
  text-decoration: dotted underline;
  transition: all 0.25s var(--easing);

  &:hover {
    color: #8251e9;
    text-decoration: solid underline;
  }
}

section {
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  width: 100%;
  position: relative;
  z-index: 3;
  background-color: #000000;
  margin-top: 50px;
  overflow-x: hidden;

  .section-title {
    h2 {
      font-family: "Roboto Mono", monospace;
      font-size: 2rem;
      font-weight: 500;
      white-space: nowrap;
      margin: 0;

      .section-title-number {
        font-weight: 700;
        color: #b4e2f9;
      }
    }

    hr {
      width: 100%;
      height: 2px;
      border: transparent;
      background-image: linear-gradient(
        90deg,
        #b4e2f9 0%,
        #5f78ef 25%,
        #8251e9 50%,
        #ad56e3 75%,
        #df7bf5 100%
      );
      margin: 0;
      padding: 0;
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
  background: linear-gradient(
    90deg,
    #b4e2f9 0%,
    #5f78ef 25%,
    #8251e9 50%,
    #ad56e3 75%,
    #df7bf5 100%
  ) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}

.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle,
    #2c1b4f 0%,
    #111416 100%
  ) !important;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loader-logo {
    width: 100px;
    filter: drop-shadow(0 0 5px #5f77ef9a);
    animation: 2s var(--easing) 0s normal forwards 1 loader-fade-in;

    .cls-1 {
      fill: #8251e9;
    }

    .cls-2 {
      fill: #5f3cab;
    }
  }

  .loader-animation {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: 2s var(--easing) 0s normal forwards 1 loader-fade-in;

    span {
      float: left;
      width: 8px;
      height: 8px;
      background: #8251e9;
      filter: drop-shadow(0 0 5px #5f77ef9a);
      border-radius: 50%;

      &:nth-child(1) {
        animation: dot-1 2s infinite;
      }

      &:nth-child(2) {
        animation: dot-2 2s infinite;
      }

      &:nth-child(3) {
        animation: dot-3 2s infinite;
      }

      &:nth-child(4) {
        animation: dot-4 2s infinite;
      }

      &:nth-child(5) {
        animation: dot-5 2s infinite;
      }
    }

    @keyframes dot-1 {
      0% {
        transform: translateY(0);
      }

      10% {
        transform: translateY(-5px);
      }

      20% {
        transform: translateY(0);
      }
    }

    @keyframes dot-2 {
      10% {
        transform: translateY(0);
      }

      20% {
        transform: translateY(-5px);
      }

      30% {
        transform: translateY(0);
      }
    }

    @keyframes dot-3 {
      20% {
        transform: translateY(0);
      }

      30% {
        transform: translateY(-5px);
      }

      40% {
        transform: translateY(0);
      }
    }

    @keyframes dot-4 {
      30% {
        transform: translateY(0);
      }

      40% {
        transform: translateY(-5px);
      }

      50% {
        transform: translateY(0);
      }
    }

    @keyframes dot-5 {
      40% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-5px);
      }

      60% {
        transform: translateY(0);
      }
    }
  }

  @keyframes loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

.cta-button {
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
  color: #8251e9;
  display: block;
  margin: 20px auto;
  width: fit-content;
  overflow: hidden;
  padding: 10px;
  box-shadow: 0 0 20px #5f77ef9a;
  border-radius: 5px;
  background-image: linear-gradient(135deg, #2c1b4f 70%, #111416 90%);
  background-position: 100%;
  background-size: 400%;
  border: #5f78ef 2px solid;
  transition: all 0.5s var(--easing);

  &:hover {
    color: #5f78ef;
    background-position: 0%;
    text-decoration: none;
    transition: all 0.5s var(--easing);
  }
}

.fade-in {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s var(--easing), transform 0.5s var(--easing);
}

.fade-in.appear {
  opacity: 1;
  transform: scale(1);
}

-webkit-scrollbar {
  width: 10px;
}

-webkit-scrollbar-track {
  background-color: #000000;
  box-shadow: inset 0 0 2px #5f78ef;
  border-radius: 5px;
}

-webkit-scrollbar-thumb {
  background: #8251e9;
  border-radius: 5px;
}
</style>
