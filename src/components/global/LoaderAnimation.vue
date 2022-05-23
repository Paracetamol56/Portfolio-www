<template>
  <!-- Loader -->
  <div id="loader" class="loader-wrapper">
    <svg
      id="Calque_2"
      class="loader-logo"
      data-name="Calque 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 900"
    >
      <polygon
        class="cls-1"
        points="346.07 287.66 512.15 0 1080 0 1080 180 616.07 180 450 467.66 346.07 287.66"
      />
      <polygon
        class="cls-1"
        points="450 647.56 180 180 0 180 180 540 346.07 827.65 450 647.56"
      />
      <polygon
        class="cls-1"
        points="1080 269.9 1080 900 630 900 720 720 900 720 900 449.9 771.91 450 875.86 269.95 1080 269.9"
      />
      <polygon
        class="cls-2"
        points="667.98 270 346.07 827.65 387.85 900 512.1 900 875.86 269.95 667.98 270"
      />
      <polygon class="cls-2" points="0 900 180 900 180 540 0 180 0 900" />
    </svg>
    <div class="loader-animation">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderAnimation",
  methods: {
    disapear() {
      document.getElementById("loader").classList.add("disapear");
      setTimeout(() => {
        document.getElementById("loader").remove();
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
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
  opacity: 1;
  transition: opacity 0.5s var(--easing);
  &.disapear {
    opacity: 0;
  }

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
</style>